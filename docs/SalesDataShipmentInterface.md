# magento.SalesDataShipmentInterface

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billingAddressId** | **Number** | Billing address ID. | [optional] 
**createdAt** | **String** | Created-at timestamp. | [optional] 
**customerId** | **Number** | Customer ID. | [optional] 
**emailSent** | **Number** | Email-sent flag value. | [optional] 
**entityId** | **Number** | Shipment ID. | [optional] 
**incrementId** | **String** | Increment ID. | [optional] 
**orderId** | **Number** | Order ID. | 
**packages** | [**[SalesDataShipmentPackageInterface]**](SalesDataShipmentPackageInterface.md) | Array of packages, if any. Otherwise, null. | [optional] 
**shipmentStatus** | **Number** | Shipment status. | [optional] 
**shippingAddressId** | **Number** | Shipping address ID. | [optional] 
**shippingLabel** | **String** | Shipping label. | [optional] 
**storeId** | **Number** | Store ID. | [optional] 
**totalQty** | **Number** | Total quantity. | [optional] 
**totalWeight** | **Number** | Total weight. | [optional] 
**updatedAt** | **String** | Updated-at timestamp. | [optional] 
**items** | [**[SalesDataShipmentItemInterface]**](SalesDataShipmentItemInterface.md) | Array of items. | 
**tracks** | [**[SalesDataShipmentTrackInterface]**](SalesDataShipmentTrackInterface.md) | Array of tracks. | 
**comments** | [**[SalesDataShipmentCommentInterface]**](SalesDataShipmentCommentInterface.md) | Array of comments. | 
**extensionAttributes** | [**SalesDataShipmentExtensionInterface**](SalesDataShipmentExtensionInterface.md) |  | [optional] 


