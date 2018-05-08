# magento.SalesCreditmemoManagementV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**salesCreditmemoManagementV1CancelPut**](SalesCreditmemoManagementV1Api.md#salesCreditmemoManagementV1CancelPut) | **PUT** /V1/creditmemo/{id} | 
[**salesCreditmemoManagementV1GetCommentsListGet**](SalesCreditmemoManagementV1Api.md#salesCreditmemoManagementV1GetCommentsListGet) | **GET** /V1/creditmemo/{id}/comments | 
[**salesCreditmemoManagementV1NotifyPost**](SalesCreditmemoManagementV1Api.md#salesCreditmemoManagementV1NotifyPost) | **POST** /V1/creditmemo/{id}/emails | 


<a name="salesCreditmemoManagementV1CancelPut"></a>
# **salesCreditmemoManagementV1CancelPut**
> &#39;Boolean&#39; salesCreditmemoManagementV1CancelPut(id)



Cancels a specified credit memo.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.SalesCreditmemoManagementV1Api();

var id = 56; // Number | The credit memo ID.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.salesCreditmemoManagementV1CancelPut(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The credit memo ID. | 

### Return type

**&#39;Boolean&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="salesCreditmemoManagementV1GetCommentsListGet"></a>
# **salesCreditmemoManagementV1GetCommentsListGet**
> SalesDataCreditmemoCommentSearchResultInterface salesCreditmemoManagementV1GetCommentsListGet(id)



Lists comments for a specified credit memo.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.SalesCreditmemoManagementV1Api();

var id = 56; // Number | The credit memo ID.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.salesCreditmemoManagementV1GetCommentsListGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The credit memo ID. | 

### Return type

[**SalesDataCreditmemoCommentSearchResultInterface**](SalesDataCreditmemoCommentSearchResultInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="salesCreditmemoManagementV1NotifyPost"></a>
# **salesCreditmemoManagementV1NotifyPost**
> &#39;Boolean&#39; salesCreditmemoManagementV1NotifyPost(id)



Emails a user a specified credit memo.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.SalesCreditmemoManagementV1Api();

var id = 56; // Number | The credit memo ID.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.salesCreditmemoManagementV1NotifyPost(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The credit memo ID. | 

### Return type

**&#39;Boolean&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

