const mongoose = require("mongoose");
const uniqueValidator = require ('mongoose-unique-validator');


const PetSchema = new mongoose.Schema({
    name: {
        type: String, unique: true ,
        required: [true, " name is required"],
        minLength: [3, "Project name must be 3 characters or longer"]
    },
    type: {
        type: String ,
        required: [true, " type is required"],
        minLength: [3, "type must be 3 characters or longer"]
    },
    description: {
        type: String, 
        required: [true, "descrioption is required"],
        minLength: [3, "descrioption must be 3 characters or longer"]
    },
    skill1: {
        type: String,
    },
    skill2: {
        type: String,
    },
    skill3: {
        type: String,
    },
}, {timestamps: true});


PetSchema.plugin(uniqueValidator);
module.exports = mongoose.model("Board", PetSchema);


