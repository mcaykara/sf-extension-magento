# magento.QuoteCartTotalRepositoryV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**quoteCartTotalRepositoryV1GetGet**](QuoteCartTotalRepositoryV1Api.md#quoteCartTotalRepositoryV1GetGet) | **GET** /V1/carts/{cartId}/totals | 
[**quoteCartTotalRepositoryV1GetGet_0**](QuoteCartTotalRepositoryV1Api.md#quoteCartTotalRepositoryV1GetGet_0) | **GET** /V1/carts/mine/totals | 


<a name="quoteCartTotalRepositoryV1GetGet"></a>
# **quoteCartTotalRepositoryV1GetGet**
> QuoteDataTotalsInterface quoteCartTotalRepositoryV1GetGet(cartId)



Returns quote totals data for a specified cart.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.QuoteCartTotalRepositoryV1Api();

var cartId = 56; // Number | The cart ID.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.quoteCartTotalRepositoryV1GetGet(cartId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartId** | **Number**| The cart ID. | 

### Return type

[**QuoteDataTotalsInterface**](QuoteDataTotalsInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="quoteCartTotalRepositoryV1GetGet_0"></a>
# **quoteCartTotalRepositoryV1GetGet_0**
> QuoteDataTotalsInterface quoteCartTotalRepositoryV1GetGet_0()



Returns quote totals data for a specified cart.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.QuoteCartTotalRepositoryV1Api();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.quoteCartTotalRepositoryV1GetGet_0(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**QuoteDataTotalsInterface**](QuoteDataTotalsInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

