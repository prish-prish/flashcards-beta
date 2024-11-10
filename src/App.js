import logo from './logo.svg';
import './App.css';
import Deck from './Deck';
import Review from './Review';
import React, {useState} from 'react';

function App() {
  const [decks, setDecks] = useState([]);
  const [currentDeck, setCurrentDeck] = useState(null);

  const addDeck = (name) => {
    const newDeck = { name, cards: [] };
    setDecks([...decks, newDeck]);
  };
 // Add a card to a specific deck
 const addCardToDeck = (deckIndex, question, answer) => {
  const updatedDecks = decks.map((deck, index) =>
    index === deckIndex ? { ...deck, cards: [...deck.cards, { question, answer, known: false }] } : deck
  );
  setDecks(updatedDecks);
};

// Start reviewing a deck
const startReview = (deck) => setCurrentDeck(deck);

return (
  <div>
    {!currentDeck ? (
      <Deck decks={decks} addDeck={addDeck} addCardToDeck={addCardToDeck} startReview={startReview} />
    ) : (
      <Review deck={currentDeck} onBack={() => setCurrentDeck(null)} />
    )}
  </div>
);

}

export default App;
