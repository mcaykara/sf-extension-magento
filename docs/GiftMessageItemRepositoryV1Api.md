# magento.GiftMessageItemRepositoryV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**giftMessageItemRepositoryV1GetGet**](GiftMessageItemRepositoryV1Api.md#giftMessageItemRepositoryV1GetGet) | **GET** /V1/carts/{cartId}/gift-message/{itemId} | 
[**giftMessageItemRepositoryV1GetGet_0**](GiftMessageItemRepositoryV1Api.md#giftMessageItemRepositoryV1GetGet_0) | **GET** /V1/carts/mine/gift-message/{itemId} | 
[**giftMessageItemRepositoryV1SavePost**](GiftMessageItemRepositoryV1Api.md#giftMessageItemRepositoryV1SavePost) | **POST** /V1/carts/{cartId}/gift-message/{itemId} | 
[**giftMessageItemRepositoryV1SavePost_0**](GiftMessageItemRepositoryV1Api.md#giftMessageItemRepositoryV1SavePost_0) | **POST** /V1/carts/mine/gift-message/{itemId} | 


<a name="giftMessageItemRepositoryV1GetGet"></a>
# **giftMessageItemRepositoryV1GetGet**
> GiftMessageDataMessageInterface giftMessageItemRepositoryV1GetGet(cartId, itemId)



Return the gift message for a specified item in a specified shopping cart.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.GiftMessageItemRepositoryV1Api();

var cartId = 56; // Number | The shopping cart ID.

var itemId = 56; // Number | The item ID.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.giftMessageItemRepositoryV1GetGet(cartId, itemId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartId** | **Number**| The shopping cart ID. | 
 **itemId** | **Number**| The item ID. | 

### Return type

[**GiftMessageDataMessageInterface**](GiftMessageDataMessageInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="giftMessageItemRepositoryV1GetGet_0"></a>
# **giftMessageItemRepositoryV1GetGet_0**
> GiftMessageDataMessageInterface giftMessageItemRepositoryV1GetGet_0(itemId)



Return the gift message for a specified item in a specified shopping cart.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.GiftMessageItemRepositoryV1Api();

var itemId = 56; // Number | The item ID.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.giftMessageItemRepositoryV1GetGet_0(itemId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemId** | **Number**| The item ID. | 

### Return type

[**GiftMessageDataMessageInterface**](GiftMessageDataMessageInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="giftMessageItemRepositoryV1SavePost"></a>
# **giftMessageItemRepositoryV1SavePost**
> &#39;Boolean&#39; giftMessageItemRepositoryV1SavePost(cartId, itemId, opts)



Set the gift message for a specified item in a specified shopping cart.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.GiftMessageItemRepositoryV1Api();

var cartId = 56; // Number | The cart ID.

var itemId = 56; // Number | The item ID.

var opts = { 
  'body': new magento.Body115() // Body115 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.giftMessageItemRepositoryV1SavePost(cartId, itemId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartId** | **Number**| The cart ID. | 
 **itemId** | **Number**| The item ID. | 
 **body** | [**Body115**](Body115.md)|  | [optional] 

### Return type

**&#39;Boolean&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="giftMessageItemRepositoryV1SavePost_0"></a>
# **giftMessageItemRepositoryV1SavePost_0**
> &#39;Boolean&#39; giftMessageItemRepositoryV1SavePost_0(itemId, opts)



Set the gift message for a specified item in a specified shopping cart.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.GiftMessageItemRepositoryV1Api();

var itemId = 56; // Number | The item ID.

var opts = { 
  'body': new magento.Body116() // Body116 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.giftMessageItemRepositoryV1SavePost_0(itemId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemId** | **Number**| The item ID. | 
 **body** | [**Body116**](Body116.md)|  | [optional] 

### Return type

**&#39;Boolean&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

