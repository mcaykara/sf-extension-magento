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
    instance = new magento.CatalogProductAttributeMediaGalleryManagementV1Api();
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

  describe('CatalogProductAttributeMediaGalleryManagementV1Api', function() {
    describe('catalogProductAttributeMediaGalleryManagementV1CreatePost', function() {
      it('should call catalogProductAttributeMediaGalleryManagementV1CreatePost successfully', function(done) {
        //uncomment below and update the code to test catalogProductAttributeMediaGalleryManagementV1CreatePost
        //instance.catalogProductAttributeMediaGalleryManagementV1CreatePost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('catalogProductAttributeMediaGalleryManagementV1GetGet', function() {
      it('should call catalogProductAttributeMediaGalleryManagementV1GetGet successfully', function(done) {
        //uncomment below and update the code to test catalogProductAttributeMediaGalleryManagementV1GetGet
        //instance.catalogProductAttributeMediaGalleryManagementV1GetGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('catalogProductAttributeMediaGalleryManagementV1GetListGet', function() {
      it('should call catalogProductAttributeMediaGalleryManagementV1GetListGet successfully', function(done) {
        //uncomment below and update the code to test catalogProductAttributeMediaGalleryManagementV1GetListGet
        //instance.catalogProductAttributeMediaGalleryManagementV1GetListGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('catalogProductAttributeMediaGalleryManagementV1RemoveDelete', function() {
      it('should call catalogProductAttributeMediaGalleryManagementV1RemoveDelete successfully', function(done) {
        //uncomment below and update the code to test catalogProductAttributeMediaGalleryManagementV1RemoveDelete
        //instance.catalogProductAttributeMediaGalleryManagementV1RemoveDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('catalogProductAttributeMediaGalleryManagementV1UpdatePut', function() {
      it('should call catalogProductAttributeMediaGalleryManagementV1UpdatePut successfully', function(done) {
        //uncomment below and update the code to test catalogProductAttributeMediaGalleryManagementV1UpdatePut
        //instance.catalogProductAttributeMediaGalleryManagementV1UpdatePut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));