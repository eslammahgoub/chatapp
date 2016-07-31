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
      },
      /**
       * get specific messages from id
       * @function
       * @param [string] id
       */
      getById: function(id) {
        return $resource(baseURL + ':id', {id: "@id"}, {
          get: {
            method: "GET",
            params: {
              id: '@id'
            },
            transformResponse: function(data, headersGetter) {
              var items = angular.fromJson(data);
              var result = {};
                angular.forEach(items.messages, function(value, key) {
                  angular.forEach(value, function(valueOne,keyOne){
                    if(keyOne === 'from' && valueOne === id) {
                      result =  value;
                    }
                  });
                });
                return result;
            }
          }
        });
      }
    };
    return allServices;
  };

  ContactsService.$inject = ['$resource'];
  angular.module('chatApp').factory('contactsService', ContactsService);
})();
