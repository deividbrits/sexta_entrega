
# Aplicacion Backend con Autenticación 

Este proyecto forma parte del sistema de evaluación del Bootcamp de Desarrollo Fullstack de la Universidad del Desarrollo . 

Para esta ocación se solicitó realizar una aplicacion Backend con Autenticación. Por preferencias del autor se simulo una tienda que vende distintos tipos de Café . 

Se utilizó el patrón de arquitectura MVC con un modelo de Usuario y un modelo de Productos . 

Como este Bootcamp es de Stack MERN , como base de datos se utilizó Mongo DB como base de Datos. 







## Features


### Con respecto al Usuario : 

Se puede crear un Usuario con el esquema : 

username 

email

password

privileges(admin o user)

Al registrar el usuario se encripta su contraseña mediante BcryptJs , luego para hacer login , se compara el password encriptado y si esta correcto se genera un token con JWT . 

Para verificacion se compara este token y si corresponde con el ID se verifica el usuario. 

Tambien existe una ruta para actualizar los datos del Usuario .

### Con respecto al Producto :

Se puede crear un Producto con el esquema : 

nombre 

origen (de que país viene el Café)

grano ( arabica o robusta)

molienda (fino , medio , grueso)

precio 


Se crearon rutas para : crear un Café , desplegar todos los Café de la base de datos , buscar uno por parametro ID , actualizar un producto por body y borrar un producto segun parametro ID.



## Tech Stack

**Server:** Node, Express, Mongo DB , JWT , BcryptJs, Cors, dotenv, Nodemon. 


## Archivo Env 

Solo por fines educacionales , para se deben crear un archivo .env con las variables de entorno 
PORT=3000

MONGODB_URI=mongodb://localhost:27017/tienda-cafe

SECRET=BCUDD



## Lo que sigue 

En este proyecto se implementó formas de autenticación/authorización de usuario. 


1) Quedo al debe con implementar metodos para que solo usuarios con privilegios de ADMIN puedan modificar/eliminar productos. 

2) La documentacion de la API . 

3) El despliegue de la API y de su respectiva Base de Datos. 

