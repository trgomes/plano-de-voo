app.service('AeronaveService', ['$http', function ($http) {

    var baseUri = 'http://localhost:8000/api';

    this.getAllAeronaves = function () {
        return $http({
            method: 'GET',
            url: baseUri + '/aeronaves'
        });
    }


    this.getAeronave = function (id) {
        return $http({
            method: 'GET',
            url: baseUri + '/aeronave/' + id
        });
    }


    this.addAeronave = function (matricula, tipo) {
        return $http({
            method: 'POST',
            url: baseUri + '/aeronaves',
            data: {
                matricula: matricula,
                tipo: tipo
            }
        });
    }

    this.updateAeronave = function (id, matricula, tipo) {
        return $http({
            method: 'PATCH',
            url: baseUri + '/aeronaves/' + id,
            data: {
                matricula: numero,
                tipo: data
            }
        });
    }


    this.deleteAeronave = function (id) {
        return $http({
            method: 'DELETE',
            url: baseUri + '/aeronave/' + id,
        })
    }


}]);
