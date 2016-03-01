app.service('postmgr', ['$http', function($http){
  this.getTea = function(){
    return $http.get('../tea.json');
  }
}])

app.service('shopCart', function(){
  var that = this;
  if (!localStorage.getItem('shoppingCart')){
    localStorage.setItem('shoppingCart', '[]')
  }
  this.addItem = function(newItem){
    var currArray = JSON.parse(localStorage.getItem('shoppingCart'));
    if (that.hasId(currArray, newItem["_id"]) !== -1){
      currArray[that.hasId(currArray, newItem["_id"])].quantity += +that.checkQuantity(newItem.quantity);
    }else{
      newItem.quantity = +that.checkQuantity(newItem.quantity)
      currArray.push(newItem);
    }
    localStorage.setItem('shoppingCart', JSON.stringify(currArray))
  }
  this.showItems = function(){
    return JSON.parse(localStorage.getItem('shoppingCart'))
  }
  this.hasId = function(arr, id){
    var returnable = -1;
    if (arr.length < 1) { return -1 };
    arr.forEach(function(item, i){
      if (item["_id"] === id){
        returnable = i;
      };
    })
    return returnable;
  }
  this.checkQuantity = function(quan){
    if (!quan){
      return 1;
    }else {
      return quan;
    }
  }
  this.total = function(){
    var total = 0;
    var arr = JSON.parse(localStorage.getItem('shoppingCart'));
    arr.forEach(function(item){
      total += item.quantity * item.price / 100;
    })
    return total;
  }

  this.updateQuantity = function(index, newQuantity){
    var currArray = JSON.parse(localStorage.getItem('shoppingCart'));
    currArray[index].quantity = newQuantity;
    localStorage.setItem('shoppingCart', JSON.stringify(currArray));
  }

  this.deleteItem = function(index){
    var currArray = JSON.parse(localStorage.getItem('shoppingCart'));
    currArray.splice(index, 1);
    localStorage.setItem('shoppingCart', JSON.stringify(currArray));
  }

})
