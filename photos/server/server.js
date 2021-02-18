const Koa = require("koa");
// const static = require("koa-static");
const staticCache = require("koa-static-cache")
const koaBody = require("koa-body");
const Router = require("koa-router");

const login = require("./lib/login")
const getPhotos = require("./lib/getPhotos")
const uploadFiles = require("./lib/uploadFiles")

const app = new Koa();
app.use(
  koaBody({
    multipart: true
  })
);
// app.use(static(__dirname + "/static"));
app.use(staticCache({
  prefix: "/",
  dir: __dirname + "/static",
  gzip: true,
  dynamic: true
}))

const router = new Router();


router.post("/login",login);

router.get("/getPhotos", getPhotos)

router.post("/uploadFiles", uploadFiles)

app.use(router.routes());
app.listen(8081);
