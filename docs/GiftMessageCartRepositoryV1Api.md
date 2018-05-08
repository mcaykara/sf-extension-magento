# magento.GiftMessageCartRepositoryV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**giftMessageCartRepositoryV1GetGet**](GiftMessageCartRepositoryV1Api.md#giftMessageCartRepositoryV1GetGet) | **GET** /V1/carts/{cartId}/gift-message | 
[**giftMessageCartRepositoryV1GetGet_0**](GiftMessageCartRepositoryV1Api.md#giftMessageCartRepositoryV1GetGet_0) | **GET** /V1/carts/mine/gift-message | 
[**giftMessageCartRepositoryV1SavePost**](GiftMessageCartRepositoryV1Api.md#giftMessageCartRepositoryV1SavePost) | **POST** /V1/carts/{cartId}/gift-message | 
[**giftMessageCartRepositoryV1SavePost_0**](GiftMessageCartRepositoryV1Api.md#giftMessageCartRepositoryV1SavePost_0) | **POST** /V1/carts/mine/gift-message | 


<a name="giftMessageCartRepositoryV1GetGet"></a>
# **giftMessageCartRepositoryV1GetGet**
> GiftMessageDataMessageInterface giftMessageCartRepositoryV1GetGet(cartId)



Return the gift message for a specified order.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.GiftMessageCartRepositoryV1Api();

var cartId = 56; // Number | The shopping cart ID.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.giftMessageCartRepositoryV1GetGet(cartId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartId** | **Number**| The shopping cart ID. | 

### Return type

[**GiftMessageDataMessageInterface**](GiftMessageDataMessageInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="giftMessageCartRepositoryV1GetGet_0"></a>
# **giftMessageCartRepositoryV1GetGet_0**
> GiftMessageDataMessageInterface giftMessageCartRepositoryV1GetGet_0()



Return the gift message for a specified order.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.GiftMessageCartRepositoryV1Api();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.giftMessageCartRepositoryV1GetGet_0(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**GiftMessageDataMessageInterface**](GiftMessageDataMessageInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="giftMessageCartRepositoryV1SavePost"></a>
# **giftMessageCartRepositoryV1SavePost**
> &#39;Boolean&#39; giftMessageCartRepositoryV1SavePost(cartId, opts)



Set the gift message for an entire order.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.GiftMessageCartRepositoryV1Api();

var cartId = 56; // Number | The cart ID.

var opts = { 
  'body': new magento.Body113() // Body113 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.giftMessageCartRepositoryV1SavePost(cartId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartId** | **Number**| The cart ID. | 
 **body** | [**Body113**](Body113.md)|  | [optional] 

### Return type

**&#39;Boolean&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="giftMessageCartRepositoryV1SavePost_0"></a>
# **giftMessageCartRepositoryV1SavePost_0**
> &#39;Boolean&#39; giftMessageCartRepositoryV1SavePost_0(opts)



Set the gift message for an entire order.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.GiftMessageCartRepositoryV1Api();

var opts = { 
  'body': new magento.Body114() // Body114 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.giftMessageCartRepositoryV1SavePost_0(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body114**](Body114.md)|  | [optional] 

### Return type

**&#39;Boolean&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

