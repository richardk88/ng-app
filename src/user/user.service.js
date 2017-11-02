(function () {

    angular.module('myApp').factory('userService', userService);
    function userService($http) {
        return {
            getUsers: getUsers,
            createNewUser: createNewUser,
            deleteUser: deleteUser
        }    
    
        function sayHello () {
            return 'Whattup World!'
        }

        function getUsers () {
            return $http.get('http://localhost:8080/demo/users');
        }

        function createNewUser (newUser) {
            return $http.post('http://jsonplaceholder.typicode.com/users', newUser);
        }

        function deleteUser (id) {
            return $http.delete('http://jsonplaceholder.typicode.com/users/' + id);
        }
    } 
})();