function CharityController($scope, $http, $filter){
  $http.get('data/data.json').success(function(data){
    $scope.charities = data.charities;
    $scope.donation = data.donation;
    $scope.charities.forEach(function(elem, index, array){
      elem.amount = 1 / array.length; 
      elem.prevAmount = elem.amount;
      elem.locked = false;
    });
  });
  $http.get('data/strings.json').success(function(data){
    $scope.content = data;
  });

  $scope.change = function(charity){
    charity.locked = false;
    delta = charity.amount - charity.prevAmount;
    charity.prevAmount = charity.amount;

    $filter('moveable')($scope.charities, delta)
      .forEach(function(elem, index, array){
        if (elem != charity){
          elem.amount -= delta / array.length;
        }
      });
  };
}

