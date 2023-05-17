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

console.log(
  `Server is running on port ${PORT}`,
  DB_HOST,
  DB_PORT,
  DB_USER,
  DB_PASSWORD,
  DB_DATABASE
);
