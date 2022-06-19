import { Request, Response } from "express";
import { bodyValidator, controller, get, post } from "./decorators";

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

@controller("/auth")
class LoginController {
  @get("/login")
  getLogin(req: Request, res: Response): void {
    res.send(`
        <form method="POST">
        <div>
        <label>Email</label>
        <input name="email" type="email"/>
        </div>
        <div>
        <label>Password</label>
        <input name="password" type="password"/>
        </div>
        <button>Submit</button>
        </form>
        `);
  }

  @post("/login")
  @bodyValidator("email", "password")
  postLogin(req: Request, res: Response): void {
    const { email, password } = req.body;
    if (email === "osayerieanderson@gmail.com" && password === "1234") {
      req.session = { loggedIn: true };
      res.redirect("/");
    } else {
      res.send(`
      <p>Invalid email or password</p>
      <form method="POST">
      <div>
      <label>Email</label>
      <input name="email" type="email"/>
      </div>
      <div>
      <label>Password</label>
      <input name="password" type="password"/>
      </div>
      <button>Submit</button>
      </form>
      `);
    }
  }

  @get("/logout")
  getLogout(req: Request, res: Response): void {
    req.session = undefined;
    res.redirect("/");
  }
}
