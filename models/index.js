var path = require('path');

// Cargar ORM
var Sequelize = require('sequelize');

// Para usar en local BBDD SQLite:
//    DATABASE_URL = sqlite:///
//    DATABASE_STORAGE = quiz.sqlite
// Para usar en Heroku BBDD Postgres:
// var DATABASE_URL = "postgres://eeuqxerpxioxcw:d46f2a20c53d7014ee21df9801060119a2ed465f6c9c33377a3f17c5acc60f90@ec2-23-23-227-188.compute-1.amazonaws.com:5432/d32n25b1cfe739";

var url, storage;

if (!process.env.DATABASE_URL) {
    url = "sqlite:///";
    storage = "quiz.sqlite";
} else {
    url = process.env.DATABASE_URL;
    storage = process.env.DATABASE_STORAGE || "";
}

var sequelize = new Sequelize(url, {storage: storage});



// Importar la definicion de la tabla Quiz de quiz.js
var Quiz = sequelize.import(path.join(__dirname, 'quiz'));


exports.Quiz = Quiz; // exportar definición de tabla Quiz
