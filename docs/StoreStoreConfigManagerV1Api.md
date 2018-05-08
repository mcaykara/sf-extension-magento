# magento.StoreStoreConfigManagerV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**storeStoreConfigManagerV1GetStoreConfigsGet**](StoreStoreConfigManagerV1Api.md#storeStoreConfigManagerV1GetStoreConfigsGet) | **GET** /V1/store/storeConfigs | 


<a name="storeStoreConfigManagerV1GetStoreConfigsGet"></a>
# **storeStoreConfigManagerV1GetStoreConfigsGet**
> [StoreDataStoreConfigInterface] storeStoreConfigManagerV1GetStoreConfigsGet(opts)





### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.StoreStoreConfigManagerV1Api();

var opts = { 
  'storeCodes': ["storeCodes_example"] // [String] | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.storeStoreConfigManagerV1GetStoreConfigsGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeCodes** | [**[String]**](String.md)|  | [optional] 

### Return type

[**[StoreDataStoreConfigInterface]**](StoreDataStoreConfigInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

