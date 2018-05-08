# magento.SalesRuleDataRuleInterface

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ruleId** | **Number** | Rule id | [optional] 
**name** | **String** | Rule name | [optional] 
**storeLabels** | [**[SalesRuleDataRuleLabelInterface]**](SalesRuleDataRuleLabelInterface.md) | Display label | [optional] 
**description** | **String** | Description | [optional] 
**websiteIds** | **[Number]** | A list of websites the rule applies to | 
**customerGroupIds** | **[Number]** | Ids of customer groups that the rule applies to | 
**fromDate** | **String** | The start date when the coupon is active | [optional] 
**toDate** | **String** | The end date when the coupon is active | [optional] 
**usesPerCustomer** | **Number** | Number of uses per customer | 
**isActive** | **Boolean** | The coupon is active | 
**condition** | [**SalesRuleDataConditionInterface**](SalesRuleDataConditionInterface.md) |  | [optional] 
**actionCondition** | [**SalesRuleDataConditionInterface**](SalesRuleDataConditionInterface.md) |  | [optional] 
**stopRulesProcessing** | **Boolean** | To stop rule processing | 
**isAdvanced** | **Boolean** | Is this field needed | 
**productIds** | **[Number]** | Product ids | [optional] 
**sortOrder** | **Number** | Sort order | 
**simpleAction** | **String** | Simple action of the rule | [optional] 
**discountAmount** | **Number** | Discount amount | 
**discountQty** | **Number** | Maximum qty discount is applied | [optional] 
**discountStep** | **Number** | Discount step | 
**applyToShipping** | **Boolean** | The rule applies to shipping | 
**timesUsed** | **Number** | How many times the rule has been used | 
**isRss** | **Boolean** | Whether the rule is in RSS | 
**couponType** | **String** | Coupon type | 
**useAutoGeneration** | **Boolean** | To auto generate coupon | 
**usesPerCoupon** | **Number** | Limit of uses per coupon | 
**simpleFreeShipping** | **String** | To grant free shipping | [optional] 
**extensionAttributes** | [**SalesRuleDataRuleExtensionInterface**](SalesRuleDataRuleExtensionInterface.md) |  | [optional] 


