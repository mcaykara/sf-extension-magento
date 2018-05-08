# magento.CheckoutShippingInformationManagementV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**checkoutShippingInformationManagementV1SaveAddressInformationPost**](CheckoutShippingInformationManagementV1Api.md#checkoutShippingInformationManagementV1SaveAddressInformationPost) | **POST** /V1/carts/mine/shipping-information | 
[**checkoutShippingInformationManagementV1SaveAddressInformationPost_0**](CheckoutShippingInformationManagementV1Api.md#checkoutShippingInformationManagementV1SaveAddressInformationPost_0) | **POST** /V1/carts/{cartId}/shipping-information | 


<a name="checkoutShippingInformationManagementV1SaveAddressInformationPost"></a>
# **checkoutShippingInformationManagementV1SaveAddressInformationPost**
> CheckoutDataPaymentDetailsInterface checkoutShippingInformationManagementV1SaveAddressInformationPost(opts)





### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CheckoutShippingInformationManagementV1Api();

var opts = { 
  'body': new magento.Body84() // Body84 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.checkoutShippingInformationManagementV1SaveAddressInformationPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body84**](Body84.md)|  | [optional] 

### Return type

[**CheckoutDataPaymentDetailsInterface**](CheckoutDataPaymentDetailsInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="checkoutShippingInformationManagementV1SaveAddressInformationPost_0"></a>
# **checkoutShippingInformationManagementV1SaveAddressInformationPost_0**
> CheckoutDataPaymentDetailsInterface checkoutShippingInformationManagementV1SaveAddressInformationPost_0(cartId, opts)





### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CheckoutShippingInformationManagementV1Api();

var cartId = 56; // Number | 

var opts = { 
  'body': new magento.Body85() // Body85 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.checkoutShippingInformationManagementV1SaveAddressInformationPost_0(cartId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartId** | **Number**|  | 
 **body** | [**Body85**](Body85.md)|  | [optional] 

### Return type

[**CheckoutDataPaymentDetailsInterface**](CheckoutDataPaymentDetailsInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

