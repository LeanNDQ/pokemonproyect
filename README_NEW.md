# 🌟 PokeDex - Proyecto Pokémon

Una aplicación web moderna y responsive creada con **Astro** que consume la **PokéAPI** para mostrar información detallada de Pokémon.

## 🚀 Características

### ✨ Funcionalidades Principales
- **Menú Principal**: Navegación simple y intuitiva
- **Búsqueda Avanzada**: 
  - Por nombre de Pokémon
  - Por tipo/elemento (fuego, agua, eléctrico, etc.)
- **Lista Completa**: Explora todos los Pokémon con paginación
- **Detalles Individuales**: Información completa de cada Pokémon
- **Componentes Reutilizables**: Arquitectura modular and mantenible

### 🎨 Diseño
- **Responsive Design**: Adaptable a móviles, tablets y desktop
- **Estilos Personalizados**: Diseño único sin templates copiados
- **Animaciones Suaves**: Transiciones y efectos visuales
- **Loader Animado**: Pokeball girando mientras carga
- **Glassmorphism**: Efectos de cristal moderno

### 🔧 Tecnologías
- **Framework**: Astro 5.9.3
- **Lenguajes**: HTML, CSS, TypeScript
- **API**: PokéAPI (https://pokeapi.co/)
- **Deployment**: Listo para deploy estático

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build
```

## 🗂️ Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── Loader.astro    # Animación de carga
│   ├── Pagination.astro # Navegación entre páginas
│   ├── PokemonCard.astro # Tarjeta individual de Pokémon
│   └── SearchBar.astro  # Barra de búsqueda
├── layouts/
│   └── Layout.astro     # Layout principal
├── pages/               # Páginas de la aplicación
│   ├── index.astro     # Menú principal
│   ├── search.astro    # Página de búsqueda
│   ├── pokedex.astro   # Lista completa
│   └── pokemon/
│       └── id.astro    # Detalles del Pokémon
├── styles/
│   └── global.css      # Estilos globales
└── utils/
    └── api.ts          # Funciones para consumir la API
```

## 🎯 Funcionalidades Implementadas

### ✅ Requisitos Cumplidos
- [x] Framework Astro como base
- [x] Consumo de PokéAPI
- [x] Mostrar imagen, nombre y tipos
- [x] Diseño limpio y presentable
- [x] Adaptable a móvil
- [x] Estilos personalizados

### ✅ Extras Implementados
- [x] Búsqueda por nombre
- [x] Búsqueda por tipo
- [x] Loader mientras carga
- [x] Paginación completa
- [x] Componentes reutilizables
- [x] Menú de navegación
- [x] Página de detalles

## 🌐 Navegación

1. **Página Principal** (`/`)
   - Menú con dos opciones principales
   - Diseño card-based moderno

2. **Búsqueda** (`/search`)
   - Búsqueda por nombre de Pokémon
   - Botones de tipo/elemento
   - Resultados dinámicos

3. **Lista Completa** (`/pokedex`)
   - 20 Pokémon por página
   - Paginación completa
   - Navegación entre páginas

4. **Detalles** (`/pokemon/[id]`)
   - Información completa del Pokémon
   - Sprites y estadísticas
   - Navegación de regreso

## 🎨 Paleta de Colores

- **Gradiente Principal**: `#667eea` → `#764ba2`
- **Accent Color**: `#ffcc02` (Amarillo Pokémon)
- **Tipos de Pokémon**: Colores específicos para cada tipo
- **Backgrounds**: Glassmorphism con transparencias

## 📱 Responsive Breakpoints

- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px
- **Small Mobile**: < 480px

---

**Desarrollado con ❤️ para el desafío PokeDex**
