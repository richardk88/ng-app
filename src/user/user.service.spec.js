describe('Users service', function() {
    var userService;
    var $httpBackend;

    beforeEach(angular.mock.module('myApp'));

    beforeEach(inject(function(_userService_, $injector) {
        userService = _userService_;
        $httpBackend = $injector.get('$httpBackend');
    }));

    it('should exist', function() {
        expect(userService).toBeDefined();
    });

    it('should show all users', function() {
        $httpBackend.expectGET('http://jsonplaceholder.typicode.com/users').respond('');
        userService.getUsers();
        $httpBackend.flush();
    });

    it('should say hello', function() {
        expect('Whattup World!');
    });

    it('should create a new user', function() {
        $httpBackend.expectPOST('http://jsonplaceholder.typicode.com/users').respond('');
        userService.createNewUser();
        $httpBackend.flush();
    });

    it('should delete a user', function() {
        $httpBackend.expectDELETE('http://jsonplaceholder.typicode.com/users/1').respond('');
        userService.deleteUser(1);
        $httpBackend.flush();
    });
});