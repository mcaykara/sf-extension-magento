# magento.QuoteGuestShippingMethodManagementV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**quoteGuestShippingMethodManagementV1GetListGet**](QuoteGuestShippingMethodManagementV1Api.md#quoteGuestShippingMethodManagementV1GetListGet) | **GET** /V1/guest-carts/{cartId}/shipping-methods | 


<a name="quoteGuestShippingMethodManagementV1GetListGet"></a>
# **quoteGuestShippingMethodManagementV1GetListGet**
> [QuoteDataShippingMethodInterface] quoteGuestShippingMethodManagementV1GetListGet(cartId)



List applicable shipping methods for a specified quote.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.QuoteGuestShippingMethodManagementV1Api();

var cartId = "cartId_example"; // String | The shopping cart ID.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.quoteGuestShippingMethodManagementV1GetListGet(cartId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartId** | **String**| The shopping cart ID. | 

### Return type

[**[QuoteDataShippingMethodInterface]**](QuoteDataShippingMethodInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

