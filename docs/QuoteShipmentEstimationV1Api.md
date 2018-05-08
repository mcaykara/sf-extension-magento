# magento.QuoteShipmentEstimationV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**quoteShipmentEstimationV1EstimateByExtendedAddressPost**](QuoteShipmentEstimationV1Api.md#quoteShipmentEstimationV1EstimateByExtendedAddressPost) | **POST** /V1/carts/{cartId}/estimate-shipping-methods | 
[**quoteShipmentEstimationV1EstimateByExtendedAddressPost_0**](QuoteShipmentEstimationV1Api.md#quoteShipmentEstimationV1EstimateByExtendedAddressPost_0) | **POST** /V1/carts/mine/estimate-shipping-methods | 


<a name="quoteShipmentEstimationV1EstimateByExtendedAddressPost"></a>
# **quoteShipmentEstimationV1EstimateByExtendedAddressPost**
> [QuoteDataShippingMethodInterface] quoteShipmentEstimationV1EstimateByExtendedAddressPost(cartId, opts)



Estimate shipping by address and return list of available shipping methods

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.QuoteShipmentEstimationV1Api();

var cartId = "cartId_example"; // String | 

var opts = { 
  'body': new magento.Body48() // Body48 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.quoteShipmentEstimationV1EstimateByExtendedAddressPost(cartId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartId** | **String**|  | 
 **body** | [**Body48**](Body48.md)|  | [optional] 

### Return type

[**[QuoteDataShippingMethodInterface]**](QuoteDataShippingMethodInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="quoteShipmentEstimationV1EstimateByExtendedAddressPost_0"></a>
# **quoteShipmentEstimationV1EstimateByExtendedAddressPost_0**
> [QuoteDataShippingMethodInterface] quoteShipmentEstimationV1EstimateByExtendedAddressPost_0(opts)



Estimate shipping by address and return list of available shipping methods

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.QuoteShipmentEstimationV1Api();

var opts = { 
  'body': new magento.Body49() // Body49 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.quoteShipmentEstimationV1EstimateByExtendedAddressPost_0(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body49**](Body49.md)|  | [optional] 

### Return type

[**[QuoteDataShippingMethodInterface]**](QuoteDataShippingMethodInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

