//Controlador de la base de datos

var mongoose = require('mongoose');

class Database {
    constructor() {
    }

    async connect() {
        try {
            await mongoose.connect(

                "mongodb+srv://jvergaraolivero47:Restablecercontra12@api-rest.nfpswof.mongodb.net/api-rest?retryWrites=true&w=majority",

                //mongodb+srv://jvergaraolivero47:Restablecercontra12@api-rest.nfpswof.mongodb.net/?retryWrites=true&w=majority
                //mongodb+srv://jvergaraolivero47:Restablecercontra12@cluster0.qnptsip.mongodb.net/Cluster0?retryWrites=true&w=majority
                
                { useNewUrlParser: true }
            );
            console.log('Conectado a la base de datos exitosamente');
        } catch (e) {
            console.error(e);
        }
    }
}

exports.database = new Database();
