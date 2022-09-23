const allocate = require("./app");

test('Should allocate correctly for given examples', () => {
  const testSalesOrders = [
    {
      'id': 'S1',
      'created': '2020-01-02',
      'quantity': 6
    },
    {
      'id': 'S2',
      'created': '2020-11-05',
      'quantity': 2
    }, {
      'id': 'S3',
      'created': '2019-12-04',
      'quantity': 3
    }, {
      'id': 'S4',
      'created': '2020-01-20',
      'quantity': 2
    }, {
      'id': 'S5',
      'created': '2019-12-15',
      'quantity': 9
  }];

  const testPurchaseOrders = [
    {
      'id': 'P1',
      'receiving': '2020-01-04',
      'quantity': 4
    }, {
      'id': 'P2',
      'receiving': '2020-01-05',
      'quantity': 3
    }, {
      'id': 'P3',
      'receiving': '2020-02-01',
      'quantity': 5
    }, {
      'id': 'P4',
      'receiving': '2020-03-05',
      'quantity': 1
    }, {
      'id': 'P5',
      'receiving': '2020-02-20',
      'quantity': 7
    }
  ];

  const expectedAllocation = [
      { salesOrderId: 'S3', availabilityDate: '2020-01-04' },
      { salesOrderId: 'S5', availabilityDate: '2020-02-01' },
      { salesOrderId: 'S1', availabilityDate: '2020-02-20' },
      { salesOrderId: 'S4', availabilityDate: '2020-03-05' }
  ]

  expect(allocate(testSalesOrders, testPurchaseOrders)).toStrictEqual(expectedAllocation);
})

test('Should not make any sale if no purchase is made', () => {
  const testSalesOrders = [{
      'id': 'S2',
      'created': '2020-11-05',
      'quantity': 2
  }];
  testPurchaseOrders = [];
  expectedAllocation = [];

expect(allocate(testSalesOrders, testPurchaseOrders)).toStrictEqual(expectedAllocation)
});

test('Should not make any sale if no purchase is made', () => {
const testSalesOrders = []
const testPurchaseOrders = [{
    'id': 'P1',
    'receiving': '2020-01-04',
    'quantity': 4
}];
expectedAllocation = [];


expect(allocate(testSalesOrders, testPurchaseOrders)).toStrictEqual(expectedAllocation);
})

test('Should not make any sale when every sale is larger than purchases', () => {
  const testSalesOrders = [
    {
      'id': 'S1',
      'created': '2020-01-02',
      'quantity': 6
    },
    {
      'id': 'S2',
      'created': '2020-11-05',
      'quantity': 5
    }
  ];

  const testPurchaseOrders = [
    {
      'id': 'P1',
      'receiving': '2020-01-04',
      'quantity': 4
    }
  ];

  const expectedAllocation = [];

  expect(allocate(testSalesOrders, testPurchaseOrders)).toStrictEqual(expectedAllocation)
});

test('Should not make any sale when first sale is larger than total purchases', () => {
  const testSalesOrders = [{
      'id': 'S1',
      'created': '2020-01-02',
      'quantity': 2
  },
  {
      'id': 'S2',
      'created': '2019-11-05',
      'quantity': 11
  }];

  const testPurchaseOrders = [
    {
      'id': 'P1',
      'receiving': '2020-01-04',
      'quantity': 4
    },
    {
      'id': 'P2',
      'receiving': '2020-11-05',
      'quantity': 6
    }

  ];

  expect(allocate(testSalesOrders, testPurchaseOrders)).toStrictEqual([])
});

test('Should be able to fit multiple sales inside big purchases', () => {
  const testSalesOrders = [
    {
      'id': 'S1',
      'created': '2020-01-02',
      'quantity': 6
    },
    {
      'id': 'S2',
      'created': '2020-11-05',
      'quantity': 7
    },
    {
      'id': 'S3',
      'created': '2020-11-08',
      'quantity': 13
    },
    {
      'id': 'S4',
      'created': '2020-11-16',
      'quantity': 4
    }
  
  ];

  const testPurchaseOrders = [
    {
        'id': 'P1',
        'receiving': '2020-01-04',
        'quantity': 20
    }, {
        'id': 'P2',
        'receiving': '2020-12-05',
        'quantity': 30
    }, {
        'id': 'P3',
        'receiving': '2021-02-01',
        'quantity': 5
    }
  ];

  const expectedAllocation = [
      { salesOrderId: 'S1', availabilityDate: '2020-01-04' },
      { salesOrderId: 'S2', availabilityDate: '2020-11-05' },
      { salesOrderId: 'S3', availabilityDate: '2020-12-05' },
      { salesOrderId: 'S4', availabilityDate: '2020-12-05' }
  ]

  expect(allocate(testSalesOrders, testPurchaseOrders)).toStrictEqual(expectedAllocation)
});



test('Should be able to work with a large amount of sales and purchases', () => {
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
}]
  const allocationResult = allocate(testSalesOrders, testPurchaseOrders)
  expect(allocationResult).toStrictEqual([
    { salesOrderId: 'S1', availabilityDate: '2022-01-02' },
    { salesOrderId: 'S2', availabilityDate: '2022-01-03' },
    { salesOrderId: 'S3', availabilityDate: '2022-01-04' },
    { salesOrderId: 'S4', availabilityDate: '2022-01-05' },
    { salesOrderId: 'S5', availabilityDate: '2022-01-06' },
    { salesOrderId: 'S6', availabilityDate: '2022-01-07' },
    { salesOrderId: 'S7', availabilityDate: '2022-01-08' },
    { salesOrderId: 'S8', availabilityDate: '2022-01-09' },
    { salesOrderId: 'S9', availabilityDate: '2022-01-12' },
    { salesOrderId: 'S10', availabilityDate: '2022-01-12' },
    { salesOrderId: 'S11', availabilityDate: '2022-01-14' },
    { salesOrderId: 'S12', availabilityDate: '2022-01-14' },
    { salesOrderId: 'S13', availabilityDate: '2022-01-15' },
    { salesOrderId: 'S14', availabilityDate: '2022-01-16' },
    { salesOrderId: 'S15', availabilityDate: '2022-01-16' },
    { salesOrderId: 'S16', availabilityDate: '2022-01-17' },
    { salesOrderId: 'S17', availabilityDate: '2022-01-19' },
    { salesOrderId: 'S18', availabilityDate: '2022-01-20' },
    { salesOrderId: 'S19', availabilityDate: '2022-01-20' },
    { salesOrderId: 'S20', availabilityDate: '2022-01-21' },
    { salesOrderId: 'S21', availabilityDate: '2022-01-22' },
    { salesOrderId: 'S22', availabilityDate: '2022-01-23' },
    { salesOrderId: 'S23', availabilityDate: '2022-01-24' },
    { salesOrderId: 'S24', availabilityDate: '2022-01-25' },
    { salesOrderId: 'S25', availabilityDate: '2022-01-26' },
    { salesOrderId: 'S26', availabilityDate: '2022-01-27' },
    { salesOrderId: 'S27', availabilityDate: '2022-01-28' },
    { salesOrderId: 'S28', availabilityDate: '2022-01-29' },
    { salesOrderId: 'S29', availabilityDate: '2022-01-30' }
  ])
})