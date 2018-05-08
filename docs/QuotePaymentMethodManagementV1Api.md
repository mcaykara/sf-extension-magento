# magento.QuotePaymentMethodManagementV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**quotePaymentMethodManagementV1GetGet**](QuotePaymentMethodManagementV1Api.md#quotePaymentMethodManagementV1GetGet) | **GET** /V1/carts/{cartId}/selected-payment-method | 
[**quotePaymentMethodManagementV1GetGet_0**](QuotePaymentMethodManagementV1Api.md#quotePaymentMethodManagementV1GetGet_0) | **GET** /V1/carts/mine/selected-payment-method | 
[**quotePaymentMethodManagementV1GetListGet**](QuotePaymentMethodManagementV1Api.md#quotePaymentMethodManagementV1GetListGet) | **GET** /V1/carts/{cartId}/payment-methods | 
[**quotePaymentMethodManagementV1GetListGet_0**](QuotePaymentMethodManagementV1Api.md#quotePaymentMethodManagementV1GetListGet_0) | **GET** /V1/carts/mine/payment-methods | 
[**quotePaymentMethodManagementV1SetPut**](QuotePaymentMethodManagementV1Api.md#quotePaymentMethodManagementV1SetPut) | **PUT** /V1/carts/{cartId}/selected-payment-method | 
[**quotePaymentMethodManagementV1SetPut_0**](QuotePaymentMethodManagementV1Api.md#quotePaymentMethodManagementV1SetPut_0) | **PUT** /V1/carts/mine/selected-payment-method | 


<a name="quotePaymentMethodManagementV1GetGet"></a>
# **quotePaymentMethodManagementV1GetGet**
> QuoteDataPaymentInterface quotePaymentMethodManagementV1GetGet(cartId)



Returns the payment method for a specified shopping cart.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.QuotePaymentMethodManagementV1Api();

var cartId = 56; // Number | The cart ID.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.quotePaymentMethodManagementV1GetGet(cartId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartId** | **Number**| The cart ID. | 

### Return type

[**QuoteDataPaymentInterface**](QuoteDataPaymentInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="quotePaymentMethodManagementV1GetGet_0"></a>
# **quotePaymentMethodManagementV1GetGet_0**
> QuoteDataPaymentInterface quotePaymentMethodManagementV1GetGet_0()



Returns the payment method for a specified shopping cart.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.QuotePaymentMethodManagementV1Api();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.quotePaymentMethodManagementV1GetGet_0(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**QuoteDataPaymentInterface**](QuoteDataPaymentInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="quotePaymentMethodManagementV1GetListGet"></a>
# **quotePaymentMethodManagementV1GetListGet**
> [QuoteDataPaymentMethodInterface] quotePaymentMethodManagementV1GetListGet(cartId)



Lists available payment methods for a specified shopping cart. This call returns an array of objects, but detailed information about each object’s attributes might not be included.  See http://devdocs.magento.com/codelinks/attributes.html#PaymentMethodManagementInterface to determine which call to use to get detailed information about all attributes for an object.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.QuotePaymentMethodManagementV1Api();

var cartId = 56; // Number | The cart ID.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.quotePaymentMethodManagementV1GetListGet(cartId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartId** | **Number**| The cart ID. | 

### Return type

[**[QuoteDataPaymentMethodInterface]**](QuoteDataPaymentMethodInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="quotePaymentMethodManagementV1GetListGet_0"></a>
# **quotePaymentMethodManagementV1GetListGet_0**
> [QuoteDataPaymentMethodInterface] quotePaymentMethodManagementV1GetListGet_0()



Lists available payment methods for a specified shopping cart. This call returns an array of objects, but detailed information about each object’s attributes might not be included.  See http://devdocs.magento.com/codelinks/attributes.html#PaymentMethodManagementInterface to determine which call to use to get detailed information about all attributes for an object.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.QuotePaymentMethodManagementV1Api();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.quotePaymentMethodManagementV1GetListGet_0(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[QuoteDataPaymentMethodInterface]**](QuoteDataPaymentMethodInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="quotePaymentMethodManagementV1SetPut"></a>
# **quotePaymentMethodManagementV1SetPut**
> &#39;String&#39; quotePaymentMethodManagementV1SetPut(cartId, opts)



Adds a specified payment method to a specified shopping cart.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.QuotePaymentMethodManagementV1Api();

var cartId = 56; // Number | The cart ID.

var opts = { 
  'body': new magento.Body57() // Body57 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.quotePaymentMethodManagementV1SetPut(cartId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartId** | **Number**| The cart ID. | 
 **body** | [**Body57**](Body57.md)|  | [optional] 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="quotePaymentMethodManagementV1SetPut_0"></a>
# **quotePaymentMethodManagementV1SetPut_0**
> &#39;String&#39; quotePaymentMethodManagementV1SetPut_0(opts)



Adds a specified payment method to a specified shopping cart.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.QuotePaymentMethodManagementV1Api();

var opts = { 
  'body': new magento.Body58() // Body58 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.quotePaymentMethodManagementV1SetPut_0(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body58**](Body58.md)|  | [optional] 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

