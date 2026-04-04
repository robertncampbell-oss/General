import { useState, useEffect } from 'react';

export default function HouseResult({ houseKey, houseData, onRestart }) {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setRevealed(true), 800);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className={`result-screen house-result ${revealed ? 'revealed' : ''}`}
      style={{ '--house-color': houseData.color, '--house-accent': houseData.accent }}
    >
      <div className="result-inner">
        <p className="result-pre">{revealed ? 'The Sorting Hat has spoken...' : 'Hmm...'}</p>

        <div className={`house-crest ${revealed ? 'crest-in' : ''}`}>
          <span className="house-emoji">{houseData.emoji}</span>
        </div>

        <h1 className="house-name">{houseData.name}</h1>

        <div className="house-traits">
          {houseData.traits.map(t => (
            <span key={t} className="trait-badge">{t}</span>
          ))}
        </div>

        <p className="result-description">{houseData.description}</p>

        <div className="result-actions">
          <button className="btn-begin btn-restart" onClick={onRestart}>
            Try Another Quiz
          </button>
        </div>
      </div>
    </div>
  );
}
