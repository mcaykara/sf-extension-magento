# magento.QuoteDataTotalsInterface

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**grandTotal** | **Number** | Grand total in quote currency | [optional] 
**baseGrandTotal** | **Number** | Grand total in base currency | [optional] 
**subtotal** | **Number** | Subtotal in quote currency | [optional] 
**baseSubtotal** | **Number** | Subtotal in base currency | [optional] 
**discountAmount** | **Number** | Discount amount in quote currency | [optional] 
**baseDiscountAmount** | **Number** | Discount amount in base currency | [optional] 
**subtotalWithDiscount** | **Number** | Subtotal in quote currency with applied discount | [optional] 
**baseSubtotalWithDiscount** | **Number** | Subtotal in base currency with applied discount | [optional] 
**shippingAmount** | **Number** | Shipping amount in quote currency | [optional] 
**baseShippingAmount** | **Number** | Shipping amount in base currency | [optional] 
**shippingDiscountAmount** | **Number** | Shipping discount amount in quote currency | [optional] 
**baseShippingDiscountAmount** | **Number** | Shipping discount amount in base currency | [optional] 
**taxAmount** | **Number** | Tax amount in quote currency | [optional] 
**baseTaxAmount** | **Number** | Tax amount in base currency | [optional] 
**weeeTaxAppliedAmount** | **Number** | Item weee tax applied amount in quote currency. | 
**shippingTaxAmount** | **Number** | Shipping tax amount in quote currency | [optional] 
**baseShippingTaxAmount** | **Number** | Shipping tax amount in base currency | [optional] 
**subtotalInclTax** | **Number** | Subtotal including tax in quote currency | [optional] 
**baseSubtotalInclTax** | **Number** | Subtotal including tax in base currency | [optional] 
**shippingInclTax** | **Number** | Shipping including tax in quote currency | [optional] 
**baseShippingInclTax** | **Number** | Shipping including tax in base currency | [optional] 
**baseCurrencyCode** | **String** | Base currency code | [optional] 
**quoteCurrencyCode** | **String** | Quote currency code | [optional] 
**couponCode** | **String** | Applied coupon code | [optional] 
**itemsQty** | **Number** | Items qty | [optional] 
**items** | [**[QuoteDataTotalsItemInterface]**](QuoteDataTotalsItemInterface.md) | Totals by items | [optional] 
**totalSegments** | [**[QuoteDataTotalSegmentInterface]**](QuoteDataTotalSegmentInterface.md) | Dynamically calculated totals | 
**extensionAttributes** | [**QuoteDataTotalsExtensionInterface**](QuoteDataTotalsExtensionInterface.md) |  | [optional] 


