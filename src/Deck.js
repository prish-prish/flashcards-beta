import React, { useState } from 'react';

function Deck({ decks, addDeck, addCardToDeck, startReview }) {
  const [deckName, setDeckName] = useState('');
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleAddDeck = () => {
    addDeck(deckName);
    setDeckName('');
  };

  return (
    <div>
      <h2>Decks</h2>
      <input value={deckName} onChange={(e) => setDeckName(e.target.value)} placeholder="New deck name" />
      <button onClick={handleAddDeck}>Add Deck</button>

      {decks.map((deck, index) => (
        <div key={index}>
          <h3>{deck.name}</h3>
          <input value={question} onChange={(e) => setQuestion(e.target.value)} placeholder="Question" />
          <input value={answer} onChange={(e) => setAnswer(e.target.value)} placeholder="Answer" />
          <button onClick={() => { addCardToDeck(index, question, answer); setQuestion(''); setAnswer(''); }}>
            Add Card
          </button>
          <button onClick={() => startReview(deck)}>Start Review</button>
        </div>
      ))}
    </div>
  );
}

export default Deck;