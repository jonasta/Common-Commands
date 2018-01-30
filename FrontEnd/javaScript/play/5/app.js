angular.module('app', []);
angular.module('app').controller('AppController', function($scope){
  $scope.pessoas = [{nome:'jonasta', idade:'26'}, {nome:'miguel', idade:'24'}];
  $scope.numeros = [1, 2, 3, 4, 5];

});
