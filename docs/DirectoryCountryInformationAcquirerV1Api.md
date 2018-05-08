# magento.DirectoryCountryInformationAcquirerV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**directoryCountryInformationAcquirerV1GetCountriesInfoGet**](DirectoryCountryInformationAcquirerV1Api.md#directoryCountryInformationAcquirerV1GetCountriesInfoGet) | **GET** /V1/directory/countries | 
[**directoryCountryInformationAcquirerV1GetCountryInfoGet**](DirectoryCountryInformationAcquirerV1Api.md#directoryCountryInformationAcquirerV1GetCountryInfoGet) | **GET** /V1/directory/countries/{countryId} | 


<a name="directoryCountryInformationAcquirerV1GetCountriesInfoGet"></a>
# **directoryCountryInformationAcquirerV1GetCountriesInfoGet**
> [DirectoryDataCountryInformationInterface] directoryCountryInformationAcquirerV1GetCountriesInfoGet()



Get all countries and regions information for the store.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.DirectoryCountryInformationAcquirerV1Api();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.directoryCountryInformationAcquirerV1GetCountriesInfoGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[DirectoryDataCountryInformationInterface]**](DirectoryDataCountryInformationInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="directoryCountryInformationAcquirerV1GetCountryInfoGet"></a>
# **directoryCountryInformationAcquirerV1GetCountryInfoGet**
> DirectoryDataCountryInformationInterface directoryCountryInformationAcquirerV1GetCountryInfoGet(countryId)



Get country and region information for the store.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.DirectoryCountryInformationAcquirerV1Api();

var countryId = "countryId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.directoryCountryInformationAcquirerV1GetCountryInfoGet(countryId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **countryId** | **String**|  | 

### Return type

[**DirectoryDataCountryInformationInterface**](DirectoryDataCountryInformationInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

