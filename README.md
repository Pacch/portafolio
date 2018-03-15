Arduinos
=====================

Proyecto
-------------------
[Enlace al demo](https://pacch.github.io/Arduinos/app/)

Instalación(DESARROLLO)
-----------------------
Pasos levantar el ambiente de desarrollo con node ejecutar:

1. npm install (para instalar las dependecias de desarrollo)
2. npm start (para levantar nuestro servidor)

En caso no contar con node instalado la aplicación puede ser visualizada en la ruta public/index.html

Resumen del proyecto
--------------------
El proyecto ha sido realizado desde 0 con:
* Sass
* Pug ~~Jade~~
* Gulp
* JQuery

Librerias externas:
No se usaron librerias externas a excepción de:

* Librerias para compilar con gulp

IMPORTANTE
--------------------
El diseño de esta web esta enfocado en mostrar mi portafolio e informacion personal.

Estructura de carpetas
----------------------

```scss
ordenador de serie/
|- app/
|  |- css/
|  |  |- style.css (CSS compilado)

// |  |- fonts/
// |  |  |- ... (Icomoon fonts)

|  |- js/
|  |  |- app.js (Jquery)

|  |- scss/ (Archivos Sass)
|  |  - base/
|  |  - components/
|  |  - layout/
|  |  - vendor/
|  |  |- style.scss (includes)

// |  |- ts/ (Archivos TypeScript)
// |  |  |- app.ts
// |  |  |- Form.ts
// |  |  |- Sort.ts
// |  |  |- Validate.ts

|  |- views/ (Archivos Pug ~~Jade~~)
|  |  - inc/ (Header, footer)
|  |  |- index.pug 

|  |- index.html

|- .editorconfig (indentación fijada a 4 espacios)
|- .gitattributes
|- .gitignore (obviamos los modulos de node)
|- package.json(scritps npm)
# proyecto_portafolio
