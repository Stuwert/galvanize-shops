app.controller('TeaController', ['$scope', 'postmgr', function($scope, postmgr){
  postmgr.getTea().then(function(data){
    console.log(data.data);
    $scope.items = data.data
  })
}])
