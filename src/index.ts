import express from "express";
// import { router } from "./routes/loginRoutes";
import bodyParser from "body-parser";
import cookieSession from "cookie-session";
// import { router as controllerRouter } from "./controllers/decorators/controller";

import "./controllers/LoginController"
import "./controllers/RootController"
import { AppRouter } from "./AppRouter";


const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieSession({ keys: ["andemosa"] }));

// app.use(router);
app.use(AppRouter.getInstance())
// app.use(controllerRouter)
// console.log(controllerRouter)
// console.log(router)
app.listen(3000, () => {
  console.log("Listening on port 3000");
});

// DO NOT WRITE

// class Server {
//   app: express.Express = express();

//   constructor() {
//     this.app.use(bodyParser.urlencoded({ extended: true }));
//     this.app.use(cookieSession({ keys: ["andemosa"] }));
//     this.app.use(router);
//   }

//   start(): void {
//     this.app.listen(3000, () => {
//       console.log("Listening on port 3000");
//     });
//   }
// }

// new Server().start()