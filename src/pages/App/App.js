import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import userService from '../../utils/userService';
import readingService from '../../utils/readingService';
import cards from '../../constants/RSWDeck';
import NavBar from '../../components/NavBar/NavBar';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import AboutPage from '../AboutPage/AboutPage';
import TarotPage from '../TarotPage/TarotPage';
import FiveCardLovePage from '../FiveCardLovePage/FiveCardLovePage';
import UserPage from '../UserPage/UserPage';
import ReadingDetailPage from '../ReadingDetailPage/ReadingDetailPage';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
      deck: cards,
      reading: [],
      prevReadings: []
    };
  };

  handleGetUser = () => {
    this.setState({ user: userService.getUser() });
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  };

  getCardOrReverse(max) {
    return Math.floor(Math.random() * Math.floor(max - 1));
  };

  handleReadingSave = (readingCopy) => {
    const newReading = {};

    newReading.reading = readingCopy.map(card => {
      if (card.isReversed) {
        return {
          name: card.nameReversed,
          arcana: card.arcana,
          meaning: card.meaningReversed,
          description: card.description,
          image: card.imageReversed,
        }
      } else {
        return {
          name: card.name,
          arcana: card.arcana,
          meaning: card.meaning,
          description: card.description,
          image: card.image,
        }
      }
    })
    newReading.user = this.state.user._id;
    newReading.reflections = [];
    readingService.saveReading(newReading);
  }

  handleFiveCardLove = () => {
    const getReadingBtn = document.getElementById('FiveCardLovePage-ReadingButton')
    getReadingBtn.disabled = true;
    let readingCopy = this.state.reading;
    let deckCopy = this.state.deck;
    for (let i = 0; i < 5; i++) {
      let randidx = this.getCardOrReverse(deckCopy.length + 1);
      let randflip = this.getCardOrReverse(2);
      let cardCopy = deckCopy[randidx];
      if (randflip) {
        cardCopy.isReversed = true;
      }
      readingCopy.push(cardCopy);
      let removed = deckCopy.splice(randidx, 1);
    }
    this.handleReadingSave(readingCopy);
    this.setState({ reading: readingCopy });
    console.log(this.state.reading)
  }

  handleCardFlip = (card) => {
    let readingCopy = this.state.reading;
    let idx = readingCopy.indexOf(card);
    let cardCopy = readingCopy.splice(idx, 1);
    cardCopy[0].isFlipped = true;
    readingCopy.splice(idx, 0, cardCopy[0])
    this.setState({ reading: readingCopy })
  }

  async componentDidMount() {
    const prevReadings = await readingService.pastReadingIndex(this.state.user._id);
    this.setState({ prevReadings: prevReadings })
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
              handleGetUser={this.handleGetUser}
            />
          } />
          <Route exact path='/login' render={({ history }) =>
            <LoginPage
              history={history}
              handleGetUser={this.handleGetUser}
            />
          } />
          <Route exact path='/about' render={() =>
            <AboutPage />
          } />
          <Route exact path='/tarot' render={() =>
            userService.getUser() ?
              <TarotPage />
              :
              <Redirect to='/login' />
          } />
          <Route exact path='/tarot/fivecardlove' render={props =>
            userService.getUser() ?
              <FiveCardLovePage
                {...props}
                handleFiveCardLove={this.handleFiveCardLove}
                handleCardFlip={this.handleCardFlip}
                reading={this.state.reading}
              />
              :
              <Redirect to='/login' />
          } />
          <Route exact path='/profile' render={() =>
            userService.getUser() ?
              <UserPage
                user={this.state.user}
                prevReadings={this.state.prevReadings}
              />
              :
              <Redirect to='/login' />
          } />
          <Route exact path='/profile/readingdetail/:id' render={() =>
            userService.getUser() ?
              <ReadingDetailPage
                reading={this.state.reading}
                prevReadings={this.state.prevReadings}
              />
              :
              <Redirect to='/login' />
          } />
        </Switch>
      </div>
    );
  }
}
