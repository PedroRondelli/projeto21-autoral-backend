import pkg from 'pg';
const { Pool } = pkg;

export const connectionDB = new Pool({
  user: "postgres",
  host: "localhost",
  database: "rondelliTattooStudio",
  password: "123456789",
  port: 5432,
});
