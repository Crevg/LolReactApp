type RankedData = {
  id: string;
  queueType: string;
  tier: string;
  rank: string;
  leaguePoint: number;
  wins: number;
  losses: number;
  miniSeries: MiniSeries;
};

type MiniSeries = {
  losses: number;
  progress: string;
  target: number;
  wins: number;
};

export default RankedData;
export {MiniSeries};
