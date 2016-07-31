/**
 * filter for search on contacts
 */
(function(){
  /**
   * filter for search contacts
   * @function
   */
  searchContacts =function() {
    return function(input, search) {
      if (!input) return input;
      if (!search) return input;
      var expected = ('' + search).toLowerCase();
      var result = {};
      angular.forEach(input, function(value, key) {
        angular.forEach(value, function(objValue, objKey){
          var actual = ('' + objValue).toLowerCase();
          if(objKey === 'name' && actual.indexOf(expected) !== -1) {
            result[key] = value;
          }
        });
      });
      return result;
    }
  };

  return angular.module("chatApp").filter('searchContacts',searchContacts);
})();
