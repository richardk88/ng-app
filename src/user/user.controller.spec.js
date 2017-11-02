describe('Users Controller', function()   {
    var controller,
        scope,
        rootScope,
        vmUsers,
        userService,
        httpBackend,
        q,
        timeout;

    beforeEach(angular.mock.module('myApp'));
    beforeEach(inject(function($injector) {
        userService = $injector.get('userService');
        q = $injector.get('$q');
        controller = $injector.get('$controller');
        rootScope = $injector.get('$rootScope');
        scope = rootScope.$new();
        httpBackend = $injector.get('$httpBackend');
        timeout = $injector.get('$timeout');
        var users = [{name: "Benjamin", email: "beniscool@gmail.com"}];
        var user = {name: "benjamin", email: "sample email"};
        spyOn(userService, 'getUsers').and.returnValue(q.resolve({data: users}));
        spyOn(userService, 'createNewUser').and.returnValue(q.resolve({data: user}));
        vmUsers = controller('userCtrl', {$scope: scope});
    }));

    afterEach(function() {
     httpBackend.verifyNoOutstandingExpectation();
     httpBackend.verifyNoOutstandingRequest();
    });

    describe('getUsers', function() {
        fit('it should get all users', function() {
            vmUsers.getUsers();
            timeout.flush();
            expect(vmUsers.users[0]).toEqual({name: "Benjamin", email: "beniscool@gmail.com"});
            expect(userService.getUsers).toHaveBeenCalled();
        });
    });
});
