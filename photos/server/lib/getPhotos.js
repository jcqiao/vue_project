const { query } = require("./db")

module.exports = async (ctx, next) => {
  const res = await query("select * from `photos`")
  // console.log('photos:', res)
  if (res.length > 0) {
    ctx.body = {
      code: 0,
      msg: "查找图片成功",
      data: res
    }
  } else {
    ctx.body = {
      code: 1,
      msg:"查找图片失败/没有图片"
    }
  }
}