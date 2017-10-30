proyectoSD

Primera Entrega

Instalación:

Se necesita instalar de forma global node.js y npm para su utilización.

sudo apt-get install node.js
sudo apt-get install npm

Verificar la versión de node.js usando por consola de comandos node -v
Si la versión corresponde a v4.x.x, leer las siguientes lineas, sino pasar a la configuración.

Para usar una versión compatible de node.js con el proyecto, usar las siguientes lineas de comandos.

sudo npm cache clean -f
sudo npm install -g n
sudo n 6.11.0

Configuración:

Dentro de la ruta del proyecto, usar la siguiente linea de comando
para instalar las dependencias del proyecto.

npm i express jquery body-parser morgan mysql

Se requiere tener la base de datos adjuntada en /db en mysql y corriendo.
Cambiar la contraseña del acceso a la base de datos en los siguientes archivos:
src/models/genre.js
src/models/movie.js
src/models/rating.js

Ejecución:

para ejecutar el proyecto, usar el siguiente comando
node src/app.js

Procesos funcionales:

Luego de ejecutar el comando para levantar el proyecto, se muestra la ventana de busqueda 
para hacer consultas a la base de datos de IMDB [En construcción]

Se pueden hacer consultas a la base de datos por medio de la ruta, las rutas entregan 
las consultas en formato json, y hasta el momento las funcionales son:

Muestra todas las peliculas
http://localhost:3000/movies

Muestra una consulta por el id
http://localhost:3000/movies/1672052

Muestra todos los generos de todas las peliculas
http://localhost:3000/genre

Muestra el titulo y el año de la pelicula a traves e una consulta por el genero.
http://localhost:3000/genre/type/Drama

Muestra el rating de una pelicula por su id
http://localhost:3000/rating/1672052

