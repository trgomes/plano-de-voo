(function () {
    'use strict';

    angular
        .module('app')
        .service('TipoService', TipoService);

    TipoService.$inject = ['$http', 'config'];

    function TipoService($http, config) {

        var baseUri = config.baseUri;

        this.getAllTipos = function () {
            return $http({
                method: 'GET',
                url: baseUri + '/tipos'
            });
        }


        this.addTipo = function (tipo) {
            console.log(tipo);
            return $http({
                method: 'POST',
                url: baseUri + '/tipos',
                data: tipo
            });
        }

    };

})();