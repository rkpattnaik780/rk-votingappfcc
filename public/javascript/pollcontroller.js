var ang = angular.module('pollApp', []);

ang.controller('pollCtrl', function ($scope, $http) {

  $scope.onPoll = {};

  function load() {
    $scope.display = "visible";
    $scope.errmsg = "none";
    $http.get('/profile').then(function (res) {
      console.log("fetch user data");
      if (!res.data) {
        $scope.display = "none";
      }
      $scope.userinfo = res.data;
    }, function (res) { console.log(error); });
  }

  load();

  function loadPolls() {
    $http.get('/loadpolls').then(function (res) {
      $scope.plist = res.data;
    }, function (res) { console.log(error); });
  }

  loadPolls();

  $scope.logoff = function () {
    $http.get('/logout').then(function (res) {
      location.href = "exit.html"
    }, function (res) { console.log(error); });
  };

  $scope.add1 = function (item) {
    $scope.errmsg = "none";
    if (item.voters.indexOf($scope.userinfo.userid) === -1) {
      item.voters.push($scope.userinfo.userid);
      $http.post('/votefor1', item).then(function (res) {
        loadPolls();
      }, function (res) { console.log(error); });
    }
    else {
      $scope.errmsg = "block";
    }
  }
  $scope.add2 = function (item) {
     $scope.errmsg = "none";
    if (item.voters.indexOf($scope.userinfo.userid) === -1) {
      item.voters.push($scope.userinfo.userid);
      $http.post('/votefor2', item).then(function (res) {
        loadPolls();
      }, function (res) { console.log(error); });
    }
    else {
      $scope.errmsg = "block";
    }
  };
  $scope.add3 = function (item) {
    $scope.errmsg = "none";
    if (item.voters.indexOf($scope.userinfo.userid) === -1) {
      item.voters.push($scope.userinfo.userid);
      $http.post('/votefor3', item).then(function (res) {
        loadPolls();
      }, function (res) { console.log(error); });
    }
    else {
      $scope.errmsg = "block";
    }
  };
  $scope.add4 = function (item) {
    $scope.errmsg = "none";
    if (item.voters.indexOf($scope.userinfo.userid) === -1) {
      item.voters.push($scope.userinfo.userid);
      $http.post('/votefor4', item).then(function (res) {
        loadPolls();
      }, function (res) { console.log(error); });
    }
    else {
      $scope.errmsg = "block";
    }
  };
});
