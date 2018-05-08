# magento.GiftMessageGuestItemRepositoryV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**giftMessageGuestItemRepositoryV1GetGet**](GiftMessageGuestItemRepositoryV1Api.md#giftMessageGuestItemRepositoryV1GetGet) | **GET** /V1/guest-carts/{cartId}/gift-message/{itemId} | 
[**giftMessageGuestItemRepositoryV1SavePost**](GiftMessageGuestItemRepositoryV1Api.md#giftMessageGuestItemRepositoryV1SavePost) | **POST** /V1/guest-carts/{cartId}/gift-message/{itemId} | 


<a name="giftMessageGuestItemRepositoryV1GetGet"></a>
# **giftMessageGuestItemRepositoryV1GetGet**
> GiftMessageDataMessageInterface giftMessageGuestItemRepositoryV1GetGet(cartId, itemId)



Return the gift message for a specified item in a specified shopping cart.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.GiftMessageGuestItemRepositoryV1Api();

var cartId = "cartId_example"; // String | The shopping cart ID.

var itemId = 56; // Number | The item ID.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.giftMessageGuestItemRepositoryV1GetGet(cartId, itemId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartId** | **String**| The shopping cart ID. | 
 **itemId** | **Number**| The item ID. | 

### Return type

[**GiftMessageDataMessageInterface**](GiftMessageDataMessageInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="giftMessageGuestItemRepositoryV1SavePost"></a>
# **giftMessageGuestItemRepositoryV1SavePost**
> &#39;Boolean&#39; giftMessageGuestItemRepositoryV1SavePost(cartId, itemId, opts)



Set the gift message for a specified item in a specified shopping cart.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.GiftMessageGuestItemRepositoryV1Api();

var cartId = "cartId_example"; // String | The cart ID.

var itemId = 56; // Number | The item ID.

var opts = { 
  'body': new magento.Body118() // Body118 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.giftMessageGuestItemRepositoryV1SavePost(cartId, itemId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartId** | **String**| The cart ID. | 
 **itemId** | **Number**| The item ID. | 
 **body** | [**Body118**](Body118.md)|  | [optional] 

### Return type

**&#39;Boolean&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

