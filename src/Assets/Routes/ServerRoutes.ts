class ServerRoutes {
    static getProfile(summonerName: string): string{
        return 'http://localhost:3001/api/summoner/getProfile/' + summonerName;
    }
}

export default ServerRoutes