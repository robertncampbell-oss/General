import { useState } from 'react';

const mainQuizzes = [
  {
    key: 'houseSorting',
    title: 'The Sorting Hat',
    icon: '🎩',
    description: 'Answer the Sorting Hat\'s questions and discover which Hogwarts house truly belongs to you.',
    color: '#AE0001',
    badge: 'Personality Quiz'
  },
  {
    key: 'patronus',
    title: 'Patronus Charm',
    icon: '✨',
    description: 'Expecto Patronum! Find out which magical creature will emerge as your spirit guardian.',
    color: '#1A3A6B',
    badge: 'Personality Quiz'
  }
];

const subjectQuizzes = [
  { key: 'potions', title: 'Potions', icon: '⚗️', description: 'Brews, elixirs, and draughts from Professor Snape\'s dungeons.' },
  { key: 'charms', title: 'Charms', icon: '⭐', description: 'Incantations and enchantments taught by Professor Flitwick.' },
  { key: 'dada', title: 'Defence Against the Dark Arts', icon: '🛡️', description: 'Dark creatures, curses, and how to fight back.' },
  { key: 'transfiguration', title: 'Transfiguration', icon: '🔮', description: 'The art of changing one thing into another with Professor McGonagall.' },
  { key: 'herbology', title: 'Herbology', icon: '🌿', description: 'Magical plants and fungi from the Hogwarts greenhouses.' }
];

const bookQuizzes = [
  { key: 'bookJunior', title: 'Junior Wizard', icon: '⚡', description: 'Easy questions for every Hogwarts first year.', badge: 'Easy' },
  { key: 'bookSenior', title: 'Senior Wizard', icon: '🧙', description: 'For those who\'ve read every book at least twice.', badge: 'Medium' },
  { key: 'bookMaster', title: 'Master Wizard', icon: '🔮', description: 'Seriously hard. Only true Potterheads need apply.', badge: 'Hard' }
];

export default function HomePage({ onStart }) {
  const [expanded, setExpanded] = useState(null);

  const stars = Array.from({ length: 60 }, (_, i) => ({
    id: i,
    top: Math.random() * 100,
    left: Math.random() * 100,
    size: Math.random() * 2.5 + 1,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 4
  }));

  return (
    <div className="home">
      <div className="stars-bg" aria-hidden="true">
        {stars.map(s => (
          <span
            key={s.id}
            className="star"
            style={{
              top: `${s.top}%`,
              left: `${s.left}%`,
              width: `${s.size}px`,
              height: `${s.size}px`,
              animationDuration: `${s.duration}s`,
              animationDelay: `${s.delay}s`
            }}
          />
        ))}
      </div>

      <header className="hero">
        <div className="hero-crest">⚡</div>
        <h1 className="hero-title">Wizarding World<br /><span>Quiz Hub</span></h1>
        <p className="hero-subtitle">No annoying pop-ups. No ads. Just pure magic.</p>
        <p className="hero-sub2">Six quizzes for kids, nine for the grown-up nerds who really know their stuff.</p>
      </header>

      <main className="quiz-grid-wrapper">
        <section className="quiz-section">
          <h2 className="section-title">✨ Who Are You?</h2>
          <div className="quiz-grid">
            {mainQuizzes.map(q => (
              <div key={q.key} className="quiz-card" style={{ '--card-color': q.color }}>
                {q.badge && <span className="card-badge">{q.badge}</span>}
                <div className="card-icon">{q.icon}</div>
                <h3>{q.title}</h3>
                <p>{q.description}</p>
                <button className="btn-begin" onClick={() => onStart(q.key)}>
                  Begin
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="quiz-section">
          <h2 className="section-title">📚 Magical Subjects</h2>
          <button
            className="section-toggle"
            onClick={() => setExpanded(expanded === 'subjects' ? null : 'subjects')}
            aria-expanded={expanded === 'subjects'}
          >
            {expanded === 'subjects' ? '▲ Hide subjects' : '▼ Choose a subject'}
          </button>
          {expanded === 'subjects' && (
            <div className="quiz-grid quiz-grid-5">
              {subjectQuizzes.map(q => (
                <div key={q.key} className="quiz-card quiz-card-sm">
                  <div className="card-icon">{q.icon}</div>
                  <h3>{q.title}</h3>
                  <p>{q.description}</p>
                  <button className="btn-begin" onClick={() => onStart(q.key)}>
                    Begin
                  </button>
                </div>
              ))}
            </div>
          )}
        </section>

        <section className="quiz-section">
          <h2 className="section-title">📖 Book Knowledge</h2>
          <button
            className="section-toggle"
            onClick={() => setExpanded(expanded === 'books' ? null : 'books')}
            aria-expanded={expanded === 'books'}
          >
            {expanded === 'books' ? '▲ Hide levels' : '▼ Choose your level'}
          </button>
          {expanded === 'books' && (
            <div className="quiz-grid">
              {bookQuizzes.map(q => (
                <div key={q.key} className={`quiz-card difficulty-${q.badge?.toLowerCase()}`}>
                  {q.badge && <span className="card-badge">{q.badge}</span>}
                  <div className="card-icon">{q.icon}</div>
                  <h3>{q.title}</h3>
                  <p>{q.description}</p>
                  <button className="btn-begin" onClick={() => onStart(q.key)}>
                    Begin
                  </button>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>

      <footer className="site-footer">
        <p>Built with 💛 for Potterheads of all ages</p>
      </footer>
    </div>
  );
}
