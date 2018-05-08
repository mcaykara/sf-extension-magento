# magento.QuoteCouponManagementV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**quoteCouponManagementV1GetGet**](QuoteCouponManagementV1Api.md#quoteCouponManagementV1GetGet) | **GET** /V1/carts/{cartId}/coupons | 
[**quoteCouponManagementV1GetGet_0**](QuoteCouponManagementV1Api.md#quoteCouponManagementV1GetGet_0) | **GET** /V1/carts/mine/coupons | 
[**quoteCouponManagementV1RemoveDelete**](QuoteCouponManagementV1Api.md#quoteCouponManagementV1RemoveDelete) | **DELETE** /V1/carts/{cartId}/coupons | 
[**quoteCouponManagementV1RemoveDelete_0**](QuoteCouponManagementV1Api.md#quoteCouponManagementV1RemoveDelete_0) | **DELETE** /V1/carts/mine/coupons | 
[**quoteCouponManagementV1SetPut**](QuoteCouponManagementV1Api.md#quoteCouponManagementV1SetPut) | **PUT** /V1/carts/{cartId}/coupons/{couponCode} | 
[**quoteCouponManagementV1SetPut_0**](QuoteCouponManagementV1Api.md#quoteCouponManagementV1SetPut_0) | **PUT** /V1/carts/mine/coupons/{couponCode} | 


<a name="quoteCouponManagementV1GetGet"></a>
# **quoteCouponManagementV1GetGet**
> &#39;String&#39; quoteCouponManagementV1GetGet(cartId)



Returns information for a coupon in a specified cart.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.QuoteCouponManagementV1Api();

var cartId = 56; // Number | The cart ID.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.quoteCouponManagementV1GetGet(cartId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartId** | **Number**| The cart ID. | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="quoteCouponManagementV1GetGet_0"></a>
# **quoteCouponManagementV1GetGet_0**
> &#39;String&#39; quoteCouponManagementV1GetGet_0()



Returns information for a coupon in a specified cart.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.QuoteCouponManagementV1Api();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.quoteCouponManagementV1GetGet_0(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="quoteCouponManagementV1RemoveDelete"></a>
# **quoteCouponManagementV1RemoveDelete**
> &#39;Boolean&#39; quoteCouponManagementV1RemoveDelete(cartId)



Deletes a coupon from a specified cart.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.QuoteCouponManagementV1Api();

var cartId = 56; // Number | The cart ID.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.quoteCouponManagementV1RemoveDelete(cartId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartId** | **Number**| The cart ID. | 

### Return type

**&#39;Boolean&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="quoteCouponManagementV1RemoveDelete_0"></a>
# **quoteCouponManagementV1RemoveDelete_0**
> &#39;Boolean&#39; quoteCouponManagementV1RemoveDelete_0()



Deletes a coupon from a specified cart.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.QuoteCouponManagementV1Api();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.quoteCouponManagementV1RemoveDelete_0(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

**&#39;Boolean&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="quoteCouponManagementV1SetPut"></a>
# **quoteCouponManagementV1SetPut**
> &#39;Boolean&#39; quoteCouponManagementV1SetPut(cartId, couponCode)



Adds a coupon by code to a specified cart.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.QuoteCouponManagementV1Api();

var cartId = 56; // Number | The cart ID.

var couponCode = "couponCode_example"; // String | The coupon code data.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.quoteCouponManagementV1SetPut(cartId, couponCode, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartId** | **Number**| The cart ID. | 
 **couponCode** | **String**| The coupon code data. | 

### Return type

**&#39;Boolean&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="quoteCouponManagementV1SetPut_0"></a>
# **quoteCouponManagementV1SetPut_0**
> &#39;Boolean&#39; quoteCouponManagementV1SetPut_0(couponCode)



Adds a coupon by code to a specified cart.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.QuoteCouponManagementV1Api();

var couponCode = "couponCode_example"; // String | The coupon code data.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.quoteCouponManagementV1SetPut_0(couponCode, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **couponCode** | **String**| The coupon code data. | 

### Return type

**&#39;Boolean&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

