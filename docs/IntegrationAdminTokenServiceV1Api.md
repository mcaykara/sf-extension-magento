# magento.IntegrationAdminTokenServiceV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**integrationAdminTokenServiceV1CreateAdminAccessTokenPost**](IntegrationAdminTokenServiceV1Api.md#integrationAdminTokenServiceV1CreateAdminAccessTokenPost) | **POST** /V1/integration/admin/token | 


<a name="integrationAdminTokenServiceV1CreateAdminAccessTokenPost"></a>
# **integrationAdminTokenServiceV1CreateAdminAccessTokenPost**
> &#39;String&#39; integrationAdminTokenServiceV1CreateAdminAccessTokenPost(opts)



Create access token for admin given the admin credentials.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.IntegrationAdminTokenServiceV1Api();

var opts = { 
  'body': new magento.Body123() // Body123 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.integrationAdminTokenServiceV1CreateAdminAccessTokenPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body123**](Body123.md)|  | [optional] 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

