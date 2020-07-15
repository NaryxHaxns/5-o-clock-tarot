import React from 'react';
import './AboutPage.css';
import { Link } from 'react-router-dom';

const About = () => (
    <div className='AboutPage'>
        <Link to='/' className='AboutPage-link'>Home</Link>

        <h1>History & About</h1>
        <h3>Tarot</h3>
        <p>
            Tarot cards were used in gameplay that dates back to
            the mid-15th century in various parts of Europe. It
            was not until the late 18th century that some decks
            began to be used for divination and cartomancy. 
        </p>
        <br/>
        <h3>Rider</h3>
        <p>
            Rider is the original publishing company for this
            deck of tarot and is a division of Penguin Random House.
            Originally printed in 1909, this deck is by far the most
            widely known and reprinted. It is the basis of
            inspiration for many other decks to date. Because of
            the publisher, author, and illustrator, the deck is
            known by many combinations of their names: Rider, Smith,
            and Waite.
        </p>
        <br/>
        <h3>Pamela Coleman Smith</h3>
        <p>
            Pamela Coleman Smith (1878-1951) is the artist who
            imagined the illustrations for this deck of tarot.
            Instructed by Waite's interpretations, she 
            applied her own artistic spirit to each card.
        </p>
        <br/>
        <h3>A.E. Waite</h3>
        <p>
            Arthur Edward Waite (1857-1942) is the writer behind
            the deck used in this application. A learned occultist,
            he made sure that all possible symbols and settings were
            included.
        </p>
    </div>
)

export default About;