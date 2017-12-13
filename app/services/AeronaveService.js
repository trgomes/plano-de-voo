app.service('AeronaveService', ['$http', 'config', function ($http, config) {

    var baseUri = config.baseUri;

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


    this.addAeronave = function (aeronave) {
        return $http({
            method: 'POST',
            url: baseUri + '/aeronaves',
            data: {
                matricula: aeronave.matricula,
                tipo: aeronave.tipo
            }
        });
    }

    this.updateAeronave = function (aeronave) {
        return $http({
            method: 'PUT',
            url: baseUri + '/aeronaves/' + aeronave.id,
            data: {
                matricula: aeronave.matricula,
                tipo: aeronave.tipo
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
