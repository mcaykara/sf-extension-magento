# magento.SalesRefundOrderV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**salesRefundOrderV1ExecutePost**](SalesRefundOrderV1Api.md#salesRefundOrderV1ExecutePost) | **POST** /V1/order/{orderId}/refund | 


<a name="salesRefundOrderV1ExecutePost"></a>
# **salesRefundOrderV1ExecutePost**
> &#39;Number&#39; salesRefundOrderV1ExecutePost(orderId, opts)



Create offline refund for order

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.SalesRefundOrderV1Api();

var orderId = 56; // Number | 

var opts = { 
  'body': new magento.Body72() // Body72 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.salesRefundOrderV1ExecutePost(orderId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **Number**|  | 
 **body** | [**Body72**](Body72.md)|  | [optional] 

### Return type

**&#39;Number&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

