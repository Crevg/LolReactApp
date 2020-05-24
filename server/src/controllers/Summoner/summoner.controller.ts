import { Request, Response, NextFunction } from 'express';
import axios from 'axios';
import RiotApiEndPoints from '../../models/Shared/RiotApiEndPoints.model';
import ApiResponse from '../../models/Shared/ApiResponse.model';
import '../Shared/error-handler.controller';

/* Get Summoner profile information */
const getProfile = (req: Request, res: Response, next: NextFunction) => {
  const URL = RiotApiEndPoints.getProfile(req.params.name);

  axios
    .get(URL)
    .then((response) => {
      let apiResponse: ApiResponse = {
        error: false,
        message: response.statusText,
        status: response.status,
        info: {
          id: response.data.id,
          name: response.data.name,
          iconId: response.data.profileIconId,
          level: response.data.summonerLevel,
          accountId: response.data.accountId,
        },
      };
      return apiResponse;
    })
    .catch((interceptedError: ApiResponse) => {
      return interceptedError;
    })
    .then((apiResponse: ApiResponse) => {
      res.status(apiResponse.status).send(apiResponse);
    });
};

export { getProfile };
