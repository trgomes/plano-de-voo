app.controller('VooController', function ($scope, VooService, aeronaves, aeroportos) {

    $scope.aeronaves = aeronaves.data;
    $scope.aeroportos = aeroportos.data;

    $scope.voo = {};

    $scope.getAllVoos = function () {
        VooService.getAllVoos()
            .then(function success(response) {
                $scope.voos = response.data;
            },
            function error(response) {
                $scope.message = 'Não foi encontrado nenhum voo';
                $scope.errorMessage = 'Erro ao recuperar voos';
            });
    }
   

    $scope.addVoo = function () {        

        VooService.addVoo($scope.voo)
            .then(function success(response) {
                console.log($scope.voo);
                toastr.success("Voo cadastrado com sucesso");
                init();
            },
            function error(response) {
                toastr.warning("Erro ao cadastrar voo!");
            });
    }


    $scope.getVoo = function () {
        VooService.getVoo()
            .then(function success(response) {
                $scope.voos = response.data;                
            },
            function error(response) {
                toastr.warning("Erro ao consultar voo! ");
            });
    }


    $scope.deleteVoo = function (id) {
        VooService.deleteVoo(id)
            .then(function success(response) {
                toastr.success("Voo excluido com sucesso!");
                init();
            },
            function error(response) {
                toastr.warning("Erro ao tentar excluir voo! ");
            });
    }


    function init() {
        $scope.getAllVoos();        
        $scope.voo = {};
    }


    $scope.modalEditar = function(voo){        
        $scope.voo = voo;
        angular.element("#modalEditar").modal('show');
    }

    $scope.modalExcluir = function(voo){   
        $scope.voo = voo
        angular.element("#modalExcluir").modal('show');
    }

    init();

});