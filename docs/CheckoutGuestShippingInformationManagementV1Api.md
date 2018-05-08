# magento.CheckoutGuestShippingInformationManagementV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**checkoutGuestShippingInformationManagementV1SaveAddressInformationPost**](CheckoutGuestShippingInformationManagementV1Api.md#checkoutGuestShippingInformationManagementV1SaveAddressInformationPost) | **POST** /V1/guest-carts/{cartId}/shipping-information | 


<a name="checkoutGuestShippingInformationManagementV1SaveAddressInformationPost"></a>
# **checkoutGuestShippingInformationManagementV1SaveAddressInformationPost**
> CheckoutDataPaymentDetailsInterface checkoutGuestShippingInformationManagementV1SaveAddressInformationPost(cartId, opts)





### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CheckoutGuestShippingInformationManagementV1Api();

var cartId = "cartId_example"; // String | 

var opts = { 
  'body': new magento.Body83() // Body83 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.checkoutGuestShippingInformationManagementV1SaveAddressInformationPost(cartId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartId** | **String**|  | 
 **body** | [**Body83**](Body83.md)|  | [optional] 

### Return type

[**CheckoutDataPaymentDetailsInterface**](CheckoutDataPaymentDetailsInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

