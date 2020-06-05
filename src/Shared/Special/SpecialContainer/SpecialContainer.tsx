import React, { Fragment } from 'react';
import NotFound from '../NotFound/NotFound';
import Loading from '../Loading/Loading';
import InitComponent from '../InitComponent/InitComponent';

type myProps = {
  code: number /* 0: null, 1: Loading, 2: Not Found, 3: Init */;
  message: string;
};

const specialContainer = (props: myProps) => {
  let component: JSX.Element | null = null;

  switch (props.code) {
    case 0:
      component = null;
      break;
    case 1:
      component = <Loading></Loading>;
      break;
    case 2:
      component = <NotFound message={props.message}></NotFound>;
      break;
    case 3:
      component = <InitComponent message={props.message}></InitComponent>;
      break;
    default:
      component = null;
      break;
  }

  return <Fragment>{component}</Fragment>;
};

export default specialContainer;