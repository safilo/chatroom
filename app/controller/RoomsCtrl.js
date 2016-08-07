angular.module('chatroom').controller('RoomsCtrl', function($scope, $http, $location) {
    // rooms根据关键字过滤之后显示的房间, __rooms原始的房间
    $scope.rooms = $scope._rooms = [];
    $http({
        url: '/room/list',
        method: "GET",
    }).success(function(rooms) {
        $scope.rooms = $scope._rooms = rooms;
    }).error(function(err) {
        console.log(err);
    });

    $scope.createRoom = function() {
        $http({
            url: '/room/add',
            method: 'POST',
            data: {
                name: $scope.keyword
            }
        }).success(function(data) {
            $scope.rooms.push(data);
        }).error(function(err) {
            console.log(err);
        });
    };

    $scope.join = function(roomId) {
        $location.path('/rooms/' + roomId);
    };
});