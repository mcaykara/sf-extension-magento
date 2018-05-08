# magento.QuoteShippingMethodManagementV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**quoteShippingMethodManagementV1EstimateByAddressIdPost**](QuoteShippingMethodManagementV1Api.md#quoteShippingMethodManagementV1EstimateByAddressIdPost) | **POST** /V1/carts/{cartId}/estimate-shipping-methods-by-address-id | 
[**quoteShippingMethodManagementV1EstimateByAddressIdPost_0**](QuoteShippingMethodManagementV1Api.md#quoteShippingMethodManagementV1EstimateByAddressIdPost_0) | **POST** /V1/carts/mine/estimate-shipping-methods-by-address-id | 
[**quoteShippingMethodManagementV1GetListGet**](QuoteShippingMethodManagementV1Api.md#quoteShippingMethodManagementV1GetListGet) | **GET** /V1/carts/{cartId}/shipping-methods | 
[**quoteShippingMethodManagementV1GetListGet_0**](QuoteShippingMethodManagementV1Api.md#quoteShippingMethodManagementV1GetListGet_0) | **GET** /V1/carts/mine/shipping-methods | 


<a name="quoteShippingMethodManagementV1EstimateByAddressIdPost"></a>
# **quoteShippingMethodManagementV1EstimateByAddressIdPost**
> [QuoteDataShippingMethodInterface] quoteShippingMethodManagementV1EstimateByAddressIdPost(cartId, opts)



Estimate shipping

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.QuoteShippingMethodManagementV1Api();

var cartId = 56; // Number | The shopping cart ID.

var opts = { 
  'body': new magento.Body46() // Body46 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.quoteShippingMethodManagementV1EstimateByAddressIdPost(cartId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartId** | **Number**| The shopping cart ID. | 
 **body** | [**Body46**](Body46.md)|  | [optional] 

### Return type

[**[QuoteDataShippingMethodInterface]**](QuoteDataShippingMethodInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="quoteShippingMethodManagementV1EstimateByAddressIdPost_0"></a>
# **quoteShippingMethodManagementV1EstimateByAddressIdPost_0**
> [QuoteDataShippingMethodInterface] quoteShippingMethodManagementV1EstimateByAddressIdPost_0(opts)



Estimate shipping

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.QuoteShippingMethodManagementV1Api();

var opts = { 
  'body': new magento.Body47() // Body47 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.quoteShippingMethodManagementV1EstimateByAddressIdPost_0(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body47**](Body47.md)|  | [optional] 

### Return type

[**[QuoteDataShippingMethodInterface]**](QuoteDataShippingMethodInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="quoteShippingMethodManagementV1GetListGet"></a>
# **quoteShippingMethodManagementV1GetListGet**
> [QuoteDataShippingMethodInterface] quoteShippingMethodManagementV1GetListGet(cartId)



Lists applicable shipping methods for a specified quote.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.QuoteShippingMethodManagementV1Api();

var cartId = 56; // Number | The shopping cart ID.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.quoteShippingMethodManagementV1GetListGet(cartId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartId** | **Number**| The shopping cart ID. | 

### Return type

[**[QuoteDataShippingMethodInterface]**](QuoteDataShippingMethodInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="quoteShippingMethodManagementV1GetListGet_0"></a>
# **quoteShippingMethodManagementV1GetListGet_0**
> [QuoteDataShippingMethodInterface] quoteShippingMethodManagementV1GetListGet_0()



Lists applicable shipping methods for a specified quote.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.QuoteShippingMethodManagementV1Api();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.quoteShippingMethodManagementV1GetListGet_0(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[QuoteDataShippingMethodInterface]**](QuoteDataShippingMethodInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

