# magento.SalesShipmentCommentRepositoryV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**salesShipmentCommentRepositoryV1SavePost**](SalesShipmentCommentRepositoryV1Api.md#salesShipmentCommentRepositoryV1SavePost) | **POST** /V1/shipment/{id}/comments | 


<a name="salesShipmentCommentRepositoryV1SavePost"></a>
# **salesShipmentCommentRepositoryV1SavePost**
> SalesDataShipmentCommentInterface salesShipmentCommentRepositoryV1SavePost(id, opts)



Performs persist operations for a specified shipment comment.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.SalesShipmentCommentRepositoryV1Api();

var id = "id_example"; // String | 

var opts = { 
  'body': new magento.Body74() // Body74 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.salesShipmentCommentRepositoryV1SavePost(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **body** | [**Body74**](Body74.md)|  | [optional] 

### Return type

[**SalesDataShipmentCommentInterface**](SalesDataShipmentCommentInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

