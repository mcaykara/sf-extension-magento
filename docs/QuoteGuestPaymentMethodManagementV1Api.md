# magento.QuoteGuestPaymentMethodManagementV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**quoteGuestPaymentMethodManagementV1GetGet**](QuoteGuestPaymentMethodManagementV1Api.md#quoteGuestPaymentMethodManagementV1GetGet) | **GET** /V1/guest-carts/{cartId}/selected-payment-method | 
[**quoteGuestPaymentMethodManagementV1GetListGet**](QuoteGuestPaymentMethodManagementV1Api.md#quoteGuestPaymentMethodManagementV1GetListGet) | **GET** /V1/guest-carts/{cartId}/payment-methods | 
[**quoteGuestPaymentMethodManagementV1SetPut**](QuoteGuestPaymentMethodManagementV1Api.md#quoteGuestPaymentMethodManagementV1SetPut) | **PUT** /V1/guest-carts/{cartId}/selected-payment-method | 


<a name="quoteGuestPaymentMethodManagementV1GetGet"></a>
# **quoteGuestPaymentMethodManagementV1GetGet**
> QuoteDataPaymentInterface quoteGuestPaymentMethodManagementV1GetGet(cartId)



Return the payment method for a specified shopping cart.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.QuoteGuestPaymentMethodManagementV1Api();

var cartId = "cartId_example"; // String | The cart ID.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.quoteGuestPaymentMethodManagementV1GetGet(cartId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartId** | **String**| The cart ID. | 

### Return type

[**QuoteDataPaymentInterface**](QuoteDataPaymentInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="quoteGuestPaymentMethodManagementV1GetListGet"></a>
# **quoteGuestPaymentMethodManagementV1GetListGet**
> [QuoteDataPaymentMethodInterface] quoteGuestPaymentMethodManagementV1GetListGet(cartId)



List available payment methods for a specified shopping cart. This call returns an array of objects, but detailed information about each object’s attributes might not be included.  See http://devdocs.magento.com/codelinks/attributes.html#GuestPaymentMethodManagementInterface to determine which call to use to get detailed information about all attributes for an object.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.QuoteGuestPaymentMethodManagementV1Api();

var cartId = "cartId_example"; // String | The cart ID.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.quoteGuestPaymentMethodManagementV1GetListGet(cartId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartId** | **String**| The cart ID. | 

### Return type

[**[QuoteDataPaymentMethodInterface]**](QuoteDataPaymentMethodInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="quoteGuestPaymentMethodManagementV1SetPut"></a>
# **quoteGuestPaymentMethodManagementV1SetPut**
> &#39;Number&#39; quoteGuestPaymentMethodManagementV1SetPut(cartId, opts)



Add a specified payment method to a specified shopping cart.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.QuoteGuestPaymentMethodManagementV1Api();

var cartId = "cartId_example"; // String | The cart ID.

var opts = { 
  'body': new magento.Body59() // Body59 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.quoteGuestPaymentMethodManagementV1SetPut(cartId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartId** | **String**| The cart ID. | 
 **body** | [**Body59**](Body59.md)|  | [optional] 

### Return type

**&#39;Number&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

