import { log } from "console";
import express, { NextFunction, Request, Response } from "express";
const app = express()

app.use(express.json()); //to get json data from body
app.use(express.text()); //to get text data from body

const inceptor = (req: Request, res: Response, next: NextFunction) => {
    console.log("body info : " + req.body + "\nheader info: " + req.header + "\nhost name : " + req.hostname);
    next();
}

app.get('/', inceptor, (req: Request, res: Response) => {
    res.send('Hello world')
})

app.get("/test/:userId/:email", (req: Request, res: Response) => {
    const userId = req.params.userId;
    const email = req.params.email;
    res.send({ userId, email });
})
app.post("/test", (req: Request, res: Response) => {
    const userId = req.query.userId;
    const email = req.query.email;
    res.send({ userId, email });
})

app.all("*", async (req: Request, res: Response) => {
    res.send({
        message: "Route not found!",
    })
})

export default app;

