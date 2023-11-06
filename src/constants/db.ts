type DbConfig = {
  server: string;
  username: string;
  password: string;
  database: string;
  dialect?: string;
};

const dbConfig: DbConfig = {
  server: 'localhost', //'sql12.freesqldatabase.com', //'sql12.freemysqlhosting.net',
  username: 'root', //'sql12659424',
  password: 'Myroot123$', //'Y9GgY8m69p',
  database: 'akshaydb',//'sql12659424',
  dialect: 'mysql',
  // server:'sql12.freesqldatabase.com', //'sql12.freemysqlhosting.net',
  // username: 'sql12659424',
  // password:'Y9GgY8m69p',
  // database:'sql12659424',
  // dialect: 'mysql',
};

export default dbConfig;
