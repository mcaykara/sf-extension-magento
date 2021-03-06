/**
 * Magento Enterprise Edition 2.0
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 2.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/CatalogDataProductOptionInterface', 'model/SalesDataOrderItemExtensionInterface', 'model/SalesDataOrderItemInterface'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CatalogDataProductOptionInterface'), require('./SalesDataOrderItemExtensionInterface'), require('./SalesDataOrderItemInterface'));
  } else {
    // Browser globals (root is window)
    if (!root.magento) {
      root.magento = {};
    }
    root.magento.SalesDataOrderItemInterface = factory(root.magento.ApiClient, root.magento.CatalogDataProductOptionInterface, root.magento.SalesDataOrderItemExtensionInterface, root.magento.SalesDataOrderItemInterface);
  }
}(this, function(ApiClient, CatalogDataProductOptionInterface, SalesDataOrderItemExtensionInterface, SalesDataOrderItemInterface) {
  'use strict';




  /**
   * The SalesDataOrderItemInterface model module.
   * @module model/SalesDataOrderItemInterface
   * @version 2.0
   */

  /**
   * Constructs a new <code>SalesDataOrderItemInterface</code>.
   * Order item interface. An order is a document that a web store issues to a customer. Magento generates a sales order that lists the product items, billing and shipping addresses, and shipping and payment methods. A corresponding external document, known as a purchase order, is emailed to the customer.
   * @alias module:model/SalesDataOrderItemInterface
   * @class
   * @param sku {String} SKU.
   */
  var exports = function(sku) {
    var _this = this;














































































    _this['sku'] = sku;

















  };

  /**
   * Constructs a <code>SalesDataOrderItemInterface</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SalesDataOrderItemInterface} obj Optional instance to populate.
   * @return {module:model/SalesDataOrderItemInterface} The populated <code>SalesDataOrderItemInterface</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('additionalData')) {
        obj['additionalData'] = ApiClient.convertToType(data['additionalData'], 'String');
      }
      if (data.hasOwnProperty('amountRefunded')) {
        obj['amountRefunded'] = ApiClient.convertToType(data['amountRefunded'], 'Number');
      }
      if (data.hasOwnProperty('appliedRuleIds')) {
        obj['appliedRuleIds'] = ApiClient.convertToType(data['appliedRuleIds'], 'String');
      }
      if (data.hasOwnProperty('baseAmountRefunded')) {
        obj['baseAmountRefunded'] = ApiClient.convertToType(data['baseAmountRefunded'], 'Number');
      }
      if (data.hasOwnProperty('baseCost')) {
        obj['baseCost'] = ApiClient.convertToType(data['baseCost'], 'Number');
      }
      if (data.hasOwnProperty('baseDiscountAmount')) {
        obj['baseDiscountAmount'] = ApiClient.convertToType(data['baseDiscountAmount'], 'Number');
      }
      if (data.hasOwnProperty('baseDiscountInvoiced')) {
        obj['baseDiscountInvoiced'] = ApiClient.convertToType(data['baseDiscountInvoiced'], 'Number');
      }
      if (data.hasOwnProperty('baseDiscountRefunded')) {
        obj['baseDiscountRefunded'] = ApiClient.convertToType(data['baseDiscountRefunded'], 'Number');
      }
      if (data.hasOwnProperty('baseDiscountTaxCompensationAmount')) {
        obj['baseDiscountTaxCompensationAmount'] = ApiClient.convertToType(data['baseDiscountTaxCompensationAmount'], 'Number');
      }
      if (data.hasOwnProperty('baseDiscountTaxCompensationInvoiced')) {
        obj['baseDiscountTaxCompensationInvoiced'] = ApiClient.convertToType(data['baseDiscountTaxCompensationInvoiced'], 'Number');
      }
      if (data.hasOwnProperty('baseDiscountTaxCompensationRefunded')) {
        obj['baseDiscountTaxCompensationRefunded'] = ApiClient.convertToType(data['baseDiscountTaxCompensationRefunded'], 'Number');
      }
      if (data.hasOwnProperty('baseOriginalPrice')) {
        obj['baseOriginalPrice'] = ApiClient.convertToType(data['baseOriginalPrice'], 'Number');
      }
      if (data.hasOwnProperty('basePrice')) {
        obj['basePrice'] = ApiClient.convertToType(data['basePrice'], 'Number');
      }
      if (data.hasOwnProperty('basePriceInclTax')) {
        obj['basePriceInclTax'] = ApiClient.convertToType(data['basePriceInclTax'], 'Number');
      }
      if (data.hasOwnProperty('baseRowInvoiced')) {
        obj['baseRowInvoiced'] = ApiClient.convertToType(data['baseRowInvoiced'], 'Number');
      }
      if (data.hasOwnProperty('baseRowTotal')) {
        obj['baseRowTotal'] = ApiClient.convertToType(data['baseRowTotal'], 'Number');
      }
      if (data.hasOwnProperty('baseRowTotalInclTax')) {
        obj['baseRowTotalInclTax'] = ApiClient.convertToType(data['baseRowTotalInclTax'], 'Number');
      }
      if (data.hasOwnProperty('baseTaxAmount')) {
        obj['baseTaxAmount'] = ApiClient.convertToType(data['baseTaxAmount'], 'Number');
      }
      if (data.hasOwnProperty('baseTaxBeforeDiscount')) {
        obj['baseTaxBeforeDiscount'] = ApiClient.convertToType(data['baseTaxBeforeDiscount'], 'Number');
      }
      if (data.hasOwnProperty('baseTaxInvoiced')) {
        obj['baseTaxInvoiced'] = ApiClient.convertToType(data['baseTaxInvoiced'], 'Number');
      }
      if (data.hasOwnProperty('baseTaxRefunded')) {
        obj['baseTaxRefunded'] = ApiClient.convertToType(data['baseTaxRefunded'], 'Number');
      }
      if (data.hasOwnProperty('baseWeeeTaxAppliedAmount')) {
        obj['baseWeeeTaxAppliedAmount'] = ApiClient.convertToType(data['baseWeeeTaxAppliedAmount'], 'Number');
      }
      if (data.hasOwnProperty('baseWeeeTaxAppliedRowAmnt')) {
        obj['baseWeeeTaxAppliedRowAmnt'] = ApiClient.convertToType(data['baseWeeeTaxAppliedRowAmnt'], 'Number');
      }
      if (data.hasOwnProperty('baseWeeeTaxDisposition')) {
        obj['baseWeeeTaxDisposition'] = ApiClient.convertToType(data['baseWeeeTaxDisposition'], 'Number');
      }
      if (data.hasOwnProperty('baseWeeeTaxRowDisposition')) {
        obj['baseWeeeTaxRowDisposition'] = ApiClient.convertToType(data['baseWeeeTaxRowDisposition'], 'Number');
      }
      if (data.hasOwnProperty('createdAt')) {
        obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('discountAmount')) {
        obj['discountAmount'] = ApiClient.convertToType(data['discountAmount'], 'Number');
      }
      if (data.hasOwnProperty('discountInvoiced')) {
        obj['discountInvoiced'] = ApiClient.convertToType(data['discountInvoiced'], 'Number');
      }
      if (data.hasOwnProperty('discountPercent')) {
        obj['discountPercent'] = ApiClient.convertToType(data['discountPercent'], 'Number');
      }
      if (data.hasOwnProperty('discountRefunded')) {
        obj['discountRefunded'] = ApiClient.convertToType(data['discountRefunded'], 'Number');
      }
      if (data.hasOwnProperty('eventId')) {
        obj['eventId'] = ApiClient.convertToType(data['eventId'], 'Number');
      }
      if (data.hasOwnProperty('extOrderItemId')) {
        obj['extOrderItemId'] = ApiClient.convertToType(data['extOrderItemId'], 'String');
      }
      if (data.hasOwnProperty('freeShipping')) {
        obj['freeShipping'] = ApiClient.convertToType(data['freeShipping'], 'Number');
      }
      if (data.hasOwnProperty('gwBasePrice')) {
        obj['gwBasePrice'] = ApiClient.convertToType(data['gwBasePrice'], 'Number');
      }
      if (data.hasOwnProperty('gwBasePriceInvoiced')) {
        obj['gwBasePriceInvoiced'] = ApiClient.convertToType(data['gwBasePriceInvoiced'], 'Number');
      }
      if (data.hasOwnProperty('gwBasePriceRefunded')) {
        obj['gwBasePriceRefunded'] = ApiClient.convertToType(data['gwBasePriceRefunded'], 'Number');
      }
      if (data.hasOwnProperty('gwBaseTaxAmount')) {
        obj['gwBaseTaxAmount'] = ApiClient.convertToType(data['gwBaseTaxAmount'], 'Number');
      }
      if (data.hasOwnProperty('gwBaseTaxAmountInvoiced')) {
        obj['gwBaseTaxAmountInvoiced'] = ApiClient.convertToType(data['gwBaseTaxAmountInvoiced'], 'Number');
      }
      if (data.hasOwnProperty('gwBaseTaxAmountRefunded')) {
        obj['gwBaseTaxAmountRefunded'] = ApiClient.convertToType(data['gwBaseTaxAmountRefunded'], 'Number');
      }
      if (data.hasOwnProperty('gwId')) {
        obj['gwId'] = ApiClient.convertToType(data['gwId'], 'Number');
      }
      if (data.hasOwnProperty('gwPrice')) {
        obj['gwPrice'] = ApiClient.convertToType(data['gwPrice'], 'Number');
      }
      if (data.hasOwnProperty('gwPriceInvoiced')) {
        obj['gwPriceInvoiced'] = ApiClient.convertToType(data['gwPriceInvoiced'], 'Number');
      }
      if (data.hasOwnProperty('gwPriceRefunded')) {
        obj['gwPriceRefunded'] = ApiClient.convertToType(data['gwPriceRefunded'], 'Number');
      }
      if (data.hasOwnProperty('gwTaxAmount')) {
        obj['gwTaxAmount'] = ApiClient.convertToType(data['gwTaxAmount'], 'Number');
      }
      if (data.hasOwnProperty('gwTaxAmountInvoiced')) {
        obj['gwTaxAmountInvoiced'] = ApiClient.convertToType(data['gwTaxAmountInvoiced'], 'Number');
      }
      if (data.hasOwnProperty('gwTaxAmountRefunded')) {
        obj['gwTaxAmountRefunded'] = ApiClient.convertToType(data['gwTaxAmountRefunded'], 'Number');
      }
      if (data.hasOwnProperty('discountTaxCompensationAmount')) {
        obj['discountTaxCompensationAmount'] = ApiClient.convertToType(data['discountTaxCompensationAmount'], 'Number');
      }
      if (data.hasOwnProperty('discountTaxCompensationCanceled')) {
        obj['discountTaxCompensationCanceled'] = ApiClient.convertToType(data['discountTaxCompensationCanceled'], 'Number');
      }
      if (data.hasOwnProperty('discountTaxCompensationInvoiced')) {
        obj['discountTaxCompensationInvoiced'] = ApiClient.convertToType(data['discountTaxCompensationInvoiced'], 'Number');
      }
      if (data.hasOwnProperty('discountTaxCompensationRefunded')) {
        obj['discountTaxCompensationRefunded'] = ApiClient.convertToType(data['discountTaxCompensationRefunded'], 'Number');
      }
      if (data.hasOwnProperty('isQtyDecimal')) {
        obj['isQtyDecimal'] = ApiClient.convertToType(data['isQtyDecimal'], 'Number');
      }
      if (data.hasOwnProperty('isVirtual')) {
        obj['isVirtual'] = ApiClient.convertToType(data['isVirtual'], 'Number');
      }
      if (data.hasOwnProperty('itemId')) {
        obj['itemId'] = ApiClient.convertToType(data['itemId'], 'Number');
      }
      if (data.hasOwnProperty('lockedDoInvoice')) {
        obj['lockedDoInvoice'] = ApiClient.convertToType(data['lockedDoInvoice'], 'Number');
      }
      if (data.hasOwnProperty('lockedDoShip')) {
        obj['lockedDoShip'] = ApiClient.convertToType(data['lockedDoShip'], 'Number');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('noDiscount')) {
        obj['noDiscount'] = ApiClient.convertToType(data['noDiscount'], 'Number');
      }
      if (data.hasOwnProperty('orderId')) {
        obj['orderId'] = ApiClient.convertToType(data['orderId'], 'Number');
      }
      if (data.hasOwnProperty('originalPrice')) {
        obj['originalPrice'] = ApiClient.convertToType(data['originalPrice'], 'Number');
      }
      if (data.hasOwnProperty('parentItemId')) {
        obj['parentItemId'] = ApiClient.convertToType(data['parentItemId'], 'Number');
      }
      if (data.hasOwnProperty('price')) {
        obj['price'] = ApiClient.convertToType(data['price'], 'Number');
      }
      if (data.hasOwnProperty('priceInclTax')) {
        obj['priceInclTax'] = ApiClient.convertToType(data['priceInclTax'], 'Number');
      }
      if (data.hasOwnProperty('productId')) {
        obj['productId'] = ApiClient.convertToType(data['productId'], 'Number');
      }
      if (data.hasOwnProperty('productType')) {
        obj['productType'] = ApiClient.convertToType(data['productType'], 'String');
      }
      if (data.hasOwnProperty('qtyBackordered')) {
        obj['qtyBackordered'] = ApiClient.convertToType(data['qtyBackordered'], 'Number');
      }
      if (data.hasOwnProperty('qtyCanceled')) {
        obj['qtyCanceled'] = ApiClient.convertToType(data['qtyCanceled'], 'Number');
      }
      if (data.hasOwnProperty('qtyInvoiced')) {
        obj['qtyInvoiced'] = ApiClient.convertToType(data['qtyInvoiced'], 'Number');
      }
      if (data.hasOwnProperty('qtyOrdered')) {
        obj['qtyOrdered'] = ApiClient.convertToType(data['qtyOrdered'], 'Number');
      }
      if (data.hasOwnProperty('qtyRefunded')) {
        obj['qtyRefunded'] = ApiClient.convertToType(data['qtyRefunded'], 'Number');
      }
      if (data.hasOwnProperty('qtyReturned')) {
        obj['qtyReturned'] = ApiClient.convertToType(data['qtyReturned'], 'Number');
      }
      if (data.hasOwnProperty('qtyShipped')) {
        obj['qtyShipped'] = ApiClient.convertToType(data['qtyShipped'], 'Number');
      }
      if (data.hasOwnProperty('quoteItemId')) {
        obj['quoteItemId'] = ApiClient.convertToType(data['quoteItemId'], 'Number');
      }
      if (data.hasOwnProperty('rowInvoiced')) {
        obj['rowInvoiced'] = ApiClient.convertToType(data['rowInvoiced'], 'Number');
      }
      if (data.hasOwnProperty('rowTotal')) {
        obj['rowTotal'] = ApiClient.convertToType(data['rowTotal'], 'Number');
      }
      if (data.hasOwnProperty('rowTotalInclTax')) {
        obj['rowTotalInclTax'] = ApiClient.convertToType(data['rowTotalInclTax'], 'Number');
      }
      if (data.hasOwnProperty('rowWeight')) {
        obj['rowWeight'] = ApiClient.convertToType(data['rowWeight'], 'Number');
      }
      if (data.hasOwnProperty('sku')) {
        obj['sku'] = ApiClient.convertToType(data['sku'], 'String');
      }
      if (data.hasOwnProperty('storeId')) {
        obj['storeId'] = ApiClient.convertToType(data['storeId'], 'Number');
      }
      if (data.hasOwnProperty('taxAmount')) {
        obj['taxAmount'] = ApiClient.convertToType(data['taxAmount'], 'Number');
      }
      if (data.hasOwnProperty('taxBeforeDiscount')) {
        obj['taxBeforeDiscount'] = ApiClient.convertToType(data['taxBeforeDiscount'], 'Number');
      }
      if (data.hasOwnProperty('taxCanceled')) {
        obj['taxCanceled'] = ApiClient.convertToType(data['taxCanceled'], 'Number');
      }
      if (data.hasOwnProperty('taxInvoiced')) {
        obj['taxInvoiced'] = ApiClient.convertToType(data['taxInvoiced'], 'Number');
      }
      if (data.hasOwnProperty('taxPercent')) {
        obj['taxPercent'] = ApiClient.convertToType(data['taxPercent'], 'Number');
      }
      if (data.hasOwnProperty('taxRefunded')) {
        obj['taxRefunded'] = ApiClient.convertToType(data['taxRefunded'], 'Number');
      }
      if (data.hasOwnProperty('updatedAt')) {
        obj['updatedAt'] = ApiClient.convertToType(data['updatedAt'], 'String');
      }
      if (data.hasOwnProperty('weeeTaxApplied')) {
        obj['weeeTaxApplied'] = ApiClient.convertToType(data['weeeTaxApplied'], 'String');
      }
      if (data.hasOwnProperty('weeeTaxAppliedAmount')) {
        obj['weeeTaxAppliedAmount'] = ApiClient.convertToType(data['weeeTaxAppliedAmount'], 'Number');
      }
      if (data.hasOwnProperty('weeeTaxAppliedRowAmount')) {
        obj['weeeTaxAppliedRowAmount'] = ApiClient.convertToType(data['weeeTaxAppliedRowAmount'], 'Number');
      }
      if (data.hasOwnProperty('weeeTaxDisposition')) {
        obj['weeeTaxDisposition'] = ApiClient.convertToType(data['weeeTaxDisposition'], 'Number');
      }
      if (data.hasOwnProperty('weeeTaxRowDisposition')) {
        obj['weeeTaxRowDisposition'] = ApiClient.convertToType(data['weeeTaxRowDisposition'], 'Number');
      }
      if (data.hasOwnProperty('weight')) {
        obj['weight'] = ApiClient.convertToType(data['weight'], 'Number');
      }
      if (data.hasOwnProperty('parentItem')) {
        obj['parentItem'] = SalesDataOrderItemInterface.constructFromObject(data['parentItem']);
      }
      if (data.hasOwnProperty('productOption')) {
        obj['productOption'] = CatalogDataProductOptionInterface.constructFromObject(data['productOption']);
      }
      if (data.hasOwnProperty('extensionAttributes')) {
        obj['extensionAttributes'] = SalesDataOrderItemExtensionInterface.constructFromObject(data['extensionAttributes']);
      }
    }
    return obj;
  }

  /**
   * Additional data.
   * @member {String} additionalData
   */
  exports.prototype['additionalData'] = undefined;
  /**
   * Amount refunded.
   * @member {Number} amountRefunded
   */
  exports.prototype['amountRefunded'] = undefined;
  /**
   * Applied rule IDs.
   * @member {String} appliedRuleIds
   */
  exports.prototype['appliedRuleIds'] = undefined;
  /**
   * Base amount refunded.
   * @member {Number} baseAmountRefunded
   */
  exports.prototype['baseAmountRefunded'] = undefined;
  /**
   * Base cost.
   * @member {Number} baseCost
   */
  exports.prototype['baseCost'] = undefined;
  /**
   * Base discount amount.
   * @member {Number} baseDiscountAmount
   */
  exports.prototype['baseDiscountAmount'] = undefined;
  /**
   * Base discount invoiced.
   * @member {Number} baseDiscountInvoiced
   */
  exports.prototype['baseDiscountInvoiced'] = undefined;
  /**
   * Base discount refunded.
   * @member {Number} baseDiscountRefunded
   */
  exports.prototype['baseDiscountRefunded'] = undefined;
  /**
   * Base discount tax compensation amount.
   * @member {Number} baseDiscountTaxCompensationAmount
   */
  exports.prototype['baseDiscountTaxCompensationAmount'] = undefined;
  /**
   * Base discount tax compensation invoiced.
   * @member {Number} baseDiscountTaxCompensationInvoiced
   */
  exports.prototype['baseDiscountTaxCompensationInvoiced'] = undefined;
  /**
   * Base discount tax compensation refunded.
   * @member {Number} baseDiscountTaxCompensationRefunded
   */
  exports.prototype['baseDiscountTaxCompensationRefunded'] = undefined;
  /**
   * Base original price.
   * @member {Number} baseOriginalPrice
   */
  exports.prototype['baseOriginalPrice'] = undefined;
  /**
   * Base price.
   * @member {Number} basePrice
   */
  exports.prototype['basePrice'] = undefined;
  /**
   * Base price including tax.
   * @member {Number} basePriceInclTax
   */
  exports.prototype['basePriceInclTax'] = undefined;
  /**
   * Base row invoiced.
   * @member {Number} baseRowInvoiced
   */
  exports.prototype['baseRowInvoiced'] = undefined;
  /**
   * Base row total.
   * @member {Number} baseRowTotal
   */
  exports.prototype['baseRowTotal'] = undefined;
  /**
   * Base row total including tax.
   * @member {Number} baseRowTotalInclTax
   */
  exports.prototype['baseRowTotalInclTax'] = undefined;
  /**
   * Base tax amount.
   * @member {Number} baseTaxAmount
   */
  exports.prototype['baseTaxAmount'] = undefined;
  /**
   * Base tax before discount.
   * @member {Number} baseTaxBeforeDiscount
   */
  exports.prototype['baseTaxBeforeDiscount'] = undefined;
  /**
   * Base tax invoiced.
   * @member {Number} baseTaxInvoiced
   */
  exports.prototype['baseTaxInvoiced'] = undefined;
  /**
   * Base tax refunded.
   * @member {Number} baseTaxRefunded
   */
  exports.prototype['baseTaxRefunded'] = undefined;
  /**
   * Base WEEE tax applied amount.
   * @member {Number} baseWeeeTaxAppliedAmount
   */
  exports.prototype['baseWeeeTaxAppliedAmount'] = undefined;
  /**
   * Base WEEE tax applied row amount.
   * @member {Number} baseWeeeTaxAppliedRowAmnt
   */
  exports.prototype['baseWeeeTaxAppliedRowAmnt'] = undefined;
  /**
   * Base WEEE tax disposition.
   * @member {Number} baseWeeeTaxDisposition
   */
  exports.prototype['baseWeeeTaxDisposition'] = undefined;
  /**
   * Base WEEE tax row disposition.
   * @member {Number} baseWeeeTaxRowDisposition
   */
  exports.prototype['baseWeeeTaxRowDisposition'] = undefined;
  /**
   * Created-at timestamp.
   * @member {String} createdAt
   */
  exports.prototype['createdAt'] = undefined;
  /**
   * Description.
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * Discount amount.
   * @member {Number} discountAmount
   */
  exports.prototype['discountAmount'] = undefined;
  /**
   * Discount invoiced.
   * @member {Number} discountInvoiced
   */
  exports.prototype['discountInvoiced'] = undefined;
  /**
   * Discount percent.
   * @member {Number} discountPercent
   */
  exports.prototype['discountPercent'] = undefined;
  /**
   * Discount refunded.
   * @member {Number} discountRefunded
   */
  exports.prototype['discountRefunded'] = undefined;
  /**
   * Event ID.
   * @member {Number} eventId
   */
  exports.prototype['eventId'] = undefined;
  /**
   * External order item ID.
   * @member {String} extOrderItemId
   */
  exports.prototype['extOrderItemId'] = undefined;
  /**
   * Free-shipping flag value.
   * @member {Number} freeShipping
   */
  exports.prototype['freeShipping'] = undefined;
  /**
   * GW base price.
   * @member {Number} gwBasePrice
   */
  exports.prototype['gwBasePrice'] = undefined;
  /**
   * GW base price invoiced.
   * @member {Number} gwBasePriceInvoiced
   */
  exports.prototype['gwBasePriceInvoiced'] = undefined;
  /**
   * GW base price refunded.
   * @member {Number} gwBasePriceRefunded
   */
  exports.prototype['gwBasePriceRefunded'] = undefined;
  /**
   * GW base tax amount.
   * @member {Number} gwBaseTaxAmount
   */
  exports.prototype['gwBaseTaxAmount'] = undefined;
  /**
   * GW base tax amount invoiced.
   * @member {Number} gwBaseTaxAmountInvoiced
   */
  exports.prototype['gwBaseTaxAmountInvoiced'] = undefined;
  /**
   * GW base tax amount refunded.
   * @member {Number} gwBaseTaxAmountRefunded
   */
  exports.prototype['gwBaseTaxAmountRefunded'] = undefined;
  /**
   * GW ID.
   * @member {Number} gwId
   */
  exports.prototype['gwId'] = undefined;
  /**
   * GW price.
   * @member {Number} gwPrice
   */
  exports.prototype['gwPrice'] = undefined;
  /**
   * GW price invoiced.
   * @member {Number} gwPriceInvoiced
   */
  exports.prototype['gwPriceInvoiced'] = undefined;
  /**
   * GW price refunded.
   * @member {Number} gwPriceRefunded
   */
  exports.prototype['gwPriceRefunded'] = undefined;
  /**
   * GW tax amount.
   * @member {Number} gwTaxAmount
   */
  exports.prototype['gwTaxAmount'] = undefined;
  /**
   * GW tax amount invoiced.
   * @member {Number} gwTaxAmountInvoiced
   */
  exports.prototype['gwTaxAmountInvoiced'] = undefined;
  /**
   * GW tax amount refunded.
   * @member {Number} gwTaxAmountRefunded
   */
  exports.prototype['gwTaxAmountRefunded'] = undefined;
  /**
   * Discount tax compensation amount.
   * @member {Number} discountTaxCompensationAmount
   */
  exports.prototype['discountTaxCompensationAmount'] = undefined;
  /**
   * Discount tax compensation canceled.
   * @member {Number} discountTaxCompensationCanceled
   */
  exports.prototype['discountTaxCompensationCanceled'] = undefined;
  /**
   * Discount tax compensation invoiced.
   * @member {Number} discountTaxCompensationInvoiced
   */
  exports.prototype['discountTaxCompensationInvoiced'] = undefined;
  /**
   * Discount tax compensation refunded.
   * @member {Number} discountTaxCompensationRefunded
   */
  exports.prototype['discountTaxCompensationRefunded'] = undefined;
  /**
   * Is-quantity-decimal flag value.
   * @member {Number} isQtyDecimal
   */
  exports.prototype['isQtyDecimal'] = undefined;
  /**
   * Is-virtual flag value.
   * @member {Number} isVirtual
   */
  exports.prototype['isVirtual'] = undefined;
  /**
   * Item ID.
   * @member {Number} itemId
   */
  exports.prototype['itemId'] = undefined;
  /**
   * Locked DO invoice flag value.
   * @member {Number} lockedDoInvoice
   */
  exports.prototype['lockedDoInvoice'] = undefined;
  /**
   * Locked DO ship flag value.
   * @member {Number} lockedDoShip
   */
  exports.prototype['lockedDoShip'] = undefined;
  /**
   * Name.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * No-discount flag value.
   * @member {Number} noDiscount
   */
  exports.prototype['noDiscount'] = undefined;
  /**
   * Order ID.
   * @member {Number} orderId
   */
  exports.prototype['orderId'] = undefined;
  /**
   * Original price.
   * @member {Number} originalPrice
   */
  exports.prototype['originalPrice'] = undefined;
  /**
   * Parent item ID.
   * @member {Number} parentItemId
   */
  exports.prototype['parentItemId'] = undefined;
  /**
   * Price.
   * @member {Number} price
   */
  exports.prototype['price'] = undefined;
  /**
   * Price including tax.
   * @member {Number} priceInclTax
   */
  exports.prototype['priceInclTax'] = undefined;
  /**
   * Product ID.
   * @member {Number} productId
   */
  exports.prototype['productId'] = undefined;
  /**
   * Product type.
   * @member {String} productType
   */
  exports.prototype['productType'] = undefined;
  /**
   * Quantity backordered.
   * @member {Number} qtyBackordered
   */
  exports.prototype['qtyBackordered'] = undefined;
  /**
   * Quantity canceled.
   * @member {Number} qtyCanceled
   */
  exports.prototype['qtyCanceled'] = undefined;
  /**
   * Quantity invoiced.
   * @member {Number} qtyInvoiced
   */
  exports.prototype['qtyInvoiced'] = undefined;
  /**
   * Quantity ordered.
   * @member {Number} qtyOrdered
   */
  exports.prototype['qtyOrdered'] = undefined;
  /**
   * Quantity refunded.
   * @member {Number} qtyRefunded
   */
  exports.prototype['qtyRefunded'] = undefined;
  /**
   * Quantity returned.
   * @member {Number} qtyReturned
   */
  exports.prototype['qtyReturned'] = undefined;
  /**
   * Quantity shipped.
   * @member {Number} qtyShipped
   */
  exports.prototype['qtyShipped'] = undefined;
  /**
   * Quote item ID.
   * @member {Number} quoteItemId
   */
  exports.prototype['quoteItemId'] = undefined;
  /**
   * Row invoiced.
   * @member {Number} rowInvoiced
   */
  exports.prototype['rowInvoiced'] = undefined;
  /**
   * Row total.
   * @member {Number} rowTotal
   */
  exports.prototype['rowTotal'] = undefined;
  /**
   * Row total including tax.
   * @member {Number} rowTotalInclTax
   */
  exports.prototype['rowTotalInclTax'] = undefined;
  /**
   * Row weight.
   * @member {Number} rowWeight
   */
  exports.prototype['rowWeight'] = undefined;
  /**
   * SKU.
   * @member {String} sku
   */
  exports.prototype['sku'] = undefined;
  /**
   * Store ID.
   * @member {Number} storeId
   */
  exports.prototype['storeId'] = undefined;
  /**
   * Tax amount.
   * @member {Number} taxAmount
   */
  exports.prototype['taxAmount'] = undefined;
  /**
   * Tax before discount.
   * @member {Number} taxBeforeDiscount
   */
  exports.prototype['taxBeforeDiscount'] = undefined;
  /**
   * Tax canceled.
   * @member {Number} taxCanceled
   */
  exports.prototype['taxCanceled'] = undefined;
  /**
   * Tax invoiced.
   * @member {Number} taxInvoiced
   */
  exports.prototype['taxInvoiced'] = undefined;
  /**
   * Tax percent.
   * @member {Number} taxPercent
   */
  exports.prototype['taxPercent'] = undefined;
  /**
   * Tax refunded.
   * @member {Number} taxRefunded
   */
  exports.prototype['taxRefunded'] = undefined;
  /**
   * Updated-at timestamp.
   * @member {String} updatedAt
   */
  exports.prototype['updatedAt'] = undefined;
  /**
   * WEEE tax applied.
   * @member {String} weeeTaxApplied
   */
  exports.prototype['weeeTaxApplied'] = undefined;
  /**
   * WEEE tax applied amount.
   * @member {Number} weeeTaxAppliedAmount
   */
  exports.prototype['weeeTaxAppliedAmount'] = undefined;
  /**
   * WEEE tax applied row amount.
   * @member {Number} weeeTaxAppliedRowAmount
   */
  exports.prototype['weeeTaxAppliedRowAmount'] = undefined;
  /**
   * WEEE tax disposition.
   * @member {Number} weeeTaxDisposition
   */
  exports.prototype['weeeTaxDisposition'] = undefined;
  /**
   * WEEE tax row disposition.
   * @member {Number} weeeTaxRowDisposition
   */
  exports.prototype['weeeTaxRowDisposition'] = undefined;
  /**
   * Weight.
   * @member {Number} weight
   */
  exports.prototype['weight'] = undefined;
  /**
   * @member {module:model/SalesDataOrderItemInterface} parentItem
   */
  exports.prototype['parentItem'] = undefined;
  /**
   * @member {module:model/CatalogDataProductOptionInterface} productOption
   */
  exports.prototype['productOption'] = undefined;
  /**
   * @member {module:model/SalesDataOrderItemExtensionInterface} extensionAttributes
   */
  exports.prototype['extensionAttributes'] = undefined;



  return exports;
}));


