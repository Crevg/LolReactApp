import React, { Component, Fragment } from 'react';
import { Col, Row, Container } from 'reactstrap';
import SummonerInfo from '../../Components/Summoner/SummonerInfo/SummonerInfo';
import SummonerStats from '../../Components/Summoner/SummonerStats/SummonerStats';
import axios, { AxiosResponse } from 'axios';
import ProfileData from '../../Assets/Models/ProfileData.model';
import ApiResponse from '../../Assets/Models/ApiResponse.model';
import Loading from '../../Shared/Loading/Loading';
import NotFound from '../NotFound/NotFound';

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

class MainContainer extends Component<
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

  /*LCH */
  componentDidUpdate = () => {
    if (
      !this.state.isLoading &&
      this.state.searchedName != this.props.summonerName
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
        .get('http://localhost:3001/api/summoner/getProfile/' + summName)
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

  /* Check if player is in series */
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
    return (
      <Fragment>
        <Container>
          <Row>
            <Col lg='4'>
              <Container>
                <Row>
                  <Col>
                    {this.state.profileInfo ? (
                      <SummonerInfo
                        {...(this.state.profileInfo as ProfileData)}
                      ></SummonerInfo>
                    ) : !this.state.isLoading ? (
                      <NotFound message='Summoner'></NotFound>
                    ) : (
                      <Loading></Loading>
                    )}
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
            </Col>
            <Col lg='8'>
              <p> Match History </p>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default MainContainer;
