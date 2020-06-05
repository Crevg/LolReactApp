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

/*Get the ranked information */
const getRankedInfo = (req: Request, res: Response) => {
  const URL = RiotApiEndPoints.getRanked(req.params.summId);

  axios
    .get(URL)
    .then((response) => {
      let apiResponse: ApiResponse = {
        error: false,
        message: response.statusText,
        status: response.status,
        info: {
          leagueId: response.data.leagueId,
          summonerId: response.data.summonerId,
          summonerName: response.data.summonerName,
          queueType: response.data.queueType,
          tier: response.data.tier,
          rank: response.data.rank,
          leaguePoints: response.data.leaguePoints,
          wins: response.data.wins,
          losses: response.data.losses,
          hotStreak: response.data.hotStreak,
          veteran: response.data.veteran,
          freshBlood: response.data.freshBlood,
          inactive: response.data.inactive,
          miniSeries: response.data.miniSeries
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

export { getProfile, getRankedInfo };
