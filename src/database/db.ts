import { PrismaClient } from '@prisma/client'
export const prisma = new PrismaClient()

import pkg from 'pg';
const { Pool } = pkg;
import dotenv from "dotenv";

dotenv.config()
export const connectionDB = new Pool({
  connectionString: `${process.env.DATABASE_URL}`,
  
});