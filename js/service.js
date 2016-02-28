app.service('postmgr', ['$http', function($http){
  this.getTea = function(){
    return $http.get('../tea.json');
  }
}])

app.service('shopCart', function(){
  var that = this;
  localStorage.setItem('shoppingCart', '[]')
  this.addItem = function(newItem){
    var currArray = JSON.parse(localStorage.getItem('shoppingCart'));
    if (that.hasId(currArray, newItem.id)){
      currArray[that.hasId(currArray, newItem.id)].quantity ++;
    }else{
      currArray.push(newItem);
    }
    localStorage.setItem('shoppingCart', JSON.stringify(currArray))
  }
  this.showItems = function(){
    return JSON.parse(localStorage.getItem('shoppingCart'))
  }
  this.hasId = function(arr, id){
    arr.forEach(function(item, i){
      if (item.id === id){
        return i;
      };
    })
    return false;
  }
})
