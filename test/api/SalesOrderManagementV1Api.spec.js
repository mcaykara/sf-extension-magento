/**
 * Magento Enterprise Edition 2.0
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 2.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.magento);
  }
}(this, function(expect, magento) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new magento.SalesOrderManagementV1Api();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('SalesOrderManagementV1Api', function() {
    describe('salesOrderManagementV1AddCommentPost', function() {
      it('should call salesOrderManagementV1AddCommentPost successfully', function(done) {
        //uncomment below and update the code to test salesOrderManagementV1AddCommentPost
        //instance.salesOrderManagementV1AddCommentPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('salesOrderManagementV1CancelPost', function() {
      it('should call salesOrderManagementV1CancelPost successfully', function(done) {
        //uncomment below and update the code to test salesOrderManagementV1CancelPost
        //instance.salesOrderManagementV1CancelPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('salesOrderManagementV1GetCommentsListGet', function() {
      it('should call salesOrderManagementV1GetCommentsListGet successfully', function(done) {
        //uncomment below and update the code to test salesOrderManagementV1GetCommentsListGet
        //instance.salesOrderManagementV1GetCommentsListGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('salesOrderManagementV1GetStatusGet', function() {
      it('should call salesOrderManagementV1GetStatusGet successfully', function(done) {
        //uncomment below and update the code to test salesOrderManagementV1GetStatusGet
        //instance.salesOrderManagementV1GetStatusGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('salesOrderManagementV1HoldPost', function() {
      it('should call salesOrderManagementV1HoldPost successfully', function(done) {
        //uncomment below and update the code to test salesOrderManagementV1HoldPost
        //instance.salesOrderManagementV1HoldPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('salesOrderManagementV1NotifyPost', function() {
      it('should call salesOrderManagementV1NotifyPost successfully', function(done) {
        //uncomment below and update the code to test salesOrderManagementV1NotifyPost
        //instance.salesOrderManagementV1NotifyPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('salesOrderManagementV1UnHoldPost', function() {
      it('should call salesOrderManagementV1UnHoldPost successfully', function(done) {
        //uncomment below and update the code to test salesOrderManagementV1UnHoldPost
        //instance.salesOrderManagementV1UnHoldPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
