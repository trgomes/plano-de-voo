app.service('AeroportoService', ['$http', 'config', function ($http, config) {

    var baseUri = config.baseUri;

    this.getAllAeroportos = function () {
        return $http({
            method: 'GET',
            url: baseUri + '/aeroportos'
        });
    }


    this.getAeroporto = function getAeroporto(id) {
        return $http({
            method: 'GET',
            url: baseUri + '/aeroportos/' + id
        });
    }


    this.addAeroporto = function addAeroporto(matricula, tipo) {
        return $http({
            method: 'POST',
            url: baseUri + '/aeroportos',
            data: {
                nome: nome
            }
        });
    }

    this.updateAeroporto = function updateAeroporto(id, nome) {
        return $http({
            method: 'PATCH',
            url: baseUri + '/aeroportos/' + id,
            data: {
                nome: numero
            }
        });
    }


    this.deleteAeroporto = function deleteAeroporto(id) {
        return $http({
            method: 'DELETE',
            url: baseUri + '/aeroporto/' + id,
        })
    }


}]);
