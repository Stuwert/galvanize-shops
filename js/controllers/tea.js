app.controller('TeaController', ['$scope', 'postmgr', 'shopCart', function($scope, postmgr, shopCart){
  $scope.showCart = false;
  $scope.shopCartTotal = 0;
  $scope.toggleCart = function(){
    $scope.showCart = !$scope.showCart;
  }
  
  $scope.teaCategories = []

  postmgr.getTea().then(function(data){
    $scope.items = data.data;
    data.data.forEach(function(item, i){
      $scope.items[i].quantity;
      item.categories.forEach(function(itemz){
        if($scope.teaCategories.indexOf(itemz) === -1){
          $scope.teaCategories.push(itemz)
        }
      })
    })
  })

  $scope.shopCart = shopCart.showItems();

  $scope.addToCart = function(tea){
    shopCart.addItem(tea);
    $scope.shopCart = shopCart.showItems();
    $scope.shopCartTotal = shopCart.total();
  }

  $scope.updatePrice = function(index, newQuantity){
    shopCart.updateQuantity(index, newQuantity);
    $scope.shopCartTotal = shopCart.total();
  }

  $scope.deleteItem = function(index){
    shopCart.deleteItem(index);
    $scope.shopCart = shopCart.showItems();
    $scope.shopCartTotal = shopCart.total();
  }


}])
