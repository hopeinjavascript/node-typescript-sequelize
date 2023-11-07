type DbConfig = {
  server: string;
  username: string;
  password: string;
  database: string;
  dialect?: string;
};

const dbConfig: DbConfig = {
  server: process.env.DB_HOST ? process.env.DB_HOST: 'localhost',
  username: process.env.DB_USER ? process.env.DB_USER: 'root',
  password: process.env.DB_PASSWORD ? process.env.DB_PASSWORD: 'Myroot123$',
  database: process.env.DB_DATABASE ? process.env.DB_DATABASE: 'akshaydb',
  dialect: 'mysql',
};

export default dbConfig;
