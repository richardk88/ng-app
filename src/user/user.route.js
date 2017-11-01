angular.module('myApp')
.config(function ($stateProvider, $urlRouterProvider) {     // ui router helper methods 
    $urlRouterProvider.otherwise('/users');         //if they go to anything other than /users, send them to /users  
    $stateProvider          // third party library, pass it the name of the state and an object, which has properties
        .state('users', {
            url: '/users',
            templateUrl: 'user/user.html',
            controller: 'mainController as vmUsers'
        });
});