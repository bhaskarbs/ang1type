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


module app.on {

    'use strict';

    export class UserService {
        constructor($http) {
            this.$http = $http;
        }
        getFullName() {
            return this.$http.get('http://www.w3schools.com/angular/customers.php');
        }
    }

    angular.module('app.on', [])
        .service('userService', UserService);
}
