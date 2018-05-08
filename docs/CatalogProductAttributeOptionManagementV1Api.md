# magento.CatalogProductAttributeOptionManagementV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**catalogProductAttributeOptionManagementV1AddPost**](CatalogProductAttributeOptionManagementV1Api.md#catalogProductAttributeOptionManagementV1AddPost) | **POST** /V1/products/attributes/{attributeCode}/options | 
[**catalogProductAttributeOptionManagementV1DeleteDelete**](CatalogProductAttributeOptionManagementV1Api.md#catalogProductAttributeOptionManagementV1DeleteDelete) | **DELETE** /V1/products/attributes/{attributeCode}/options/{optionId} | 
[**catalogProductAttributeOptionManagementV1GetItemsGet**](CatalogProductAttributeOptionManagementV1Api.md#catalogProductAttributeOptionManagementV1GetItemsGet) | **GET** /V1/products/attributes/{attributeCode}/options | 


<a name="catalogProductAttributeOptionManagementV1AddPost"></a>
# **catalogProductAttributeOptionManagementV1AddPost**
> &#39;Boolean&#39; catalogProductAttributeOptionManagementV1AddPost(attributeCode, opts)



Add option to attribute

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CatalogProductAttributeOptionManagementV1Api();

var attributeCode = "attributeCode_example"; // String | 

var opts = { 
  'body': new magento.Body27() // Body27 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.catalogProductAttributeOptionManagementV1AddPost(attributeCode, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **attributeCode** | **String**|  | 
 **body** | [**Body27**](Body27.md)|  | [optional] 

### Return type

**&#39;Boolean&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="catalogProductAttributeOptionManagementV1DeleteDelete"></a>
# **catalogProductAttributeOptionManagementV1DeleteDelete**
> &#39;Boolean&#39; catalogProductAttributeOptionManagementV1DeleteDelete(attributeCode, optionId)



Delete option from attribute

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CatalogProductAttributeOptionManagementV1Api();

var attributeCode = "attributeCode_example"; // String | 

var optionId = "optionId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.catalogProductAttributeOptionManagementV1DeleteDelete(attributeCode, optionId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **attributeCode** | **String**|  | 
 **optionId** | **String**|  | 

### Return type

**&#39;Boolean&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="catalogProductAttributeOptionManagementV1GetItemsGet"></a>
# **catalogProductAttributeOptionManagementV1GetItemsGet**
> [EavDataAttributeOptionInterface] catalogProductAttributeOptionManagementV1GetItemsGet(attributeCode)



Retrieve list of attribute options

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CatalogProductAttributeOptionManagementV1Api();

var attributeCode = "attributeCode_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.catalogProductAttributeOptionManagementV1GetItemsGet(attributeCode, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **attributeCode** | **String**|  | 

### Return type

[**[EavDataAttributeOptionInterface]**](EavDataAttributeOptionInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

