# magento.GiftRegistryShippingMethodManagementV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**giftRegistryShippingMethodManagementV1EstimateByRegistryIdPost**](GiftRegistryShippingMethodManagementV1Api.md#giftRegistryShippingMethodManagementV1EstimateByRegistryIdPost) | **POST** /V1/giftregistry/mine/estimate-shipping-methods | 


<a name="giftRegistryShippingMethodManagementV1EstimateByRegistryIdPost"></a>
# **giftRegistryShippingMethodManagementV1EstimateByRegistryIdPost**
> [QuoteDataShippingMethodInterface] giftRegistryShippingMethodManagementV1EstimateByRegistryIdPost(opts)



Estimate shipping

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.GiftRegistryShippingMethodManagementV1Api();

var opts = { 
  'body': new magento.Body119() // Body119 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.giftRegistryShippingMethodManagementV1EstimateByRegistryIdPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body119**](Body119.md)|  | [optional] 

### Return type

[**[QuoteDataShippingMethodInterface]**](QuoteDataShippingMethodInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

