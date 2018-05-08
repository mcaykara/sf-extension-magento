# magento.SalesInvoiceRepositoryV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**salesInvoiceRepositoryV1GetGet**](SalesInvoiceRepositoryV1Api.md#salesInvoiceRepositoryV1GetGet) | **GET** /V1/invoices/{id} | 
[**salesInvoiceRepositoryV1GetListGet**](SalesInvoiceRepositoryV1Api.md#salesInvoiceRepositoryV1GetListGet) | **GET** /V1/invoices | 
[**salesInvoiceRepositoryV1SavePost**](SalesInvoiceRepositoryV1Api.md#salesInvoiceRepositoryV1SavePost) | **POST** /V1/invoices/ | 


<a name="salesInvoiceRepositoryV1GetGet"></a>
# **salesInvoiceRepositoryV1GetGet**
> SalesDataInvoiceInterface salesInvoiceRepositoryV1GetGet(id)



Loads a specified invoice.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.SalesInvoiceRepositoryV1Api();

var id = 56; // Number | The invoice ID.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.salesInvoiceRepositoryV1GetGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The invoice ID. | 

### Return type

[**SalesDataInvoiceInterface**](SalesDataInvoiceInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="salesInvoiceRepositoryV1GetListGet"></a>
# **salesInvoiceRepositoryV1GetListGet**
> SalesDataInvoiceSearchResultInterface salesInvoiceRepositoryV1GetListGet(opts)



Lists invoices that match specified search criteria. This call returns an array of objects, but detailed information about each object’s attributes might not be included. See http://devdocs.magento.com/codelinks/attributes.html#InvoiceRepositoryInterface to determine which call to use to get detailed information about all attributes for an object.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.SalesInvoiceRepositoryV1Api();

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
apiInstance.salesInvoiceRepositoryV1GetListGet(opts, callback);
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

[**SalesDataInvoiceSearchResultInterface**](SalesDataInvoiceSearchResultInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="salesInvoiceRepositoryV1SavePost"></a>
# **salesInvoiceRepositoryV1SavePost**
> SalesDataInvoiceInterface salesInvoiceRepositoryV1SavePost(opts)



Performs persist operations for a specified invoice.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.SalesInvoiceRepositoryV1Api();

var opts = { 
  'body': new magento.Body67() // Body67 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.salesInvoiceRepositoryV1SavePost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body67**](Body67.md)|  | [optional] 

### Return type

[**SalesDataInvoiceInterface**](SalesDataInvoiceInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

