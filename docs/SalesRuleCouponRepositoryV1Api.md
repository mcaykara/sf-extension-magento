# magento.SalesRuleCouponRepositoryV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**salesRuleCouponRepositoryV1DeleteByIdDelete**](SalesRuleCouponRepositoryV1Api.md#salesRuleCouponRepositoryV1DeleteByIdDelete) | **DELETE** /V1/coupons/{couponId} | 
[**salesRuleCouponRepositoryV1GetByIdGet**](SalesRuleCouponRepositoryV1Api.md#salesRuleCouponRepositoryV1GetByIdGet) | **GET** /V1/coupons/{couponId} | 
[**salesRuleCouponRepositoryV1GetListGet**](SalesRuleCouponRepositoryV1Api.md#salesRuleCouponRepositoryV1GetListGet) | **GET** /V1/coupons/search | 
[**salesRuleCouponRepositoryV1SavePost**](SalesRuleCouponRepositoryV1Api.md#salesRuleCouponRepositoryV1SavePost) | **POST** /V1/coupons | 
[**salesRuleCouponRepositoryV1SavePut**](SalesRuleCouponRepositoryV1Api.md#salesRuleCouponRepositoryV1SavePut) | **PUT** /V1/coupons/{couponId} | 


<a name="salesRuleCouponRepositoryV1DeleteByIdDelete"></a>
# **salesRuleCouponRepositoryV1DeleteByIdDelete**
> &#39;Boolean&#39; salesRuleCouponRepositoryV1DeleteByIdDelete(couponId)



Delete coupon by coupon id.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.SalesRuleCouponRepositoryV1Api();

var couponId = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.salesRuleCouponRepositoryV1DeleteByIdDelete(couponId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **couponId** | **Number**|  | 

### Return type

**&#39;Boolean&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="salesRuleCouponRepositoryV1GetByIdGet"></a>
# **salesRuleCouponRepositoryV1GetByIdGet**
> SalesRuleDataCouponInterface salesRuleCouponRepositoryV1GetByIdGet(couponId)



Get coupon by coupon id.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.SalesRuleCouponRepositoryV1Api();

var couponId = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.salesRuleCouponRepositoryV1GetByIdGet(couponId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **couponId** | **Number**|  | 

### Return type

[**SalesRuleDataCouponInterface**](SalesRuleDataCouponInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="salesRuleCouponRepositoryV1GetListGet"></a>
# **salesRuleCouponRepositoryV1GetListGet**
> SalesRuleDataCouponSearchResultInterface salesRuleCouponRepositoryV1GetListGet(opts)



Retrieve a coupon using the specified search criteria. This call returns an array of objects, but detailed information about each object’s attributes might not be included. See http://devdocs.magento.com/codelinks/attributes.html#RuleRepositoryInterface to determine which call to use to get detailed information about all attributes for an object.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.SalesRuleCouponRepositoryV1Api();

var opts = { 
  'searchCriteriaFilterGroupsFiltersField': "searchCriteriaFilterGroupsFiltersField_example", // String | Field
  'searchCriteriaFilterGroupsFiltersValue': "searchCriteriaFilterGroupsFiltersValue_example", // String | Value
  'searchCriteriaFilterGroupsFiltersConditionType': "searchCriteriaFilterGroupsFiltersConditionType_example", // String | Condition type
  'searchCriteriaSortOrdersField': "searchCriteriaSortOrdersField_example", // String | Sorting field.
  'searchCriteriaSortOrdersDirection': "searchCriteriaSortOrdersDirection_example", // String | Sorting direction.
  'searchCriteriaPageSize': 56, // Number | Page size.
  'searchCriteriaCurrentPage': 56 // Number | Current page.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.salesRuleCouponRepositoryV1GetListGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **searchCriteriaFilterGroupsFiltersField** | **String**| Field | [optional] 
 **searchCriteriaFilterGroupsFiltersValue** | **String**| Value | [optional] 
 **searchCriteriaFilterGroupsFiltersConditionType** | **String**| Condition type | [optional] 
 **searchCriteriaSortOrdersField** | **String**| Sorting field. | [optional] 
 **searchCriteriaSortOrdersDirection** | **String**| Sorting direction. | [optional] 
 **searchCriteriaPageSize** | **Number**| Page size. | [optional] 
 **searchCriteriaCurrentPage** | **Number**| Current page. | [optional] 

### Return type

[**SalesRuleDataCouponSearchResultInterface**](SalesRuleDataCouponSearchResultInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="salesRuleCouponRepositoryV1SavePost"></a>
# **salesRuleCouponRepositoryV1SavePost**
> SalesRuleDataCouponInterface salesRuleCouponRepositoryV1SavePost(opts)



Save a coupon.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.SalesRuleCouponRepositoryV1Api();

var opts = { 
  'body': new magento.Body102() // Body102 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.salesRuleCouponRepositoryV1SavePost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body102**](Body102.md)|  | [optional] 

### Return type

[**SalesRuleDataCouponInterface**](SalesRuleDataCouponInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="salesRuleCouponRepositoryV1SavePut"></a>
# **salesRuleCouponRepositoryV1SavePut**
> SalesRuleDataCouponInterface salesRuleCouponRepositoryV1SavePut(couponId, opts)



Save a coupon.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.SalesRuleCouponRepositoryV1Api();

var couponId = "couponId_example"; // String | 

var opts = { 
  'body': new magento.Body101() // Body101 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.salesRuleCouponRepositoryV1SavePut(couponId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **couponId** | **String**|  | 
 **body** | [**Body101**](Body101.md)|  | [optional] 

### Return type

[**SalesRuleDataCouponInterface**](SalesRuleDataCouponInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

