import db from './db.js';

export const getProductsPaginated = async (page = 1, limit = 10) => {
  const offset = (page - 1) * limit;
  const dataQuery = `
    SELECT * FROM products
    ORDER BY id ASC
    LIMIT $1 OFFSET $2
  `;
  const countQuery = 'SELECT COUNT(*) FROM products';

  const dataResult = await db.query(dataQuery, [limit, offset]);
  const countResult = await db.query(countQuery);

  const totalItems = parseInt(countResult.rows[0].count);
  const totalPages = Math.ceil(totalItems / limit);

  return {
    data: dataResult.rows,
    metadata: {
      totalItems,
      totalPages,
      currentPage: page,
      limit,
    },
  };
};
