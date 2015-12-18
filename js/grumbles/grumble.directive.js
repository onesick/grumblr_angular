(function() {
  'use strict';
  angular
  .module('grumbles')
  .directive('myCustomDirective', function(){
    return{
      template: '<h1 ng-click = "giveKudos()">Hi there {{myName}}</h1>',
      link: function(scope){
        console.log("directive is being used");
        scope.myName = "Slim Shady";
        scope.giveKudos = function(){
          alert("mad props on your sick coding abilities");
        }
      }
    }
  })
}());
