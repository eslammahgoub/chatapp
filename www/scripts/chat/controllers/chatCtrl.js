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
    vm.cover = '';
    vm.info = {};
    vm.empty = false;
    vm.currentUser = '';
    vm.imgMe = '';
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
      vm.cover = entries.cover;
    }); //get() returns all the entries

    /**
     * get All messages
     * @param  {[type]} vm.id [description]
     * @return {[type]}       [description]
     */
    initData.getMessagesById(vm.id).get().$promise.then(function(entries) {
      console.log(entries);
      entries = entries.toJSON();
      if (angular.isObject(entries) && entries.empty === undefined) {
        vm.info = entries;
      }else {
        vm.empty = true
      }
    });

    /**
     * get Information of Current User
     */
    initData.getAll().get(function(entries){
      console.log(entries);
      entries = entries.toJSON();
      vm.currentUser = entries.currentUser;
      vm.imgMe = vm.currentUser.img;
    })
  };

  ChatCtrl.$inject = ['$rootScope', '$scope',  '$state', '$stateParams', 'chatService'];
  return angular.module('chatApp').controller('ChatCtrl', ChatCtrl);
})();
