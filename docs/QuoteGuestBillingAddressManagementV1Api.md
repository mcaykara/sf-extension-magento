# magento.QuoteGuestBillingAddressManagementV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**quoteGuestBillingAddressManagementV1AssignPost**](QuoteGuestBillingAddressManagementV1Api.md#quoteGuestBillingAddressManagementV1AssignPost) | **POST** /V1/guest-carts/{cartId}/billing-address | 
[**quoteGuestBillingAddressManagementV1GetGet**](QuoteGuestBillingAddressManagementV1Api.md#quoteGuestBillingAddressManagementV1GetGet) | **GET** /V1/guest-carts/{cartId}/billing-address | 


<a name="quoteGuestBillingAddressManagementV1AssignPost"></a>
# **quoteGuestBillingAddressManagementV1AssignPost**
> &#39;Number&#39; quoteGuestBillingAddressManagementV1AssignPost(cartId, opts)



Assign a specified billing address to a specified cart.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.QuoteGuestBillingAddressManagementV1Api();

var cartId = "cartId_example"; // String | The cart ID.

var opts = { 
  'body': new magento.Body62() // Body62 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.quoteGuestBillingAddressManagementV1AssignPost(cartId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartId** | **String**| The cart ID. | 
 **body** | [**Body62**](Body62.md)|  | [optional] 

### Return type

**&#39;Number&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="quoteGuestBillingAddressManagementV1GetGet"></a>
# **quoteGuestBillingAddressManagementV1GetGet**
> QuoteDataAddressInterface quoteGuestBillingAddressManagementV1GetGet(cartId)



Return the billing address for a specified quote.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.QuoteGuestBillingAddressManagementV1Api();

var cartId = "cartId_example"; // String | The cart ID.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.quoteGuestBillingAddressManagementV1GetGet(cartId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartId** | **String**| The cart ID. | 

### Return type

[**QuoteDataAddressInterface**](QuoteDataAddressInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

