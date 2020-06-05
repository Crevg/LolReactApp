import React, { Component, Fragment } from 'react';
import { Col, Row, Container } from 'reactstrap';
import SummonerContainer from '../SummonerContainer/SummonerContainer';

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
};

class MainContainer extends Component<
  MyProps & React.HtmlHTMLAttributes<HTMLElement>,
  MyState
> {
  /*default state and variables */
  state: MyState = {
  };


  render() {
    return (
      <Fragment>
        <Container>
          <Row>
            <Col lg='4'>
              <SummonerContainer summonerName={this.props.summonerName}></SummonerContainer>
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
