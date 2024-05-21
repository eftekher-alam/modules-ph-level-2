"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json()); //to get json data from body
app.use(express_1.default.text()); //to get text data from body
const inceptor = (req, res, next) => {
    console.log("body info : " + req.body + "\nheader info: " + req.header + "\nhost name : " + req.hostname);
    next();
};
app.get('/', inceptor, (req, res) => {
    res.send('Hello world');
});
app.get("/test/:userId/:email", (req, res) => {
    const userId = req.params.userId;
    const email = req.params.email;
    res.send({ userId, email });
});
app.post("/test", (req, res) => {
    const userId = req.query.userId;
    const email = req.query.email;
    res.send({ userId, email });
});
app.all("*", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send({
        message: "Route not found!",
    });
}));
exports.default = app;
