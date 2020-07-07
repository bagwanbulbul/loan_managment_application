const options = {
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: 'bulbul18',
        database: 'loan_managment'
    }
}

const knex = require('knex')(options);

var insert_token=(data)=>{
    return knex.select("*").from("signUp").insert(data)
};

var select = ()=>{
    return knex.select("*").from("signUp")
}
module.exports={insert_token,select}