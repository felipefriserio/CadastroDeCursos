module.exports = function (app) {

    var Curso = app.models.cursos;

    var EventosController = {
        menu: function (request, response) {
            var usuario = request.session.usuario,
                params = { usuario: usuario };
            response.render('eventos/menu', params);
        },
        cadastroUsuario: function (request, response) {
            var usuario = request.session.usuario,
                params = { usuario: usuario };
            response.render('eventos/cadUsuario', params);
        },
        cadastroCurso: function (request, response) {
            var usuario = request.session.usuario,
                params = { usuario: usuario };
            response.render('eventos/cadCurso', params);
        },
        listaCursos: function (request, response) {
            Curso.find(function (erro, cursos) {
                if (erro) {
                    response.render('/menu');
                }
                else {
                    var usuario = request.session.usuario,
                        params = { usuario: usuario, cursos: cursos };
                    response.render('eventos/listaCursos', params);
                }
            });

            /*
            var usuario = request.session.usuario,
                params = { usuario: usuario };
            response.render('eventos/listaEventos', params);
            */
        },
        //cadastro de eventos
        novoCurso: function (request, response) {
            var codigo       =  request.body.curso.codigo;
            var descricao    =  request.body.curso.descricao;
            var cargaHoraria =  request.body.curso.cargaHoraria;
            var categoria    =  request.body.curso.categoria;


            if (codigo.trim().length == 0) 
                response.redirect('/cadCurso');
            else {

                var curso = { codigo       : codigo, 
                              descricao    : descricao,
                              cargaHoraria : cargaHoraria,
                              categoria    : categoria
                            };
                              
                Curso.create(curso, function (erro, curso) {
                    if (erro) 
                        response.redirect('/cadCurso');
                    else 
                        response.redirect('/menu');
                });
            } 

            //response.redirect('/menu');
        }
    };
    return EventosController;
};