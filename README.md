# 📚 Biblioteca Digital - Aplicación Angular

## Descripción

Aplicación web desarrollada con **Angular 18** que implementa un sistema de gestión de biblioteca digital. La aplicación incluye navegación funcional mediante rutas, varios componentes interactivos y una interfaz de usuario moderna.Y ahora con un login.

## Características Principales

✅ **Navegación mediante Rutas**: Sistema completo de routing con `RouterModule`, `RouterLink` y `RouterOutlet`
✅ **Componentes Reutilizables**: Componentes standalone modernos de Angular
✅ **Menú de Navegación**: Barra de navegación funcional con estilos dinámicos
✅ **Diseño Responsivo**: Interfaz adaptada a dispositivos móviles y escritorio
✅ **Animaciones Suaves**: Transiciones y efectos visuales atractivos
✅ **Formulario Interactivo**: Página de contacto con validación de formulario

## Estructura del Proyecto

```
Blibi/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── navbar/           # Barra de navegación
│   │   │   ├── home/             # Página de inicio
│   │   │   ├── libros/           # Catálogo de libros
│   │   │   ├── categorias/       # Categorías de libros
│   │   │   └── contacto/         # Página de contacto
│   │   ├── app.component.ts      # Componente raíz
│   │   ├── app.component.html
│   │   ├── app.component.css
│   │   ├── app.routes.ts         # Configuración de rutas
│   │   └── main.ts
│   ├── index.html
│   ├── styles.css
│   └── favicon.ico
├── angular.json
├── tsconfig.json
├── package.json
└── README.md
```
## Instalación y Uso

### Prerrequisitos
- Node.js (v18 o superior)
- Angular CLI

### Instalación

1. **Instalar dependencias**:
```bash
npm install
```

2. **Ejecutar la aplicación**:
```bash
npm start
```

3. **Acceder a la aplicación**:
Abre tu navegador en `http://localhost:4200`

### Compilación para Producción

```bash
npm run build
```

## Rutas Disponibles

| Ruta | Componente | Descripción |
|------|-----------|-------------|
| `/` | - | Redirige a `/home` |
| `/home` | HomeComponent | Página de inicio |
| `/libros` | LibrosComponent | Catálogo de libros |
| `/categorias` | CategoriasComponent | Categorías de libros |
| `/contacto` | ContactoComponent | Página de contacto |
| `*` | - | Redirige a `/home` (página no encontrada) |


