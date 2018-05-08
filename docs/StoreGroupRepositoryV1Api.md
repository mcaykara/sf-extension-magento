# magento.StoreGroupRepositoryV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**storeGroupRepositoryV1GetListGet**](StoreGroupRepositoryV1Api.md#storeGroupRepositoryV1GetListGet) | **GET** /V1/store/storeGroups | 


<a name="storeGroupRepositoryV1GetListGet"></a>
# **storeGroupRepositoryV1GetListGet**
> [StoreDataGroupInterface] storeGroupRepositoryV1GetListGet()



Retrieve list of all groups

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.StoreGroupRepositoryV1Api();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.storeGroupRepositoryV1GetListGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[StoreDataGroupInterface]**](StoreDataGroupInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

