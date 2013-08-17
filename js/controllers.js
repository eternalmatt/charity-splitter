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
    if (delta == 0 || delta === Infinity){ 
      return;
    }

    var charities = [];
    $scope.charities.forEach(function(elem){
      elem.prevAmount = elem.amount;
      if ( elem === charity
        && (delta < 0 && elem.amount > 0)
        || (delta > 0 && elem.amount < 1)){
        charities.push(elem);
      }
    });
    $scope.charities.forEach(function(elem){
      elem.amount -= delta / charities.length;
    });
  };
}

