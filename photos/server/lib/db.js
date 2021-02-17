// get the client
const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'kkb',
  password:'local123'
});
function query(sql,values) {
  return new Promise((resolve, reject) => {
    connection.query(sql, values, (err, res) => {
      if (err) {
        reject(`数据库查询失败：${err}`)
      }
      console.log('db:',res)
      resolve(res)
    })
  })
}
// create the connection to database
module.exports = {
  connection,
  query
}