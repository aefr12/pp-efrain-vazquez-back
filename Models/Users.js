var mongoose = require('mongoose');
var Schema = mongoose.Schema; 

mongoose.connect("mongodb://localhost/backend",{ useNewUrlParser: true, useUnifiedTopology: true });

var genders = ["Masculino", "Femenino"];
var validate_email = [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,"Ingresa un email valido"];

var DataUsers = new Schema({
    name: {type: String, required: "El nombre es obligatorio"},
    email: {type: String, required: "El correo es obligatorio", match: validate_email},
    password: {type: String, required: "La contraseña es obligatorio", minlength: [8, "La contraseña debe tener al menos 8 caracteres"]},
    phone: {type: Number, min: [10, "EL telefono debe contener al menos 10 digitos"]},
    age: Number,
    gender: {type: String, enum: genders},
    hobby: String,
    register: Date
});

var User = mongoose.model("User", DataUsers);

module.exports.User = User;