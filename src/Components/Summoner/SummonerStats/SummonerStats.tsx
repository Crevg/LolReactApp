import React from 'react';
import Styles from './SummonerStats.module.css';
import Emblem_Platinum from '../../../Assets/Emblems/Emblem_Platinum.png'

type MyProps = {
  queue: string;
  rank: string;
  tier: string;
  wins: number;
  losses: number;
  lp: number;
  miniSeries?: string;
};

const summonerStats = (props: MyProps) => {
  let series: JSX.Element[] = [];
  if (typeof props.miniSeries !== 'undefined') {
    for (let i = 0; i < props.miniSeries.length; i++) {
      if (props.miniSeries[i] === 'W') {
        series.push(
          <span key={i} className={'material-icons ' + Styles.WinIcon}>
            check_circle_outline
          </span>,
        );
      } else if (props.miniSeries[i] === 'L') {
        series.push(
          <span
            key={i}
            className={'material-icons-outlined ' + Styles.LoseIcon}
          >
            cancel
          </span>,
        );
      } else {
        series.push(
          <span
            key={i}
            className={'material-icons-outlined ' + Styles.NullIcon}
          >
            radio_button_unchecked
          </span>,
        );
      }
    }
  }

  return (
    <div className={Styles.StatsContainer}>
      <h2 className={Styles.QueueType}>
        {' '}
        Ranked {props.queue.charAt(0) + props.queue.slice(1).toLowerCase()}
      </h2>
      <div className={Styles.RankImgContainer}>
        <img className={Styles.RankImg} src={Emblem_Platinum} alt='rank'></img>
      </div>
      <h2 className={Styles.TierRank}>
        {' '}
        {props.tier.charAt(0) +
          props.tier.slice(1).toLowerCase() +
          ' ' +
          props.rank}
      </h2>
      <p className={Styles.StatsInfo}>{props.lp} LP</p>
      <p className={Styles.StatsInfo}>
        <span className={Styles.Wins}> {props.wins} </span> /{' '}
        <span className={Styles.Losses}>{props.losses}</span>
      </p>
      <div className={Styles.MiniSeriesContainer}>{series}</div>
    </div>
  );
};

export default summonerStats;
