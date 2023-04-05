import { Pool } from "pg";

export const connectionDB = new Pool({
  user: "postgres",
  host: "localhost",
  database: "rondelliTattooStudio",
  password: "123456789",
  port: 5432,
});
