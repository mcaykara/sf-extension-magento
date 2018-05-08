# magento.CheckoutPaymentInformationManagementV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**checkoutPaymentInformationManagementV1GetPaymentInformationGet**](CheckoutPaymentInformationManagementV1Api.md#checkoutPaymentInformationManagementV1GetPaymentInformationGet) | **GET** /V1/carts/mine/payment-information | 
[**checkoutPaymentInformationManagementV1SavePaymentInformationAndPlaceOrderPost**](CheckoutPaymentInformationManagementV1Api.md#checkoutPaymentInformationManagementV1SavePaymentInformationAndPlaceOrderPost) | **POST** /V1/carts/mine/payment-information | 
[**checkoutPaymentInformationManagementV1SavePaymentInformationPost**](CheckoutPaymentInformationManagementV1Api.md#checkoutPaymentInformationManagementV1SavePaymentInformationPost) | **POST** /V1/carts/mine/set-payment-information | 


<a name="checkoutPaymentInformationManagementV1GetPaymentInformationGet"></a>
# **checkoutPaymentInformationManagementV1GetPaymentInformationGet**
> CheckoutDataPaymentDetailsInterface checkoutPaymentInformationManagementV1GetPaymentInformationGet()



Get payment information

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CheckoutPaymentInformationManagementV1Api();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.checkoutPaymentInformationManagementV1GetPaymentInformationGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**CheckoutDataPaymentDetailsInterface**](CheckoutDataPaymentDetailsInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="checkoutPaymentInformationManagementV1SavePaymentInformationAndPlaceOrderPost"></a>
# **checkoutPaymentInformationManagementV1SavePaymentInformationAndPlaceOrderPost**
> &#39;Number&#39; checkoutPaymentInformationManagementV1SavePaymentInformationAndPlaceOrderPost(opts)



Set payment information and place order for a specified cart.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CheckoutPaymentInformationManagementV1Api();

var opts = { 
  'body': new magento.Body91() // Body91 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.checkoutPaymentInformationManagementV1SavePaymentInformationAndPlaceOrderPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body91**](Body91.md)|  | [optional] 

### Return type

**&#39;Number&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="checkoutPaymentInformationManagementV1SavePaymentInformationPost"></a>
# **checkoutPaymentInformationManagementV1SavePaymentInformationPost**
> &#39;Number&#39; checkoutPaymentInformationManagementV1SavePaymentInformationPost(opts)



Set payment information for a specified cart.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CheckoutPaymentInformationManagementV1Api();

var opts = { 
  'body': new magento.Body92() // Body92 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.checkoutPaymentInformationManagementV1SavePaymentInformationPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body92**](Body92.md)|  | [optional] 

### Return type

**&#39;Number&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

