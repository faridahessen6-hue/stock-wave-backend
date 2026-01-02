import express from 'express';
import userAPI from './userAPI.js';
import stockAPI from "./stock-api.js";
import orderAPI from './order-api.js';
import userportifolio from './userportifolio-api.js';
import walletAPI from './wallet-api.js';

const app = express();

app.use(express.json());

userAPI(app);
stockAPI(app);
orderAPI(app);
userportifolio(app);
walletAPI(app);
export default app;