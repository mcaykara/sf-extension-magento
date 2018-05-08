# magento.QuoteGuestCartTotalManagementV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**quoteGuestCartTotalManagementV1CollectTotalsPut**](QuoteGuestCartTotalManagementV1Api.md#quoteGuestCartTotalManagementV1CollectTotalsPut) | **PUT** /V1/guest-carts/{cartId}/collect-totals | 


<a name="quoteGuestCartTotalManagementV1CollectTotalsPut"></a>
# **quoteGuestCartTotalManagementV1CollectTotalsPut**
> QuoteDataTotalsInterface quoteGuestCartTotalManagementV1CollectTotalsPut(cartId, opts)



Set shipping/billing methods and additional data for cart and collect totals for guest.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.QuoteGuestCartTotalManagementV1Api();

var cartId = "cartId_example"; // String | The cart ID.

var opts = { 
  'body': new magento.Body63() // Body63 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.quoteGuestCartTotalManagementV1CollectTotalsPut(cartId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartId** | **String**| The cart ID. | 
 **body** | [**Body63**](Body63.md)|  | [optional] 

### Return type

[**QuoteDataTotalsInterface**](QuoteDataTotalsInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

