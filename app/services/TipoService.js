app.service('TipoService', ['$http', 'config', function ($http, config) { 

    var baseUri = config.baseUri;


    this.getAllTipos = function () {
        return $http({
            method: 'GET',
            url: baseUri + '/tipos'
        });
    }

}]);