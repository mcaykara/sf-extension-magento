# magento.RmaTrackManagementV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**rmaTrackManagementV1AddTrackPost**](RmaTrackManagementV1Api.md#rmaTrackManagementV1AddTrackPost) | **POST** /V1/returns/{id}/tracking-numbers | 
[**rmaTrackManagementV1GetShippingLabelPdfGet**](RmaTrackManagementV1Api.md#rmaTrackManagementV1GetShippingLabelPdfGet) | **GET** /V1/returns/{id}/labels | 
[**rmaTrackManagementV1GetTracksGet**](RmaTrackManagementV1Api.md#rmaTrackManagementV1GetTracksGet) | **GET** /V1/returns/{id}/tracking-numbers | 
[**rmaTrackManagementV1RemoveTrackByIdDelete**](RmaTrackManagementV1Api.md#rmaTrackManagementV1RemoveTrackByIdDelete) | **DELETE** /V1/returns/{id}/tracking-numbers/{trackId} | 


<a name="rmaTrackManagementV1AddTrackPost"></a>
# **rmaTrackManagementV1AddTrackPost**
> &#39;Boolean&#39; rmaTrackManagementV1AddTrackPost(id, opts)



Add track

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.RmaTrackManagementV1Api();

var id = 56; // Number | 

var opts = { 
  'body': new magento.Body129() // Body129 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.rmaTrackManagementV1AddTrackPost(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **body** | [**Body129**](Body129.md)|  | [optional] 

### Return type

**&#39;Boolean&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="rmaTrackManagementV1GetShippingLabelPdfGet"></a>
# **rmaTrackManagementV1GetShippingLabelPdfGet**
> &#39;String&#39; rmaTrackManagementV1GetShippingLabelPdfGet(id)



Get shipping label int the PDF format

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.RmaTrackManagementV1Api();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.rmaTrackManagementV1GetShippingLabelPdfGet(id, callback);
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

<a name="rmaTrackManagementV1GetTracksGet"></a>
# **rmaTrackManagementV1GetTracksGet**
> RmaDataTrackSearchResultInterface rmaTrackManagementV1GetTracksGet(id)



Get track list

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.RmaTrackManagementV1Api();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.rmaTrackManagementV1GetTracksGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**RmaDataTrackSearchResultInterface**](RmaDataTrackSearchResultInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="rmaTrackManagementV1RemoveTrackByIdDelete"></a>
# **rmaTrackManagementV1RemoveTrackByIdDelete**
> &#39;Boolean&#39; rmaTrackManagementV1RemoveTrackByIdDelete(id, trackId)



Remove track by id

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.RmaTrackManagementV1Api();

var id = 56; // Number | 

var trackId = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.rmaTrackManagementV1RemoveTrackByIdDelete(id, trackId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **trackId** | **Number**|  | 

### Return type

**&#39;Boolean&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

