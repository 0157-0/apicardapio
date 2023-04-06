const express = require("express");
// rotas
const productRouter = require("./routes/ProductRoutes");
const userRouter = require("./routes/UserRoutes");
//controllers
const AuthController = require("./controllers/AuthController");
const AdminController = require("./controllers/AdminController");
const UserController = require("./controllers/UserController");
//middlewares
const authnticateMiddleware = require("./middlewares/authenticate");
const app = express();

app.use(express.json());
// Adicionar os cabeçalhos Access-Control-Allow-Origin
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );

  next();
});
app.use("/auth", AuthController);
app.use("/admin", authnticateMiddleware, AdminController);
app.use("/usuarios", userRouter);
app.use("/produto", productRouter);

app.listen(3001, () => {
  console.log("Server is running");
});
