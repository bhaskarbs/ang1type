/// <reference path="../../../typings/main.d.ts" />
angular.module('testproApp', [
    'app.demo',
    'app.one',
    'app.on',
    'app.templates',
    'ui.router'
])
    .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state("land", {
        url: "/land",
        views: {
            "content": {
                templateUrl: "app-templates/demo/test.html",
                controller: 'demoCtrl',
                controllerAs: 'demo'
            }
        } }).state("one", {
        url: "/one",
        views: {
            "content": {
                templateUrl: "app-templates/demo/one.html",
                controller: 'oneCtrl',
                controllerAs: 'one'
            }
        } });
    return $urlRouterProvider.otherwise('/');
});
// your app setup here 
/// <reference path="../../../typings/main.d.ts" />
var app;
(function (app) {
    var demo;
    (function (demo) {
        'use strict';
        var DemoCtrl = (function () {
            function DemoCtrl($scope) {
                this.$scope = $scope;
                $scope.events = "this";
                this.test = 'ee';
            }
            return DemoCtrl;
        }());
        demo.DemoCtrl = DemoCtrl;
        var DemoService = (function () {
            function DemoService() {
                this.getExcited = false;
            }
            return DemoService;
        }());
        demo.DemoService = DemoService;
        angular
            .module('app.demo', [])
            .directive("demo", function () {
            return {
                templateUrl: 'app-templates/demo/demo.html',
                controller: DemoCtrl,
                controllerAs: 'demoCtrlVM'
            };
        })
            .controller("demoCtrl", DemoCtrl)
            .factory("demoService", [function () { return new app.demo.DemoService(); }]);
    })(demo = app.demo || (app.demo = {}));
})(app || (app = {}));
/// <reference path="../../../typings/main.d.ts" />
// module app.one {
//     'use strict';
//     export interface YourService {}
//     export class YourService implements YourService {
//         constructor() {
//             console.log('ss');
//         }
//     }
//     export interface OneCtrl {}
//     export class OneCtrl implements OneCtrl {
//         constructor(
//             public $scope: ng.IScope,
//             YourService: any
//         ){
//             $scope.events  = "event";
//         }
//     }
//     angular
//         .module('app.one', [])
//         .service('YourService',YourService);
//     angular
//         .module('app.one', [])
//         .controller("oneCtrl", OneCtrl);
// }
var app;
(function (app) {
    var on;
    (function (on) {
        'use strict';
        var UserService = (function () {
            function UserService($http) {
                this.$http = $http;
            }
            UserService.prototype.getFullName = function () {
                return this.$http.get('http://www.w3schools.com/angular/customers.php');
            };
            return UserService;
        }());
        on.UserService = UserService;
        angular.module('app.on', [])
            .service('userService', UserService);
    })(on = app.on || (app.on = {}));
})(app || (app = {}));
/// <reference path="../../../typings/main.d.ts" />
// module app.one {
//     'use strict';
//     export interface YourService {}
//     export class YourService implements YourService {
//         constructor() {
//             console.log('ss');
//         }
//     }
//     export interface OneCtrl {}
//     export class OneCtrl implements OneCtrl {
//         constructor(
//             public $scope: ng.IScope,
//             YourService: any
//         ){
//             $scope.events  = "event";
//         }
//     }
//     angular
//         .module('app.one', [])
//         .service('YourService',YourService);
//     angular
//         .module('app.one', [])
//         .controller("oneCtrl", OneCtrl);
// }
var app;
(function (app) {
    var one;
    (function (one) {
        'use strict';
        var MyController = (function () {
            function MyController($scope, userService) {
                userService.getFullName()
                    .then(function (result) {
                    console.log(result);
                    $scope.name = result.data;
                });
            }
            return MyController;
        }());
        one.MyController = MyController;
        angular.module('app.one', [])
            .controller('oneCtrl', MyController);
    })(one = app.one || (app.one = {}));
})(app || (app = {}));
angular.module("app.templates", []).run(["$templateCache", function ($templateCache) {
        $templateCache.put("app-templates/demo/demo.html", "<div id=\"demo-css-inject\">\n\n	<h2>Hello directive!</h2>\n\n	<button ng-click=\"demoCtrlVM.demoService.getExcited = !demoCtrlVM.demoService.getExcited\">\n		Go ahead, click me - I\'m wired up to ng ready to go!\n	</button>\n	<div ng-show=\"demoCtrlVM.demoService.getExcited\">\n		<h3>Yeeehaww!</h3>\n	</div>\n\n</div>");
        $templateCache.put("app-templates/demo/one.html", "wwwww{{events}}{{demoCtrlVM.test}}   {{name}} bhaskar");
        $templateCache.put("app-templates/demo/test.html", "ererererer ");
    }]);
