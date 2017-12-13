app.controller('AeroportoController', function ($scope, AeroportoService) {

    function init() {
        $scope.getAllAeroportos();
        $scope.aeroporto = {};
    }

    $scope.getAllAeroportos = function () {
        AeroportoService.getAllAeroportos()
            .then(function success(response) {
                $scope.aeroportos = response.data;                
            },
            function error(response) {
                $scope.message = 'Não foi encontrado nenhum aeroporto na base de dados';
            });
    }


    $scope.addAeroporto = function () {
        AeronaveService.addAeronave($scope.aeroporto)
            .then(function success(response) {
                toastr.success("Aeroporto cadastrada com sucesso");
                modalClose("#modalCadastrar");
                init();
            },
            function error(response) {
                toastr.warning("Erro ao cadastrar aeronave! Todos os campos são obrigatórios. Verifique e tente novamente.");
            });
    }


    $scope.getAeroporto = function (id) {
        AeroportoService.getAeroporto(id)
            .then(function success(response) {
                $scope.aeroporto = response.data;
            },
            function error(response) {
                toastr.warning("Erro ao consultar aeroporto! ");
            });
    }


    $scope.deleteAeroporto = function (id) {
        AeroportoService.deleteAeroporto(id)
            .then(function success(response) {
                toastr.success("Aeroporto excluída com sucesso!");
                modalClose("#modalExcluir");
                init();
            },
            function error(response) {
                toastr.warning("Erro ao tentar excluir aeroporto! ");
            });
    }


    $scope.updateAeroporto = function (aeroporto) {
        AeroportoService.updateAeroporto(aeroporto)
            .then(function success(response) {
                toastr.success("Aeroporto alterada com sucesso!");
                modalClose("#modalEditar");
                init();
            },
            function error(response) {
                toastr.warning("Erro ao tentar alterar o aeroporto! Verifique todos os dados e tente novamente. ");
            });
    }


    /* Modal */
    $scope.modalEditar = function (id) {
        $scope.getAeroporto(id);
        angular.element("#modalEditar").modal('show');
    }

    $scope.modalExcluir = function (aeroporto) {
        $scope.aeroporto = aeroporto; //Popula voo
        angular.element("#modalExcluir").modal('show');
    }

    $scope.modalCadastrar = function () {
        $scope.aeroporto = {}; //Limpa o obejto
        angular.element("#modalCadastrar").modal('show');
    }

    function modalClose(modal) {
        angular.element(modal).modal('hide');
    }
    /* /Modal */

    init();

   

});    
