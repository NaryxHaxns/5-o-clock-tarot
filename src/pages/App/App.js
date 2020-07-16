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

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      user: userService.getUser(),
      deck: cards,
      spread: [],
      show: false
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

  handleFiveCardLove = () => {
    let spreadCopy = this.state.spread;
    let deckCopy = this.state.deck
    for(let i=0; i<5; i++){
      let randidx = this.getCardOrReverse(deckCopy.length + 1);
      let randflip = this.getCardOrReverse(2)
      let cardCopy = deckCopy[randidx]
      if(randflip){
        cardCopy.isReversed = true;
      }
      spreadCopy.push(cardCopy);
      let removed = deckCopy.splice(randidx, 1);
    }
    this.setState({spread: spreadCopy})
    console.log(this.state.spread)
  }

  showModal = () => {
    this.setState({ show: true })
  }

  hideModal = () => {
    this.setState({ show: false })
  }

  handleCardFlip = (card) => {
    console.log(card);
    card.isFlipped = true;
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
              showModal={this.showModal}
              hideModal={this.hideModal}
              handleCardFlip={this.handleCardFlip}
              spread={this.state.spread}
            />
          } />
        </Switch>
      </div>
    );
  }
}
