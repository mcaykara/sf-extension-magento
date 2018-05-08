# magento.QuoteGuestCartItemRepositoryV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**quoteGuestCartItemRepositoryV1DeleteByIdDelete**](QuoteGuestCartItemRepositoryV1Api.md#quoteGuestCartItemRepositoryV1DeleteByIdDelete) | **DELETE** /V1/guest-carts/{cartId}/items/{itemId} | 
[**quoteGuestCartItemRepositoryV1GetListGet**](QuoteGuestCartItemRepositoryV1Api.md#quoteGuestCartItemRepositoryV1GetListGet) | **GET** /V1/guest-carts/{cartId}/items | 
[**quoteGuestCartItemRepositoryV1SavePost**](QuoteGuestCartItemRepositoryV1Api.md#quoteGuestCartItemRepositoryV1SavePost) | **POST** /V1/guest-carts/{cartId}/items | 
[**quoteGuestCartItemRepositoryV1SavePut**](QuoteGuestCartItemRepositoryV1Api.md#quoteGuestCartItemRepositoryV1SavePut) | **PUT** /V1/guest-carts/{cartId}/items/{itemId} | 


<a name="quoteGuestCartItemRepositoryV1DeleteByIdDelete"></a>
# **quoteGuestCartItemRepositoryV1DeleteByIdDelete**
> &#39;Boolean&#39; quoteGuestCartItemRepositoryV1DeleteByIdDelete(cartId, itemId)



Remove the specified item from the specified cart.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.QuoteGuestCartItemRepositoryV1Api();

var cartId = "cartId_example"; // String | The cart ID.

var itemId = 56; // Number | The item ID of the item to be removed.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.quoteGuestCartItemRepositoryV1DeleteByIdDelete(cartId, itemId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartId** | **String**| The cart ID. | 
 **itemId** | **Number**| The item ID of the item to be removed. | 

### Return type

**&#39;Boolean&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="quoteGuestCartItemRepositoryV1GetListGet"></a>
# **quoteGuestCartItemRepositoryV1GetListGet**
> [QuoteDataCartItemInterface] quoteGuestCartItemRepositoryV1GetListGet(cartId)



List items that are assigned to a specified cart.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.QuoteGuestCartItemRepositoryV1Api();

var cartId = "cartId_example"; // String | The cart ID.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.quoteGuestCartItemRepositoryV1GetListGet(cartId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartId** | **String**| The cart ID. | 

### Return type

[**[QuoteDataCartItemInterface]**](QuoteDataCartItemInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="quoteGuestCartItemRepositoryV1SavePost"></a>
# **quoteGuestCartItemRepositoryV1SavePost**
> QuoteDataCartItemInterface quoteGuestCartItemRepositoryV1SavePost(cartId, opts)



Add the specified item to the specified cart.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.QuoteGuestCartItemRepositoryV1Api();

var cartId = "cartId_example"; // String | 

var opts = { 
  'body': new magento.Body55() // Body55 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.quoteGuestCartItemRepositoryV1SavePost(cartId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartId** | **String**|  | 
 **body** | [**Body55**](Body55.md)|  | [optional] 

### Return type

[**QuoteDataCartItemInterface**](QuoteDataCartItemInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="quoteGuestCartItemRepositoryV1SavePut"></a>
# **quoteGuestCartItemRepositoryV1SavePut**
> QuoteDataCartItemInterface quoteGuestCartItemRepositoryV1SavePut(cartId, itemId, opts)



Add the specified item to the specified cart.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.QuoteGuestCartItemRepositoryV1Api();

var cartId = "cartId_example"; // String | 

var itemId = "itemId_example"; // String | 

var opts = { 
  'body': new magento.Body56() // Body56 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.quoteGuestCartItemRepositoryV1SavePut(cartId, itemId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartId** | **String**|  | 
 **itemId** | **String**|  | 
 **body** | [**Body56**](Body56.md)|  | [optional] 

### Return type

[**QuoteDataCartItemInterface**](QuoteDataCartItemInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

