# magento.CheckoutTotalsInformationManagementV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**checkoutTotalsInformationManagementV1CalculatePost**](CheckoutTotalsInformationManagementV1Api.md#checkoutTotalsInformationManagementV1CalculatePost) | **POST** /V1/carts/{cartId}/totals-information | 
[**checkoutTotalsInformationManagementV1CalculatePost_0**](CheckoutTotalsInformationManagementV1Api.md#checkoutTotalsInformationManagementV1CalculatePost_0) | **POST** /V1/carts/mine/totals-information | 


<a name="checkoutTotalsInformationManagementV1CalculatePost"></a>
# **checkoutTotalsInformationManagementV1CalculatePost**
> QuoteDataTotalsInterface checkoutTotalsInformationManagementV1CalculatePost(cartId, opts)



Calculate quote totals based on address and shipping method.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CheckoutTotalsInformationManagementV1Api();

var cartId = 56; // Number | 

var opts = { 
  'body': new magento.Body86() // Body86 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.checkoutTotalsInformationManagementV1CalculatePost(cartId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartId** | **Number**|  | 
 **body** | [**Body86**](Body86.md)|  | [optional] 

### Return type

[**QuoteDataTotalsInterface**](QuoteDataTotalsInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="checkoutTotalsInformationManagementV1CalculatePost_0"></a>
# **checkoutTotalsInformationManagementV1CalculatePost_0**
> QuoteDataTotalsInterface checkoutTotalsInformationManagementV1CalculatePost_0(opts)



Calculate quote totals based on address and shipping method.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CheckoutTotalsInformationManagementV1Api();

var opts = { 
  'body': new magento.Body87() // Body87 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.checkoutTotalsInformationManagementV1CalculatePost_0(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body87**](Body87.md)|  | [optional] 

### Return type

[**QuoteDataTotalsInterface**](QuoteDataTotalsInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

