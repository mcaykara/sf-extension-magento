# magento.RewardRewardManagementV1Api

All URIs are relative to *http://t2010.vg/rest/default*

Method | HTTP request | Description
------------- | ------------- | -------------
[**rewardRewardManagementV1SetPost**](RewardRewardManagementV1Api.md#rewardRewardManagementV1SetPost) | **POST** /V1/reward/mine/use-reward | 


<a name="rewardRewardManagementV1SetPost"></a>
# **rewardRewardManagementV1SetPost**
> &#39;Boolean&#39; rewardRewardManagementV1SetPost()



Set reward points to quote

### Example
```javascript
var magento = require('sf-extension-magento');

var apiInstance = new magento.RewardRewardManagementV1Api();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.rewardRewardManagementV1SetPost(callback);
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

