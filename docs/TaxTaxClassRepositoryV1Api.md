# magento.TaxTaxClassRepositoryV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**taxTaxClassRepositoryV1DeleteByIdDelete**](TaxTaxClassRepositoryV1Api.md#taxTaxClassRepositoryV1DeleteByIdDelete) | **DELETE** /V1/taxClasses/{taxClassId} | 
[**taxTaxClassRepositoryV1GetGet**](TaxTaxClassRepositoryV1Api.md#taxTaxClassRepositoryV1GetGet) | **GET** /V1/taxClasses/{taxClassId} | 
[**taxTaxClassRepositoryV1GetListGet**](TaxTaxClassRepositoryV1Api.md#taxTaxClassRepositoryV1GetListGet) | **GET** /V1/taxClasses/search | 
[**taxTaxClassRepositoryV1SavePost**](TaxTaxClassRepositoryV1Api.md#taxTaxClassRepositoryV1SavePost) | **POST** /V1/taxClasses | 
[**taxTaxClassRepositoryV1SavePut**](TaxTaxClassRepositoryV1Api.md#taxTaxClassRepositoryV1SavePut) | **PUT** /V1/taxClasses/{classId} | 


<a name="taxTaxClassRepositoryV1DeleteByIdDelete"></a>
# **taxTaxClassRepositoryV1DeleteByIdDelete**
> &#39;Boolean&#39; taxTaxClassRepositoryV1DeleteByIdDelete(taxClassId)



Delete a tax class with the given tax class id.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.TaxTaxClassRepositoryV1Api();

var taxClassId = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.taxTaxClassRepositoryV1DeleteByIdDelete(taxClassId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taxClassId** | **Number**|  | 

### Return type

**&#39;Boolean&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="taxTaxClassRepositoryV1GetGet"></a>
# **taxTaxClassRepositoryV1GetGet**
> TaxDataTaxClassInterface taxTaxClassRepositoryV1GetGet(taxClassId)



Get a tax class with the given tax class id.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.TaxTaxClassRepositoryV1Api();

var taxClassId = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.taxTaxClassRepositoryV1GetGet(taxClassId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taxClassId** | **Number**|  | 

### Return type

[**TaxDataTaxClassInterface**](TaxDataTaxClassInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="taxTaxClassRepositoryV1GetListGet"></a>
# **taxTaxClassRepositoryV1GetListGet**
> TaxDataTaxClassSearchResultsInterface taxTaxClassRepositoryV1GetListGet(opts)



Retrieve tax classes which match a specific criteria. This call returns an array of objects, but detailed information about each object’s attributes might not be included. See http://devdocs.magento.com/codelinks/attributes.html#TaxClassRepositoryInterface to determine which call to use to get detailed information about all attributes for an object.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.TaxTaxClassRepositoryV1Api();

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
apiInstance.taxTaxClassRepositoryV1GetListGet(opts, callback);
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

[**TaxDataTaxClassSearchResultsInterface**](TaxDataTaxClassSearchResultsInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="taxTaxClassRepositoryV1SavePost"></a>
# **taxTaxClassRepositoryV1SavePost**
> &#39;String&#39; taxTaxClassRepositoryV1SavePost(opts)



Create a Tax Class

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.TaxTaxClassRepositoryV1Api();

var opts = { 
  'body': new magento.Body97() // Body97 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.taxTaxClassRepositoryV1SavePost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body97**](Body97.md)|  | [optional] 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="taxTaxClassRepositoryV1SavePut"></a>
# **taxTaxClassRepositoryV1SavePut**
> &#39;String&#39; taxTaxClassRepositoryV1SavePut(classId, opts)



Create a Tax Class

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.TaxTaxClassRepositoryV1Api();

var classId = "classId_example"; // String | 

var opts = { 
  'body': new magento.Body98() // Body98 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.taxTaxClassRepositoryV1SavePut(classId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **classId** | **String**|  | 
 **body** | [**Body98**](Body98.md)|  | [optional] 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

