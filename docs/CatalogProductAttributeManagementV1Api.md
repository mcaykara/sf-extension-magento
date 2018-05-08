# magento.CatalogProductAttributeManagementV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**catalogProductAttributeManagementV1AssignPost**](CatalogProductAttributeManagementV1Api.md#catalogProductAttributeManagementV1AssignPost) | **POST** /V1/products/attribute-sets/attributes | 
[**catalogProductAttributeManagementV1GetAttributesGet**](CatalogProductAttributeManagementV1Api.md#catalogProductAttributeManagementV1GetAttributesGet) | **GET** /V1/products/attribute-sets/{attributeSetId}/attributes | 
[**catalogProductAttributeManagementV1UnassignDelete**](CatalogProductAttributeManagementV1Api.md#catalogProductAttributeManagementV1UnassignDelete) | **DELETE** /V1/products/attribute-sets/{attributeSetId}/attributes/{attributeCode} | 


<a name="catalogProductAttributeManagementV1AssignPost"></a>
# **catalogProductAttributeManagementV1AssignPost**
> &#39;Number&#39; catalogProductAttributeManagementV1AssignPost(opts)



Assign attribute to attribute set

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CatalogProductAttributeManagementV1Api();

var opts = { 
  'body': new magento.Body24() // Body24 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.catalogProductAttributeManagementV1AssignPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body24**](Body24.md)|  | [optional] 

### Return type

**&#39;Number&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="catalogProductAttributeManagementV1GetAttributesGet"></a>
# **catalogProductAttributeManagementV1GetAttributesGet**
> [CatalogDataProductAttributeInterface] catalogProductAttributeManagementV1GetAttributesGet(attributeSetId)



Retrieve related attributes based on given attribute set ID

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CatalogProductAttributeManagementV1Api();

var attributeSetId = "attributeSetId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.catalogProductAttributeManagementV1GetAttributesGet(attributeSetId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **attributeSetId** | **String**|  | 

### Return type

[**[CatalogDataProductAttributeInterface]**](CatalogDataProductAttributeInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="catalogProductAttributeManagementV1UnassignDelete"></a>
# **catalogProductAttributeManagementV1UnassignDelete**
> &#39;Boolean&#39; catalogProductAttributeManagementV1UnassignDelete(attributeSetId, attributeCode)



Remove attribute from attribute set

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CatalogProductAttributeManagementV1Api();

var attributeSetId = "attributeSetId_example"; // String | 

var attributeCode = "attributeCode_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.catalogProductAttributeManagementV1UnassignDelete(attributeSetId, attributeCode, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **attributeSetId** | **String**|  | 
 **attributeCode** | **String**|  | 

### Return type

**&#39;Boolean&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

