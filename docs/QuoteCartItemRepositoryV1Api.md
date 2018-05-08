# magento.QuoteCartItemRepositoryV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**quoteCartItemRepositoryV1DeleteByIdDelete**](QuoteCartItemRepositoryV1Api.md#quoteCartItemRepositoryV1DeleteByIdDelete) | **DELETE** /V1/carts/{cartId}/items/{itemId} | 
[**quoteCartItemRepositoryV1DeleteByIdDelete_0**](QuoteCartItemRepositoryV1Api.md#quoteCartItemRepositoryV1DeleteByIdDelete_0) | **DELETE** /V1/carts/mine/items/{itemId} | 
[**quoteCartItemRepositoryV1GetListGet**](QuoteCartItemRepositoryV1Api.md#quoteCartItemRepositoryV1GetListGet) | **GET** /V1/carts/{cartId}/items | 
[**quoteCartItemRepositoryV1GetListGet_0**](QuoteCartItemRepositoryV1Api.md#quoteCartItemRepositoryV1GetListGet_0) | **GET** /V1/carts/mine/items | 
[**quoteCartItemRepositoryV1SavePost**](QuoteCartItemRepositoryV1Api.md#quoteCartItemRepositoryV1SavePost) | **POST** /V1/carts/{cartId}/items | 
[**quoteCartItemRepositoryV1SavePost_0**](QuoteCartItemRepositoryV1Api.md#quoteCartItemRepositoryV1SavePost_0) | **POST** /V1/carts/mine/items | 
[**quoteCartItemRepositoryV1SavePut**](QuoteCartItemRepositoryV1Api.md#quoteCartItemRepositoryV1SavePut) | **PUT** /V1/carts/{cartId}/items/{itemId} | 
[**quoteCartItemRepositoryV1SavePut_0**](QuoteCartItemRepositoryV1Api.md#quoteCartItemRepositoryV1SavePut_0) | **PUT** /V1/carts/mine/items/{itemId} | 


<a name="quoteCartItemRepositoryV1DeleteByIdDelete"></a>
# **quoteCartItemRepositoryV1DeleteByIdDelete**
> &#39;Boolean&#39; quoteCartItemRepositoryV1DeleteByIdDelete(cartId, itemId)



Removes the specified item from the specified cart.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.QuoteCartItemRepositoryV1Api();

var cartId = 56; // Number | The cart ID.

var itemId = 56; // Number | The item ID of the item to be removed.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.quoteCartItemRepositoryV1DeleteByIdDelete(cartId, itemId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartId** | **Number**| The cart ID. | 
 **itemId** | **Number**| The item ID of the item to be removed. | 

### Return type

**&#39;Boolean&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="quoteCartItemRepositoryV1DeleteByIdDelete_0"></a>
# **quoteCartItemRepositoryV1DeleteByIdDelete_0**
> &#39;Boolean&#39; quoteCartItemRepositoryV1DeleteByIdDelete_0(itemId)



Removes the specified item from the specified cart.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.QuoteCartItemRepositoryV1Api();

var itemId = 56; // Number | The item ID of the item to be removed.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.quoteCartItemRepositoryV1DeleteByIdDelete_0(itemId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemId** | **Number**| The item ID of the item to be removed. | 

### Return type

**&#39;Boolean&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="quoteCartItemRepositoryV1GetListGet"></a>
# **quoteCartItemRepositoryV1GetListGet**
> [QuoteDataCartItemInterface] quoteCartItemRepositoryV1GetListGet(cartId)



Lists items that are assigned to a specified cart.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.QuoteCartItemRepositoryV1Api();

var cartId = 56; // Number | The cart ID.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.quoteCartItemRepositoryV1GetListGet(cartId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartId** | **Number**| The cart ID. | 

### Return type

[**[QuoteDataCartItemInterface]**](QuoteDataCartItemInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="quoteCartItemRepositoryV1GetListGet_0"></a>
# **quoteCartItemRepositoryV1GetListGet_0**
> [QuoteDataCartItemInterface] quoteCartItemRepositoryV1GetListGet_0()



Lists items that are assigned to a specified cart.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.QuoteCartItemRepositoryV1Api();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.quoteCartItemRepositoryV1GetListGet_0(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[QuoteDataCartItemInterface]**](QuoteDataCartItemInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="quoteCartItemRepositoryV1SavePost"></a>
# **quoteCartItemRepositoryV1SavePost**
> QuoteDataCartItemInterface quoteCartItemRepositoryV1SavePost(cartId, opts)



Adds the specified item to the specified cart.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.QuoteCartItemRepositoryV1Api();

var cartId = "cartId_example"; // String | 

var opts = { 
  'body': new magento.Body51() // Body51 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.quoteCartItemRepositoryV1SavePost(cartId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartId** | **String**|  | 
 **body** | [**Body51**](Body51.md)|  | [optional] 

### Return type

[**QuoteDataCartItemInterface**](QuoteDataCartItemInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="quoteCartItemRepositoryV1SavePost_0"></a>
# **quoteCartItemRepositoryV1SavePost_0**
> QuoteDataCartItemInterface quoteCartItemRepositoryV1SavePost_0(opts)



Adds the specified item to the specified cart.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.QuoteCartItemRepositoryV1Api();

var opts = { 
  'body': new magento.Body53() // Body53 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.quoteCartItemRepositoryV1SavePost_0(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body53**](Body53.md)|  | [optional] 

### Return type

[**QuoteDataCartItemInterface**](QuoteDataCartItemInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="quoteCartItemRepositoryV1SavePut"></a>
# **quoteCartItemRepositoryV1SavePut**
> QuoteDataCartItemInterface quoteCartItemRepositoryV1SavePut(cartId, itemId, opts)



Adds the specified item to the specified cart.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.QuoteCartItemRepositoryV1Api();

var cartId = "cartId_example"; // String | 

var itemId = "itemId_example"; // String | 

var opts = { 
  'body': new magento.Body52() // Body52 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.quoteCartItemRepositoryV1SavePut(cartId, itemId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartId** | **String**|  | 
 **itemId** | **String**|  | 
 **body** | [**Body52**](Body52.md)|  | [optional] 

### Return type

[**QuoteDataCartItemInterface**](QuoteDataCartItemInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="quoteCartItemRepositoryV1SavePut_0"></a>
# **quoteCartItemRepositoryV1SavePut_0**
> QuoteDataCartItemInterface quoteCartItemRepositoryV1SavePut_0(itemId, opts)



Adds the specified item to the specified cart.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.QuoteCartItemRepositoryV1Api();

var itemId = "itemId_example"; // String | 

var opts = { 
  'body': new magento.Body54() // Body54 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.quoteCartItemRepositoryV1SavePut_0(itemId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemId** | **String**|  | 
 **body** | [**Body54**](Body54.md)|  | [optional] 

### Return type

[**QuoteDataCartItemInterface**](QuoteDataCartItemInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

