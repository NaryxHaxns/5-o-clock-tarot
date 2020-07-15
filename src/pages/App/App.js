import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import userService from '../../utils/userService';
import cards from '../../constants/RSWDeck';
import NavBar from '../../components/NavBar/NavBar';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import AboutPage from '../AboutPage/AboutPage';
import TarotPage from '../TarotPage/TarotPage';
import FiveCardLovePage from '../FiveCardLovePage/FiveCardLovePage';

const deck = cards;

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      spread: [],
      user: userService.getUser()
    };
  };

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }

  handleLogout = () => {
    userService.logout();
    this.setState({user: null});
  };

  getCardOrReverse(max){
    return Math.floor(Math.random() * Math.floor(max));
  };

  handleFiveCardLove = (i) => {
    for(i=0; i<5; i++){
      let rando = this.getCardOrReverse(deck.length + 1);
      this.setState(this.state.spread.push(deck[rando]))
    }
    console.log(this.state.spread)
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' render={() =>
            <NavBar 
              user={this.state.user}
              handleLogout={this.handleLogout}
            />
          } />
          <Route exact path='/signup' render={({ history }) =>
            <SignupPage 
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/login' render={({ history }) =>
            <LoginPage 
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/about' render={() =>
            <AboutPage />
          } />
          <Route exact path='/tarot' render={() =>
            <TarotPage />
          } />
          <Route exact path='/tarot/fivecardlove' render={props =>
            <FiveCardLovePage 
              {...props}
              handleFiveCardLove={this.handleFiveCardLove}
            />
          } />
        </Switch>
      </div>
    );
  }
}
