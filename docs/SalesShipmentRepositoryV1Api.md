# magento.SalesShipmentRepositoryV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**salesShipmentRepositoryV1GetGet**](SalesShipmentRepositoryV1Api.md#salesShipmentRepositoryV1GetGet) | **GET** /V1/shipment/{id} | 
[**salesShipmentRepositoryV1GetListGet**](SalesShipmentRepositoryV1Api.md#salesShipmentRepositoryV1GetListGet) | **GET** /V1/shipments | 
[**salesShipmentRepositoryV1SavePost**](SalesShipmentRepositoryV1Api.md#salesShipmentRepositoryV1SavePost) | **POST** /V1/shipment/ | 


<a name="salesShipmentRepositoryV1GetGet"></a>
# **salesShipmentRepositoryV1GetGet**
> SalesDataShipmentInterface salesShipmentRepositoryV1GetGet(id)



Loads a specified shipment.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.SalesShipmentRepositoryV1Api();

var id = 56; // Number | The shipment ID.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.salesShipmentRepositoryV1GetGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The shipment ID. | 

### Return type

[**SalesDataShipmentInterface**](SalesDataShipmentInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="salesShipmentRepositoryV1GetListGet"></a>
# **salesShipmentRepositoryV1GetListGet**
> SalesDataShipmentSearchResultInterface salesShipmentRepositoryV1GetListGet(opts)



Lists shipments that match specified search criteria. This call returns an array of objects, but detailed information about each object’s attributes might not be included. See http://devdocs.magento.com/codelinks/attributes.html#ShipmentRepositoryInterface to determine which call to use to get detailed information about all attributes for an object.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.SalesShipmentRepositoryV1Api();

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
apiInstance.salesShipmentRepositoryV1GetListGet(opts, callback);
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

[**SalesDataShipmentSearchResultInterface**](SalesDataShipmentSearchResultInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="salesShipmentRepositoryV1SavePost"></a>
# **salesShipmentRepositoryV1SavePost**
> SalesDataShipmentInterface salesShipmentRepositoryV1SavePost(opts)



Performs persist operations for a specified shipment.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.SalesShipmentRepositoryV1Api();

var opts = { 
  'body': new magento.Body73() // Body73 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.salesShipmentRepositoryV1SavePost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body73**](Body73.md)|  | [optional] 

### Return type

[**SalesDataShipmentInterface**](SalesDataShipmentInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

