const fs = require('fs')
const postgres = require('postgres')
const sql = postgres(process.env.DATABASE_URL) 
const com = fs.readFileSync('./sql/schema.postgresql.sql')

sql`${com}`
  .then(resp=>console.log(resp))
