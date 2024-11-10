import React, { useState } from 'react';

function Review({ deck, onBack }) {
  const [cardIndex, setCardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const card = deck.cards[cardIndex];

  const handleNext = () => {
    setShowAnswer(false);
    setCardIndex((prev) => (prev + 1) % deck.cards.length);
  };

  return (
    <div>
      <button onClick={onBack}>Back to Decks</button>
      {card ? (
        <div>
          <p>Q: {card.question}</p>
          {showAnswer && <p>A: {card.answer}</p>}
          <button onClick={() => setShowAnswer(!showAnswer)}>{showAnswer ? 'Hide Answer' : 'Show Answer'}</button>
          <button onClick={handleNext}>Next Card</button>
        </div>
      ) : (
        <p>No cards to review</p>
      )}
    </div>
  );
}

export default Review;