import type { RequestHandler } from "express";

const sayWelcome: RequestHandler = (req, res) => {
  console.info(req.query);
  res.send("Welcome to Wild Series !");
};

export default { sayWelcome };
