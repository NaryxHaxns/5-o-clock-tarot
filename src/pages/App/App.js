import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
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
  constructor(){
    super();
    this.state = {
      user: userService.getUser(),
      deck: cards,
      reading: [],
      prevReadings: []
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

  handleReadingSave = (readingCopy) => {
    const newReading = {};

    newReading.reading = readingCopy.map(card => {
      if(card.isReversed){
        return {
          name: card.nameReversed,
          arcana: card.arcana,
          meaning: card.meaningReversed,
          description: card.description,
          image: card.imageReversed,
          show: false
        }
      }else{
        return {
          name: card.name,
          arcana: card.arcana,
          meaning: card.meaning,
          description: card.description,
          image: card.image,
          show: false
        }
      }
    })
    newReading.user = this.state.user._id;
    readingService.saveReading(newReading);
  }

  handleFiveCardLove = () => {
    const getReadingBtn = document.getElementById('FiveCardLovePage-ReadingButton')
    getReadingBtn.disabled = true;
    let readingCopy = this.state.reading;
    let deckCopy = this.state.deck;
    for(let i=0; i<5; i++){
      let randidx = this.getCardOrReverse(deckCopy.length + 1);
      let randflip = this.getCardOrReverse(2);
      let cardCopy = deckCopy[randidx];
      if(randflip){
        cardCopy.isReversed = true;
      }
      readingCopy.push(cardCopy);
      let removed = deckCopy.splice(randidx, 1);
    }
    this.handleReadingSave(readingCopy);
    this.setState({reading: readingCopy});
    console.log(this.state.reading)
  }

  showHideModal = (card) => {
    let readingCopy = this.state.reading;
    let idx = readingCopy.indexOf(card);
    let cardCopy = readingCopy.splice(idx, 1);
    if(card.show === true){
      cardCopy[0].show = false;
    } else if(card.show === false){
      cardCopy[0].show = true;
    }
    readingCopy.splice(idx, 0, cardCopy[0])
    this.setState({ reading: readingCopy })
  }

  showHideModalDetail = (card) => {
    let prevReadingsCopy = this.state.prevReadings
    let cardCopy = card;
    if(cardCopy.show){
      cardCopy.show = false;
    }else{
      cardCopy.show = true
    }
    console.log(prevReadingsCopy)
    // prevReadingsCopy.map(function (reading){
    //   prevReadingsCopy[reading].reading.map(function (readingCard){
    //     if(cardCopy._id === readingCard._id){
    //       prevReadingsCopy[reading].reading[readingCard].splice(readingCard, 1, cardCopy);
    //     };
    //   });
    // });
    this.setState({ prevReadings: prevReadingsCopy });
  };


  handleCardFlip = (card) => {
    let readingCopy = this.state.reading;
    let idx = readingCopy.indexOf(card);
    let cardCopy = readingCopy.splice(idx, 1);
    cardCopy[0].isFlipped = true;
    readingCopy.splice(idx, 0, cardCopy[0])
    this.setState({ reading: readingCopy })
  }

  async componentDidMount(){
    let userId = this.state.user._id;
    const prevReadings = await readingService.userIndex(userId);
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
              showHideModal={this.showHideModal}
              handleCardFlip={this.handleCardFlip}
              reading={this.state.reading}
            />
          } />
          <Route exact path='/profile' render={() =>
            <UserPage 
              user={this.state.user}
              prevReadings={this.state.prevReadings}
            />
          } />
          <Route exact path='/profile/readingdetail/:id' render={() =>
            <ReadingDetailPage 
            showHideModalDetail={this.showHideModalDetail}
              reading={this.state.reading}
              prevReadings={this.state.prevReadings}
            />
          } />
        </Switch>
      </div>
    );
  }
}
