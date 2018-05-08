# magento.SalesInvoiceCommentRepositoryV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**salesInvoiceCommentRepositoryV1SavePost**](SalesInvoiceCommentRepositoryV1Api.md#salesInvoiceCommentRepositoryV1SavePost) | **POST** /V1/invoices/comments | 


<a name="salesInvoiceCommentRepositoryV1SavePost"></a>
# **salesInvoiceCommentRepositoryV1SavePost**
> SalesDataInvoiceCommentInterface salesInvoiceCommentRepositoryV1SavePost(opts)



Performs persist operations for a specified invoice comment.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.SalesInvoiceCommentRepositoryV1Api();

var opts = { 
  'body': new magento.Body68() // Body68 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.salesInvoiceCommentRepositoryV1SavePost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body68**](Body68.md)|  | [optional] 

### Return type

[**SalesDataInvoiceCommentInterface**](SalesDataInvoiceCommentInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

