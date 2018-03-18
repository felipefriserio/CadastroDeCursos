module.exports = function (app) {
    var valida = require('./../middlewares/valida');
    var eventos = app.controllers.eventos;

    app.get('/menu',        valida, eventos.menu);
    app.get('/cadUsuario',  valida, eventos.cadastroUsuario);
    app.get('/cadCurso',    valida, eventos.cadastroCurso);
    app.get('/listaCursos', valida, eventos.listaCursos);

    app.post('/novoCurso',  eventos.novoCurso);
};