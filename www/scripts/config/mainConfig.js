/**
 * configuration setting for router and run
 */
(function(){
  var Configure, Run;
  /**
   * Run function to angular life cycle
   * @function
   * @param $rootScope [main root]
   * @param $state [state of router]
   */
  Run = function($rootScope, $state) {
    $rootScope.$on('$locationChangeSuccess', function(e,b,c){
      var routerName;
      routerName = b.split('/')[4];
      $rootScope.title = routerName || 'Chat App';
    });
  };
  Run.$inject = ['$rootScope', '$state'];
  /**
   * Configure function to configurate router and location and state
   * @function
   * @param $stateProvider [state Provider service]
   * @param $urlRouterProvider [url router Provider service]
   * @param $locationProvider [location Provider srvice]
   */
  Configure = function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/contacts');
    $stateProvider.state('contacts',{
      url: '/contacts',
      views: {
        'contacts' : {
          templateUrl: 'templates/contacts/contacts.html',
          controller: 'ContactsCtrl',
          controllerAs: 'contacts'
        }
      },
      authenticate: true
      resolve: {
        load: loadContacts
      }
    }).state('chat',{
      url: '/chat?contactId',
      views: {
        'chat': {
          templateUrl: 'templates/chat/chat.html',
          controller: 'ChatCtrl',
          controllerAs: 'chat'
        }
      },
      authenticate: true
      resolve: {
        load: loadChat
      }
    });
  };
  /**
   * [$inject manual inject useful when uglify the code]
   */
  Configure.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
  return angular.module('chatApp').config(Configure);
})();
