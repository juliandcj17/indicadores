const hbs = require('hbs');

hbs.registerHelper('listar', () => {
    listaasesores = require('./datos.json');
    let texto = `<div class="container">\
    <div class="row ">\
    <table class="table table-hover">\
<thead>\
  <tr>\
    <th scope="col sm-5 "center>Nombre</th>\
    <th scope="col">edad</th>\
    <th scope="col">matematicas</th>\
    <th scope="col">ingles</th>\
    <th scope="col">Progamación</th>\
  </tr>\
</thead>\
<tbody>`;
    listaasesores.forEach(asesor => {
        texto = `${texto}
    <tr>
        <td>${asesor.nombre} </td>
        <td>${asesor.edad}</td>
        <td>${asesor.matematicas}</td>
        <td>${asesor.ingles}</td>
        <td>${asesor.programacion}</td>
    </tr>`
    });

    texto = texto + '</tbody></table></div></div>'
        /*
            var totalRec = 0,
                pageSize = 6,
                pageCount = 0;
            var start = 0;
            var currentPage = 1;

            if (error) throw error;
            totalRec = listaasesores.length;
            pageCount = Math.ceil(totalRec / pageSize);

            if (typeof req.query.page !== 'undefined') {
                currentPage = req.query.page;
            }

            if (currentPage > 1) {

                start = (currentPage - 1) * pageSize;
            }

            var result = req.listaasesores.find({}, { limit: pageSize, offset: start }, function(error, products) {
                if (error) throw error;
            });
            //res.render('index', { data: products, pageSize: pageSize, pageCount: pageCount, currentPage: currentPage });


            console.log(" totalRec " + totalRec);
            console.log(" pageSize " + pageSize);
            console.log(" pageCount " + pageCount);
            console.log(" start " + start);
            console.log(" currentPage " + currentPage);*/



    let page = `hi `
    return texto;
})

/*<ul class="pagination">
  <li class="disabled"><a href="#!"><i class="material-icons">chevron_left</i></a></li>
  <li class="active"><a href="#!">1</a></li>
  <li class="waves-effect"><a href="#!">2</a></li>
  <li class="waves-effect"><a href="#!">3</a></li>
  <li class="waves-effect"><a href="#!">4</a></li>
  <li class="waves-effect"><a href="#!">5</a></li>
  <li class="waves-effect"><a href="#!"><i class="material-icons">chevron_right</i></a></li>
</ul>*/

/*
var totalRec = 0,
    pageSize = 6,
    pageCount = 0;
var start = 0;
var currentPage = 1;

router.get('/', function(req, res, next) {
    var result = req.models.products.count({},
        function(error, productsCount) {
            if (error) throw error;
            totalRec = productsCount;
            pageCount = Math.ceil(totalRec / pageSize);

            if (typeof req.query.page !== 'undefined') {
                currentPage = req.query.page;
            }

            if (currentPage > 1) {

                start = (currentPage - 1) * pageSize;
            }

            var result = req.models.products.find({}, { limit: pageSize, offset: start }, function(error, products) {
                if (error) throw error;
                res.render('index', { data: products, pageSize: pageSize, pageCount: pageCount, currentPage: currentPage });
            });
        });
});
*/