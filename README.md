# 📚 Biblioteca Digital - Aplicación Angular

## Descripción

Aplicación web desarrollada con **Angular 18** que implementa un sistema de gestión de biblioteca digital. La aplicación incluye navegación funcional mediante rutas, varios componentes interactivos y una interfaz de usuario moderna.

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

## Páginas de la Aplicación

### 1. **Inicio** (`/home`)
- Presentación de la biblioteca
- Banner hero con imagen
- Tarjetas de características
- Llamadas a la acción

### 2. **Libros** (`/libros`)
- Catálogo completo de libros
- Cards con información del libro
- Disponibilidad de cada libro
- Estadísticas generales

### 3. **Categorías** (`/categorias`)
- Listado de 8 categorías diferentes
- Descripción de cada categoría
- Número de libros por categoría
- Resumen general

### 4. **Contacto** (`/contacto`)
- Información de contacto
- Formulario de envío de mensajes
- Enlaces a redes sociales
- Horario de atención

## Requisitos Técnicos Implementados

✅ **Routes**: Sistema de enrutamiento completo
✅ **RouterModule**: Importado en app.routes.ts
✅ **RouterLink**: Usados en la barra de navegación
✅ **RouterOutlet**: Componente contenedor de rutas en app.component.html
✅ **Componentes Angular**: 5 componentes principales
✅ **Navegación Funcional**: Sin recargas de página
✅ **Organización por Carpetas**: Estructura escalable

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

## Características Técnicas

### NgModules Tradicionales
Todos los componentes utilizan la arquitectura tradicional con `NgModule`:

```typescript
@Component({
  selector: 'app-nombre',
  templateUrl: './nombre.component.html',
  styleUrls: ['./nombre.component.css']
})
export class NombreComponent {
  // ...
}

// En app.module.ts
@NgModule({
  declarations: [
    AppComponent,
    NombreComponent,
    // ... otros componentes
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    CommonModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### Routing
Configuración centralizada en `app.routes.ts`:

```typescript
export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  // ... más rutas
];
```

### Data Binding y Directivas
- `{{ }}` - Interpolación
- `[(ngModel)]` - Two-way binding
- `*ngFor` - Iteración de arrays
- `*ngIf` - Condicionales
- `[class]` - Binding de clases
- `(click)` - Event binding

## Estilos CSS

La aplicación utiliza:
- CSS Grid y Flexbox para layouts
- Gradientes lineales
- Transiciones suaves
- Media queries para responsividad
- Variables CSS personalizadas

## Tecnologías Utilizadas

- **Angular**: Framework principal
- **TypeScript**: Lenguaje de programación
- **HTML5**: Estructura
- **CSS3**: Estilos y animaciones
- **RxJS**: Programación reactiva

## Mejoras Futuras

- Integración con backend API
- Base de datos de libros
- Sistema de autenticación
- Carrito de compras
- Reseñas y calificaciones
- Sistema de reservas
- Búsqueda avanzada
- Dark mode

## Autor

Desarrollado como proyecto educativo de Angular Routing

## Licencia

Este proyecto es de uso educativo y libre.
