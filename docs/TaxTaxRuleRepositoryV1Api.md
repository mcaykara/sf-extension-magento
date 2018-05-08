# magento.TaxTaxRuleRepositoryV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**taxTaxRuleRepositoryV1DeleteByIdDelete**](TaxTaxRuleRepositoryV1Api.md#taxTaxRuleRepositoryV1DeleteByIdDelete) | **DELETE** /V1/taxRules/{ruleId} | 
[**taxTaxRuleRepositoryV1GetGet**](TaxTaxRuleRepositoryV1Api.md#taxTaxRuleRepositoryV1GetGet) | **GET** /V1/taxRules/{ruleId} | 
[**taxTaxRuleRepositoryV1GetListGet**](TaxTaxRuleRepositoryV1Api.md#taxTaxRuleRepositoryV1GetListGet) | **GET** /V1/taxRules/search | 
[**taxTaxRuleRepositoryV1SavePost**](TaxTaxRuleRepositoryV1Api.md#taxTaxRuleRepositoryV1SavePost) | **POST** /V1/taxRules | 
[**taxTaxRuleRepositoryV1SavePut**](TaxTaxRuleRepositoryV1Api.md#taxTaxRuleRepositoryV1SavePut) | **PUT** /V1/taxRules | 


<a name="taxTaxRuleRepositoryV1DeleteByIdDelete"></a>
# **taxTaxRuleRepositoryV1DeleteByIdDelete**
> &#39;Boolean&#39; taxTaxRuleRepositoryV1DeleteByIdDelete(ruleId)



Delete TaxRule

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.TaxTaxRuleRepositoryV1Api();

var ruleId = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.taxTaxRuleRepositoryV1DeleteByIdDelete(ruleId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ruleId** | **Number**|  | 

### Return type

**&#39;Boolean&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="taxTaxRuleRepositoryV1GetGet"></a>
# **taxTaxRuleRepositoryV1GetGet**
> TaxDataTaxRuleInterface taxTaxRuleRepositoryV1GetGet(ruleId)



Get TaxRule

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.TaxTaxRuleRepositoryV1Api();

var ruleId = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.taxTaxRuleRepositoryV1GetGet(ruleId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ruleId** | **Number**|  | 

### Return type

[**TaxDataTaxRuleInterface**](TaxDataTaxRuleInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="taxTaxRuleRepositoryV1GetListGet"></a>
# **taxTaxRuleRepositoryV1GetListGet**
> TaxDataTaxRuleSearchResultsInterface taxTaxRuleRepositoryV1GetListGet(opts)



Search TaxRules This call returns an array of objects, but detailed information about each object’s attributes might not be included. See http://devdocs.magento.com/codelinks/attributes.html#TaxRuleRepositoryInterface to determine which call to use to get detailed information about all attributes for an object.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.TaxTaxRuleRepositoryV1Api();

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
apiInstance.taxTaxRuleRepositoryV1GetListGet(opts, callback);
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

[**TaxDataTaxRuleSearchResultsInterface**](TaxDataTaxRuleSearchResultsInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="taxTaxRuleRepositoryV1SavePost"></a>
# **taxTaxRuleRepositoryV1SavePost**
> TaxDataTaxRuleInterface taxTaxRuleRepositoryV1SavePost(opts)



Save TaxRule

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.TaxTaxRuleRepositoryV1Api();

var opts = { 
  'body': new magento.Body96() // Body96 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.taxTaxRuleRepositoryV1SavePost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body96**](Body96.md)|  | [optional] 

### Return type

[**TaxDataTaxRuleInterface**](TaxDataTaxRuleInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="taxTaxRuleRepositoryV1SavePut"></a>
# **taxTaxRuleRepositoryV1SavePut**
> TaxDataTaxRuleInterface taxTaxRuleRepositoryV1SavePut(opts)



Save TaxRule

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.TaxTaxRuleRepositoryV1Api();

var opts = { 
  'body': new magento.Body95() // Body95 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.taxTaxRuleRepositoryV1SavePut(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body95**](Body95.md)|  | [optional] 

### Return type

[**TaxDataTaxRuleInterface**](TaxDataTaxRuleInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

