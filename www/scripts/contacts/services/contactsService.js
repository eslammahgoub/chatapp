/**
 * [contacts service to get data]
 */
(function(){
  var ContactsService;
  /**
   * contacts factory
   * @function
   * @param  {[servie]} $resource [description]
   * @return {[type]}           [description]
   */
  ContactsService = function($resource) {
    var allServices,baseURL;

    baseURL = '/fakeData/data.json/';

    allServices = {
      /**
       * get all data
       */
      getAll: function() {
        return $resource(baseURL);
      }
    };
    return allServices;
  };

  ContactsService.$inject = ['$resource'];
  angular.module('chatApp').factory('contactsService', ContactsService);
})();
