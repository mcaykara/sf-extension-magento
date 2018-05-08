# magento.SalesInvoiceManagementV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**salesInvoiceManagementV1GetCommentsListGet**](SalesInvoiceManagementV1Api.md#salesInvoiceManagementV1GetCommentsListGet) | **GET** /V1/invoices/{id}/comments | 
[**salesInvoiceManagementV1NotifyPost**](SalesInvoiceManagementV1Api.md#salesInvoiceManagementV1NotifyPost) | **POST** /V1/invoices/{id}/emails | 
[**salesInvoiceManagementV1SetCapturePost**](SalesInvoiceManagementV1Api.md#salesInvoiceManagementV1SetCapturePost) | **POST** /V1/invoices/{id}/capture | 
[**salesInvoiceManagementV1SetVoidPost**](SalesInvoiceManagementV1Api.md#salesInvoiceManagementV1SetVoidPost) | **POST** /V1/invoices/{id}/void | 


<a name="salesInvoiceManagementV1GetCommentsListGet"></a>
# **salesInvoiceManagementV1GetCommentsListGet**
> SalesDataInvoiceCommentSearchResultInterface salesInvoiceManagementV1GetCommentsListGet(id)



Lists comments for a specified invoice.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.SalesInvoiceManagementV1Api();

var id = 56; // Number | The invoice ID.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.salesInvoiceManagementV1GetCommentsListGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The invoice ID. | 

### Return type

[**SalesDataInvoiceCommentSearchResultInterface**](SalesDataInvoiceCommentSearchResultInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="salesInvoiceManagementV1NotifyPost"></a>
# **salesInvoiceManagementV1NotifyPost**
> &#39;Boolean&#39; salesInvoiceManagementV1NotifyPost(id)



Emails a user a specified invoice.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.SalesInvoiceManagementV1Api();

var id = 56; // Number | The invoice ID.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.salesInvoiceManagementV1NotifyPost(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The invoice ID. | 

### Return type

**&#39;Boolean&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="salesInvoiceManagementV1SetCapturePost"></a>
# **salesInvoiceManagementV1SetCapturePost**
> &#39;String&#39; salesInvoiceManagementV1SetCapturePost(id)



Sets invoice capture.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.SalesInvoiceManagementV1Api();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.salesInvoiceManagementV1SetCapturePost(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="salesInvoiceManagementV1SetVoidPost"></a>
# **salesInvoiceManagementV1SetVoidPost**
> &#39;Boolean&#39; salesInvoiceManagementV1SetVoidPost(id)



Voids a specified invoice.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.SalesInvoiceManagementV1Api();

var id = 56; // Number | The invoice ID.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.salesInvoiceManagementV1SetVoidPost(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The invoice ID. | 

### Return type

**&#39;Boolean&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

