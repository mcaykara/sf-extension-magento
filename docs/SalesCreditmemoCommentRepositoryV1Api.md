# magento.SalesCreditmemoCommentRepositoryV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**salesCreditmemoCommentRepositoryV1SavePost**](SalesCreditmemoCommentRepositoryV1Api.md#salesCreditmemoCommentRepositoryV1SavePost) | **POST** /V1/creditmemo/{id}/comments | 


<a name="salesCreditmemoCommentRepositoryV1SavePost"></a>
# **salesCreditmemoCommentRepositoryV1SavePost**
> SalesDataCreditmemoCommentInterface salesCreditmemoCommentRepositoryV1SavePost(id, opts)



Performs persist operations for a specified entity.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.SalesCreditmemoCommentRepositoryV1Api();

var id = "id_example"; // String | 

var opts = { 
  'body': new magento.Body70() // Body70 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.salesCreditmemoCommentRepositoryV1SavePost(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **body** | [**Body70**](Body70.md)|  | [optional] 

### Return type

[**SalesDataCreditmemoCommentInterface**](SalesDataCreditmemoCommentInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

