// Ionic Router App


angular.module('meihunApp').config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // $urlRouterProvider.when("","/tab");
  $stateProvider
  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // tab:总部通知
  .state('tab.notification', {
    url: '/notification',
    views: {
      'tab-notification': {
        templateUrl: 'templates/tab-notification.html',
        controller: 'NotifyCtrl'
      }
    },
    resolve:{
      loadMyCtrl:['$ocLazyLoad',function ($ocLazyLoad) {
        return $ocLazyLoad.load({
          name:"notification",
          files:["js/controllers/notifyController.js"]
        })
      }]
    }
  })
  // tab:排空查询
  .state('tab.search', {
    url: '/search',
    views: {
      'tab-search': {
        templateUrl: 'templates/tab-search.html',
        controller: 'SearchCtrl'
      }
    },
    resolve:{
      loadMyCtrl:['$ocLazyLoad',function ($ocLazyLoad) {
        return $ocLazyLoad.load({
          name:"search",
          files:["js/services.js",
                 "js/controllers/searchController.js"]
        })
      }]
    }
  })
  // 详情
  .state('tab.chat-detail', {
    url: '/detail/:chatId',
    views: {
      'tab-search': {
        templateUrl: 'templates/chat-detail.html',
        controller: 'ChatDetailCtrl'
      }
    },
    resolve:{
      loadMyCtrl:['$ocLazyLoad',function ($ocLazyLoad) {
        return $ocLazyLoad.load({
          name:"detail",
          files:["js/services.js",
                 "js/controllers/detailController.js"]
        })
      }]
    }
  })

  // tab:新建
  .state('tab.add', {
    url: '/add',
    views: {
      'tab-add': {
        templateUrl: 'templates/tab-add.html',
        // controller: 'AddCtrl'
      }
    },
    /*resolve:{
      loadMyCtrl:['$ocLazyLoad',function ($ocLazyLoad) {
        return $ocLazyLoad.load({
          name:"account",
          files:["js/services.js",
                 "js/controllers/accountController.js"]
        })
      }]
    }*/
  })

  // tab:支付
  .state('tab.pay', {
    url: '/pay',
    views: {
      'tab-pay': {
        templateUrl: 'templates/tab-pay.html',
        // controller: 'PayCtrl'
      }
    },
    /*resolve:{
      loadMyCtrl:['$ocLazyLoad',function ($ocLazyLoad) {
        return $ocLazyLoad.load({
          name:"account",
          files:["js/services.js",
                 "js/controllers/accountController.js"]
        })
      }]
    }*/
  })

  // tab:分享
  .state('tab.share', {
    url: '/share',
    views: {
      'tab-share': {
        templateUrl: 'templates/tab-share.html',
        // controller: 'ShareCtrl'
      }
    },
    /*resolve:{
      loadMyCtrl:['$ocLazyLoad',function ($ocLazyLoad) {
        return $ocLazyLoad.load({
          name:"account",
          files:["js/services.js",
                 "js/controllers/accountController.js"]
        })
      }]
    }*/
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/notification');

});
