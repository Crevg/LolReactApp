import React, { Component } from 'react';
import Styles from './Header.module.css';
import {
  Navbar,
  NavbarBrand,
  Input,
  Collapse,
  NavbarToggler,
  Nav,
  Button,
  InputGroupAddon,
  InputGroup,
} from 'reactstrap';

type MyProps = {
  searchHandler: Function;
};

type MyState = {
  summonerName: string;
};

class Header extends Component<MyProps, MyState> {
  state = {
    summonerName: '',
  };

  summonerNameHandler = (name: string) => {
    this.setState({
      ...this.state,
      summonerName: name,
    });
    
  };

  render() {
    const toggle = () => {};
    return (
      <div>
        <Navbar color='dark' dark expand='xs'>
          <NavbarBrand>
            <span> LOLReact </span>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={true} navbar>
            <Nav className={'ml-auto ' + Styles.SearchBar} navbar>
              <InputGroup>
                <Input
                  type='search'
                  placeholder='Summoner Name'
                  aria-label='Search'
                  onChange={(evt) => this.summonerNameHandler(evt.target.value)}
                />

                <InputGroupAddon addonType='append'>
                  <Button 
                  color='primary'
                  onClick={()=>this.props.searchHandler(this.state.summonerName)}
                  >
                    <i className={'material-icons ' + Styles.SearchIcon}>
                      search
                    </i>
                  </Button>
                </InputGroupAddon>
              </InputGroup>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
