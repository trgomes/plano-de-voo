app.controller('TipoController', function ($scope, TipoService, $location) {

    $scope.tipo = {};

    $scope.addTipo = function () {
        TipoService.addTipo($scope.tipo)
            .then(function success(response) {
                toastr.success("Tipo de aeronave cadastrado com sucesso");
                modalClose("#modalCadastrarTipo");
                $location.path('/aeronaves');               
            },
            function error(response) {
                toastr.warning("Erro ao cadastrar um tipo de aeronave! Verifique e tente novamente.");
            });
    }


    $scope.modalCadastrarTipo = function () {
        $scope.tipo = {}; //Limpa o obejto
        angular.element("#modalCadastrarTipo").modal('show');
    }


    function modalClose(modal) {
        angular.element(modal).modal('hide');
    }
    

}); 