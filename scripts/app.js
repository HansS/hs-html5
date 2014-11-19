'use strict';

/**
 * @ngdoc overview
 * @name appApp
 * @description
 * # appApp
 *
 * Main module of the application.
 */
angular
  .module('App', ['ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/sales', {
        templateUrl: 'sales.html',
        controller: 'SalesCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
