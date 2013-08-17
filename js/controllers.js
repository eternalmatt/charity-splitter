function CharityController($scope, $http){
  $http.get('data/data.json').success(function(data){
    $scope.charities = data.charities;
    $scope.donation = data.donation;
    $scope.charities.forEach(function(elem, index, array){
      elem.amount = 1 / array.length; 
      elem.prevAmount = elem.amount;
    });
  });

  $scope.change = function(charity){
    var delta = charity.amount - charity.prevAmount;
    var length = $scope.charities.length;
    charity.prevAmount = charity.amount;
    
    $scope.charities.forEach(function(elem){
      if (elem === charity){
        return;
      }
      elem.prevAmount = elem.amount;
      elem.amount -= delta / length;
    });
  };
}
