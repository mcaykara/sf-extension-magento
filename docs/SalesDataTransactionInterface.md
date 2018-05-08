# magento.SalesDataTransactionInterface

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transactionId** | **Number** | Transaction ID. | 
**parentId** | **Number** | The parent ID for the transaction. Otherwise, null. | [optional] 
**orderId** | **Number** | Order ID. | 
**paymentId** | **Number** | Payment ID. | 
**txnId** | **String** | Transaction business ID. | 
**parentTxnId** | **String** | Parent transaction business ID. | 
**txnType** | **String** | Transaction type. | 
**isClosed** | **Number** | Is-closed flag value. | 
**additionalInformation** | **[String]** | Array of additional information. Otherwise, null. | [optional] 
**createdAt** | **String** | Created-at timestamp. | 
**childTransactions** | [**[SalesDataTransactionInterface]**](SalesDataTransactionInterface.md) | Array of child transactions. | 
**extensionAttributes** | [**SalesDataTransactionExtensionInterface**](SalesDataTransactionExtensionInterface.md) |  | [optional] 


