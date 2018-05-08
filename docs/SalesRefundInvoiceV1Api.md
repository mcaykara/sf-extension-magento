# magento.SalesRefundInvoiceV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**salesRefundInvoiceV1ExecutePost**](SalesRefundInvoiceV1Api.md#salesRefundInvoiceV1ExecutePost) | **POST** /V1/invoice/{invoiceId}/refund | 


<a name="salesRefundInvoiceV1ExecutePost"></a>
# **salesRefundInvoiceV1ExecutePost**
> &#39;Number&#39; salesRefundInvoiceV1ExecutePost(invoiceId, opts)



Create refund for invoice

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.SalesRefundInvoiceV1Api();

var invoiceId = 56; // Number | 

var opts = { 
  'body': new magento.Body69() // Body69 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.salesRefundInvoiceV1ExecutePost(invoiceId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **invoiceId** | **Number**|  | 
 **body** | [**Body69**](Body69.md)|  | [optional] 

### Return type

**&#39;Number&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

