import { API_KEY } from '../../../environment';



class RiotApiEndPoints {
    private static API_PATH: string = "https://la1.api.riotgames.com";
  /* Non static */
    static getProfile = (summonerName: string) => {
    return RiotApiEndPoints.API_PATH + '/lol/summoner/v4/summoners/by-name/' + summonerName + API_KEY;
  };

  static getRanked = (encryptedSummonerId: string) => {
    return (
        RiotApiEndPoints.API_PATH + '/lol/league/v4/entries/by-summoner/' + encryptedSummonerId + API_KEY
    );
  };

  static getChampMastery = (encryptedSummonerId: string) => {
    return (
        RiotApiEndPoints.API_PATH + '/lol/champion-mastery/v4/champion-masteries/by-summoner/' +
      encryptedSummonerId +
      API_KEY
    );
  };

  /* Static */

  static getIcon = (iconNumber: number) => {
    return (
      'http://ddragon.leagueoflegends.com/cdn/10.10.3208608/img/profileicon/' +
      iconNumber +
      '.png'
    );
  };

  static getChampInfo = (champName: string) => {
    return (
      'ddragon.leagueoflegends.com/cdn/10.10.3208608/data/en_US/champion/' +
      champName +
      '.json'
    );
  };

  static getPassiveIcon = (imageFull: string) => {
    return (
      'http://ddragon.leagueoflegends.com/cdn/10.10.3208608/img/passive/' +
      imageFull
    );
  };

  static getSpellsIcons = (imageFull: string) => {
    return (
      'http://ddragon.leagueoflegends.com/cdn/10.10.3208608/img/spell/' +
      imageFull
    );
  };
}


export default RiotApiEndPoints