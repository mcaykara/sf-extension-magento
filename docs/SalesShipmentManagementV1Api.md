# magento.SalesShipmentManagementV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**salesShipmentManagementV1GetCommentsListGet**](SalesShipmentManagementV1Api.md#salesShipmentManagementV1GetCommentsListGet) | **GET** /V1/shipment/{id}/comments | 
[**salesShipmentManagementV1GetLabelGet**](SalesShipmentManagementV1Api.md#salesShipmentManagementV1GetLabelGet) | **GET** /V1/shipment/{id}/label | 
[**salesShipmentManagementV1NotifyPost**](SalesShipmentManagementV1Api.md#salesShipmentManagementV1NotifyPost) | **POST** /V1/shipment/{id}/emails | 


<a name="salesShipmentManagementV1GetCommentsListGet"></a>
# **salesShipmentManagementV1GetCommentsListGet**
> SalesDataShipmentCommentSearchResultInterface salesShipmentManagementV1GetCommentsListGet(id)



Lists comments for a specified shipment.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.SalesShipmentManagementV1Api();

var id = 56; // Number | The shipment ID.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.salesShipmentManagementV1GetCommentsListGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The shipment ID. | 

### Return type

[**SalesDataShipmentCommentSearchResultInterface**](SalesDataShipmentCommentSearchResultInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="salesShipmentManagementV1GetLabelGet"></a>
# **salesShipmentManagementV1GetLabelGet**
> &#39;String&#39; salesShipmentManagementV1GetLabelGet(id)



Gets a specified shipment label.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.SalesShipmentManagementV1Api();

var id = 56; // Number | The shipment label ID.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.salesShipmentManagementV1GetLabelGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The shipment label ID. | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="salesShipmentManagementV1NotifyPost"></a>
# **salesShipmentManagementV1NotifyPost**
> &#39;Boolean&#39; salesShipmentManagementV1NotifyPost(id)



Emails user a specified shipment.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.SalesShipmentManagementV1Api();

var id = 56; // Number | The shipment ID.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.salesShipmentManagementV1NotifyPost(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The shipment ID. | 

### Return type

**&#39;Boolean&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

