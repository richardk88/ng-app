(function () {


  angular.module('myApp').controller('mainController', mainController);

  function mainController(_userService_, $scope) {
    var vmUsers = this;
    var userService = _userService_;

    vmUsers.users = [];
    vmUsers.getUsers = getUsers;
    vmUsers.createNewUser = createNewUser;
    vmUsers.deleteUser = deleteUser;

    function init() {
      vmUsers.getUsers();
    }

    init();

    function getUsers () {
      return userService.getUsers().then(function(res) {
        vmUsers.users = res.data;
      });
    }

    function createNewUser(newUser) {
      return userService.createNewUser(newUser).then(function(res) {
        console.log(res.data)
        vmUsers.users.push(res.data);
        vmUsers.newUser = {};
        $scope.newUser.name = '';
        $scope.newUser.email = '';
      })
    }

    function deleteUser(user) {
      return userService.deleteUser(user.id).then(function(res) {
        _.pull(vmUsers.users, user);
      }, function(res) {
          _.pull(vmUsers.users, user);
      });
    }
  }
})();