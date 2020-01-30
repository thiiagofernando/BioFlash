angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('login', {
    url: '/page2',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/page3',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('page4', {
    url: '/page4',
    templateUrl: 'templates/page4.html',
    controller: 'page4Ctrl'
  })

  .state('page5', {
    url: '/page5',
    templateUrl: 'templates/page5.html',
    controller: 'page5Ctrl'
  })

  .state('bioFlash', {
    url: '/page7',
    templateUrl: 'templates/bioFlash.html',
    controller: 'bioFlashCtrl'
  })

  .state('cadastro', {
    url: '/page8',
    templateUrl: 'templates/cadastro.html',
    controller: 'cadastroCtrl'
  })

  .state('solicitarColeta', {
    url: '/page15',
    templateUrl: 'templates/solicitarColeta.html',
    controller: 'solicitarColetaCtrl'
  })

  .state('pagamentos', {
    url: '/page16',
    templateUrl: 'templates/pagamentos.html',
    controller: 'pagamentosCtrl'
  })

  .state('contato', {
    url: '/page9',
    templateUrl: 'templates/contato.html',
    controller: 'contatoCtrl'
  })

  .state('mural', {
    url: '/page11',
    templateUrl: 'templates/mural.html',
    controller: 'muralCtrl'
  })

  .state('exames', {
    url: '/page12',
    templateUrl: 'templates/exames.html',
    controller: 'examesCtrl'
  })

  .state('jEJUM', {
    url: '/page13',
    templateUrl: 'templates/jEJUM.html',
    controller: 'jEJUMCtrl'
  })

  .state('exameFezes', {
    url: '/page14',
    templateUrl: 'templates/exameFezes.html',
    controller: 'exameFezesCtrl'
  })

  .state('exameUrina', {
    url: '/page10',
    templateUrl: 'templates/exameUrina.html',
    controller: 'exameUrinaCtrl'
  })

  .state('informaEsDoSistema', {
    url: '/page17',
    templateUrl: 'templates/informaEsDoSistema.html',
    controller: 'informaEsDoSistemaCtrl'
  })

$urlRouterProvider.otherwise('/page4')


});