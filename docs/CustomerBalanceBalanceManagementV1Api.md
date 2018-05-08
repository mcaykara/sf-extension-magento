# magento.CustomerBalanceBalanceManagementV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**customerBalanceBalanceManagementV1ApplyPost**](CustomerBalanceBalanceManagementV1Api.md#customerBalanceBalanceManagementV1ApplyPost) | **POST** /V1/carts/mine/balance/apply | 


<a name="customerBalanceBalanceManagementV1ApplyPost"></a>
# **customerBalanceBalanceManagementV1ApplyPost**
> &#39;Boolean&#39; customerBalanceBalanceManagementV1ApplyPost()



Apply store credit

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CustomerBalanceBalanceManagementV1Api();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.customerBalanceBalanceManagementV1ApplyPost(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

**&#39;Boolean&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

