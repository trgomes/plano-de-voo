app.service('VooService', ['$http', 'config', function ($http, config) {   
    
    var baseUri = config.baseUri;

    this.getAllVoos = function getAllVoos() {
        return $http({
            method: 'GET',
            url: baseUri + '/voos'
        });
    }


    this.getVoo = function getVoo(id) {
        return $http({
            method: 'GET',
            url: baseUri + '/voos/' + id
        });
    }


    this.addVoo = function addVoo(voo) {            
        console.log(voo);
        return $http({
            method: 'POST',
            url: baseUri + '/voos',
            data: voo            
        });
    }

    this.updateVoo = function updateVoo(voo) {        
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


    this.deleteVoo = function deleteVoo(id) {
        return $http({
            method: 'DELETE',
            url: baseUri + '/voos/' + id,
        })
    }


}]);
