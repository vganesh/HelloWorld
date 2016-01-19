'use strict';

/**
 * @ngdoc service
 * @name gapApp.customerService
 * @description
 * # customerService
 * Service in the gapApp.
 */
angular.module('gapApp')
  .service('customerService', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
      this._getCustomers = function() {
          var deferred = $q.defer();
          setTimeout(function(){
              var result=[];
              var data={id:1, name: 'ganesh'};
              result.push(data);
              deferred.resolve(result);
              alert("Hello");
          }, 3000);
          return deferred.promise;
      };
      return {
        getCustomers: this._getCustomers
      }
  })