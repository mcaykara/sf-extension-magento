# magento.CustomerCustomerRepositoryV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**customerCustomerRepositoryV1DeleteByIdDelete**](CustomerCustomerRepositoryV1Api.md#customerCustomerRepositoryV1DeleteByIdDelete) | **DELETE** /V1/customers/{customerId} | 
[**customerCustomerRepositoryV1GetByIdGet**](CustomerCustomerRepositoryV1Api.md#customerCustomerRepositoryV1GetByIdGet) | **GET** /V1/customers/{customerId} | 
[**customerCustomerRepositoryV1GetByIdGet_0**](CustomerCustomerRepositoryV1Api.md#customerCustomerRepositoryV1GetByIdGet_0) | **GET** /V1/customers/me | 
[**customerCustomerRepositoryV1GetListGet**](CustomerCustomerRepositoryV1Api.md#customerCustomerRepositoryV1GetListGet) | **GET** /V1/customers/search | 
[**customerCustomerRepositoryV1SavePut**](CustomerCustomerRepositoryV1Api.md#customerCustomerRepositoryV1SavePut) | **PUT** /V1/customers/{id} | 
[**customerCustomerRepositoryV1SavePut_0**](CustomerCustomerRepositoryV1Api.md#customerCustomerRepositoryV1SavePut_0) | **PUT** /V1/customers/me | 


<a name="customerCustomerRepositoryV1DeleteByIdDelete"></a>
# **customerCustomerRepositoryV1DeleteByIdDelete**
> &#39;Boolean&#39; customerCustomerRepositoryV1DeleteByIdDelete(customerId)



Delete customer by ID.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CustomerCustomerRepositoryV1Api();

var customerId = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.customerCustomerRepositoryV1DeleteByIdDelete(customerId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **Number**|  | 

### Return type

**&#39;Boolean&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="customerCustomerRepositoryV1GetByIdGet"></a>
# **customerCustomerRepositoryV1GetByIdGet**
> CustomerDataCustomerInterface customerCustomerRepositoryV1GetByIdGet(customerId)



Get customer by customer ID.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CustomerCustomerRepositoryV1Api();

var customerId = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.customerCustomerRepositoryV1GetByIdGet(customerId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **Number**|  | 

### Return type

[**CustomerDataCustomerInterface**](CustomerDataCustomerInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="customerCustomerRepositoryV1GetByIdGet_0"></a>
# **customerCustomerRepositoryV1GetByIdGet_0**
> CustomerDataCustomerInterface customerCustomerRepositoryV1GetByIdGet_0()



Get customer by customer ID.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CustomerCustomerRepositoryV1Api();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.customerCustomerRepositoryV1GetByIdGet_0(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**CustomerDataCustomerInterface**](CustomerDataCustomerInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="customerCustomerRepositoryV1GetListGet"></a>
# **customerCustomerRepositoryV1GetListGet**
> CustomerDataCustomerSearchResultsInterface customerCustomerRepositoryV1GetListGet(opts)



Retrieve customers which match a specified criteria. This call returns an array of objects, but detailed information about each object’s attributes might not be included. See http://devdocs.magento.com/codelinks/attributes.html#CustomerRepositoryInterface to determine which call to use to get detailed information about all attributes for an object.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CustomerCustomerRepositoryV1Api();

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
apiInstance.customerCustomerRepositoryV1GetListGet(opts, callback);
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

[**CustomerDataCustomerSearchResultsInterface**](CustomerDataCustomerSearchResultsInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="customerCustomerRepositoryV1SavePut"></a>
# **customerCustomerRepositoryV1SavePut**
> CustomerDataCustomerInterface customerCustomerRepositoryV1SavePut(id, opts)



Create or update a customer.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CustomerCustomerRepositoryV1Api();

var id = "id_example"; // String | 

var opts = { 
  'body': new magento.Body4() // Body4 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.customerCustomerRepositoryV1SavePut(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **body** | [**Body4**](Body4.md)|  | [optional] 

### Return type

[**CustomerDataCustomerInterface**](CustomerDataCustomerInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="customerCustomerRepositoryV1SavePut_0"></a>
# **customerCustomerRepositoryV1SavePut_0**
> CustomerDataCustomerInterface customerCustomerRepositoryV1SavePut_0(opts)



Create or update a customer.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CustomerCustomerRepositoryV1Api();

var opts = { 
  'body': new magento.Body5() // Body5 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.customerCustomerRepositoryV1SavePut_0(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body5**](Body5.md)|  | [optional] 

### Return type

[**CustomerDataCustomerInterface**](CustomerDataCustomerInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

