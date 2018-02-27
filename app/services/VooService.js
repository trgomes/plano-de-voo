(function () {
    'use strict'

    angular
        .module('app')
        .service('VooService', VooService);

    VooService.$inject = ['$http', 'config'];

    function VooService($http, config) {
        var baseUri = config.baseUri;

        //Functions
        this.getAllVoos = getAllVoos;
        this.getVoo = getVoo;
        this.addVoo = addVoo;
        this.updateVoo = updateVoo;
        this.deleteVoo = deleteVoo;


        function getAllVoos() {
            return $http({
                method: 'GET',
                url: baseUri + '/voos'
            });
        }


        function getVoo(id) {
            return $http({
                method: 'GET',
                url: baseUri + '/voos/' + id
            });
        }


        function addVoo(voo) {
            console.log(voo);
            return $http({
                method: 'POST',
                url: baseUri + '/voos',
                data: voo
            });
        }
        

        function updateVoo(voo) {
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


        function deleteVoo(id) {
            return $http({
                method: 'DELETE',
                url: baseUri + '/voos/' + id,
            })
        }


    };

})();
