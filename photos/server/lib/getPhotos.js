const { query } = require("./db")
const defaultPage = 4

module.exports = async (ctx, next) => {
  console.log('params', ctx.query.uid, ctx.query.page)
  const currentPage = ctx.query.page
  if (!currentPage) {
    currentPage = 1;
  }
  console.log('curre',currentPage)
  const offset = (currentPage - 1) * defaultPage
  console.log('offset',offset)
  const sql = `SELECT * FROM photos WHERE uid=? LIMIT ?,?`;
  const res = await query(sql,[ctx.query.uid,offset,defaultPage] )
  const pageInfo = await getPageInfo(ctx.query.uid,currentPage)
  // console.log('photos:', res)
  if (res.length > 0) {
    ctx.body = {
      code: 0,
      msg: "查找图片成功",
      data: {
        res,
        pageInfo
      }
    }
  } else {
    ctx.body = {
      code: 1,
      msg:"查找图片失败/没有图片"
    }
  }
}

async function getPageInfo (uId, currentPage) {
  const sql = `SELECT * FROM photos WHERE uId=? `;
  const res = await query(sql, [uId]);
  console.log('pageres',res)
  return {
    prepage: defaultPage,
    page: Number(currentPage),
    total: res.length,
  };
}
