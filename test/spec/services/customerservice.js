'use strict';

describe('Service: customerService', function () {

    beforeEach(module('gapApp'));
    beforeEach(inject(function (_customerService_, $q) {
        var customerService = _customerService_;
        spyOn(customerService, 'getCustomers');
        var deferred = $q.defer();
        var promise = deferred.promise;
        deferred.resolve('Remote call result');
        return promise;
    }));



    describe('call getCustomers', function () {
        it('should do call getCustomers ', function (callback) {
            expect(callback);
            callback();
        });
    });

    });
