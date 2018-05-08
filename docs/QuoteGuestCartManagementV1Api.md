# magento.QuoteGuestCartManagementV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**quoteGuestCartManagementV1AssignCustomerPut**](QuoteGuestCartManagementV1Api.md#quoteGuestCartManagementV1AssignCustomerPut) | **PUT** /V1/guest-carts/{cartId} | 
[**quoteGuestCartManagementV1CreateEmptyCartPost**](QuoteGuestCartManagementV1Api.md#quoteGuestCartManagementV1CreateEmptyCartPost) | **POST** /V1/guest-carts | 
[**quoteGuestCartManagementV1PlaceOrderPut**](QuoteGuestCartManagementV1Api.md#quoteGuestCartManagementV1PlaceOrderPut) | **PUT** /V1/guest-carts/{cartId}/order | 


<a name="quoteGuestCartManagementV1AssignCustomerPut"></a>
# **quoteGuestCartManagementV1AssignCustomerPut**
> &#39;Boolean&#39; quoteGuestCartManagementV1AssignCustomerPut(cartId, opts)



Assign a specified customer to a specified shopping cart.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.QuoteGuestCartManagementV1Api();

var cartId = "cartId_example"; // String | The cart ID.

var opts = { 
  'body': new magento.Body44() // Body44 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.quoteGuestCartManagementV1AssignCustomerPut(cartId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartId** | **String**| The cart ID. | 
 **body** | [**Body44**](Body44.md)|  | [optional] 

### Return type

**&#39;Boolean&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="quoteGuestCartManagementV1CreateEmptyCartPost"></a>
# **quoteGuestCartManagementV1CreateEmptyCartPost**
> &#39;String&#39; quoteGuestCartManagementV1CreateEmptyCartPost()



Enable an customer or guest user to create an empty cart and quote for an anonymous customer.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.QuoteGuestCartManagementV1Api();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.quoteGuestCartManagementV1CreateEmptyCartPost(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="quoteGuestCartManagementV1PlaceOrderPut"></a>
# **quoteGuestCartManagementV1PlaceOrderPut**
> &#39;Number&#39; quoteGuestCartManagementV1PlaceOrderPut(cartId, opts)



Place an order for a specified cart.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.QuoteGuestCartManagementV1Api();

var cartId = "cartId_example"; // String | The cart ID.

var opts = { 
  'body': new magento.Body45() // Body45 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.quoteGuestCartManagementV1PlaceOrderPut(cartId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartId** | **String**| The cart ID. | 
 **body** | [**Body45**](Body45.md)|  | [optional] 

### Return type

**&#39;Number&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

