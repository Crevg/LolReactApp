import React from 'react';
import Styles from './SummonerInfo.module.css';
import ProfileData from '../../../Assets/Models/ProfileData.model'

const SummonerInfo = (props: ProfileData) => {

  return (
    <div className={Styles.InfoContainer}>
      <div className={Styles.IconContainer}>
        <img
          src={
            'http://ddragon.leagueoflegends.com/cdn/10.10.3216176/img/profileicon/' +
            props.iconId +
            '.png'
          }
          alt='profileicon'
          className={Styles.Icon}
        ></img>
        <div className={Styles.Level}>
          {props.level}</div>
      </div>
      <div >
        <h2 className={Styles.Name}> {props.name}</h2>
      </div>
    </div>
  );
};

export default SummonerInfo;
