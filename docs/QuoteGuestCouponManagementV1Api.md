# magento.QuoteGuestCouponManagementV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**quoteGuestCouponManagementV1GetGet**](QuoteGuestCouponManagementV1Api.md#quoteGuestCouponManagementV1GetGet) | **GET** /V1/guest-carts/{cartId}/coupons | 
[**quoteGuestCouponManagementV1RemoveDelete**](QuoteGuestCouponManagementV1Api.md#quoteGuestCouponManagementV1RemoveDelete) | **DELETE** /V1/guest-carts/{cartId}/coupons | 
[**quoteGuestCouponManagementV1SetPut**](QuoteGuestCouponManagementV1Api.md#quoteGuestCouponManagementV1SetPut) | **PUT** /V1/guest-carts/{cartId}/coupons/{couponCode} | 


<a name="quoteGuestCouponManagementV1GetGet"></a>
# **quoteGuestCouponManagementV1GetGet**
> &#39;String&#39; quoteGuestCouponManagementV1GetGet(cartId)



Return information for a coupon in a specified cart.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.QuoteGuestCouponManagementV1Api();

var cartId = "cartId_example"; // String | The cart ID.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.quoteGuestCouponManagementV1GetGet(cartId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartId** | **String**| The cart ID. | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="quoteGuestCouponManagementV1RemoveDelete"></a>
# **quoteGuestCouponManagementV1RemoveDelete**
> &#39;Boolean&#39; quoteGuestCouponManagementV1RemoveDelete(cartId)



Delete a coupon from a specified cart.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.QuoteGuestCouponManagementV1Api();

var cartId = "cartId_example"; // String | The cart ID.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.quoteGuestCouponManagementV1RemoveDelete(cartId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartId** | **String**| The cart ID. | 

### Return type

**&#39;Boolean&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="quoteGuestCouponManagementV1SetPut"></a>
# **quoteGuestCouponManagementV1SetPut**
> &#39;Boolean&#39; quoteGuestCouponManagementV1SetPut(cartId, couponCode)



Add a coupon by code to a specified cart.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.QuoteGuestCouponManagementV1Api();

var cartId = "cartId_example"; // String | The cart ID.

var couponCode = "couponCode_example"; // String | The coupon code data.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.quoteGuestCouponManagementV1SetPut(cartId, couponCode, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartId** | **String**| The cart ID. | 
 **couponCode** | **String**| The coupon code data. | 

### Return type

**&#39;Boolean&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

