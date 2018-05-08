# magento.QuoteCartRepositoryV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**quoteCartRepositoryV1GetGet**](QuoteCartRepositoryV1Api.md#quoteCartRepositoryV1GetGet) | **GET** /V1/carts/{cartId} | 
[**quoteCartRepositoryV1GetListGet**](QuoteCartRepositoryV1Api.md#quoteCartRepositoryV1GetListGet) | **GET** /V1/carts/search | 


<a name="quoteCartRepositoryV1GetGet"></a>
# **quoteCartRepositoryV1GetGet**
> QuoteDataCartInterface quoteCartRepositoryV1GetGet(cartId)



Enables an administrative user to return information for a specified cart.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.QuoteCartRepositoryV1Api();

var cartId = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.quoteCartRepositoryV1GetGet(cartId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartId** | **Number**|  | 

### Return type

[**QuoteDataCartInterface**](QuoteDataCartInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="quoteCartRepositoryV1GetListGet"></a>
# **quoteCartRepositoryV1GetListGet**
> QuoteDataCartSearchResultsInterface quoteCartRepositoryV1GetListGet(opts)



Enables administrative users to list carts that match specified search criteria. This call returns an array of objects, but detailed information about each object’s attributes might not be included.  See http://devdocs.magento.com/codelinks/attributes.html#CartRepositoryInterface to determine which call to use to get detailed information about all attributes for an object.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.QuoteCartRepositoryV1Api();

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
apiInstance.quoteCartRepositoryV1GetListGet(opts, callback);
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

[**QuoteDataCartSearchResultsInterface**](QuoteDataCartSearchResultsInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

