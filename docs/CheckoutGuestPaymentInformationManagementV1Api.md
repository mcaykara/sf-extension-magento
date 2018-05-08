# magento.CheckoutGuestPaymentInformationManagementV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**checkoutGuestPaymentInformationManagementV1GetPaymentInformationGet**](CheckoutGuestPaymentInformationManagementV1Api.md#checkoutGuestPaymentInformationManagementV1GetPaymentInformationGet) | **GET** /V1/guest-carts/{cartId}/payment-information | 
[**checkoutGuestPaymentInformationManagementV1SavePaymentInformationAndPlaceOrderPost**](CheckoutGuestPaymentInformationManagementV1Api.md#checkoutGuestPaymentInformationManagementV1SavePaymentInformationAndPlaceOrderPost) | **POST** /V1/guest-carts/{cartId}/payment-information | 
[**checkoutGuestPaymentInformationManagementV1SavePaymentInformationPost**](CheckoutGuestPaymentInformationManagementV1Api.md#checkoutGuestPaymentInformationManagementV1SavePaymentInformationPost) | **POST** /V1/guest-carts/{cartId}/set-payment-information | 


<a name="checkoutGuestPaymentInformationManagementV1GetPaymentInformationGet"></a>
# **checkoutGuestPaymentInformationManagementV1GetPaymentInformationGet**
> CheckoutDataPaymentDetailsInterface checkoutGuestPaymentInformationManagementV1GetPaymentInformationGet(cartId)



Get payment information

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CheckoutGuestPaymentInformationManagementV1Api();

var cartId = "cartId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.checkoutGuestPaymentInformationManagementV1GetPaymentInformationGet(cartId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartId** | **String**|  | 

### Return type

[**CheckoutDataPaymentDetailsInterface**](CheckoutDataPaymentDetailsInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="checkoutGuestPaymentInformationManagementV1SavePaymentInformationAndPlaceOrderPost"></a>
# **checkoutGuestPaymentInformationManagementV1SavePaymentInformationAndPlaceOrderPost**
> &#39;Number&#39; checkoutGuestPaymentInformationManagementV1SavePaymentInformationAndPlaceOrderPost(cartId, opts)



Set payment information and place order for a specified cart.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CheckoutGuestPaymentInformationManagementV1Api();

var cartId = "cartId_example"; // String | 

var opts = { 
  'body': new magento.Body89() // Body89 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.checkoutGuestPaymentInformationManagementV1SavePaymentInformationAndPlaceOrderPost(cartId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartId** | **String**|  | 
 **body** | [**Body89**](Body89.md)|  | [optional] 

### Return type

**&#39;Number&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="checkoutGuestPaymentInformationManagementV1SavePaymentInformationPost"></a>
# **checkoutGuestPaymentInformationManagementV1SavePaymentInformationPost**
> &#39;Number&#39; checkoutGuestPaymentInformationManagementV1SavePaymentInformationPost(cartId, opts)



Set payment information for a specified cart.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CheckoutGuestPaymentInformationManagementV1Api();

var cartId = "cartId_example"; // String | 

var opts = { 
  'body': new magento.Body90() // Body90 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.checkoutGuestPaymentInformationManagementV1SavePaymentInformationPost(cartId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartId** | **String**|  | 
 **body** | [**Body90**](Body90.md)|  | [optional] 

### Return type

**&#39;Number&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

