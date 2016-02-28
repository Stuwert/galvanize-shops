app.controller('TeaController', ['$scope', 'postmgr', function($scope, postmgr){
  $scope.teaCategories = []
  postmgr.getTea().then(function(data){
    $scope.items = data.data;
    data.data.forEach(function(item){
      item.categories.forEach(function(itemz){
        if($scope.teaCategories.indexOf(itemz) === -1){
          $scope.teaCategories.push(itemz)
        }
      })
    })
  })
}])
