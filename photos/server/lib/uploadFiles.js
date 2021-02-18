const { query } = require('./db')
const fs = require('fs')
const path = require("path");

module.exports = async (ctx, next) => {
  // console.log('uploadFIles', ctx.request.files)
  const { img } = ctx.request.files
  // console.log('imgPath', img.path)
  if (img) {
    console.log(img.name,img.size,img.path,':::')
    const uploadPath = generateUploadPath(img.name);
    saveImgToUpload(img, uploadPath);
    const sql = `INSERT INTO photos (imgUrl,name,size,type) VALUES  (?,?,?,?)`;
    const res = await query(sql, [generateToDbUploadPath(uploadPath),img.name, img.size, img.type])
    // console.log('dab:',res)

    ctx.body = {
      code: 0,
      msg:"上传成功"
    }
  }
}

// async function insertToDB ({ imgUrl, name, uId }) {
//   const sql = `INSERT INTO photos (id,imgUrl,name,uId) VALUES  (0,?,?,?)`;
//   return await db.getDB().execute(sql, [imgUrl, name, uId]);
// }

function generateToDbUploadPath (path) {
  return "http://localhost:8081" + path;
}

function generateUploadPath (name) {
  return "/upload/" + createImgName(name);
}

function createImgName (name) {
  return Date.now() + "_" + name;
}

function saveImgToUpload (img, uploadPath) {
  const readStream = fs.createReadStream(img.path);
  console.log('readStream:',readStream)
  const savePath = path.join(__dirname, "../static", uploadPath);
  const writeStream = fs.createWriteStream(savePath);
  readStream.pipe(writeStream);
}