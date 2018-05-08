# magento.BackendModuleServiceV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**backendModuleServiceV1GetModulesGet**](BackendModuleServiceV1Api.md#backendModuleServiceV1GetModulesGet) | **GET** /V1/modules | 


<a name="backendModuleServiceV1GetModulesGet"></a>
# **backendModuleServiceV1GetModulesGet**
> [&#39;String&#39;] backendModuleServiceV1GetModulesGet()



Returns an array of enabled modules

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.BackendModuleServiceV1Api();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.backendModuleServiceV1GetModulesGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

**[&#39;String&#39;]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

