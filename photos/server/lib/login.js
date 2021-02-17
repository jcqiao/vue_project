const jwt = require('jsonwebtoken');
const {connection,query} = require('./db')

module.exports = async (ctx, next) => {
  const {username,password } = ctx.request.body

  const [res] = await query("select * from `users` where name = ? and password = ?", [username, password])
  if (res) {
    console.log('uid:' , res.id)
    let token = jwt.sign({ uid:res.id}, 'login', { expiresIn: '1h' })

    ctx.body = {
      code: 0,
      msg: '登录成功',
      data: {
        token
      }
    }
  } else {
    console.log('false')
    ctx.body = {
      code: 1,
      msg: '用户名密码错误',
      data: {
      }
    }
  }

}