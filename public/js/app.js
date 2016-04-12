"use strict";

(function(){
  angular
  .module("motivation", [
    "ui.router"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ])

  function RouterFunction($stateProvider){
    $stateProvider
    .state("main", {
      url: "/",
      templateUrl: "js/index.html"
    })
    .state("listIndex", {
      url: "/lists",
      templateUrl: "js/lists/lists.html",
      controller: "ListIndexController",
      controllerAs: "ListIndexViewModel"
    })
  }
})();
