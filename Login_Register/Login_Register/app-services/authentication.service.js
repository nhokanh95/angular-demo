/// <reference path="E:\Github\angular-demo\Login_Register\Login_Register\Scripts/angular.js" />
angular
    .module('app')
.factory('AuthenticationService', AuthenticationService);
AuthenticationService.$inject=['$http','$cookieStore','$rootScope','$timeout','UserService']