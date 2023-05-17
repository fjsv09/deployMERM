import app from "./app.js";
import {
  PORT,
  DB_HOST,
  DB_PORT,
  DB_USER,
  DB_PASSWORD,
  DB_DATABASE,
} from "./config.js";

app.listen(PORT);

console.log(`Server is running on port ${PORT} FJSV`);
console.log("host is " + DB_HOST);
console.log("port is " + DB_PORT);
console.log("user is " + DB_USER);
console.log("password is " + DB_PASSWORD);
console.log("database is " + DB_DATABASE);
