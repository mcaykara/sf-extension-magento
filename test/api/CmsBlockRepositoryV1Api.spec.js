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
    instance = new magento.CmsBlockRepositoryV1Api();
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

  describe('CmsBlockRepositoryV1Api', function() {
    describe('cmsBlockRepositoryV1DeleteByIdDelete', function() {
      it('should call cmsBlockRepositoryV1DeleteByIdDelete successfully', function(done) {
        //uncomment below and update the code to test cmsBlockRepositoryV1DeleteByIdDelete
        //instance.cmsBlockRepositoryV1DeleteByIdDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('cmsBlockRepositoryV1GetByIdGet', function() {
      it('should call cmsBlockRepositoryV1GetByIdGet successfully', function(done) {
        //uncomment below and update the code to test cmsBlockRepositoryV1GetByIdGet
        //instance.cmsBlockRepositoryV1GetByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('cmsBlockRepositoryV1GetListGet', function() {
      it('should call cmsBlockRepositoryV1GetListGet successfully', function(done) {
        //uncomment below and update the code to test cmsBlockRepositoryV1GetListGet
        //instance.cmsBlockRepositoryV1GetListGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('cmsBlockRepositoryV1SavePost', function() {
      it('should call cmsBlockRepositoryV1SavePost successfully', function(done) {
        //uncomment below and update the code to test cmsBlockRepositoryV1SavePost
        //instance.cmsBlockRepositoryV1SavePost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('cmsBlockRepositoryV1SavePut', function() {
      it('should call cmsBlockRepositoryV1SavePut successfully', function(done) {
        //uncomment below and update the code to test cmsBlockRepositoryV1SavePut
        //instance.cmsBlockRepositoryV1SavePut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
