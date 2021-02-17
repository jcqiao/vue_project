module.exports = async (ctx, next) => {
  // console.log('uploadFIles', ctx.request.files)
  const { img } = ctx.request.files
  ctx.body = "hi"
}