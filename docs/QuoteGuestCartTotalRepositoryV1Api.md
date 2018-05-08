# magento.QuoteGuestCartTotalRepositoryV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**quoteGuestCartTotalRepositoryV1GetGet**](QuoteGuestCartTotalRepositoryV1Api.md#quoteGuestCartTotalRepositoryV1GetGet) | **GET** /V1/guest-carts/{cartId}/totals | 


<a name="quoteGuestCartTotalRepositoryV1GetGet"></a>
# **quoteGuestCartTotalRepositoryV1GetGet**
> QuoteDataTotalsInterface quoteGuestCartTotalRepositoryV1GetGet(cartId)



Return quote totals data for a specified cart.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.QuoteGuestCartTotalRepositoryV1Api();

var cartId = "cartId_example"; // String | The cart ID.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.quoteGuestCartTotalRepositoryV1GetGet(cartId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartId** | **String**| The cart ID. | 

### Return type

[**QuoteDataTotalsInterface**](QuoteDataTotalsInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

