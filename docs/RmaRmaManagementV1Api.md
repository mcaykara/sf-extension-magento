# magento.RmaRmaManagementV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**rmaRmaManagementV1SaveRmaPost**](RmaRmaManagementV1Api.md#rmaRmaManagementV1SaveRmaPost) | **POST** /V1/returns | 
[**rmaRmaManagementV1SaveRmaPut**](RmaRmaManagementV1Api.md#rmaRmaManagementV1SaveRmaPut) | **PUT** /V1/returns/{id} | 
[**rmaRmaManagementV1SearchGet**](RmaRmaManagementV1Api.md#rmaRmaManagementV1SearchGet) | **GET** /V1/returns | 


<a name="rmaRmaManagementV1SaveRmaPost"></a>
# **rmaRmaManagementV1SaveRmaPost**
> RmaDataRmaInterface rmaRmaManagementV1SaveRmaPost(opts)



Save RMA

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.RmaRmaManagementV1Api();

var opts = { 
  'body': new magento.Body133() // Body133 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.rmaRmaManagementV1SaveRmaPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body133**](Body133.md)|  | [optional] 

### Return type

[**RmaDataRmaInterface**](RmaDataRmaInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="rmaRmaManagementV1SaveRmaPut"></a>
# **rmaRmaManagementV1SaveRmaPut**
> RmaDataRmaInterface rmaRmaManagementV1SaveRmaPut(id, opts)



Save RMA

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.RmaRmaManagementV1Api();

var id = "id_example"; // String | 

var opts = { 
  'body': new magento.Body130() // Body130 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.rmaRmaManagementV1SaveRmaPut(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **body** | [**Body130**](Body130.md)|  | [optional] 

### Return type

[**RmaDataRmaInterface**](RmaDataRmaInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="rmaRmaManagementV1SearchGet"></a>
# **rmaRmaManagementV1SearchGet**
> RmaDataRmaSearchResultInterface rmaRmaManagementV1SearchGet(opts)



Return list of rma data objects based on search criteria

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.RmaRmaManagementV1Api();

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
apiInstance.rmaRmaManagementV1SearchGet(opts, callback);
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

[**RmaDataRmaSearchResultInterface**](RmaDataRmaSearchResultInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

