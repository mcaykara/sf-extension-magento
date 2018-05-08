# magento.StoreWebsiteRepositoryV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**storeWebsiteRepositoryV1GetListGet**](StoreWebsiteRepositoryV1Api.md#storeWebsiteRepositoryV1GetListGet) | **GET** /V1/store/websites | 


<a name="storeWebsiteRepositoryV1GetListGet"></a>
# **storeWebsiteRepositoryV1GetListGet**
> [StoreDataWebsiteInterface] storeWebsiteRepositoryV1GetListGet()



Retrieve list of all websites

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.StoreWebsiteRepositoryV1Api();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.storeWebsiteRepositoryV1GetListGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[StoreDataWebsiteInterface]**](StoreDataWebsiteInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

