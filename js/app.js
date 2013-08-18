angular.module('charity-splitter',[])
  .filter('length',function(){
    return function(array){
      return array.length;
    };})
  .filter('moveable',function(){
    return function(charities, delta){
      var out = []
      for(var i in charities){
        var elem = charities[i];
        if (!elem.locked &&
          (   (delta > 0 && elem.amount > 0)
           || (delta < 0 && elem.amount < 1))){
          out.push(elem);
        }
      }
      return out;
    };})
  .filter('sum',function(){
    return function(array, field){
      var sum = 0;
      array.forEach(function(elem){
        sum += field ? elem[field] : elem;
      });
      return sum;
    };})






