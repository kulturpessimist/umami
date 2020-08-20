const fs = require('fs')
const url = require('url');
const postgres = require('postgres')

const con = new URL(process.env.DATABASE_URL);
const cfg = {
    user: con.username,
    password: con.password,
    database: con.pathname.substring(1),
    port: con.port,
    host: con.hostname
}
const sql = postgres(cfg) 
const com = fs.readFileSync('./sql/schema.postgresql.sql')

sql`${com}`
  .then(resp=>console.log(resp))
