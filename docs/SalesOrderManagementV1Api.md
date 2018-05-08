# magento.SalesOrderManagementV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**salesOrderManagementV1AddCommentPost**](SalesOrderManagementV1Api.md#salesOrderManagementV1AddCommentPost) | **POST** /V1/orders/{id}/comments | 
[**salesOrderManagementV1CancelPost**](SalesOrderManagementV1Api.md#salesOrderManagementV1CancelPost) | **POST** /V1/orders/{id}/cancel | 
[**salesOrderManagementV1GetCommentsListGet**](SalesOrderManagementV1Api.md#salesOrderManagementV1GetCommentsListGet) | **GET** /V1/orders/{id}/comments | 
[**salesOrderManagementV1GetStatusGet**](SalesOrderManagementV1Api.md#salesOrderManagementV1GetStatusGet) | **GET** /V1/orders/{id}/statuses | 
[**salesOrderManagementV1HoldPost**](SalesOrderManagementV1Api.md#salesOrderManagementV1HoldPost) | **POST** /V1/orders/{id}/hold | 
[**salesOrderManagementV1NotifyPost**](SalesOrderManagementV1Api.md#salesOrderManagementV1NotifyPost) | **POST** /V1/orders/{id}/emails | 
[**salesOrderManagementV1UnHoldPost**](SalesOrderManagementV1Api.md#salesOrderManagementV1UnHoldPost) | **POST** /V1/orders/{id}/unhold | 


<a name="salesOrderManagementV1AddCommentPost"></a>
# **salesOrderManagementV1AddCommentPost**
> &#39;Boolean&#39; salesOrderManagementV1AddCommentPost(id, opts)



Adds a comment to a specified order.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.SalesOrderManagementV1Api();

var id = 56; // Number | The order ID.

var opts = { 
  'body': new magento.Body65() // Body65 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.salesOrderManagementV1AddCommentPost(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The order ID. | 
 **body** | [**Body65**](Body65.md)|  | [optional] 

### Return type

**&#39;Boolean&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="salesOrderManagementV1CancelPost"></a>
# **salesOrderManagementV1CancelPost**
> &#39;Boolean&#39; salesOrderManagementV1CancelPost(id)



Cancels a specified order.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.SalesOrderManagementV1Api();

var id = 56; // Number | The order ID.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.salesOrderManagementV1CancelPost(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The order ID. | 

### Return type

**&#39;Boolean&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="salesOrderManagementV1GetCommentsListGet"></a>
# **salesOrderManagementV1GetCommentsListGet**
> SalesDataOrderStatusHistorySearchResultInterface salesOrderManagementV1GetCommentsListGet(id)



Lists comments for a specified order.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.SalesOrderManagementV1Api();

var id = 56; // Number | The order ID.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.salesOrderManagementV1GetCommentsListGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The order ID. | 

### Return type

[**SalesDataOrderStatusHistorySearchResultInterface**](SalesDataOrderStatusHistorySearchResultInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="salesOrderManagementV1GetStatusGet"></a>
# **salesOrderManagementV1GetStatusGet**
> &#39;String&#39; salesOrderManagementV1GetStatusGet(id)



Gets the status for a specified order.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.SalesOrderManagementV1Api();

var id = 56; // Number | The order ID.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.salesOrderManagementV1GetStatusGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The order ID. | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="salesOrderManagementV1HoldPost"></a>
# **salesOrderManagementV1HoldPost**
> &#39;Boolean&#39; salesOrderManagementV1HoldPost(id)



Holds a specified order.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.SalesOrderManagementV1Api();

var id = 56; // Number | The order ID.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.salesOrderManagementV1HoldPost(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The order ID. | 

### Return type

**&#39;Boolean&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="salesOrderManagementV1NotifyPost"></a>
# **salesOrderManagementV1NotifyPost**
> &#39;Boolean&#39; salesOrderManagementV1NotifyPost(id)



Emails a user a specified order.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.SalesOrderManagementV1Api();

var id = 56; // Number | The order ID.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.salesOrderManagementV1NotifyPost(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The order ID. | 

### Return type

**&#39;Boolean&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="salesOrderManagementV1UnHoldPost"></a>
# **salesOrderManagementV1UnHoldPost**
> &#39;Boolean&#39; salesOrderManagementV1UnHoldPost(id)



Releases a specified order from hold status.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.SalesOrderManagementV1Api();

var id = 56; // Number | The order ID.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.salesOrderManagementV1UnHoldPost(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The order ID. | 

### Return type

**&#39;Boolean&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

