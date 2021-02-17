const Koa = require("koa");
const static = require("koa-static");
const koaBody = require("koa-body");
const Router = require("koa-router");

const login = require("./lib/login")
const getPhotos = require("./lib/getPhotos")

const app = new Koa();
app.use(
  koaBody({
    multipart: true
  })
);
app.use(static(__dirname + "/static"));

const router = new Router();

router.post("/login",login);

router.get("/getPhotos", getPhotos)

app.use(router.routes());
app.listen(8081);
