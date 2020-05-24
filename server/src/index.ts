import express from 'express';
import cors from 'cors';
import { PORT } from '../environment';
import summonerRouter from './routes/summoner.routes';

/*Create app with cors */
const app: express.Application = express();
app.use(cors());

//Routes
app.use('/api/summoner', summonerRouter);


//Listen to port
app.listen(PORT || 3001, () => {
  console.log('Connected');
});
