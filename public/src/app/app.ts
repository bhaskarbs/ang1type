/// <reference path="../../../typings/main.d.ts" />

angular.module('testproApp', [
    'app.demo',
    'app.one',
    'app.on',
    'app.templates',
    'ui.router'
])
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state("land", {
    url: "/land",
    views: {
      "content": {
        templateUrl: "app-templates/demo/test.html"
        ,controller: 'demoCtrl',
        controllerAs: 'demo'
      }
    }).state("one", {
    url: "/one",
    views: {
      "content": {
        templateUrl: "app-templates/demo/one.html"
        ,controller: 'oneCtrl',
        controllerAs: 'one'
      }
    });

  return $urlRouterProvider.otherwise('/');

});


// your app setup here