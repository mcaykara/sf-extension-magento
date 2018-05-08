# magento.SalesRuleCouponManagementV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**salesRuleCouponManagementV1DeleteByCodesPost**](SalesRuleCouponManagementV1Api.md#salesRuleCouponManagementV1DeleteByCodesPost) | **POST** /V1/coupons/deleteByCodes | 
[**salesRuleCouponManagementV1DeleteByIdsPost**](SalesRuleCouponManagementV1Api.md#salesRuleCouponManagementV1DeleteByIdsPost) | **POST** /V1/coupons/deleteByIds | 
[**salesRuleCouponManagementV1GeneratePost**](SalesRuleCouponManagementV1Api.md#salesRuleCouponManagementV1GeneratePost) | **POST** /V1/coupons/generate | 


<a name="salesRuleCouponManagementV1DeleteByCodesPost"></a>
# **salesRuleCouponManagementV1DeleteByCodesPost**
> SalesRuleDataCouponMassDeleteResultInterface salesRuleCouponManagementV1DeleteByCodesPost(opts)



Delete coupon by coupon codes.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.SalesRuleCouponManagementV1Api();

var opts = { 
  'body': new magento.Body105() // Body105 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.salesRuleCouponManagementV1DeleteByCodesPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body105**](Body105.md)|  | [optional] 

### Return type

[**SalesRuleDataCouponMassDeleteResultInterface**](SalesRuleDataCouponMassDeleteResultInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="salesRuleCouponManagementV1DeleteByIdsPost"></a>
# **salesRuleCouponManagementV1DeleteByIdsPost**
> SalesRuleDataCouponMassDeleteResultInterface salesRuleCouponManagementV1DeleteByIdsPost(opts)



Delete coupon by coupon ids.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.SalesRuleCouponManagementV1Api();

var opts = { 
  'body': new magento.Body104() // Body104 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.salesRuleCouponManagementV1DeleteByIdsPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body104**](Body104.md)|  | [optional] 

### Return type

[**SalesRuleDataCouponMassDeleteResultInterface**](SalesRuleDataCouponMassDeleteResultInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="salesRuleCouponManagementV1GeneratePost"></a>
# **salesRuleCouponManagementV1GeneratePost**
> [&#39;String&#39;] salesRuleCouponManagementV1GeneratePost(opts)



Generate coupon for a rule

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.SalesRuleCouponManagementV1Api();

var opts = { 
  'body': new magento.Body103() // Body103 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.salesRuleCouponManagementV1GeneratePost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body103**](Body103.md)|  | [optional] 

### Return type

**[&#39;String&#39;]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

