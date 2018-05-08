# magento.QuoteGuestCartRepositoryV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**quoteGuestCartRepositoryV1GetGet**](QuoteGuestCartRepositoryV1Api.md#quoteGuestCartRepositoryV1GetGet) | **GET** /V1/guest-carts/{cartId} | 


<a name="quoteGuestCartRepositoryV1GetGet"></a>
# **quoteGuestCartRepositoryV1GetGet**
> QuoteDataCartInterface quoteGuestCartRepositoryV1GetGet(cartId)



Enable a guest user to return information for a specified cart.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.QuoteGuestCartRepositoryV1Api();

var cartId = "cartId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.quoteGuestCartRepositoryV1GetGet(cartId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartId** | **String**|  | 

### Return type

[**QuoteDataCartInterface**](QuoteDataCartInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

