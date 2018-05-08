# magento.SalesInvoiceOrderV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**salesInvoiceOrderV1ExecutePost**](SalesInvoiceOrderV1Api.md#salesInvoiceOrderV1ExecutePost) | **POST** /V1/order/{orderId}/invoice | 


<a name="salesInvoiceOrderV1ExecutePost"></a>
# **salesInvoiceOrderV1ExecutePost**
> &#39;Number&#39; salesInvoiceOrderV1ExecutePost(orderId, opts)





### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.SalesInvoiceOrderV1Api();

var orderId = 56; // Number | 

var opts = { 
  'body': new magento.Body77() // Body77 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.salesInvoiceOrderV1ExecutePost(orderId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **Number**|  | 
 **body** | [**Body77**](Body77.md)|  | [optional] 

### Return type

**&#39;Number&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

