import { getProductsPaginated } from './utils/productService.js';

const testPagination = async () => {
  try {
    const limit = 5;

    console.log('--- Fetching Page 1 ---');
    const page1 = await getProductsPaginated(1, limit);
    console.table(page1.data);
    console.log('Metadata:', page1.metadata);

    console.log('--- Fetching Page 2 ---');
    const page2 = await getProductsPaginated(2, limit);
    console.table(page2.data);
    console.log('Metadata:', page2.metadata);
  } catch (error) {
    console.error('Error occurred:', error.message);
  }
};

testPagination();
