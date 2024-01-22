import express, { Application, Request, Response } from "express";
import branchController from "./controller/branchController";

const app: Application = express();

app.get("/api", (req: Request, res: Response) => {
  res.status(200).send({
    hello: "world",
  });
});

app.listen(3456, () => {
  console.log("API run on port, 3456");
});
