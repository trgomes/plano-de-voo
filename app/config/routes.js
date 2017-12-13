app.config(function ($routeProvider, $locationProvider) {

    // Utilizando o HTML5 History API
    $locationProvider.html5Mode(true);

    $routeProvider
        //Rota crud voos
        .when('/voos', {
            controller: 'VooController',
            templateUrl: 'views/voos/index.html',
            resolve: {
                aeronaves: function (AeronaveService) {
                    return AeronaveService.getAllAeronaves();
                },
                aeroportos: function (AeroportoService) {
                    return AeroportoService.getAllAeroportos();
                }
            }
        })        
        //Rota crud aeronaves
        .when('/aeronaves', {
            controller: 'AeronaveController',
            templateUrl: 'views/aeronaves/index.html'
        })
        //Rotas crud aeroportos
        .when('/aeroportos', {
            controller: 'AeroportoController',
            templateUrl: 'views/aeroportos/index.html'
        })
        //Redirecionamento caso a rota nao exista
        .otherwise({
            redirectTo: '/voos'
        });
});

