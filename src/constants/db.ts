type DbConfig = {
  server: string;
  username: string;
  password: string;
  database: string;
  dialect?: string;
};

const dbConfig: DbConfig = {
  server: 'sql12.freesqldatabase.com', //'sql12.freemysqlhosting.net',
  username: 'sql12659424',
  password: 'Y9GgY8m69p',
  database: 'sql12659424',
  dialect: 'mysql',
};

export default dbConfig;
