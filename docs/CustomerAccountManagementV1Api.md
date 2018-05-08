# magento.CustomerAccountManagementV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**customerAccountManagementV1ActivateByIdPut**](CustomerAccountManagementV1Api.md#customerAccountManagementV1ActivateByIdPut) | **PUT** /V1/customers/me/activate | 
[**customerAccountManagementV1ActivatePut**](CustomerAccountManagementV1Api.md#customerAccountManagementV1ActivatePut) | **PUT** /V1/customers/{email}/activate | 
[**customerAccountManagementV1ChangePasswordByIdPut**](CustomerAccountManagementV1Api.md#customerAccountManagementV1ChangePasswordByIdPut) | **PUT** /V1/customers/me/password | 
[**customerAccountManagementV1CreateAccountPost**](CustomerAccountManagementV1Api.md#customerAccountManagementV1CreateAccountPost) | **POST** /V1/customers | 
[**customerAccountManagementV1GetConfirmationStatusGet**](CustomerAccountManagementV1Api.md#customerAccountManagementV1GetConfirmationStatusGet) | **GET** /V1/customers/{customerId}/confirm | 
[**customerAccountManagementV1GetDefaultBillingAddressGet**](CustomerAccountManagementV1Api.md#customerAccountManagementV1GetDefaultBillingAddressGet) | **GET** /V1/customers/me/billingAddress | 
[**customerAccountManagementV1GetDefaultBillingAddressGet_0**](CustomerAccountManagementV1Api.md#customerAccountManagementV1GetDefaultBillingAddressGet_0) | **GET** /V1/customers/{customerId}/billingAddress | 
[**customerAccountManagementV1GetDefaultShippingAddressGet**](CustomerAccountManagementV1Api.md#customerAccountManagementV1GetDefaultShippingAddressGet) | **GET** /V1/customers/me/shippingAddress | 
[**customerAccountManagementV1GetDefaultShippingAddressGet_0**](CustomerAccountManagementV1Api.md#customerAccountManagementV1GetDefaultShippingAddressGet_0) | **GET** /V1/customers/{customerId}/shippingAddress | 
[**customerAccountManagementV1InitiatePasswordResetPut**](CustomerAccountManagementV1Api.md#customerAccountManagementV1InitiatePasswordResetPut) | **PUT** /V1/customers/password | 
[**customerAccountManagementV1IsEmailAvailablePost**](CustomerAccountManagementV1Api.md#customerAccountManagementV1IsEmailAvailablePost) | **POST** /V1/customers/isEmailAvailable | 
[**customerAccountManagementV1IsReadonlyGet**](CustomerAccountManagementV1Api.md#customerAccountManagementV1IsReadonlyGet) | **GET** /V1/customers/{customerId}/permissions/readonly | 
[**customerAccountManagementV1ResendConfirmationPost**](CustomerAccountManagementV1Api.md#customerAccountManagementV1ResendConfirmationPost) | **POST** /V1/customers/confirm | 
[**customerAccountManagementV1ValidatePut**](CustomerAccountManagementV1Api.md#customerAccountManagementV1ValidatePut) | **PUT** /V1/customers/validate | 
[**customerAccountManagementV1ValidateResetPasswordLinkTokenGet**](CustomerAccountManagementV1Api.md#customerAccountManagementV1ValidateResetPasswordLinkTokenGet) | **GET** /V1/customers/{customerId}/password/resetLinkToken/{resetPasswordLinkToken} | 


<a name="customerAccountManagementV1ActivateByIdPut"></a>
# **customerAccountManagementV1ActivateByIdPut**
> CustomerDataCustomerInterface customerAccountManagementV1ActivateByIdPut(opts)



Activate a customer account using a key that was sent in a confirmation email.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CustomerAccountManagementV1Api();

var opts = { 
  'body': new magento.Body7() // Body7 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.customerAccountManagementV1ActivateByIdPut(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body7**](Body7.md)|  | [optional] 

### Return type

[**CustomerDataCustomerInterface**](CustomerDataCustomerInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="customerAccountManagementV1ActivatePut"></a>
# **customerAccountManagementV1ActivatePut**
> CustomerDataCustomerInterface customerAccountManagementV1ActivatePut(email, opts)



Activate a customer account using a key that was sent in a confirmation email.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CustomerAccountManagementV1Api();

var email = "email_example"; // String | 

var opts = { 
  'body': new magento.Body8() // Body8 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.customerAccountManagementV1ActivatePut(email, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | **String**|  | 
 **body** | [**Body8**](Body8.md)|  | [optional] 

### Return type

[**CustomerDataCustomerInterface**](CustomerDataCustomerInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="customerAccountManagementV1ChangePasswordByIdPut"></a>
# **customerAccountManagementV1ChangePasswordByIdPut**
> &#39;Boolean&#39; customerAccountManagementV1ChangePasswordByIdPut(opts)



Change customer password.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CustomerAccountManagementV1Api();

var opts = { 
  'body': new magento.Body9() // Body9 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.customerAccountManagementV1ChangePasswordByIdPut(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body9**](Body9.md)|  | [optional] 

### Return type

**&#39;Boolean&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="customerAccountManagementV1CreateAccountPost"></a>
# **customerAccountManagementV1CreateAccountPost**
> CustomerDataCustomerInterface customerAccountManagementV1CreateAccountPost(opts)



Create customer account. Perform necessary business operations like sending email.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CustomerAccountManagementV1Api();

var opts = { 
  'body': new magento.Body6() // Body6 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.customerAccountManagementV1CreateAccountPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body6**](Body6.md)|  | [optional] 

### Return type

[**CustomerDataCustomerInterface**](CustomerDataCustomerInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="customerAccountManagementV1GetConfirmationStatusGet"></a>
# **customerAccountManagementV1GetConfirmationStatusGet**
> &#39;String&#39; customerAccountManagementV1GetConfirmationStatusGet(customerId)



Gets the account confirmation status.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CustomerAccountManagementV1Api();

var customerId = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.customerAccountManagementV1GetConfirmationStatusGet(customerId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **Number**|  | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="customerAccountManagementV1GetDefaultBillingAddressGet"></a>
# **customerAccountManagementV1GetDefaultBillingAddressGet**
> CustomerDataAddressInterface customerAccountManagementV1GetDefaultBillingAddressGet()



Retrieve default billing address for the given customerId.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CustomerAccountManagementV1Api();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.customerAccountManagementV1GetDefaultBillingAddressGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**CustomerDataAddressInterface**](CustomerDataAddressInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="customerAccountManagementV1GetDefaultBillingAddressGet_0"></a>
# **customerAccountManagementV1GetDefaultBillingAddressGet_0**
> CustomerDataAddressInterface customerAccountManagementV1GetDefaultBillingAddressGet_0(customerId)



Retrieve default billing address for the given customerId.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CustomerAccountManagementV1Api();

var customerId = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.customerAccountManagementV1GetDefaultBillingAddressGet_0(customerId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **Number**|  | 

### Return type

[**CustomerDataAddressInterface**](CustomerDataAddressInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="customerAccountManagementV1GetDefaultShippingAddressGet"></a>
# **customerAccountManagementV1GetDefaultShippingAddressGet**
> CustomerDataAddressInterface customerAccountManagementV1GetDefaultShippingAddressGet()



Retrieve default shipping address for the given customerId.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CustomerAccountManagementV1Api();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.customerAccountManagementV1GetDefaultShippingAddressGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**CustomerDataAddressInterface**](CustomerDataAddressInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="customerAccountManagementV1GetDefaultShippingAddressGet_0"></a>
# **customerAccountManagementV1GetDefaultShippingAddressGet_0**
> CustomerDataAddressInterface customerAccountManagementV1GetDefaultShippingAddressGet_0(customerId)



Retrieve default shipping address for the given customerId.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CustomerAccountManagementV1Api();

var customerId = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.customerAccountManagementV1GetDefaultShippingAddressGet_0(customerId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **Number**|  | 

### Return type

[**CustomerDataAddressInterface**](CustomerDataAddressInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="customerAccountManagementV1InitiatePasswordResetPut"></a>
# **customerAccountManagementV1InitiatePasswordResetPut**
> &#39;Boolean&#39; customerAccountManagementV1InitiatePasswordResetPut(opts)



Send an email to the customer with a password reset link.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CustomerAccountManagementV1Api();

var opts = { 
  'body': new magento.Body10() // Body10 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.customerAccountManagementV1InitiatePasswordResetPut(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body10**](Body10.md)|  | [optional] 

### Return type

**&#39;Boolean&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="customerAccountManagementV1IsEmailAvailablePost"></a>
# **customerAccountManagementV1IsEmailAvailablePost**
> &#39;Boolean&#39; customerAccountManagementV1IsEmailAvailablePost(opts)



Check if given email is associated with a customer account in given website.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CustomerAccountManagementV1Api();

var opts = { 
  'body': new magento.Body13() // Body13 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.customerAccountManagementV1IsEmailAvailablePost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body13**](Body13.md)|  | [optional] 

### Return type

**&#39;Boolean&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="customerAccountManagementV1IsReadonlyGet"></a>
# **customerAccountManagementV1IsReadonlyGet**
> &#39;Boolean&#39; customerAccountManagementV1IsReadonlyGet(customerId)



Check if customer can be deleted.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CustomerAccountManagementV1Api();

var customerId = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.customerAccountManagementV1IsReadonlyGet(customerId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **Number**|  | 

### Return type

**&#39;Boolean&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="customerAccountManagementV1ResendConfirmationPost"></a>
# **customerAccountManagementV1ResendConfirmationPost**
> &#39;Boolean&#39; customerAccountManagementV1ResendConfirmationPost(opts)



Resend confirmation email.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CustomerAccountManagementV1Api();

var opts = { 
  'body': new magento.Body11() // Body11 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.customerAccountManagementV1ResendConfirmationPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body11**](Body11.md)|  | [optional] 

### Return type

**&#39;Boolean&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="customerAccountManagementV1ValidatePut"></a>
# **customerAccountManagementV1ValidatePut**
> CustomerDataValidationResultsInterface customerAccountManagementV1ValidatePut(opts)



Validate customer data.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CustomerAccountManagementV1Api();

var opts = { 
  'body': new magento.Body12() // Body12 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.customerAccountManagementV1ValidatePut(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body12**](Body12.md)|  | [optional] 

### Return type

[**CustomerDataValidationResultsInterface**](CustomerDataValidationResultsInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="customerAccountManagementV1ValidateResetPasswordLinkTokenGet"></a>
# **customerAccountManagementV1ValidateResetPasswordLinkTokenGet**
> &#39;Boolean&#39; customerAccountManagementV1ValidateResetPasswordLinkTokenGet(customerId, resetPasswordLinkToken)



Check if password reset token is valid.

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.CustomerAccountManagementV1Api();

var customerId = 56; // Number | 

var resetPasswordLinkToken = "resetPasswordLinkToken_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.customerAccountManagementV1ValidateResetPasswordLinkTokenGet(customerId, resetPasswordLinkToken, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **Number**|  | 
 **resetPasswordLinkToken** | **String**|  | 

### Return type

**&#39;Boolean&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

