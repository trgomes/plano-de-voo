app.controller('VooController', function ($scope, VooService, aeronaves, aeroportos, $location) {

    $scope.aeronaves = aeronaves.data; // Popula o select aeronaves
    $scope.aeroportos = aeroportos.data; // Popula o selec aeroportos

    /* $scope.voo = {};  */

    function init() {
        $scope.getAllVoos();
        $scope.voo = {};
    }

    $scope.getAllVoos = function () {
        VooService.getAllVoos()
            .then(function success(response) {
                $scope.voos = response.data;
            },
            function error(response) {
                $scope.message = 'Não foi encontrado nenhum voo cadastrado na base de dados. Comece cadastrando as aeronaves e os aeroportos';
            });
    }


    $scope.addVoo = function () {

        /* if ($scope.voo.origem === $scope.voo.destino) {
            $scope.errorMessage = "Ops! O aeroporto de origem não pode ser igual ao de destino.";
        } */

        VooService.addVoo($scope.voo)
            .then(function success(response) {
                toastr.success("Voo cadastrado com sucesso");
                modalClose("#modalCadastrar");
                $scope.errorMessage = '';
                init();
            },
            function error(response) {
                toastr.warning("Erro ao cadastrar voo! Todos os campos são obrigatórios. Verifique e tente novamente.");
            });

    }


    $scope.getVoo = function (id) {
        VooService.getVoo(id)
            .then(function success(response) {
                $scope.voo = response.data;
            },
            function error(response) {
                toastr.warning("Erro ao consultar voo! ");
            });
    }


    $scope.deleteVoo = function (id) {
        VooService.deleteVoo(id)
            .then(function success(response) {
                toastr.success("Voo excluido com sucesso!");
                modalClose("#modalExcluir");
                init();
            },
            function error(response) {
                toastr.warning("Erro ao tentar excluir voo! ");
            });
    }


    $scope.updateVoo = function (voo) {
        VooService.updateVoo(voo)
            .then(function success(response) {
                toastr.success("Voo alterado com sucesso!");
                modalClose("#modalEditar");
                init();
            },
            function error(response) {
                toastr.warning("Erro ao tentar alterar o voo! Verifique todos os dados e tente novamente. ");
            });
    }


    /* Modal */
    $scope.modalEditar = function (id) {
        $scope.getVoo(id);
        $scope.origem = $scope.voo.matriula_id;
        angular.element("#modalEditar").modal('show');
    }

    $scope.modalExcluir = function (voo) {
        $scope.voo = voo; //Popula voo
        angular.element("#modalExcluir").modal('show');
    }

    $scope.modalCadastrar = function () {
        $scope.voo = {}; //Limpa o obejto
        angular.element("#modalCadastrar").modal('show');
    }

    function modalClose(modal) {
        angular.element(modal).modal('hide');
    }
    /* /Modal */

    init();

});