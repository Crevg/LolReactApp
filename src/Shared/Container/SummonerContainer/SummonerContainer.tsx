import React, { Component } from 'react';

import { Col, Row, Container } from 'reactstrap';
import ProfileData from '../../../Assets/Models/ProfileData.model';
import ServerRoutes from '../../../Assets/Routes/ServerRoutes'
import axios, { AxiosResponse } from 'axios';
import ApiResponse from '../../../Assets/Models/ApiResponse.model';

import SummonerInfo from '../../../Components/Summoner/SummonerInfo/SummonerInfo';
import SummonerStats from '../../../Components/Summoner/SummonerStats/SummonerStats';
import Loading from '../../Special/Loading/Loading';
import SpecialContainer from '../../Special/SpecialContainer/SpecialContainer';

type miniSeries = {
  inSeries: boolean;
  wins?: number;
  progress?: string;
  target?: number;
  losses?: number;
};

type MyProps = {
  summonerName: string | null;
};

type MyState = {
  profileInfo: ProfileData | null;
  isLoading: boolean;
  searchedName: string;
};

class SummonerContainer extends Component<
  MyProps & React.HtmlHTMLAttributes<HTMLElement>,
  MyState
> {
  /*default state and variables */
  state: MyState = {
    profileInfo: null,
    isLoading: false,
    searchedName: '',
  };

  summonerStats: JSX.Element[] = [];
  specialComponentCode: {
    code: number,
    message: string
  } = {
    code: 0,
    message: ""
  };

  /*LCH */
  componentDidUpdate = () => {
    if (
      !this.state.isLoading &&
      this.state.searchedName !== this.props.summonerName
    ) {
      this.httpCallGetProfile(this.props.summonerName as string);
    }
  };

  
  /* Get the summoner profile given their name */
  httpCallGetProfile = (summName: string) => {
    if (summName) {
      this.setState({
        ...this.state,
        searchedName: summName,
        isLoading: true,
      });
      axios
        .get(ServerRoutes.getProfile(summName))
        .then((response: AxiosResponse<ApiResponse>) => {
          return { ...response.data.info };
        })
        .catch((err) => {
          console.log(err);
          return null;
        })
        .then((profileInfo) => {
          this.setState({
            ...this.state,
            profileInfo: profileInfo,
            isLoading: false,
          });
          this.addRankedStats();
        });
    }
  };

  checkSeries = (miniSeries: miniSeries): { miniSeries: string } | null => {
    if (miniSeries.inSeries) {
      return {
        miniSeries: miniSeries.progress as string,
      };
    }
    return null;
  };

  
  /*DELETE ME */

  rankedInfo = [
    {
      queue: 'SOLO',
      rank: 'IV',
      tier: 'PLATINUM',
      wins: 30,
      losses: 20,
      lp: 10,
      inSeries: {},
      miniSeries: {
        inSeries: true,
        wins: 1,
        progress: 'WLNNN',
        target: 2,
        losses: 1,
      },
    },
    {
      queue: 'FLEX',
      rank: 'I',
      tier: 'GOLD',
      wins: 12,
      losses: 43,
      lp: 0,
      inSeries: {},
      miniSeries: {
        inSeries: false,
      },
    },
  ];

  /* Add all the queues information */
  addRankedStats = () => {
    this.summonerStats = [];
    this.rankedInfo.forEach((queueInfo) => {
      this.summonerStats.push(
        <SummonerStats
          key={queueInfo.queue + queueInfo.rank}
          queue={queueInfo.queue}
          rank={queueInfo.rank}
          tier={queueInfo.tier}
          wins={queueInfo.wins}
          losses={queueInfo.losses}
          lp={queueInfo.lp}
          {...this.checkSeries(queueInfo.miniSeries)}
        ></SummonerStats>,
      );
    });
  }; 

  
  render() {
    console.log(this.state.searchedName.length === 0)
    if (this.state.profileInfo) {
      this.specialComponentCode = {
        code: 0,
        message: ""
      } ;
    }else if (this.state.isLoading){
      this.specialComponentCode = {
        code: 1,
        message: ""
      }
    }else if (this.state.searchedName.length === 0){
      this.specialComponentCode = {
        code: 3,
        message: "Please search for a summoner name"
      }
    }else{
      
      this.specialComponentCode = {
        code: 2,
        message: "Summoner "
      };
      
    }
      return <Container>
      <Row>
        <Col>
          {this.state.profileInfo ? (
            <SummonerInfo
              {...(this.state.profileInfo as ProfileData)}
            ></SummonerInfo>) : null
          }
          <SpecialContainer {...this.specialComponentCode}></SpecialContainer>
        </Col>
      </Row>
      <Row>
        <Col>
          {this.summonerStats ? (
            this.summonerStats
          ) : !this.state.isLoading ? null : (
            <Loading></Loading>
          )}
        </Col>
      </Row>
    </Container>
  }
}

export default SummonerContainer;
