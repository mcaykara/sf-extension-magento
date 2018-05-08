# magento.QuoteBillingAddressManagementV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**quoteBillingAddressManagementV1AssignPost**](QuoteBillingAddressManagementV1Api.md#quoteBillingAddressManagementV1AssignPost) | **POST** /V1/carts/{cartId}/billing-address | 
[**quoteBillingAddressManagementV1AssignPost_0**](QuoteBillingAddressManagementV1Api.md#quoteBillingAddressManagementV1AssignPost_0) | **POST** /V1/carts/mine/billing-address | 
[**quoteBillingAddressManagementV1GetGet**](QuoteBillingAddressManagementV1Api.md#quoteBillingAddressManagementV1GetGet) | **GET** /V1/carts/{cartId}/billing-address | 
[**quoteBillingAddressManagementV1GetGet_0**](QuoteBillingAddressManagementV1Api.md#quoteBillingAddressManagementV1GetGet_0) | **GET** /V1/carts/mine/billing-address | 


<a name="quoteBillingAddressManagementV1AssignPost"></a>
# **quoteBillingAddressManagementV1AssignPost**
> &#39;Number&#39; quoteBillingAddressManagementV1AssignPost(cartId, opts)



Assigns a specified billing address to a specified cart.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.QuoteBillingAddressManagementV1Api();

var cartId = 56; // Number | The cart ID.

var opts = { 
  'body': new magento.Body60() // Body60 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.quoteBillingAddressManagementV1AssignPost(cartId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartId** | **Number**| The cart ID. | 
 **body** | [**Body60**](Body60.md)|  | [optional] 

### Return type

**&#39;Number&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="quoteBillingAddressManagementV1AssignPost_0"></a>
# **quoteBillingAddressManagementV1AssignPost_0**
> &#39;Number&#39; quoteBillingAddressManagementV1AssignPost_0(opts)



Assigns a specified billing address to a specified cart.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.QuoteBillingAddressManagementV1Api();

var opts = { 
  'body': new magento.Body61() // Body61 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.quoteBillingAddressManagementV1AssignPost_0(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body61**](Body61.md)|  | [optional] 

### Return type

**&#39;Number&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="quoteBillingAddressManagementV1GetGet"></a>
# **quoteBillingAddressManagementV1GetGet**
> QuoteDataAddressInterface quoteBillingAddressManagementV1GetGet(cartId)



Returns the billing address for a specified quote.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.QuoteBillingAddressManagementV1Api();

var cartId = 56; // Number | The cart ID.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.quoteBillingAddressManagementV1GetGet(cartId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartId** | **Number**| The cart ID. | 

### Return type

[**QuoteDataAddressInterface**](QuoteDataAddressInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="quoteBillingAddressManagementV1GetGet_0"></a>
# **quoteBillingAddressManagementV1GetGet_0**
> QuoteDataAddressInterface quoteBillingAddressManagementV1GetGet_0()



Returns the billing address for a specified quote.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.QuoteBillingAddressManagementV1Api();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.quoteBillingAddressManagementV1GetGet_0(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**QuoteDataAddressInterface**](QuoteDataAddressInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

