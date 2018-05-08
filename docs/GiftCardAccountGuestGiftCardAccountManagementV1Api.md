# magento.GiftCardAccountGuestGiftCardAccountManagementV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**giftCardAccountGuestGiftCardAccountManagementV1AddGiftCardPost**](GiftCardAccountGuestGiftCardAccountManagementV1Api.md#giftCardAccountGuestGiftCardAccountManagementV1AddGiftCardPost) | **POST** /V1/carts/guest-carts/{cartId}/giftCards | 
[**giftCardAccountGuestGiftCardAccountManagementV1CheckGiftCardGet**](GiftCardAccountGuestGiftCardAccountManagementV1Api.md#giftCardAccountGuestGiftCardAccountManagementV1CheckGiftCardGet) | **GET** /V1/carts/guest-carts/{cartId}/checkGiftCard/{giftCardCode} | 


<a name="giftCardAccountGuestGiftCardAccountManagementV1AddGiftCardPost"></a>
# **giftCardAccountGuestGiftCardAccountManagementV1AddGiftCardPost**
> &#39;Boolean&#39; giftCardAccountGuestGiftCardAccountManagementV1AddGiftCardPost(cartId, opts)





### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.GiftCardAccountGuestGiftCardAccountManagementV1Api();

var cartId = "cartId_example"; // String | 

var opts = { 
  'body': new magento.Body108() // Body108 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.giftCardAccountGuestGiftCardAccountManagementV1AddGiftCardPost(cartId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartId** | **String**|  | 
 **body** | [**Body108**](Body108.md)|  | [optional] 

### Return type

**&#39;Boolean&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="giftCardAccountGuestGiftCardAccountManagementV1CheckGiftCardGet"></a>
# **giftCardAccountGuestGiftCardAccountManagementV1CheckGiftCardGet**
> &#39;Number&#39; giftCardAccountGuestGiftCardAccountManagementV1CheckGiftCardGet(cartId, giftCardCode)





### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.GiftCardAccountGuestGiftCardAccountManagementV1Api();

var cartId = "cartId_example"; // String | 

var giftCardCode = "giftCardCode_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.giftCardAccountGuestGiftCardAccountManagementV1CheckGiftCardGet(cartId, giftCardCode, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartId** | **String**|  | 
 **giftCardCode** | **String**|  | 

### Return type

**&#39;Number&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

