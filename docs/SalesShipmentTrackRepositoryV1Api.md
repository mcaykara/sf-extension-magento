# magento.SalesShipmentTrackRepositoryV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**salesShipmentTrackRepositoryV1DeleteByIdDelete**](SalesShipmentTrackRepositoryV1Api.md#salesShipmentTrackRepositoryV1DeleteByIdDelete) | **DELETE** /V1/shipment/track/{id} | 
[**salesShipmentTrackRepositoryV1SavePost**](SalesShipmentTrackRepositoryV1Api.md#salesShipmentTrackRepositoryV1SavePost) | **POST** /V1/shipment/track | 


<a name="salesShipmentTrackRepositoryV1DeleteByIdDelete"></a>
# **salesShipmentTrackRepositoryV1DeleteByIdDelete**
> &#39;Boolean&#39; salesShipmentTrackRepositoryV1DeleteByIdDelete(id)



Deletes a specified shipment track by ID.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.SalesShipmentTrackRepositoryV1Api();

var id = 56; // Number | The shipment track ID.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.salesShipmentTrackRepositoryV1DeleteByIdDelete(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The shipment track ID. | 

### Return type

**&#39;Boolean&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="salesShipmentTrackRepositoryV1SavePost"></a>
# **salesShipmentTrackRepositoryV1SavePost**
> SalesDataShipmentTrackInterface salesShipmentTrackRepositoryV1SavePost(opts)



Performs persist operations for a specified shipment track.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.SalesShipmentTrackRepositoryV1Api();

var opts = { 
  'body': new magento.Body75() // Body75 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.salesShipmentTrackRepositoryV1SavePost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body75**](Body75.md)|  | [optional] 

### Return type

[**SalesDataShipmentTrackInterface**](SalesDataShipmentTrackInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

