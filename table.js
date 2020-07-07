var knex = require('knex')({
    client: 'mysql',
    connection: {
      host: 'localhost',
      user: 'root',
      password: 'bulbul18',
      database: 'loan_managment'
    }
  })
knex.schema.createTable("signUp", (table) => {
    table.string('name')
    table.string('email').unique()
    table.string('password'),
    table.string("repeat_pwd")


    
})
.then(() => console.log("table created"))
.catch((err) => { console.log(err); throw err });