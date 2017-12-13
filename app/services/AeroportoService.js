app.service('AeroportoService', ['$http', 'config', function ($http, config) {

    var baseUri = config.baseUri;

    this.getAllAeroportos = function () {
        return $http({
            method: 'GET',
            url: baseUri + '/aeroportos'
        });
    }


    this.getAeroporto = function (id) {
        return $http({
            method: 'GET',
            url: baseUri + '/aeroportos/' + id
        });
    }


    this.addAeroporto = function (aeroporto) {
        return $http({
            method: 'POST',
            url: baseUri + '/aeroportos',
            data: {
                nome: aeroporto.nome
            }
        });
    }

    this.updateAeroporto = function (aeroporto) {
        return $http({
            method: 'PUT',
            url: baseUri + '/aeroportos/' + aeroporto.id,
            data: {
                nome: aeroporto.nome
            }
        });
    }


    this.deleteAeroporto = function (id) {
        return $http({
            method: 'DELETE',
            url: baseUri + '/aeroportos/' + id,
        })
    }


}]);
