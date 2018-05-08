# magento.TaxDataOrderTaxDetailsItemInterface

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | Type (shipping, product, weee, gift wrapping, etc) | [optional] 
**itemId** | **Number** | Item id if this item is a product | [optional] 
**associatedItemId** | **Number** | Associated item id if this item is associated with another item, null otherwise | [optional] 
**appliedTaxes** | [**[TaxDataOrderTaxDetailsAppliedTaxInterface]**](TaxDataOrderTaxDetailsAppliedTaxInterface.md) | Applied taxes | [optional] 
**extensionAttributes** | [**TaxDataOrderTaxDetailsItemExtensionInterface**](TaxDataOrderTaxDetailsItemExtensionInterface.md) |  | [optional] 


