'use strict';

define(function (require) {
    var _ = require('underscore');
    var $ = require('jquery');

    describe('just checking', function() {
        it('works for jquery', function() {
            var $el = $('<div>hey there</div>');

            expect($el[0].nodeName).toEqual('DIV');
            expect($el.text()).toEqual('hey there');
        });

        it('works for underscore', function () {
            expect(_.size([1,2,3])).toEqual(3);
        });
    });

    describe('router controller', function() {
        var controller = require('router-controller');

        it('has 3 methods', function() {
            expect(Object.keys(controller).length).toEqual(3);
        });

        it('has methods named defaultRoute, fooRoute and barRoute', function() {
            var methods = Object.keys(controller);

            expect(_.contains(methods, 'defaultRoute')).toBe(true);
            expect(_.contains(methods, 'fooRoute')).toBe(true);
            expect(_.contains(methods, 'barRoute')).toBe(true);
            expect(_.contains(methods, 'bazRoute')).toBe(false);
        });
    });
});
