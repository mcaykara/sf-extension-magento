# magento.CustomerDataAttributeMetadataInterface

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**frontendInput** | **String** | HTML for input element. | 
**inputFilter** | **String** | Template used for input (e.g. \&quot;date\&quot;) | 
**storeLabel** | **String** | Label of the store. | 
**validationRules** | [**[CustomerDataValidationRuleInterface]**](CustomerDataValidationRuleInterface.md) | Validation rules. | 
**multilineCount** | **Number** | Of lines of the attribute value. | 
**visible** | **Boolean** | Attribute is visible on frontend. | 
**required** | **Boolean** | Attribute is required. | 
**dataModel** | **String** | Data model for attribute. | 
**options** | [**[CustomerDataOptionInterface]**](CustomerDataOptionInterface.md) | Options of the attribute (key &#x3D;&gt; value pairs for select) | 
**frontendClass** | **String** | Class which is used to display the attribute on frontend. | 
**userDefined** | **Boolean** | Current attribute has been defined by a user. | 
**sortOrder** | **Number** | Attributes sort order. | 
**frontendLabel** | **String** | Label which supposed to be displayed on frontend. | 
**note** | **String** | The note attribute for the element. | 
**system** | **Boolean** | This is a system attribute. | 
**backendType** | **String** | Backend type. | 
**isUsedInGrid** | **Boolean** | It is used in customer grid | [optional] 
**isVisibleInGrid** | **Boolean** | It is visible in customer grid | [optional] 
**isFilterableInGrid** | **Boolean** | It is filterable in customer grid | [optional] 
**isSearchableInGrid** | **Boolean** | It is searchable in customer grid | [optional] 
**attributeCode** | **String** | Code of the attribute. | 


