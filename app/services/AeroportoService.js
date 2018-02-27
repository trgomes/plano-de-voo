(function () {
    'use strict';

    angular
        .module('app')
        .service('AeroportoService', AeroportoService);

    AeroportoService.$inject = ['$http', 'config']

    function AeroportoService($http, config) {

        var baseUri = config.baseUri;

        //Functions
        this.getAllAeroportos = getAllAeroportos;
        this.getAeroporto = getAeroporto;
        this.addAeroporto = addAeroporto;
        this.updateAeroporto = updateAeroporto;
        this.deleteAeroporto = deleteAeroporto;

        function getAllAeroportos() {
            return $http({
                method: 'GET',
                url: baseUri + '/aeroportos'
            });
        }


        function getAeroporto(id) {
            return $http({
                method: 'GET',
                url: baseUri + '/aeroportos/' + id
            });
        }


        function addAeroporto(aeroporto) {
            return $http({
                method: 'POST',
                url: baseUri + '/aeroportos',
                data: {
                    nome: aeroporto.nome
                }
            });
        }

        function updateAeroporto(aeroporto) {
            return $http({
                method: 'PUT',
                url: baseUri + '/aeroportos/' + aeroporto.id,
                data: {
                    nome: aeroporto.nome
                }
            });
        }


        function deleteAeroporto(id) {
            return $http({
                method: 'DELETE',
                url: baseUri + '/aeroportos/' + id,
            })
        }


    };

})();
