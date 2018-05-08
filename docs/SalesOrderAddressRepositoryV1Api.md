# magento.SalesOrderAddressRepositoryV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**salesOrderAddressRepositoryV1SavePut**](SalesOrderAddressRepositoryV1Api.md#salesOrderAddressRepositoryV1SavePut) | **PUT** /V1/orders/{parent_id} | 


<a name="salesOrderAddressRepositoryV1SavePut"></a>
# **salesOrderAddressRepositoryV1SavePut**
> SalesDataOrderAddressInterface salesOrderAddressRepositoryV1SavePut(parentId, opts)



Performs persist operations for a specified order address.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.SalesOrderAddressRepositoryV1Api();

var parentId = "parentId_example"; // String | 

var opts = { 
  'body': new magento.Body66() // Body66 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.salesOrderAddressRepositoryV1SavePut(parentId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parentId** | **String**|  | 
 **body** | [**Body66**](Body66.md)|  | [optional] 

### Return type

[**SalesDataOrderAddressInterface**](SalesDataOrderAddressInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

