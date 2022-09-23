const testSalesOrders = [
  {
    'id': 'S1',
    'created': '2022-01-02',
    'quantity': 14
},
{
      'id': 'S2',
      'created': '2022-01-03',
      'quantity': 74
},
{
      'id': 'S3',
      'created': '2022-01-04',
      'quantity': 73
},
{
      'id': 'S4',
      'created': '2022-01-05',
      'quantity': 4
},
{
      'id': 'S5',
      'created': '2022-01-06',
      'quantity': 48
},
{
      'id': 'S6',
      'created': '2022-01-07',
      'quantity': 62
},
{
      'id': 'S7',
      'created': '2022-01-08',
      'quantity': 64
},
{
      'id': 'S8',
      'created': '2022-01-09',
      'quantity': 21
},
{
      'id': 'S9',
      'created': '2022-01-10',
      'quantity': 57
},
{
      'id': 'S10',
      'created': '2022-01-11',
      'quantity': 63
},
{
      'id': 'S11',
      'created': '2022-01-12',
      'quantity': 84
},
{
      'id': 'S12',
      'created': '2022-01-13',
      'quantity': 1
},
{
      'id': 'S13',
      'created': '2022-01-14',
      'quantity': 40
},
{
      'id': 'S14',
      'created': '2022-01-15',
      'quantity': 87
},
{
      'id': 'S15',
      'created': '2022-01-16',
      'quantity': 5
},
{
      'id': 'S16',
      'created': '2022-01-17',
      'quantity': 41
},
{
      'id': 'S17',
      'created': '2022-01-18',
      'quantity': 41
},
{
      'id': 'S18',
      'created': '2022-01-19',
      'quantity': 76
},
{
      'id': 'S19',
      'created': '2022-01-20',
      'quantity': 17
},
{
      'id': 'S20',
      'created': '2022-01-21',
      'quantity': 45
},
{
      'id': 'S21',
      'created': '2022-01-22',
      'quantity': 69
},
{
      'id': 'S22',
      'created': '2022-01-23',
      'quantity': 1
},
{
      'id': 'S23',
      'created': '2022-01-24',
      'quantity': 17
},
{
      'id': 'S24',
      'created': '2022-01-25',
      'quantity': 14
},
{
      'id': 'S25',
      'created': '2022-01-26',
      'quantity': 78
},
{
      'id': 'S26',
      'created': '2022-01-27',
      'quantity': 91
},
{
      'id': 'S27',
      'created': '2022-01-28',
      'quantity': 70
},
{
      'id': 'S28',
      'created': '2022-01-29',
      'quantity': 42
},
{
      'id': 'S29',
      'created': '2022-01-30',
      'quantity': 31
}
]
const testPurchaseOrders = [{
  'id': 'P1',
  'receiving': '2022-01-01',
  'quantity': 42
},
{
  'id': 'P2',
  'receiving': '2022-01-02',
  'quantity': 22
},
{
  'id': 'P3',
  'receiving': '2022-01-03',
  'quantity': 72
},
{
  'id': 'P4',
  'receiving': '2022-01-04',
  'quantity': 74
},
{
  'id': 'P5',
  'receiving': '2022-01-05',
  'quantity': 11
},
{
  'id': 'P6',
  'receiving': '2022-01-06',
  'quantity': 48
},
{
  'id': 'P7',
  'receiving': '2022-01-07',
  'quantity': 42
},
{
  'id': 'P8',
  'receiving': '2022-01-08',
  'quantity': 34
},
{
  'id': 'P9',
  'receiving': '2022-01-09',
  'quantity': 32
},
{
  'id': 'P10',
  'receiving': '2022-01-10',
  'quantity': 7
},
{
  'id': 'P11',
  'receiving': '2022-01-11',
  'quantity': 23
},
{
  'id': 'P12',
  'receiving': '2022-01-12',
  'quantity': 88
},
{
  'id': 'P13',
  'receiving': '2022-01-13',
  'quantity': 9
},
{
  'id': 'P14',
  'receiving': '2022-01-14',
  'quantity': 95
},
{
  'id': 'P15',
  'receiving': '2022-01-15',
  'quantity': 32
},
{
  'id': 'P16',
  'receiving': '2022-01-16',
  'quantity': 100
},
{
  'id': 'P17',
  'receiving': '2022-01-17',
  'quantity': 27
},
{
  'id': 'P18',
  'receiving': '2022-01-18',
  'quantity': 17
},
{
  'id': 'P19',
  'receiving': '2022-01-19',
  'quantity': 41
},
{
  'id': 'P20',
  'receiving': '2022-01-20',
  'quantity': 97
},
{
  'id': 'P21',
  'receiving': '2022-01-21',
  'quantity': 76
},
{
  'id': 'P22',
  'receiving': '2022-01-22',
  'quantity': 77
},
{
  'id': 'P23',
  'receiving': '2022-01-23',
  'quantity': 69
},
{
  'id': 'P24',
  'receiving': '2022-01-24',
  'quantity': 99
},
{
  'id': 'P25',
  'receiving': '2022-01-25',
  'quantity': 16
},
{
  'id': 'P26',
  'receiving': '2022-01-26',
  'quantity': 67
},
{
  'id': 'P27',
  'receiving': '2022-01-27',
  'quantity': 75
},
{
  'id': 'P28',
  'receiving': '2022-01-28',
  'quantity': 37
},
{
  'id': 'P29',
  'receiving': '2022-01-29',
  'quantity': 42
}];

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
      console.log('storage = ', accStorage, '+', nextPurchase.quantity, '=', accStorage + nextPurchase.quantity);
      accStorage += nextPurchase.quantity;
    }
    // while storage is enough to cover sales
    while(nextSale.quantity <= accStorage && accStorage > 0){
      console.log('storage larger than sales', accStorage, nextSale, nextPurchase);
      // decrement storage
      console.log('storage = ', accStorage, '-', nextSale.quantity, '=', accStorage-nextSale.quantity);
      accStorage -= nextSale.quantity;
      // register sale
      const availabilityDate = new Date(nextPurchase.receiving) > new Date(nextSale.created) ? nextPurchase.receiving : nextSale.created
      console.log('date decision = ', nextPurchase.receiving, 'vs', nextSale.created,availabilityDate);
      allocations.push({
        salesOrderId: nextSale.id,
        availabilityDate: availabilityDate
      })
      console.log('sale ', nextSale.id, 'done');
      // if there are still sales to process
      if(sortedSalesOrders.length > 0) {
        // get next order
        nextSale = sortedSalesOrders.shift()
      } else {
        // if there are not any more sales stop current loop
        console.log('sale.quantity ', nextSale.id, '=0');
        nextSale.quantity = 0;
        break;
      }
    }
    // while current order has not been processed and there are still purchases to be made
    while(nextSale.quantity > 0 && sortedPurchaseOrders.length > 0){
      nextPurchase = sortedPurchaseOrders.shift()
      console.log('sales larger than storage', accStorage, nextSale, nextPurchase);
      console.log('storage = ', accStorage, '+', nextPurchase.quantity, '=', accStorage + nextPurchase.quantity);
      accStorage += nextPurchase.quantity
      // if current sale can be processed
      console.log('current sale can be processed', nextSale.quantity <= accStorage)
      if(nextSale.quantity <= accStorage){
        // decrement storage
        console.log('storage = ', accStorage, '-', nextSale.quantity, '=', accStorage-nextSale.quantity);
        accStorage -= nextSale.quantity;
        // register sale
        const availabilityDate = new Date(nextPurchase.receiving) > new Date(nextSale.created) ? nextPurchase.receiving : nextSale.created
        console.log('date decision = ', nextPurchase.receiving, 'vs', nextSale.created,availabilityDate);
        allocations.push({
          salesOrderId: nextSale.id,
          availabilityDate: availabilityDate
        })
        console.log('sale ', nextSale.id, 'done');
        console.log('sale.quantity ', nextSale.id, '=0 #2');
        nextSale.quantity = 0;
      }
    }
  }


 return allocations
}
console.log(allocate(testSalesOrders, testPurchaseOrders))
module.exports = allocate;