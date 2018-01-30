angular.module("listaModule", []);
angular.module("listaModule").controller("ListaCtrl", function($scope){
  $scope.teste = "texto";
  $scope.items = [1,2,3]
  $scope.socios = [{nome:'Alan', idade:'24', habilidade:'programador'}, {nome:'Jonasta', idade:'26', habilidade:'analista'}, {nome:'Miguel', idade:'30', habilidade:'gerente'}];

});
