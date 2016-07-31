/**
 * [contacts controller]
 */
(function(){
  var ContactsCtrl;

  ContactsCtrl = function($rootScope, $scope, $state, contactsService){
    var vm, initData;
    vm = this;

    vm.friends = {};
    vm.id = '';
    /**
     * Init object from contactsService
     */
    initData = contactsService;

    /**
     * get Message for clicked contact
     */
    vm.getMessages = function(index) {
      vm.id = vm.friends[index].id;
      console.log(index);
      console.log(vm.friends[index]);
      initData.getById(vm.id).get(function(entries){
        console.log(entries);
      });
    }

    /**
     * utilities
     */

    /**
     * get All data
     */
    initData.getAll().get(function(entries) {
      vm.friends = entries.users;
    }); //get() returns all the entries
  };

  ContactsCtrl.$inject = ['$rootScope', '$scope', '$state', 'contactsService'];
  return angular.module('chatApp').controller('ContactsCtrl', ContactsCtrl);
})();
