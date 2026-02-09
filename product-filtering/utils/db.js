import pkg from 'pg';
import 'dotenv/config';
const { Pool } = pkg;

const pool = new Pool({
  host: process.env.HOST,
  password: process.env.PASSWORD,
  user: process.env.USER,
  port: process.env.PORT,
  database: process.env.DATABASE,
});

export default {
  query: (text, params) => pool.query(text, params),
};
