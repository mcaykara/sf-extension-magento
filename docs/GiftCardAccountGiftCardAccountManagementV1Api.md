# magento.GiftCardAccountGiftCardAccountManagementV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**giftCardAccountGiftCardAccountManagementV1CheckGiftCardGet**](GiftCardAccountGiftCardAccountManagementV1Api.md#giftCardAccountGiftCardAccountManagementV1CheckGiftCardGet) | **GET** /V1/carts/mine/checkGiftCard/{giftCardCode} | 
[**giftCardAccountGiftCardAccountManagementV1DeleteByQuoteIdDelete**](GiftCardAccountGiftCardAccountManagementV1Api.md#giftCardAccountGiftCardAccountManagementV1DeleteByQuoteIdDelete) | **DELETE** /V1/carts/{quoteId}/giftCards/{giftCardCode} | 
[**giftCardAccountGiftCardAccountManagementV1GetListByQuoteIdGet**](GiftCardAccountGiftCardAccountManagementV1Api.md#giftCardAccountGiftCardAccountManagementV1GetListByQuoteIdGet) | **GET** /V1/carts/{quoteId}/giftCards | 
[**giftCardAccountGiftCardAccountManagementV1SaveByQuoteIdPost**](GiftCardAccountGiftCardAccountManagementV1Api.md#giftCardAccountGiftCardAccountManagementV1SaveByQuoteIdPost) | **POST** /V1/carts/mine/giftCards | 
[**giftCardAccountGiftCardAccountManagementV1SaveByQuoteIdPut**](GiftCardAccountGiftCardAccountManagementV1Api.md#giftCardAccountGiftCardAccountManagementV1SaveByQuoteIdPut) | **PUT** /V1/carts/{cartId}/giftCards | 


<a name="giftCardAccountGiftCardAccountManagementV1CheckGiftCardGet"></a>
# **giftCardAccountGiftCardAccountManagementV1CheckGiftCardGet**
> &#39;Number&#39; giftCardAccountGiftCardAccountManagementV1CheckGiftCardGet(giftCardCode)





### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.GiftCardAccountGiftCardAccountManagementV1Api();

var giftCardCode = "giftCardCode_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.giftCardAccountGiftCardAccountManagementV1CheckGiftCardGet(giftCardCode, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **giftCardCode** | **String**|  | 

### Return type

**&#39;Number&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="giftCardAccountGiftCardAccountManagementV1DeleteByQuoteIdDelete"></a>
# **giftCardAccountGiftCardAccountManagementV1DeleteByQuoteIdDelete**
> &#39;Boolean&#39; giftCardAccountGiftCardAccountManagementV1DeleteByQuoteIdDelete(quoteId, giftCardCode)



Remove GiftCard Account entity

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.GiftCardAccountGiftCardAccountManagementV1Api();

var quoteId = 56; // Number | 

var giftCardCode = "giftCardCode_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.giftCardAccountGiftCardAccountManagementV1DeleteByQuoteIdDelete(quoteId, giftCardCode, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **quoteId** | **Number**|  | 
 **giftCardCode** | **String**|  | 

### Return type

**&#39;Boolean&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="giftCardAccountGiftCardAccountManagementV1GetListByQuoteIdGet"></a>
# **giftCardAccountGiftCardAccountManagementV1GetListByQuoteIdGet**
> GiftCardAccountDataGiftCardAccountInterface giftCardAccountGiftCardAccountManagementV1GetListByQuoteIdGet(quoteId)



Return GiftCard Account cards

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.GiftCardAccountGiftCardAccountManagementV1Api();

var quoteId = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.giftCardAccountGiftCardAccountManagementV1GetListByQuoteIdGet(quoteId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **quoteId** | **Number**|  | 

### Return type

[**GiftCardAccountDataGiftCardAccountInterface**](GiftCardAccountDataGiftCardAccountInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="giftCardAccountGiftCardAccountManagementV1SaveByQuoteIdPost"></a>
# **giftCardAccountGiftCardAccountManagementV1SaveByQuoteIdPost**
> &#39;Boolean&#39; giftCardAccountGiftCardAccountManagementV1SaveByQuoteIdPost(opts)





### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.GiftCardAccountGiftCardAccountManagementV1Api();

var opts = { 
  'body': new magento.Body107() // Body107 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.giftCardAccountGiftCardAccountManagementV1SaveByQuoteIdPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body107**](Body107.md)|  | [optional] 

### Return type

**&#39;Boolean&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="giftCardAccountGiftCardAccountManagementV1SaveByQuoteIdPut"></a>
# **giftCardAccountGiftCardAccountManagementV1SaveByQuoteIdPut**
> &#39;Boolean&#39; giftCardAccountGiftCardAccountManagementV1SaveByQuoteIdPut(cartId, opts)





### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.GiftCardAccountGiftCardAccountManagementV1Api();

var cartId = 56; // Number | 

var opts = { 
  'body': new magento.Body106() // Body106 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.giftCardAccountGiftCardAccountManagementV1SaveByQuoteIdPut(cartId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartId** | **Number**|  | 
 **body** | [**Body106**](Body106.md)|  | [optional] 

### Return type

**&#39;Boolean&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

