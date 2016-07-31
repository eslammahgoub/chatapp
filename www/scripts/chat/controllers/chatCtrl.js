/**
 * [chat controller]
 */
(function(){
  var ChatCtrl;

  ChatCtrl = function($rootScope, $scope, $state, $stateParams, chatService){
    var vm;
    vm = this;
    vm.id = $stateParams.contactId;
    vm.email = '';
    vm.name = '';
    console.log(vm.id);

    /**
     * Init object from contactsService
     */
    initData = chatService;

    /**
     * utilities
     */

    /**
     * get All data
     */
    initData.getUserById(vm.id).get(function(entries) {
      vm.email = entries.email;
      vm.name  = entries.name;
      vm.img   = entries.img;
      vm.status = entries.status;
    }); //get() returns all the entries

    initData.getMessagesById(vm.id).get(function(entries){
      console.log(entries);
    });
  };

  ChatCtrl.$inject = ['$rootScope', '$scope',  '$state', '$stateParams', 'chatService'];
  return angular.module('chatApp').controller('ChatCtrl', ChatCtrl);
})();
