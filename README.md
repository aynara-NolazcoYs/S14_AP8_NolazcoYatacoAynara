# 📚 Biblioteca Digital - Aplicación Angular

## Descripción

Aplicación web desarrollada con **Angular 18** que implementa un sistema de gestión de biblioteca digital. La aplicación cuenta con autenticación de usuarios mediante login, navegación por rutas, componentes interactivos y una interfaz moderna y responsiva.

## Características Principales

✅ **Autenticación de Usuarios**: Inicio de sesión mediante credenciales simuladas para pruebas.

✅ **Protección de Rutas**: Acceso controlado a las diferentes secciones de la aplicación.

✅ **Navegación mediante Rutas**: Implementación de Angular Router con `RouterModule`, `RouterLink` y `RouterOutlet`.

✅ **Menú de Navegación Dinámico**: Barra de navegación adaptada al estado de autenticación del usuario.

✅ **Diseño Responsivo**: Compatible con dispositivos móviles, tablets y computadoras.

✅ **Animaciones y Transiciones**: Mejor experiencia visual para el usuario.

✅ **Formulario de Contacto**: Validación de datos y manejo de formularios.

---

## Acceso al Sistema

La aplicación incluye un sistema de autenticación con credenciales simuladas para fines académicos y demostrativos.

### Credenciales de Prueba

| Campo              | Valor                                             |
| ------------------ | ------------------------------------------------- |
| Correo Electrónico | [adminKook@gmail.com](mailto:adminKook@gmail.com) |
| Contraseña         | Sum9701                                           |

### Nota

Estas credenciales están definidas de forma local dentro de la aplicación y no se conectan a una base de datos o servicio externo de autenticación.

---

## Estructura del Proyecto

```text
Blibi/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── login/            # Inicio de sesión
│   │   │   ├── navbar/           # Barra de navegación
│   │   │   ├── home/             # Página principal
│   │   │   ├── libros/           # Catálogo de libros
│   │   │   ├── categorias/       # Categorías de libros
│   │   │   └── contacto/         # Página de contacto
│   │   ├── services/
│   │   │   └── auth.service.ts   # Servicio de autenticación
│   │   ├── guards/
│   │   │   └── auth.guard.ts     # Protección de rutas
│   │   ├── app.component.ts
│   │   ├── app.routes.ts
│   │   └── main.ts
│   ├── index.html
│   ├── styles.css
│   └── favicon.ico
├── angular.json
├── package.json
├── tsconfig.json
└── README.md
```

---

## Instalación y Uso

### Prerrequisitos

* Node.js (v18 o superior)
* Angular CLI

### Instalación

1. Clonar el repositorio:

```bash
git clone <url-del-repositorio>
```

2. Instalar dependencias:

```bash
npm install
```

3. Ejecutar la aplicación:

```bash
npm start
```

4. Abrir en el navegador:

```text
http://localhost:4200
```

---

## Compilación para Producción

```bash
npm run build
```

---

## Rutas Disponibles

| Ruta          | Descripción                       |
| ------------- | --------------------------------- |
| `/login`      | Inicio de sesión                  |
| `/home`       | Página principal                  |
| `/libros`     | Catálogo de libros                |
| `/categorias` | Categorías disponibles            |
| `/contacto`   | Formulario de contacto            |
| `*`           | Redirección a la página principal |

---

