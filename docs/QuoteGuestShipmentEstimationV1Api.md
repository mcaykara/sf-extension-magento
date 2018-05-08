# magento.QuoteGuestShipmentEstimationV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**quoteGuestShipmentEstimationV1EstimateByExtendedAddressPost**](QuoteGuestShipmentEstimationV1Api.md#quoteGuestShipmentEstimationV1EstimateByExtendedAddressPost) | **POST** /V1/guest-carts/{cartId}/estimate-shipping-methods | 


<a name="quoteGuestShipmentEstimationV1EstimateByExtendedAddressPost"></a>
# **quoteGuestShipmentEstimationV1EstimateByExtendedAddressPost**
> [QuoteDataShippingMethodInterface] quoteGuestShipmentEstimationV1EstimateByExtendedAddressPost(cartId, opts)



Estimate shipping by address and return list of available shipping methods

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.QuoteGuestShipmentEstimationV1Api();

var cartId = "cartId_example"; // String | 

var opts = { 
  'body': new magento.Body50() // Body50 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.quoteGuestShipmentEstimationV1EstimateByExtendedAddressPost(cartId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartId** | **String**|  | 
 **body** | [**Body50**](Body50.md)|  | [optional] 

### Return type

[**[QuoteDataShippingMethodInterface]**](QuoteDataShippingMethodInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

