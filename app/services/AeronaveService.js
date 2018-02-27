(function () {
    'use strict';

    angular
        .module('app')
        .service('AeronaveService', AeronaveService);

    AeronaveService.$inject = ['$http', 'config'];

    function AeronaveService($http, config) {

        var baseUri = config.baseUri;

        this.getAllAeronaves = getAllAeronaves;
        this.getAeronave = getAeronave;
        this.addAeronave = addAeronave;
        this.updateAeronave = updateAeronave;
        this.deleteAeronave = deleteAeronave;


        function getAllAeronaves() {
            return $http({
                method: 'GET',
                url: baseUri + '/aeronaves'
            });
        }


        function getAeronave(id) {
            return $http({
                method: 'GET',
                url: baseUri + '/aeronaves/' + id
            });
        }


        function addAeronave(aeronave) {
            return $http({
                method: 'POST',
                url: baseUri + '/aeronaves',
                data: {
                    matricula: aeronave.matricula,
                    tipo: aeronave.tipo
                }
            });
        }

        function updateAeronave(aeronave) {

            console.log(aeronave);

            return $http({
                method: 'PUT',
                url: baseUri + '/aeronaves/' + aeronave.id,
                data: {
                    matricula: aeronave.matricula,
                    tipo_id: aeronave.tipo_id
                }
            });
        }


        function deleteAeronave(id) {
            return $http({
                method: 'DELETE',
                url: baseUri + '/aeronaves/' + id,
            })
        }


    };

})();
