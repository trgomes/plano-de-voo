app.controller('AeroportoController', function ($scope, AeroportoService) {


    $scope.getAllAeroportos = function () {
        AeroportoService.getAllAeroportos()
            .then(function success(response) {
                $scope.aeroportos = response.data;
                $scope.message = '';
                $scope.errorMessage = '';
            },
            function error(response) {
                $scope.message = 'Não foi encontrado nenhuma aeronave';
                $scope.errorMessage = 'Erro ao recuperar aeronaves';
            });
    }


    $scope.getAllAeroportos();

});    
