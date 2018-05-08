# magento.QuoteCartTotalManagementV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**quoteCartTotalManagementV1CollectTotalsPut**](QuoteCartTotalManagementV1Api.md#quoteCartTotalManagementV1CollectTotalsPut) | **PUT** /V1/carts/mine/collect-totals | 


<a name="quoteCartTotalManagementV1CollectTotalsPut"></a>
# **quoteCartTotalManagementV1CollectTotalsPut**
> QuoteDataTotalsInterface quoteCartTotalManagementV1CollectTotalsPut(opts)



Set shipping/billing methods and additional data for cart and collect totals.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.QuoteCartTotalManagementV1Api();

var opts = { 
  'body': new magento.Body64() // Body64 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.quoteCartTotalManagementV1CollectTotalsPut(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body64**](Body64.md)|  | [optional] 

### Return type

[**QuoteDataTotalsInterface**](QuoteDataTotalsInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

