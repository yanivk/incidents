import express from 'express'
import cors from 'cors';
import bodyParser from "body-parser";
import routes from './src/routers/index';

const app = express();

let corsOptions = {
  origin: "*"
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api', routes);

export default app
