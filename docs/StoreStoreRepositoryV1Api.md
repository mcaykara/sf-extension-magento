# magento.StoreStoreRepositoryV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**storeStoreRepositoryV1GetListGet**](StoreStoreRepositoryV1Api.md#storeStoreRepositoryV1GetListGet) | **GET** /V1/store/storeViews | 


<a name="storeStoreRepositoryV1GetListGet"></a>
# **storeStoreRepositoryV1GetListGet**
> [StoreDataStoreInterface] storeStoreRepositoryV1GetListGet()



Retrieve list of all stores

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.StoreStoreRepositoryV1Api();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.storeStoreRepositoryV1GetListGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[StoreDataStoreInterface]**](StoreDataStoreInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

