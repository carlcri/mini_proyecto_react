# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
# Proceso de Despliegue en GitHub Pages
Para publicar tu proyecto de React en GitHub Pages, los pasos clave se centraron en configurar el proyecto para que se compile correctamente y luego usar una herramienta para automatizar el despliegue.

1. Configuración del Proyecto y Dependencias

- Instalar dependencia ``gh-pages``, que es una herramienta de línea de comandos para publicar archivos en la rama ``gh-pages`` de un repositorio de GitHub.

`npm install --save-dev gh-pages`

2.  Configuración de package.json

Modificar el archivo ``package.json`` para definir la URL del sitio web y los comandos de despliegue.

- "homepage": Se añadió esta propiedad para indicarle a `gh-pages` dónde publicar el proyecto. La URL debe seguir el formato ``https://<tu-nombre-de-usuario>.github.io/<nombre-del-repositorio>``.

- "scripts": Se agregaron dos scripts para automatizar el proceso:

-  ``"predeploy"``: Se ejecuta antes del despliegue para compilar el proyecto usando ``npm run build``.

- ``"deploy"``: Se encarga de subir el contenido de la carpeta ``dist`` (generada por Vite) a la rama ``gh-pages``.

3. Configuración de Vite

Se ajustó la configuración de ``Vite`` para que la aplicación funcionara correctamente en la subcarpeta de GitHub Pages.

- En el archivo ``vite.config.ts``, se añadió la propiedad ``"base"`` con el nombre del repositorio. Esto es crucial para que los recursos (archivos CSS y JS) se carguen correctamente.

```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/mini_proyecto_react/',
});
```

4. Despliegue del Proyecto

Ejecutar el comando de despliegue desde la terminal. Este comando compila el proyecto y sube la versión final a GitHub Pages.

``npm run deploy``

Este proceso generó una rama especial llamada ``gh-pages`` en tu repositorio, la cual contiene la versión compilada y optimizada de tu aplicación (los archivos de la carpeta ``dist``). GitHub Pages utiliza esta rama para servir tu sitio web.