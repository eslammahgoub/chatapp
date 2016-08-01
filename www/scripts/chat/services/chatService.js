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
              var i = 0;
                angular.forEach(items.messages, function(value, key) {
                  angular.forEach(value, function(valueOne,keyOne){
                    if(keyOne === 'from' && valueOne === id) {
                      result[i] = value;
                      i++;
                    }else if (keyOne === 'to' && valueOne === id) {
                      result[i] = value;
                      i++;
                    }
                  });
                });
                if (Object.keys(result).length == 0) {
                  result.empty = true;
                  return result;
                } else {
                  return result;
                }
            }
          }
        });
      },
      /**
       * get all data
       */
      getAll: function() {
        return $resource(baseURL);
      }
    };
    return allServices;
  };

  ChatService.$inject = ['$resource'];
  angular.module('chatApp').factory('chatService', ChatService);
})();
