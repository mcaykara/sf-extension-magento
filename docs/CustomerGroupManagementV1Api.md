# magento.CustomerGroupManagementV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**customerGroupManagementV1GetDefaultGroupGet**](CustomerGroupManagementV1Api.md#customerGroupManagementV1GetDefaultGroupGet) | **GET** /V1/customerGroups/default/{storeId} | 
[**customerGroupManagementV1GetDefaultGroupGet_0**](CustomerGroupManagementV1Api.md#customerGroupManagementV1GetDefaultGroupGet_0) | **GET** /V1/customerGroups/default | 
[**customerGroupManagementV1IsReadonlyGet**](CustomerGroupManagementV1Api.md#customerGroupManagementV1IsReadonlyGet) | **GET** /V1/customerGroups/{id}/permissions | 


<a name="customerGroupManagementV1GetDefaultGroupGet"></a>
# **customerGroupManagementV1GetDefaultGroupGet**
> CustomerDataGroupInterface customerGroupManagementV1GetDefaultGroupGet(storeId)



Get default customer group.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CustomerGroupManagementV1Api();

var storeId = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.customerGroupManagementV1GetDefaultGroupGet(storeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **Number**|  | 

### Return type

[**CustomerDataGroupInterface**](CustomerDataGroupInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="customerGroupManagementV1GetDefaultGroupGet_0"></a>
# **customerGroupManagementV1GetDefaultGroupGet_0**
> CustomerDataGroupInterface customerGroupManagementV1GetDefaultGroupGet_0(opts)



Get default customer group.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CustomerGroupManagementV1Api();

var opts = { 
  'storeId': 56 // Number | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.customerGroupManagementV1GetDefaultGroupGet_0(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **Number**|  | [optional] 

### Return type

[**CustomerDataGroupInterface**](CustomerDataGroupInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="customerGroupManagementV1IsReadonlyGet"></a>
# **customerGroupManagementV1IsReadonlyGet**
> &#39;Boolean&#39; customerGroupManagementV1IsReadonlyGet(id)



Check if customer group can be deleted.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CustomerGroupManagementV1Api();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.customerGroupManagementV1IsReadonlyGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

**&#39;Boolean&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

