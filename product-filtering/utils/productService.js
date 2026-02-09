import db from './db.js';

export const searchProducts = async (name) => {
  const query = 'SELECT * FROM products WHERE name ILIKE $1';
  const { rows } = await db.query(query, [`%${name}%`]);
  return rows;
};

export const filterProducts = async (min, max, onlyInStock = false) => {
  const query = `
    SELECT * FROM products
    WHERE price BETWEEN $1 AND $2
    AND (in_stock = $3 OR $3 = false)
    ORDER BY price ASC
  `;
  const { rows } = await db.query(query, [min, max, onlyInStock]);
  return rows;
};
