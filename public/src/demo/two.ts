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


module app.one {

    'use strict';

    export class MyController {
        constructor($scope:any, userService) {
            userService.getFullName()
                .then(function (result) {
                    console.log(result); 
                    $scope.name = result.data;
                });
        }
    } 

    angular.module('app.one', [])
        .controller('oneCtrl', MyController);
}
