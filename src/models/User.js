const mongoose = require("../database");
const bcrypt = require("bcryptjs")
// tabela
const UserScheme = new  mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    celular:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
        select: false,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

UserScheme.pre("save", async function(next)  {
    const hash = await  bcrypt.hash(this.password, 10);
    this.password = hash;
})

const User = mongoose.model("User", UserScheme);

module.exports = User;