angular.module('chatroom').controller('LoginCtrl', function($scope, $http, $location) {
    $scope.login = function() {
        $http({
            url : '/user/login',
            method : 'post',
            data : { email : $scope.email}
        }).success(function(user) {
            $location.path('/rooms');
        });
    };
});