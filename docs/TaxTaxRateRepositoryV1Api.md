# magento.TaxTaxRateRepositoryV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**taxTaxRateRepositoryV1DeleteByIdDelete**](TaxTaxRateRepositoryV1Api.md#taxTaxRateRepositoryV1DeleteByIdDelete) | **DELETE** /V1/taxRates/{rateId} | 
[**taxTaxRateRepositoryV1GetGet**](TaxTaxRateRepositoryV1Api.md#taxTaxRateRepositoryV1GetGet) | **GET** /V1/taxRates/{rateId} | 
[**taxTaxRateRepositoryV1GetListGet**](TaxTaxRateRepositoryV1Api.md#taxTaxRateRepositoryV1GetListGet) | **GET** /V1/taxRates/search | 
[**taxTaxRateRepositoryV1SavePost**](TaxTaxRateRepositoryV1Api.md#taxTaxRateRepositoryV1SavePost) | **POST** /V1/taxRates | 
[**taxTaxRateRepositoryV1SavePut**](TaxTaxRateRepositoryV1Api.md#taxTaxRateRepositoryV1SavePut) | **PUT** /V1/taxRates | 


<a name="taxTaxRateRepositoryV1DeleteByIdDelete"></a>
# **taxTaxRateRepositoryV1DeleteByIdDelete**
> &#39;Boolean&#39; taxTaxRateRepositoryV1DeleteByIdDelete(rateId)



Delete tax rate

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.TaxTaxRateRepositoryV1Api();

var rateId = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.taxTaxRateRepositoryV1DeleteByIdDelete(rateId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rateId** | **Number**|  | 

### Return type

**&#39;Boolean&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="taxTaxRateRepositoryV1GetGet"></a>
# **taxTaxRateRepositoryV1GetGet**
> TaxDataTaxRateInterface taxTaxRateRepositoryV1GetGet(rateId)



Get tax rate

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.TaxTaxRateRepositoryV1Api();

var rateId = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.taxTaxRateRepositoryV1GetGet(rateId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rateId** | **Number**|  | 

### Return type

[**TaxDataTaxRateInterface**](TaxDataTaxRateInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="taxTaxRateRepositoryV1GetListGet"></a>
# **taxTaxRateRepositoryV1GetListGet**
> TaxDataTaxRateSearchResultsInterface taxTaxRateRepositoryV1GetListGet(opts)



Search TaxRates This call returns an array of objects, but detailed information about each object’s attributes might not be included. See http://devdocs.magento.com/codelinks/attributes.html#TaxRateRepositoryInterface to determine which call to use to get detailed information about all attributes for an object.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.TaxTaxRateRepositoryV1Api();

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
apiInstance.taxTaxRateRepositoryV1GetListGet(opts, callback);
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

[**TaxDataTaxRateSearchResultsInterface**](TaxDataTaxRateSearchResultsInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="taxTaxRateRepositoryV1SavePost"></a>
# **taxTaxRateRepositoryV1SavePost**
> TaxDataTaxRateInterface taxTaxRateRepositoryV1SavePost(opts)



Create or update tax rate

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.TaxTaxRateRepositoryV1Api();

var opts = { 
  'body': new magento.Body94() // Body94 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.taxTaxRateRepositoryV1SavePost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body94**](Body94.md)|  | [optional] 

### Return type

[**TaxDataTaxRateInterface**](TaxDataTaxRateInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="taxTaxRateRepositoryV1SavePut"></a>
# **taxTaxRateRepositoryV1SavePut**
> TaxDataTaxRateInterface taxTaxRateRepositoryV1SavePut(opts)



Create or update tax rate

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.TaxTaxRateRepositoryV1Api();

var opts = { 
  'body': new magento.Body93() // Body93 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.taxTaxRateRepositoryV1SavePut(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body93**](Body93.md)|  | [optional] 

### Return type

[**TaxDataTaxRateInterface**](TaxDataTaxRateInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

