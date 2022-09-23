function allocate (salesOrders, purchaseOrders) {
  // checking if any array is empty
  if(salesOrders.length === 0 || purchaseOrders.length === 0) return [];

  // creating new instances of arrays
  const sortedPurchaseOrders = [...purchaseOrders].sort((a,b)=> (new Date(a.receiving) - new Date(b.receiving)))
  const sortedSalesOrders = [...salesOrders].sort((a,b)=> (new Date(a.created) - new Date(b.created)))

  // declare accumulators
  let accStorage = 0;
  let nextSale;
  let nextPurchase;
  const allocations = [];

  // while any purchase or order remains
  while(sortedSalesOrders.length > 0 && sortedPurchaseOrders.length > 0){
    // get next elements and increment storage
    nextSale = sortedSalesOrders.shift();
    if(nextPurchase === undefined  || accStorage === 0){
      nextPurchase = sortedPurchaseOrders.shift();
      accStorage += nextPurchase.quantity;
    }
    // while storage is enough to cover sales
    while(nextSale.quantity <= accStorage && accStorage > 0){
      // decrement storage
      accStorage -= nextSale.quantity;
      // register sale
      const availabilityDate = new Date(nextPurchase.receiving) > new Date(nextSale.created) ? nextPurchase.receiving : nextSale.created
      allocations.push({
        salesOrderId: nextSale.id,
        availabilityDate: availabilityDate
      })
      // if there are still sales to process
      if(sortedSalesOrders.length > 0) {
        // get next order
        nextSale = sortedSalesOrders.shift()
      } else {
        // if there are not any more sales stop current loop
        nextSale.quantity = 0;
        break;
      }
    }
    // while current order has not been processed and there are still purchases to be made
    while(nextSale.quantity > 0 && sortedPurchaseOrders.length > 0){
      nextPurchase = sortedPurchaseOrders.shift()
      accStorage += nextPurchase.quantity
      // if current sale can be processed
      
      if(nextSale.quantity <= accStorage){
        // decrement storage
        accStorage -= nextSale.quantity;
        // register sale
        const availabilityDate = new Date(nextPurchase.receiving) > new Date(nextSale.created) ? nextPurchase.receiving : nextSale.created
        allocations.push({
          salesOrderId: nextSale.id,
          availabilityDate: availabilityDate
        })
        nextSale.quantity = 0;
      }
    }
  }
 return allocations
}
module.exports = allocate;