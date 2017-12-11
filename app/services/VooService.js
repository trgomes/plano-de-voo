app.service('VooService', ['$http', function ($http) {

    var baseUri = 'http://localhost:8000/api';

    this.getAllVoos = function getAllVoos() {
        return $http({
            method: 'GET',
            url: baseUri + '/voos'
        });
    }


    this.getVoo = function getVoo(vooId) {
        return $http({
            method: 'GET',
            url: baseUri + '/voos/' + vooId
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

    this.updateVoo = function updateVoo(vooId, voo) {
        return $http({
            method: 'PATCH',
            url: baseUri + '/voos/' + vooId,
            data: voo
        });
    }


    this.deleteVoo = function deleteVoo(vooId) {
        return $http({
            method: 'DELETE',
            url: baseUri + '/voos/' + vooId,
        })
    }


}]);
