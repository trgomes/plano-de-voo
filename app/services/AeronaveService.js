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
            url: baseUri + '/aeronaves/' + id
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


    this.deleteAeronave = function (id) {        
        return $http({
            method: 'DELETE',
            url: baseUri + '/aeronaves/' + id,
        })
    }


}]);
