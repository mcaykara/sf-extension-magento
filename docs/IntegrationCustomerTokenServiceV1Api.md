# magento.IntegrationCustomerTokenServiceV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**integrationCustomerTokenServiceV1CreateCustomerAccessTokenPost**](IntegrationCustomerTokenServiceV1Api.md#integrationCustomerTokenServiceV1CreateCustomerAccessTokenPost) | **POST** /V1/integration/customer/token | 


<a name="integrationCustomerTokenServiceV1CreateCustomerAccessTokenPost"></a>
# **integrationCustomerTokenServiceV1CreateCustomerAccessTokenPost**
> &#39;String&#39; integrationCustomerTokenServiceV1CreateCustomerAccessTokenPost(opts)



Create access token for admin given the customer credentials.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.IntegrationCustomerTokenServiceV1Api();

var opts = { 
  'body': new magento.Body124() // Body124 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.integrationCustomerTokenServiceV1CreateCustomerAccessTokenPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body124**](Body124.md)|  | [optional] 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

