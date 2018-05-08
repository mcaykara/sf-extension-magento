# magento.DirectoryCurrencyInformationAcquirerV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**directoryCurrencyInformationAcquirerV1GetCurrencyInfoGet**](DirectoryCurrencyInformationAcquirerV1Api.md#directoryCurrencyInformationAcquirerV1GetCurrencyInfoGet) | **GET** /V1/directory/currency | 


<a name="directoryCurrencyInformationAcquirerV1GetCurrencyInfoGet"></a>
# **directoryCurrencyInformationAcquirerV1GetCurrencyInfoGet**
> DirectoryDataCurrencyInformationInterface directoryCurrencyInformationAcquirerV1GetCurrencyInfoGet()



Get currency information for the store.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.DirectoryCurrencyInformationAcquirerV1Api();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.directoryCurrencyInformationAcquirerV1GetCurrencyInfoGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**DirectoryDataCurrencyInformationInterface**](DirectoryDataCurrencyInformationInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

