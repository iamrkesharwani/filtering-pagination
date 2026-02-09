import * as productService from './utils/productService.js';

const startTest = async () => {
  try {
    console.log('Testing search: "phone"');
    const searchResult = await productService.searchProducts('phone');
    console.table(searchResult);

    console.log('Testing filter: Price between 1000 and 5000');
    const filteredResult = await productService.filterProducts(1000, 5000);
    console.table(filteredResult);

    console.log('Testing filter: Price < 20000 & only in stock');
    const stockResult = await productService.filterProducts(0, 20000, true);
    console.table(stockResult);
  } catch (error) {
    console.error('Test failed:', error.message);
  }
};

startTest();
