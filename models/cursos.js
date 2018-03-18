module.exports = function (app) {
    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;

    var curso = Schema({
        codigo       : { type: Number, 
                         required: true },
                         
        descricao    : { type: String   },
        cargaHoraria : { type: Number   },
        categoria    : { type: String   }
    });
    
    return mongoose.model('cursos', curso);
};