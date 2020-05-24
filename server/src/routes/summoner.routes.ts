import express from 'express'
import { getProfile } from '../controllers/Summoner/summoner.controller';

const router: express.Router = express.Router() ;

/*  GET  */ 
router.get('/getProfile/:name', getProfile)

export default router;