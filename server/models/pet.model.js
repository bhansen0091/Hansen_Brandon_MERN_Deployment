const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Required Field"],
        minlength: [3, "Name must be at least 3 characters long."]
    },
    petType: {
        type: String,
        required: [true, "Required Field"],
        minlength: [3, "Must be at least 3 characters long."]
    },
    description: {
        type: String,
        required: [true, "Required Field"],
        minlength: [3, "Must be at least 3 characters long."]
    },
    skill_1: {
        type: String,
        default: ""
    },
    skill_2: {
        type: String,
        default: ""
    },
    skill_3: {
        type: String,
        default: ""
    },
}, {timestamps:true})

const Pet = new mongoose.model("Pet", PetSchema);

module.exports = Pet;