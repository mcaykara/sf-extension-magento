# magento.QuoteCartManagementV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**quoteCartManagementV1AssignCustomerPut**](QuoteCartManagementV1Api.md#quoteCartManagementV1AssignCustomerPut) | **PUT** /V1/carts/{cartId} | 
[**quoteCartManagementV1CreateEmptyCartForCustomerPost**](QuoteCartManagementV1Api.md#quoteCartManagementV1CreateEmptyCartForCustomerPost) | **POST** /V1/customers/{customerId}/carts | 
[**quoteCartManagementV1CreateEmptyCartForCustomerPost_0**](QuoteCartManagementV1Api.md#quoteCartManagementV1CreateEmptyCartForCustomerPost_0) | **POST** /V1/carts/mine | 
[**quoteCartManagementV1CreateEmptyCartPost**](QuoteCartManagementV1Api.md#quoteCartManagementV1CreateEmptyCartPost) | **POST** /V1/carts/ | 
[**quoteCartManagementV1GetCartForCustomerGet**](QuoteCartManagementV1Api.md#quoteCartManagementV1GetCartForCustomerGet) | **GET** /V1/carts/mine | 
[**quoteCartManagementV1PlaceOrderPut**](QuoteCartManagementV1Api.md#quoteCartManagementV1PlaceOrderPut) | **PUT** /V1/carts/mine/order | 
[**quoteCartManagementV1PlaceOrderPut_0**](QuoteCartManagementV1Api.md#quoteCartManagementV1PlaceOrderPut_0) | **PUT** /V1/carts/{cartId}/order | 


<a name="quoteCartManagementV1AssignCustomerPut"></a>
# **quoteCartManagementV1AssignCustomerPut**
> &#39;Boolean&#39; quoteCartManagementV1AssignCustomerPut(cartId, opts)



Assigns a specified customer to a specified shopping cart.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.QuoteCartManagementV1Api();

var cartId = 56; // Number | The cart ID.

var opts = { 
  'body': new magento.Body41() // Body41 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.quoteCartManagementV1AssignCustomerPut(cartId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartId** | **Number**| The cart ID. | 
 **body** | [**Body41**](Body41.md)|  | [optional] 

### Return type

**&#39;Boolean&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="quoteCartManagementV1CreateEmptyCartForCustomerPost"></a>
# **quoteCartManagementV1CreateEmptyCartForCustomerPost**
> &#39;Number&#39; quoteCartManagementV1CreateEmptyCartForCustomerPost(customerId)



Creates an empty cart and quote for a specified customer.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.QuoteCartManagementV1Api();

var customerId = 56; // Number | The customer ID.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.quoteCartManagementV1CreateEmptyCartForCustomerPost(customerId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **Number**| The customer ID. | 

### Return type

**&#39;Number&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="quoteCartManagementV1CreateEmptyCartForCustomerPost_0"></a>
# **quoteCartManagementV1CreateEmptyCartForCustomerPost_0**
> &#39;Number&#39; quoteCartManagementV1CreateEmptyCartForCustomerPost_0()



Creates an empty cart and quote for a specified customer.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.QuoteCartManagementV1Api();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.quoteCartManagementV1CreateEmptyCartForCustomerPost_0(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

**&#39;Number&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="quoteCartManagementV1CreateEmptyCartPost"></a>
# **quoteCartManagementV1CreateEmptyCartPost**
> &#39;Number&#39; quoteCartManagementV1CreateEmptyCartPost()



Creates an empty cart and quote for a guest.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.QuoteCartManagementV1Api();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.quoteCartManagementV1CreateEmptyCartPost(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

**&#39;Number&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="quoteCartManagementV1GetCartForCustomerGet"></a>
# **quoteCartManagementV1GetCartForCustomerGet**
> QuoteDataCartInterface quoteCartManagementV1GetCartForCustomerGet()



Returns information for the cart for a specified customer.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.QuoteCartManagementV1Api();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.quoteCartManagementV1GetCartForCustomerGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**QuoteDataCartInterface**](QuoteDataCartInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="quoteCartManagementV1PlaceOrderPut"></a>
# **quoteCartManagementV1PlaceOrderPut**
> &#39;Number&#39; quoteCartManagementV1PlaceOrderPut(opts)



Places an order for a specified cart.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.QuoteCartManagementV1Api();

var opts = { 
  'body': new magento.Body42() // Body42 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.quoteCartManagementV1PlaceOrderPut(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body42**](Body42.md)|  | [optional] 

### Return type

**&#39;Number&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="quoteCartManagementV1PlaceOrderPut_0"></a>
# **quoteCartManagementV1PlaceOrderPut_0**
> &#39;Number&#39; quoteCartManagementV1PlaceOrderPut_0(cartId, opts)



Places an order for a specified cart.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.QuoteCartManagementV1Api();

var cartId = 56; // Number | The cart ID.

var opts = { 
  'body': new magento.Body43() // Body43 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.quoteCartManagementV1PlaceOrderPut_0(cartId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartId** | **Number**| The cart ID. | 
 **body** | [**Body43**](Body43.md)|  | [optional] 

### Return type

**&#39;Number&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

