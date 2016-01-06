'use strict';

/**
 * @ngdoc function
 * @name gapApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gapApp
 */
angular.module('gapApp')
  .controller('MainCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
	this.message = 'Hello world';
    $scope.message = this.message;
	this.getMessage = function(){
		return this.message;		
	};
  });
