# magento.CheckoutGuestTotalsInformationManagementV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**checkoutGuestTotalsInformationManagementV1CalculatePost**](CheckoutGuestTotalsInformationManagementV1Api.md#checkoutGuestTotalsInformationManagementV1CalculatePost) | **POST** /V1/guest-carts/{cartId}/totals-information | 


<a name="checkoutGuestTotalsInformationManagementV1CalculatePost"></a>
# **checkoutGuestTotalsInformationManagementV1CalculatePost**
> QuoteDataTotalsInterface checkoutGuestTotalsInformationManagementV1CalculatePost(cartId, opts)



Calculate quote totals based on address and shipping method.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CheckoutGuestTotalsInformationManagementV1Api();

var cartId = "cartId_example"; // String | 

var opts = { 
  'body': new magento.Body88() // Body88 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.checkoutGuestTotalsInformationManagementV1CalculatePost(cartId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartId** | **String**|  | 
 **body** | [**Body88**](Body88.md)|  | [optional] 

### Return type

[**QuoteDataTotalsInterface**](QuoteDataTotalsInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

