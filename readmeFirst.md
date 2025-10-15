# Configuración del proyecto

## Instalar

El siguiente comando instalará todos los paquetes de una vez:

- npm install express http-errors method-override ejs morgan cross-env

## Archivo package.json

En package.json se realizaron las siguientes modificaciones-

```js
"type":"module",
"scripts": {
  "dev": "cross-env NODE_ENV=development nodemon src/app.js",
  "start": "cross-env NODE_ENV=production node src/app.js"
},
```
