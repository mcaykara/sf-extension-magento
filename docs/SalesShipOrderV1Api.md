# magento.SalesShipOrderV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**salesShipOrderV1ExecutePost**](SalesShipOrderV1Api.md#salesShipOrderV1ExecutePost) | **POST** /V1/order/{orderId}/ship | 


<a name="salesShipOrderV1ExecutePost"></a>
# **salesShipOrderV1ExecutePost**
> &#39;Number&#39; salesShipOrderV1ExecutePost(orderId, opts)



Creates new Shipment for given Order.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.SalesShipOrderV1Api();

var orderId = 56; // Number | 

var opts = { 
  'body': new magento.Body76() // Body76 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.salesShipOrderV1ExecutePost(orderId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **Number**|  | 
 **body** | [**Body76**](Body76.md)|  | [optional] 

### Return type

**&#39;Number&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

