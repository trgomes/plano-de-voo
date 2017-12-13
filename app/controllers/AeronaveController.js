app.controller('AeronaveController', function ($scope, AeronaveService) {


    function init() {
        $scope.getAllAeronaves();
        $scope.aeronave = {};
    }


    $scope.getAllAeronaves = function () {
        AeronaveService.getAllAeronaves()
            .then(function success(response) {
                $scope.aeronaves = response.data;
            },
            function error(response) {
                $scope.message = 'Não foi encontrado nenhuma aeronave cadastrada na base de dados';
            });
    }


    $scope.addAeronave = function () {
        AeronaveService.addAeronave($scope.aeronave)
            .then(function success(response) {
                toastr.success("Aeronave cadastrada com sucesso");
                modalClose("#modalCadastrar");
                init();
            },
            function error(response) {
                toastr.warning("Erro ao cadastrar aeronave! Todos os campos são obrigatórios. Verifique e tente novamente.");
            });
    }


    $scope.getAeronave = function (id) {
        AeronaveService.getAeronave(id)
            .then(function success(response) {
                $scope.aeronave = response.data;
            },
            function error(response) {
                toastr.warning("Erro ao consultar aeronave! ");
            });
    }


    $scope.deleteAeronave = function (id) {
        AeronaveService.deleteAeronave(id)
            .then(function success(response) {
                toastr.success("Aeronave excluída com sucesso!");
                modalClose("#modalExcluir");
                init();
            },
            function error(response) {
                toastr.warning("Erro ao tentar excluir aeronave! ");
            });
    }


    $scope.updateAeronave = function (aeronave) {
        AeronaveService.updateVoo(aeronave)
            .then(function success(response) {
                toastr.success("Aeronave alterada com sucesso!");
                modalClose("#modalEditar");
                init();
            },
            function error(response) {
                toastr.warning("Erro ao tentar alterar o voo! Verifique todos os dados e tente novamente. ");
            });
    }


    /* Modal */
    $scope.modalEditar = function (id) {
        $scope.getAeronave(id);
        angular.element("#modalEditar").modal('show');
    }

    $scope.modalExcluir = function (aeronave) {
        $scope.aeronave = aeronave; //Popula voo
        angular.element("#modalExcluir").modal('show');
    }

    $scope.modalCadastrar = function () {
        $scope.aeronave = {}; //Limpa o obejto
        angular.element("#modalCadastrar").modal('show');
    }

    function modalClose(modal) {
        angular.element(modal).modal('hide');
    }
    /* /Modal */

    init();


});    
