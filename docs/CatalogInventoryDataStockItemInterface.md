# magento.CatalogInventoryDataStockItemInterface

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**itemId** | **Number** |  | [optional] 
**productId** | **Number** |  | [optional] 
**stockId** | **Number** | Stock identifier | [optional] 
**qty** | **Number** |  | 
**isInStock** | **Boolean** | Stock Availability | 
**isQtyDecimal** | **Boolean** |  | 
**showDefaultNotificationMessage** | **Boolean** |  | 
**useConfigMinQty** | **Boolean** |  | 
**minQty** | **Number** | Minimal quantity available for item status in stock | 
**useConfigMinSaleQty** | **Number** |  | 
**minSaleQty** | **Number** | Minimum Qty Allowed in Shopping Cart or NULL when there is no limitation | 
**useConfigMaxSaleQty** | **Boolean** |  | 
**maxSaleQty** | **Number** | Maximum Qty Allowed in Shopping Cart data wrapper | 
**useConfigBackorders** | **Boolean** |  | 
**backorders** | **Number** | Backorders status | 
**useConfigNotifyStockQty** | **Boolean** |  | 
**notifyStockQty** | **Number** | Notify for Quantity Below data wrapper | 
**useConfigQtyIncrements** | **Boolean** |  | 
**qtyIncrements** | **Number** | Quantity Increments data wrapper | 
**useConfigEnableQtyInc** | **Boolean** |  | 
**enableQtyIncrements** | **Boolean** | Whether Quantity Increments is enabled | 
**useConfigManageStock** | **Boolean** |  | 
**manageStock** | **Boolean** | Can Manage Stock | 
**lowStockDate** | **String** |  | 
**isDecimalDivided** | **Boolean** |  | 
**stockStatusChangedAuto** | **Number** |  | 
**extensionAttributes** | [**CatalogInventoryDataStockItemExtensionInterface**](CatalogInventoryDataStockItemExtensionInterface.md) |  | [optional] 


