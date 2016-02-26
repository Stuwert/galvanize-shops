app.service('postmgr', ['$http', function($http){
  this.getTea = function(){
    return $http.get('../tea.json');
  }
}])
