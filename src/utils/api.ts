export interface Pokemon {
  id: number;
  name: string;
  sprites: {
    front_default: string;
    back_default?: string;
    front_shiny?: string;
    back_shiny?: string;
    other?: {
      'official-artwork': {
        front_default: string;
      };
      'dream_world'?: {
        front_default: string;
      };
    };
  };
  types: {
    type: {
      name: string;
    };
  }[];
  height: number;
  weight: number;
}

export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: {
    name: string;
    url: string;
  }[];
}

export async function fetchPokemonList(offset: number = 0, limit: number = 20): Promise<PokemonListResponse> {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
  if (!response.ok) {
    throw new Error('Error fetching Pokemon list');
  }
  return response.json();
}

export async function fetchPokemon(nameOrId: string | number): Promise<Pokemon> {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nameOrId.toString().toLowerCase()}`);
  if (!response.ok) {
    throw new Error(`Pokemon ${nameOrId} not found`);
  }
  return response.json();
}

export function getPokemonIdFromUrl(url: string): number {
  const parts = url.split('/');
  return parseInt(parts[parts.length - 2]);
}

export function getTypeColor(type: string): string {
  const typeColors: { [key: string]: string } = {
    normal: '#A8A878',
    fire: '#F08030',
    water: '#6890F0',
    electric: '#F8D030',
    grass: '#78C850',
    ice: '#98D8D8',
    fighting: '#C03028',
    poison: '#A040A0',
    ground: '#E0C068',
    flying: '#A890F0',
    psychic: '#F85888',
    bug: '#A8B820',
    rock: '#B8A038',
    ghost: '#705898',
    dragon: '#7038F8',
    dark: '#705848',
    steel: '#B8B8D0',
    fairy: '#EE99AC',
  };
  return typeColors[type] || '#68A090';
}

export interface PokemonType {
  pokemon: {
    pokemon: {
      name: string;
      url: string;
    };
  }[];
}

export async function fetchPokemonByType(typeName: string): Promise<Pokemon[]> {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/type/${typeName.toLowerCase()}`);
    if (!response.ok) {
      throw new Error(`Type ${typeName} not found`);
    }
    
    const typeData: PokemonType = await response.json();
    
    // Limitar a los primeros 12 Pokémon para mejor rendimiento
    const pokemonList = typeData.pokemon.slice(0, 12);
    
    const pokemonPromises = pokemonList.map(async (pokemonEntry) => {
      const id = getPokemonIdFromUrl(pokemonEntry.pokemon.url);
      return fetchPokemon(id);
    });
    
    return await Promise.all(pokemonPromises);
  } catch (error) {
    console.error(`Error fetching Pokemon by type ${typeName}:`, error);
    throw error;
  }
}
