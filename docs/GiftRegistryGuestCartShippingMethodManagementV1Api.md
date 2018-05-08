# magento.GiftRegistryGuestCartShippingMethodManagementV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**giftRegistryGuestCartShippingMethodManagementV1EstimateByRegistryIdPost**](GiftRegistryGuestCartShippingMethodManagementV1Api.md#giftRegistryGuestCartShippingMethodManagementV1EstimateByRegistryIdPost) | **POST** /V1/guest-giftregistry/{cartId}/estimate-shipping-methods | 


<a name="giftRegistryGuestCartShippingMethodManagementV1EstimateByRegistryIdPost"></a>
# **giftRegistryGuestCartShippingMethodManagementV1EstimateByRegistryIdPost**
> [QuoteDataShippingMethodInterface] giftRegistryGuestCartShippingMethodManagementV1EstimateByRegistryIdPost(cartId, opts)



Estimate shipping

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.GiftRegistryGuestCartShippingMethodManagementV1Api();

var cartId = "cartId_example"; // String | The shopping cart ID.

var opts = { 
  'body': new magento.Body120() // Body120 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.giftRegistryGuestCartShippingMethodManagementV1EstimateByRegistryIdPost(cartId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartId** | **String**| The shopping cart ID. | 
 **body** | [**Body120**](Body120.md)|  | [optional] 

### Return type

[**[QuoteDataShippingMethodInterface]**](QuoteDataShippingMethodInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

