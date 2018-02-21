(function () {
    'use strict'

    angular
        .module('app')
        .service('VooService', VooService);

        VooService.$inject = ['$http', 'config'];      

        function VooService($http, config){
            var baseUri = config.baseUri;

            this.getAllVoos = function () {
                return $http({
                    method: 'GET',
                    url: baseUri + '/voos'
                });
            }


            this.getVoo = function (id) {
                return $http({
                    method: 'GET',
                    url: baseUri + '/voos/' + id
                });
            }


            this.addVoo = function (voo) {
                console.log(voo);
                return $http({
                    method: 'POST',
                    url: baseUri + '/voos',
                    data: voo
                });
            }

            this.updateVoo = function (voo) {
                return $http({
                    method: 'PUT',
                    url: baseUri + '/voos/' + voo.id,
                    data: {
                        "numero": voo.numero,
                        "data": voo.data,
                        "hora": voo.hora,
                        "aeronave_id": voo.aeronave_id,
                        "origem_id": voo.origem_id,
                        "destino_id": voo.destino_id
                    }
                });
            }


            this.deleteVoo = function (id) {
                return $http({
                    method: 'DELETE',
                    url: baseUri + '/voos/' + id,
                })
            }


        };

})();
