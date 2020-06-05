"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors = require('cors');
const https = require('https');
const env = require('../environment');
//import summonerRouter from './routes/summoner.routes'
const summonerRouter = require('./routes/summoner.routes');
const app = express_1.default();
app.use(cors());
app.use('/api/summoner', summonerRouter);
app.get("/api", (req, res) => {
    res.status(200).send({ a: "a" });
});
app.listen(env.PORT || 8000, () => {
    console.log("Connected");
});
