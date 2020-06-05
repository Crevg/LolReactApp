import express from 'express'
import { getProfile , getRankedInfo} from '../controllers/Summoner/summoner.controller';

const router: express.Router = express.Router() ;

/*  GET  */ 
router.get('/getProfile/:name', getProfile)
router.get('/rankedInfo/:summId', getRankedInfo)

export default router;