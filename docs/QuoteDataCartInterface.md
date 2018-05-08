# magento.QuoteDataCartInterface

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Cart/quote ID. | 
**createdAt** | **String** | Cart creation date and time. Otherwise, null. | [optional] 
**updatedAt** | **String** | Cart last update date and time. Otherwise, null. | [optional] 
**convertedAt** | **String** | Cart conversion date and time. Otherwise, null. | [optional] 
**isActive** | **Boolean** | Active status flag value. Otherwise, null. | [optional] 
**isVirtual** | **Boolean** | Virtual flag value. Otherwise, null. | [optional] 
**items** | [**[QuoteDataCartItemInterface]**](QuoteDataCartItemInterface.md) | Array of items. Otherwise, null. | [optional] 
**itemsCount** | **Number** | Number of different items or products in the cart. Otherwise, null. | [optional] 
**itemsQty** | **Number** | Total quantity of all cart items. Otherwise, null. | [optional] 
**customer** | [**CustomerDataCustomerInterface**](CustomerDataCustomerInterface.md) |  | 
**billingAddress** | [**QuoteDataAddressInterface**](QuoteDataAddressInterface.md) |  | [optional] 
**reservedOrderId** | **Number** | Reserved order ID. Otherwise, null. | [optional] 
**origOrderId** | **Number** | Original order ID. Otherwise, null. | [optional] 
**currency** | [**QuoteDataCurrencyInterface**](QuoteDataCurrencyInterface.md) |  | [optional] 
**customerIsGuest** | **Boolean** | For guest customers, false for logged in customers | [optional] 
**customerNote** | **String** | Notice text | [optional] 
**customerNoteNotify** | **Boolean** | Customer notification flag | [optional] 
**customerTaxClassId** | **Number** | Customer tax class ID. | [optional] 
**storeId** | **Number** | Store identifier | 
**extensionAttributes** | [**QuoteDataCartExtensionInterface**](QuoteDataCartExtensionInterface.md) |  | [optional] 


