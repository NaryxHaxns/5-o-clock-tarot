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
      user: userService.getUser(),
      spread: [{
        name: "The Fool",
        nameReversed: "The Fool (Reversed)",
        arcana: "Major Arcana",
        meaning: "Folly, mania, extravagance, intoxication, delirium, frenzy, bewrayment.",
        meaningReversed: "Negligence, absence, distribution, carelessness, apathy, nullity, vanity.",
        description: "With light step, as if earth and its trammels had little power to restrain him, a young man in gorgeous vestments pauses at the brink of a precipice among the great heights of the world; he surveys the blue distance before him-its expanse of sky rather than the prospect below. His act of eager walking is still indicated, though he is stationary at the given moment; his dog is still bounding. The edge which opens on the depth has no terror; it is as if angels were waiting to uphold him, if it came about that he leaped from the height. His countenance is full of intelligence and expectant dream. He has a rose in one hand and in the other a costly wand, from which depends over his right shoulder a wallet curiously embroidered. He is a prince of the other world on his travels through this one-all amidst the morning glory, in the keen air. The sun, which shines behind him, knows whence he came, whither he is going, and how he will return by another path after many days. He is the spirit in search of experience. Many symbols of the Instituted Mysteries are summarized in this card, which reverses, under high warrants, all the confusions that have preceded it. In his Manual of Cartomancy, Grand Orient has a curious suggestion of the office of Mystic Fool, as apart of his process in higher divination; but it might call for more than ordinary gifts to put it into operation. We shall see how the card fares according to the common arts of fortune-telling, and it will be an example, to those who can discern, of the fact, otherwise so evident, that the Trumps Major had no place originally in the arts of psychic gambling, when cards are used as the counters and pretexts. Of the circumstances under which this art arose we know, however, very little. The conventional explanations say that the Fool signifies the flesh, the sensitive life, and by a peculiar satire its subsidiary name was at one time the alchemist, as depicting folly at the most insensate stage.",
        image: "https://i.imgur.com/Mi6xkuM.jpg",
        imageReversed: "https://i.imgur.com/ArGUoUA.jpg?1",
        isReversed: false,
        isFlipped: false
    },
    {
        name: "The Magician",
        nameReversed: "The Magician (Reversed)",
        arcana: "Major Arcana",
        meaning: "Skill, diplomacy, address, subtlety; sickness, pain, loss, disaster, snares of enemies; self-confidence, will; the Querent, if male.",
        meaningReversed: "Physician, Magus, mental disease, disgrace, disquiet.",
        description: `A youthful figure in the robe of a magician, having the countenance of divine Apollo, with smile of confidence and shining eyes. Above his head is the mysterious sign of the Holy Spirit, the sign of life, like an endless cord, forming the figure 8 in a horizontal position. About his waist is a serpent-cincture, the serpent appearing to devour its own tail. This is familiar to most as a conventional symbol of eternity, but here it indicates more especially the eternity of attainment in the spirit. In the Magician's right hand is a wand raised towards heaven, while the left hand is pointing to the earth. This dual sign is known in very high grades of the Instituted Mysteries; it shews the descent of grace, virtue and light, drawn from things above and derived to things below. The suggestion throughout is therefore the possession and communication of the Powers and Gifts of the Spirit. On the table in front of the Magician are the symbols of the four Tarot suits, signifying the elements of natural life, which lie like counters before the adept, and he adapts them as he wills. Beneath are roses and lilies, the flos campi and lilium convallium, changed into garden flowers, to shew the culture of aspiration. This card signifies the divine motive in man, reflecting God, the will in the liberation of its union with that which is above. It is also the unity of individual being on all planes, and in a very high sense it is thought, in the fixation thereof. With further reference to what I have called the sign of life and its connexion with the number 8, it may be remembered that Christian Gnosticism speaks of rebirth in Christ as a change "unto the Ogdoad." The mystic number is termed Jerusalem above, the Land flowing with Milk and Honey, the Holy Spirit and the Land of the Lord. According to Martinism, 8 is the number of Christ.`,
        image: "https://i.imgur.com/YFGvLgj.jpg",
        imageReversed: "https://i.imgur.com/jRXIeQe.jpg?1",
        isReversed: false,
        isFlipped: false
    },
    {
        name: "The High Priestess",
        nameReversed: "The High Priestess (Reversed)",
        arcana: "Major Arcana",
        meaning: "Secrets, mystery, the future as yet unrevealed; the woman who interests the Querent, if male; the Querent herself, if female; silence, tenacity; mystery, wisdom, science.",
        meaningReversed: "Passion, moral or physical ardour, conceit, surface knowledge.",
        description: "She has the lunar crescent at her feet, a horned diadem on her head, with a globe in the middle place, and a large solar cross on her breast. The scroll in her hands is inscribed with the word Tora, signifying the Greater Law, the Secret Law and the second sense of the Word. It is partly covered by her mantle, to shew that some things are implied and some spoken. She is seated between the white and black pillars - J. and B. - of the mystic Temple, and the veil of the Temple is behind her: it is embroidered with palms and pomegranates. The vestments are flowing and gauzy, and the mantle suggests light - a shimmering radiance. She has been called occult Science on the threshold of the Sanctuary of Isis, but she is really the Secret Church, the House which is of God and man. She represents also the Second Marriage of the Prince who is no longer of this world; she is the spiritual Bride and Mother, the daughter of the stars and the Higher Garden of Eden. She is, in fine, the Queen of the borrowed light, but this is the light of all. She is the Moon nourished by the milk of the Supernal Mother. In a manner, she is also the Supernal Mother herself - that is to say, she is the bright reflection. It is in this sense of reflection that her truest and highest name in bolism is Shekinah - the co-habiting glory. According to Kabalism, there is a Shekinah both above and below. In the superior world it is called Binah, the Supernal Understanding which reflects to the emanations that are beneath. In the lower world it is MaIkuth - that world being, for this purpose, understood as a blessed Kingdom that with which it is made blessed being the Indwelling Glory. Mystically speaking, the Shekinah is the Spiritual Bride of the just man, and when he reads the Law she gives the Divine meaning. There are some respects in which this card is the highest and holiest of the Greater Arcana.",
        image: "https://i.imgur.com/9vrPLQi.jpg",
        imageReversed: "https://i.imgur.com/kDbVoiz.jpg?1",
        isReversed: false,
        isFlipped: false
    },
    {
        name: "The Empress",
        nameReversed: "The Empress (Reversed)",
        arcana: "Major Arcana",
        meaning: "Fruitfulness, action, initiative, length of days; the unknown, clandestine; also difficulty, doubt, ignorance.",
        meaningReversed: "Light, truth, the unravelling of involved matters, public rejoicings; according to another reading, vacillation.",
        description: "A stately figure, seated, having rich vestments and royal aspect, as of a daughter of heaven and earth. Her diadem is of twelve stars, gathered in a cluster. The symbol of Venus is on the shield which rests near her. A field of corn is ripening in front of her, and beyond there is a fall of water. The sceptre which she bears is surmounted by the globe of this world. She is the inferior Garden of Eden, the Earthly Paradise, all that is symbolized by the visible house of man. She is not Regina coeli, but she is still refugium peccatorum, the fruitful mother of thousands. There are also certain aspects in which she has been correctly described as desire and the wings thereof, as the woman clothed with the sun, as Gloria Mundi and the veil of the Sanctum Sanctorum; but she is not, I may add, the soul that has attained wings, unless all the symbolism is counted up another and unusual way. She is above all things universal fecundity and the outer sense of the Word. This is obvious, because there is no direct message which has been given to man like that which is borne by woman; but she does not herself carry its interpretation. In another order of ideas, the card of the Empress signifies the door or gate by which an entrance is obtained into this life, as into the Garden of Venus; and then the way which leads out therefrom, into that which is beyond, is the secret known to the High Priestess: it is communicated by her to the elect. Most old attributions of this card are completely wrong on the symbolism - as, for example, its identification with the Word, Divine Nature, the Triad, and so forth.",
        image: "https://i.imgur.com/MY7kVhT.jpg",
        imageReversed: "https://i.imgur.com/QjyTNEm.jpg?1",
        isReversed: false,
        isFlipped: false
    },
    {
        name: "The Emperor",
        nameReversed: "The Emperor (Reversed)",
        arcana: "Major Arcana",
        meaning: "Stability, power, protection, realization; a great person; aid, reason, conviction; also authority and will.",
        meaningReversed: "Benevolence, compassion, credit; also confusion to enemies, obstruction, immaturity.",
        description: `He has a form of the Crux ansata for his sceptre and a globe in his left hand. He is a crowned monarch - commanding, stately, seated on a throne, the arms of which axe fronted by rams' heads. He is executive and realization, the power of this world, here clothed with the highest of its natural attributes. He is occasionally represented as seated on a cubic stone, which, however, confuses some of the issues. He is the virile power, to which the Empress responds, and in this sense is he who seeks to remove the Veil of Isis; yet she remains virgo intacta. It should be understood that this card and that of the Empress do not precisely represent the condition of married life, though this state is implied. On the surface, as I have indicated, they stand for mundane royalty, uplifted on the seats of the mighty; but above this there is the suggestion of another presence. They signify also - and the male figure especially - the higher kingship, occupying the intellectual throne. Hereof is the lordship of thought rather than of the animal world. Both personalities, after their own manner, are "full of strange experience," but theirs is not consciously the wisdom which draws from a higher world. The Emperor has been described as: (a) will in its embodied form, but this is only one of its applications, and (b) as an expression of virtualities contained in the Absolute Being - but this is fantasy.`,
        image: "https://i.imgur.com/4do1J6d.jpg",
        imageReversed: "https://i.imgur.com/eVkthGs.jpg?1",
        isReversed: false,
        isFlipped: false
    }],
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
    for(let i=0; i<5; i++){
      let randidx = this.getCardOrReverse(deck.length + 1);
      let randflip = this.getCardOrReverse(2)
      let spreadCopy = this.state.spread;
      let cardCopy = deck[randidx]
      if(randflip){
        cardCopy.isReversed = true;
      }
      this.setState({spread: spreadCopy.push(cardCopy)})
    }
    console.log(this.state.spread)
  }

  showModal = () => {
    this.setState({ show: true })
  }

  hideModal = () => {
    this.setState({ show: false })
  }

  handleCardFlip = (card) => {
    console.log(card)
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
