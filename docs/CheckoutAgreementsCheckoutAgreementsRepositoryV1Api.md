# magento.CheckoutAgreementsCheckoutAgreementsRepositoryV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**checkoutAgreementsCheckoutAgreementsRepositoryV1GetListGet**](CheckoutAgreementsCheckoutAgreementsRepositoryV1Api.md#checkoutAgreementsCheckoutAgreementsRepositoryV1GetListGet) | **GET** /V1/carts/licence | 


<a name="checkoutAgreementsCheckoutAgreementsRepositoryV1GetListGet"></a>
# **checkoutAgreementsCheckoutAgreementsRepositoryV1GetListGet**
> [CheckoutAgreementsDataAgreementInterface] checkoutAgreementsCheckoutAgreementsRepositoryV1GetListGet()



Lists active checkout agreements.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CheckoutAgreementsCheckoutAgreementsRepositoryV1Api();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.checkoutAgreementsCheckoutAgreementsRepositoryV1GetListGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[CheckoutAgreementsDataAgreementInterface]**](CheckoutAgreementsDataAgreementInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

