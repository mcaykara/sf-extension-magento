# magento.CatalogCategoryAttributeOptionManagementV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**catalogCategoryAttributeOptionManagementV1GetItemsGet**](CatalogCategoryAttributeOptionManagementV1Api.md#catalogCategoryAttributeOptionManagementV1GetItemsGet) | **GET** /V1/categories/attributes/{attributeCode}/options | 


<a name="catalogCategoryAttributeOptionManagementV1GetItemsGet"></a>
# **catalogCategoryAttributeOptionManagementV1GetItemsGet**
> [EavDataAttributeOptionInterface] catalogCategoryAttributeOptionManagementV1GetItemsGet(attributeCode)



Retrieve list of attribute options

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CatalogCategoryAttributeOptionManagementV1Api();

var attributeCode = "attributeCode_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.catalogCategoryAttributeOptionManagementV1GetItemsGet(attributeCode, callback);
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

