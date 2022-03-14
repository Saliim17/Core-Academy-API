# Core-Academy-API
Proyecto de la rama Backend de Core Academy 2022. Se trata de una API simple construida con NodeJS, MongoDB. Además se usa ExpressJS y MongooseJS y ESLint, este último para construir el código en un formato [AirBnB](https://github.com/airbnb/javascript).

# Documentación revisada
- [MongoDB](https://docs.mongodb.com/)
- [NodeJS](https://nodejs.org/es/docs/)
- [ESLint](https://eslint.org/docs/2.0.0/user-guide/configuring)
- [ExpressJS](https://expressjs.com/en/5x/api.html)
- [MongooseJS](https://mongoosejs.com/docs/api.html)
# Tareas
### Main
- [x] Crear server.js
    - [x] Asignar puertos para conectar la base de datos de [MongoDB Compass](https://www.mongodb.com/products/compass)
    - [x] Trazar la conexión en la terminal con console.log()
- [x] Crear app.js
    - [x] Importar y definir de las rutas usadas
### Modelos
- [x] Crear user.js
    - [x] Crear un esquema de usuario (Schema) con Mongoose
        - [x] name
            - type: String
            - required: true
            - unique: true
            - minlength: 5
            - maxlength: 50
        - [x] email
            - type: String
            - required: true
            - unique: true
            - minlength: 5
            - maxlength: 50
        - [x] password:
            - type: String
            - required: true
            - select: false
### Controladores    
- [x] Crear userController.js
    - [x] Crear funciones
        - [x] GET all users
        - [x] GET user by EMAIL
        - [x] POST user (create)
        - [x] DELETE user 
        - [x] PATCH user (update)
    - [x] Importar los modelos usados
### Rutas    
- [x] Crear userRoutes.js
    - [x] Importar y definir los controladores usados
