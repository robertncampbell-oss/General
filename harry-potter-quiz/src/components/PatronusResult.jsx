import { useState, useEffect } from 'react';

export default function PatronusResult({ animal, patronusData, onRestart }) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 600);
    const t2 = setTimeout(() => setPhase(2), 1800);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  const data = patronusData[animal] || {
    emoji: '✨',
    description: 'A rare and powerful Patronus that defies easy description.'
  };

  return (
    <div className={`result-screen patronus-result phase-${phase}`}>
      <div className="result-inner">
        {phase === 0 && (
          <p className="result-pre animate-pulse">Expecto Patronum…</p>
        )}
        {phase >= 1 && (
          <>
            <div className="patronus-burst">
              <span className="patronus-emoji">{data.emoji}</span>
            </div>
            <p className="result-pre">Your Patronus is…</p>
            <h1 className="patronus-name">{animal}</h1>
          </>
        )}
        {phase >= 2 && (
          <>
            <p className="result-description">{data.description}</p>
            <div className="result-actions">
              <button className="btn-begin btn-restart" onClick={onRestart}>
                Try Another Quiz
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
