import Express ,{Request,Response} from "express";
import { WebPage } from "./webpage";
import { handleClickRequest } from "./app.controller";
import cors from "cors"
import { validateEnv } from "./env.validator";
import dotenv from 'dotenv';
const app = Express();
app.use(Express.json());
app.use(cors());
app.set('trust proxy', true);
dotenv.config();
validateEnv();
app.get('/',WebPage)
app.post('/button/:color',handleClickRequest)

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});