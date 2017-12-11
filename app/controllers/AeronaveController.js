app.controller('AeronaveController', function ($scope, AeronaveService) {


    $scope.getAllAeronaves = function () {
        AeronaveService.getAllAeronaves()
            .then(function success(response) {
                $scope.aeronaves = response.data;
                $scope.message = '';
                $scope.errorMessage = '';
            },
            function error(response) {
                $scope.message = 'Não foi encontrado nenhuma aeronave';
                $scope.errorMessage = 'Erro ao recuperar aeronaves';
            });
    }

    $scope.getAllAeronaves();

});    
