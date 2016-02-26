app.service('postmgr', ['$http', function($http){
  this.getItems = function(){
    return $http.get('../tea.json');
  }
}])
