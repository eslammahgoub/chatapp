/**
 * [chat service to get data]
 */
(function(){
  var ChatService;
  /**
   * Chat factory
   * @function
   * @param  {[servie]} $resource [description]
   * @return {[type]}           [description]
   */
  ChatService = function($resource) {
    var allServices,baseURL;

    baseURL = '/fakeData/data.json/';

    allServices = {
      /**
       * get all data
       */
      getUserById: function(id) {
        return $resource(baseURL + ':id', {id: "@id"}, {
          get: {
            method: "GET",
            params: {
              id: '@id'
            },
            transformResponse: function(data, headersGetter) {
              var items = angular.fromJson(data);
              var result = {};
                angular.forEach(items.users, function(value, key) {
                  angular.forEach(value, function(valueOne,keyOne){
                    if(keyOne === 'id' && valueOne === id) {
                      result =  value;
                    }
                  });
                });
                return result;
            }
          }
        });
      },
      /**
       * get specific messages from id
       * @function
       * @param [string] id
       */
      getMessagesById: function(id) {
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

  ChatService.$inject = ['$resource'];
  angular.module('chatApp').factory('chatService', ChatService);
})();
