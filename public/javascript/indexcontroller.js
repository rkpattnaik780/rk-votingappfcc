var ang = angular.module('indexApp', []);

ang.controller('indexCtrl', function ($scope, $http, $location) {

    $scope.errmsg = "none";

    $scope.login = function (user) {
        var t = true;
        if (!(user.userid && user.password)) {
            t = false;
            alert("All feilds are compulsary!");
        }
        if (t) {
            $http.post('/login', $scope.user).then(function (res) {
                if(res.data)  { location.href = 'htmlpages/dashboard.html' ; }
                else 
                {
                    $scope.errmsg = "block";
                    user.userid = null ;
                    user.password = null ;
                }
            }, function (res) { console.log(error); });
        }
    }
});