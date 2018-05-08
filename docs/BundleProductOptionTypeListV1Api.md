# magento.BundleProductOptionTypeListV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bundleProductOptionTypeListV1GetItemsGet**](BundleProductOptionTypeListV1Api.md#bundleProductOptionTypeListV1GetItemsGet) | **GET** /V1/bundle-products/options/types | 


<a name="bundleProductOptionTypeListV1GetItemsGet"></a>
# **bundleProductOptionTypeListV1GetItemsGet**
> [BundleDataOptionTypeInterface] bundleProductOptionTypeListV1GetItemsGet()



Get all types for options for bundle products

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.BundleProductOptionTypeListV1Api();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.bundleProductOptionTypeListV1GetItemsGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[BundleDataOptionTypeInterface]**](BundleDataOptionTypeInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

