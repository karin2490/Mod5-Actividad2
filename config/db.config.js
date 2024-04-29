const mongoose = require("mongoose");

const MongoMemoryServer = require('mongodb-memory-server').MongoMemoryServer;

//Conectar a la base de datos
MongoMemoryServer.create()
    .then((mongoServer) => mongoose.connect(mongoServer.getUri(), {
        // usNewUrlParser: true, //obsoleta
        dbName: "actividad2",
        // useCreateIndex: true,  //obsoleta
        // useUifiedTopology: true  //obsoleta
    }))
    .then(() => console.info(`Successfully connected to the database`))
    .catch((error) => {
        console.error("An error occurred trying to connect to the database", error);
        process.exit(1);
    });

//Desconectar de la base de datos
process.on("SIGINT", () => {
    mongoose
    .disconnect()
    .then(() => {
        console.info("Successfully disconnected mongodb");
        process.exit(0);
    })
    .catch((error) => {
        console.error("An error occurred trying to disconnect mongoose", error);
        process.exit(1);
    });
});