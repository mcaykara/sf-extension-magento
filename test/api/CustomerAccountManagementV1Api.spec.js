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
    instance = new magento.CustomerAccountManagementV1Api();
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

  describe('CustomerAccountManagementV1Api', function() {
    describe('customerAccountManagementV1ActivateByIdPut', function() {
      it('should call customerAccountManagementV1ActivateByIdPut successfully', function(done) {
        //uncomment below and update the code to test customerAccountManagementV1ActivateByIdPut
        //instance.customerAccountManagementV1ActivateByIdPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('customerAccountManagementV1ActivatePut', function() {
      it('should call customerAccountManagementV1ActivatePut successfully', function(done) {
        //uncomment below and update the code to test customerAccountManagementV1ActivatePut
        //instance.customerAccountManagementV1ActivatePut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('customerAccountManagementV1ChangePasswordByIdPut', function() {
      it('should call customerAccountManagementV1ChangePasswordByIdPut successfully', function(done) {
        //uncomment below and update the code to test customerAccountManagementV1ChangePasswordByIdPut
        //instance.customerAccountManagementV1ChangePasswordByIdPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('customerAccountManagementV1CreateAccountPost', function() {
      it('should call customerAccountManagementV1CreateAccountPost successfully', function(done) {
        //uncomment below and update the code to test customerAccountManagementV1CreateAccountPost
        //instance.customerAccountManagementV1CreateAccountPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('customerAccountManagementV1GetConfirmationStatusGet', function() {
      it('should call customerAccountManagementV1GetConfirmationStatusGet successfully', function(done) {
        //uncomment below and update the code to test customerAccountManagementV1GetConfirmationStatusGet
        //instance.customerAccountManagementV1GetConfirmationStatusGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('customerAccountManagementV1GetDefaultBillingAddressGet', function() {
      it('should call customerAccountManagementV1GetDefaultBillingAddressGet successfully', function(done) {
        //uncomment below and update the code to test customerAccountManagementV1GetDefaultBillingAddressGet
        //instance.customerAccountManagementV1GetDefaultBillingAddressGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('customerAccountManagementV1GetDefaultBillingAddressGet_0', function() {
      it('should call customerAccountManagementV1GetDefaultBillingAddressGet_0 successfully', function(done) {
        //uncomment below and update the code to test customerAccountManagementV1GetDefaultBillingAddressGet_0
        //instance.customerAccountManagementV1GetDefaultBillingAddressGet_0(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('customerAccountManagementV1GetDefaultShippingAddressGet', function() {
      it('should call customerAccountManagementV1GetDefaultShippingAddressGet successfully', function(done) {
        //uncomment below and update the code to test customerAccountManagementV1GetDefaultShippingAddressGet
        //instance.customerAccountManagementV1GetDefaultShippingAddressGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('customerAccountManagementV1GetDefaultShippingAddressGet_0', function() {
      it('should call customerAccountManagementV1GetDefaultShippingAddressGet_0 successfully', function(done) {
        //uncomment below and update the code to test customerAccountManagementV1GetDefaultShippingAddressGet_0
        //instance.customerAccountManagementV1GetDefaultShippingAddressGet_0(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('customerAccountManagementV1InitiatePasswordResetPut', function() {
      it('should call customerAccountManagementV1InitiatePasswordResetPut successfully', function(done) {
        //uncomment below and update the code to test customerAccountManagementV1InitiatePasswordResetPut
        //instance.customerAccountManagementV1InitiatePasswordResetPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('customerAccountManagementV1IsEmailAvailablePost', function() {
      it('should call customerAccountManagementV1IsEmailAvailablePost successfully', function(done) {
        //uncomment below and update the code to test customerAccountManagementV1IsEmailAvailablePost
        //instance.customerAccountManagementV1IsEmailAvailablePost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('customerAccountManagementV1IsReadonlyGet', function() {
      it('should call customerAccountManagementV1IsReadonlyGet successfully', function(done) {
        //uncomment below and update the code to test customerAccountManagementV1IsReadonlyGet
        //instance.customerAccountManagementV1IsReadonlyGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('customerAccountManagementV1ResendConfirmationPost', function() {
      it('should call customerAccountManagementV1ResendConfirmationPost successfully', function(done) {
        //uncomment below and update the code to test customerAccountManagementV1ResendConfirmationPost
        //instance.customerAccountManagementV1ResendConfirmationPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('customerAccountManagementV1ValidatePut', function() {
      it('should call customerAccountManagementV1ValidatePut successfully', function(done) {
        //uncomment below and update the code to test customerAccountManagementV1ValidatePut
        //instance.customerAccountManagementV1ValidatePut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('customerAccountManagementV1ValidateResetPasswordLinkTokenGet', function() {
      it('should call customerAccountManagementV1ValidateResetPasswordLinkTokenGet successfully', function(done) {
        //uncomment below and update the code to test customerAccountManagementV1ValidateResetPasswordLinkTokenGet
        //instance.customerAccountManagementV1ValidateResetPasswordLinkTokenGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
