# magento.GiftMessageGuestCartRepositoryV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**giftMessageGuestCartRepositoryV1GetGet**](GiftMessageGuestCartRepositoryV1Api.md#giftMessageGuestCartRepositoryV1GetGet) | **GET** /V1/guest-carts/{cartId}/gift-message | 
[**giftMessageGuestCartRepositoryV1SavePost**](GiftMessageGuestCartRepositoryV1Api.md#giftMessageGuestCartRepositoryV1SavePost) | **POST** /V1/guest-carts/{cartId}/gift-message | 


<a name="giftMessageGuestCartRepositoryV1GetGet"></a>
# **giftMessageGuestCartRepositoryV1GetGet**
> GiftMessageDataMessageInterface giftMessageGuestCartRepositoryV1GetGet(cartId)



Return the gift message for a specified order.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.GiftMessageGuestCartRepositoryV1Api();

var cartId = "cartId_example"; // String | The shopping cart ID.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.giftMessageGuestCartRepositoryV1GetGet(cartId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartId** | **String**| The shopping cart ID. | 

### Return type

[**GiftMessageDataMessageInterface**](GiftMessageDataMessageInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="giftMessageGuestCartRepositoryV1SavePost"></a>
# **giftMessageGuestCartRepositoryV1SavePost**
> &#39;Boolean&#39; giftMessageGuestCartRepositoryV1SavePost(cartId, opts)



Set the gift message for an entire order.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.GiftMessageGuestCartRepositoryV1Api();

var cartId = "cartId_example"; // String | The cart ID.

var opts = { 
  'body': new magento.Body117() // Body117 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.giftMessageGuestCartRepositoryV1SavePost(cartId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartId** | **String**| The cart ID. | 
 **body** | [**Body117**](Body117.md)|  | [optional] 

### Return type

**&#39;Boolean&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

