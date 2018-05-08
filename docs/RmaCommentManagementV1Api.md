# magento.RmaCommentManagementV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**rmaCommentManagementV1AddCommentPost**](RmaCommentManagementV1Api.md#rmaCommentManagementV1AddCommentPost) | **POST** /V1/returns/{id}/comments | 
[**rmaCommentManagementV1CommentsListGet**](RmaCommentManagementV1Api.md#rmaCommentManagementV1CommentsListGet) | **GET** /V1/returns/{id}/comments | 


<a name="rmaCommentManagementV1AddCommentPost"></a>
# **rmaCommentManagementV1AddCommentPost**
> &#39;Boolean&#39; rmaCommentManagementV1AddCommentPost(id, opts)



Add comment

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.RmaCommentManagementV1Api();

var id = "id_example"; // String | 

var opts = { 
  'body': new magento.Body132() // Body132 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.rmaCommentManagementV1AddCommentPost(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **body** | [**Body132**](Body132.md)|  | [optional] 

### Return type

**&#39;Boolean&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="rmaCommentManagementV1CommentsListGet"></a>
# **rmaCommentManagementV1CommentsListGet**
> RmaDataCommentSearchResultInterface rmaCommentManagementV1CommentsListGet(id)



Comments list

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.RmaCommentManagementV1Api();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.rmaCommentManagementV1CommentsListGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**RmaDataCommentSearchResultInterface**](RmaDataCommentSearchResultInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

