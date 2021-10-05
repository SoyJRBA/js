const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const registro = new Schema ({
    Nombre: String,
    Correo: String,
    Contraseña: String
});
module.exports = mongose.model ('Registros', registro);