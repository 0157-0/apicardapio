const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://docker:docker@apimongo.fmehxla.mongodb.net/apimongo?retryWrites=true&w=majority", {}, (error) =>{
    if(error) {
        console.log('Falha ao autenticar com o mongodb');
        console.log(error);
    }

    console.log('Conexão com mongodb testado')
})

mongoose.Promise = global.Promise;

module.exports = mongoose;