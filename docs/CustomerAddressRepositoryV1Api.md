# magento.CustomerAddressRepositoryV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**customerAddressRepositoryV1DeleteByIdDelete**](CustomerAddressRepositoryV1Api.md#customerAddressRepositoryV1DeleteByIdDelete) | **DELETE** /V1/addresses/{addressId} | 
[**customerAddressRepositoryV1GetByIdGet**](CustomerAddressRepositoryV1Api.md#customerAddressRepositoryV1GetByIdGet) | **GET** /V1/customers/addresses/{addressId} | 


<a name="customerAddressRepositoryV1DeleteByIdDelete"></a>
# **customerAddressRepositoryV1DeleteByIdDelete**
> &#39;Boolean&#39; customerAddressRepositoryV1DeleteByIdDelete(addressId)



Delete customer address by ID.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CustomerAddressRepositoryV1Api();

var addressId = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.customerAddressRepositoryV1DeleteByIdDelete(addressId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addressId** | **Number**|  | 

### Return type

**&#39;Boolean&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="customerAddressRepositoryV1GetByIdGet"></a>
# **customerAddressRepositoryV1GetByIdGet**
> CustomerDataAddressInterface customerAddressRepositoryV1GetByIdGet(addressId)



Retrieve customer address.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CustomerAddressRepositoryV1Api();

var addressId = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.customerAddressRepositoryV1GetByIdGet(addressId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addressId** | **Number**|  | 

### Return type

[**CustomerDataAddressInterface**](CustomerDataAddressInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

