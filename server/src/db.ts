import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const db = new Sequelize(
  process.env.DB_NAME as string,
  process.env.DB_USERNAME as string,
  process.env.DB_PASSWORD as string,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
  },
);

const connectDB = async (): Promise<void> => {
  try {
    await db.authenticate();
    await db.sync();

    console.log('Postgres connected...');
  } catch (error) {
    console.error(error.message);

    // Exit process with failure
    process.exit(1);
  }
};

export { db, connectDB };
