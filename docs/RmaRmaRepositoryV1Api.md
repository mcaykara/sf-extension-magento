# magento.RmaRmaRepositoryV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**rmaRmaRepositoryV1DeleteDelete**](RmaRmaRepositoryV1Api.md#rmaRmaRepositoryV1DeleteDelete) | **DELETE** /V1/returns/{id} | 
[**rmaRmaRepositoryV1GetGet**](RmaRmaRepositoryV1Api.md#rmaRmaRepositoryV1GetGet) | **GET** /V1/returns/{id} | 


<a name="rmaRmaRepositoryV1DeleteDelete"></a>
# **rmaRmaRepositoryV1DeleteDelete**
> &#39;Boolean&#39; rmaRmaRepositoryV1DeleteDelete(id, opts)



Delete RMA

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.RmaRmaRepositoryV1Api();

var id = "id_example"; // String | 

var opts = { 
  'body': new magento.Body131() // Body131 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.rmaRmaRepositoryV1DeleteDelete(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **body** | [**Body131**](Body131.md)|  | [optional] 

### Return type

**&#39;Boolean&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="rmaRmaRepositoryV1GetGet"></a>
# **rmaRmaRepositoryV1GetGet**
> RmaDataRmaInterface rmaRmaRepositoryV1GetGet(id)



Return data object for specified RMA id

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.RmaRmaRepositoryV1Api();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.rmaRmaRepositoryV1GetGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**RmaDataRmaInterface**](RmaDataRmaInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

