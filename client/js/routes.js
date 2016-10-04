angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('controller.iNtellum', {
    url: '/home',
    views: {
      'tab2': {
        templateUrl: 'templates/iNtellum.html',
        controller: 'iNtellumCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='controller.places'
      2) Using $state.go programatically:
        $state.go('controller.places');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /control/tab2/places
      /control/tab1/places
  */
  .state('controller.places', {
    url: '/places',
    views: {
      'tab2': {
        templateUrl: 'templates/places.html',
        controller: 'placesCtrl'
      },
      'tab1': {
        templateUrl: 'templates/places.html',
        controller: 'placesCtrl'
      }
    }
  })

  .state('controller.cloud', {
    url: '/cloud',
    views: {
      'tab3': {
        templateUrl: 'templates/cloud.html',
        controller: 'cloudCtrl'
      }
    }
  })

  .state('controller', {
    url: '/control',
    templateUrl: 'templates/controller.html',
    abstract:true
  })

  .state('iNtellumLogin', {
    url: '/login',
    templateUrl: 'templates/iNtellumLogin.html',
    controller: 'iNtellumLoginCtrl'
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='controller.groups'
      2) Using $state.go programatically:
        $state.go('controller.groups');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /control/tab2/groups
      /control/tab1/groups
  */
  .state('controller.groups', {
    url: '/groups',
    views: {
      'tab2': {
        templateUrl: 'templates/groups.html',
        controller: 'groupsCtrl'
      },
      'tab1': {
        templateUrl: 'templates/groups.html',
        controller: 'groupsCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='controller.deviceGroup'
      2) Using $state.go programatically:
        $state.go('controller.deviceGroup');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /control/tab2/devices
      /control/tab1/devices
  */
  .state('controller.deviceGroup', {
    url: '/devices',
    views: {
      'tab2': {
        templateUrl: 'templates/deviceGroup.html',
        controller: 'deviceGroupCtrl'
      },
      'tab1': {
        templateUrl: 'templates/deviceGroup.html',
        controller: 'deviceGroupCtrl'
      }
    }
  })

  .state('iNtellumSignup', {
    url: '/signup',
    templateUrl: 'templates/iNtellumSignup.html',
    controller: 'iNtellumSignupCtrl'
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='controller.deviceDetail'
      2) Using $state.go programatically:
        $state.go('controller.deviceDetail');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /control/tab2/device-detail
      /control/tab1/device-detail
  */
  .state('controller.deviceDetail', {
    url: '/device-detail',
    views: {
      'tab2': {
        templateUrl: 'templates/deviceDetail.html',
        controller: 'deviceDetailCtrl'
      },
      'tab1': {
        templateUrl: 'templates/deviceDetail.html',
        controller: 'deviceDetailCtrl'
      }
    }
  })

  .state('userProfile', {
    url: '/profile',
    templateUrl: 'templates/userProfile.html',
    controller: 'userProfileCtrl'
  })

  .state('scenes', {
    url: '/scenes',
    templateUrl: 'templates/scenes.html',
    controller: 'scenesCtrl'
  })

  .state('controller.nearby', {
    url: '/nearby',
    views: {
      'tab2': {
        templateUrl: 'templates/nearby.html',
        controller: 'nearbyCtrl'
      }
    }
  })

  .state('controller.developer', {
    url: '/developer',
    views: {
      'tab4': {
        templateUrl: 'templates/developer.html',
        controller: 'developerCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/login')

  

});