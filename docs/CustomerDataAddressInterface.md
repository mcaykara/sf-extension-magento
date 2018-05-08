# magento.CustomerDataAddressInterface

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | ID | [optional] 
**customerId** | **Number** | Customer ID | [optional] 
**region** | [**CustomerDataRegionInterface**](CustomerDataRegionInterface.md) |  | [optional] 
**regionId** | **Number** | Region ID | [optional] 
**countryId** | **String** | Country code in ISO_3166-2 format | [optional] 
**street** | **[String]** | Street | [optional] 
**company** | **String** | Company | [optional] 
**telephone** | **String** | Telephone number | [optional] 
**fax** | **String** | Fax number | [optional] 
**postcode** | **String** | Postcode | [optional] 
**city** | **String** | City name | [optional] 
**firstname** | **String** | First name | [optional] 
**lastname** | **String** | Last name | [optional] 
**middlename** | **String** | Middle name | [optional] 
**prefix** | **String** | Prefix | [optional] 
**suffix** | **String** | Suffix | [optional] 
**vatId** | **String** | Vat id | [optional] 
**defaultShipping** | **Boolean** | If this address is default shipping address. | [optional] 
**defaultBilling** | **Boolean** | If this address is default billing address | [optional] 
**extensionAttributes** | [**CustomerDataAddressExtensionInterface**](CustomerDataAddressExtensionInterface.md) |  | [optional] 
**customAttributes** | [**[FrameworkAttributeInterface]**](FrameworkAttributeInterface.md) | Custom attributes values. | [optional] 


