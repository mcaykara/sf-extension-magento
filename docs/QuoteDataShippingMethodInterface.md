# magento.QuoteDataShippingMethodInterface

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**carrierCode** | **String** | Shipping carrier code. | 
**methodCode** | **String** | Shipping method code. | 
**carrierTitle** | **String** | Shipping carrier title. Otherwise, null. | [optional] 
**methodTitle** | **String** | Shipping method title. Otherwise, null. | [optional] 
**amount** | **Number** | Shipping amount in store currency. | 
**baseAmount** | **Number** | Shipping amount in base currency. | 
**available** | **Boolean** | The value of the availability flag for the current shipping method. | 
**extensionAttributes** | [**QuoteDataShippingMethodExtensionInterface**](QuoteDataShippingMethodExtensionInterface.md) |  | [optional] 
**errorMessage** | **String** | Shipping Error message. | 
**priceExclTax** | **Number** | Shipping price excl tax. | 
**priceInclTax** | **Number** | Shipping price incl tax. | 


