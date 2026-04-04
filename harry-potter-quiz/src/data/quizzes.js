const houseSorting = {
  title: "The Sorting Hat",
  subtitle: "Which Hogwarts house do you truly belong to?",
  icon: "🎩",
  type: "sorting",
  questions: [
    {
      question: "A troll has broken into Hogwarts. What do you do?",
      answers: [
        { text: "Charge in to help anyone in danger", scores: { G: 3, H: 1, R: 0, S: 0 } },
        { text: "Alert a teacher and ensure everyone reaches safety", scores: { G: 1, H: 3, R: 1, S: 0 } },
        { text: "Find a clever strategic way to stop it", scores: { G: 0, H: 1, R: 3, S: 1 } },
        { text: "Turn the situation to your advantage", scores: { G: 0, H: 0, R: 1, S: 3 } }
      ]
    },
    {
      question: "Which magical creature would you most like as a companion?",
      answers: [
        { text: "A Hippogriff — proud, fierce, and loyal", scores: { G: 3, H: 1, R: 0, S: 0 } },
        { text: "A Niffler — curious, affectionate, and funny", scores: { G: 0, H: 3, R: 1, S: 1 } },
        { text: "An Owl — wise, observant, and independent", scores: { G: 0, H: 1, R: 3, S: 0 } },
        { text: "A Basilisk — powerful, feared, and obedient", scores: { G: 0, H: 0, R: 0, S: 3 } }
      ]
    },
    {
      question: "Your friend breaks the rules and is about to be caught. You...",
      answers: [
        { text: "Create a distraction so they can escape", scores: { G: 3, H: 1, R: 0, S: 1 } },
        { text: "Cover for them completely — loyalty above all", scores: { G: 1, H: 3, R: 0, S: 0 } },
        { text: "Help them construct a perfectly logical alibi", scores: { G: 0, H: 1, R: 3, S: 1 } },
        { text: "File it away — useful information for later", scores: { G: 0, H: 0, R: 1, S: 3 } }
      ]
    },
    {
      question: "Which subject would you most want to excel at?",
      answers: [
        { text: "Defence Against the Dark Arts", scores: { G: 3, H: 0, R: 1, S: 1 } },
        { text: "Herbology or Care of Magical Creatures", scores: { G: 0, H: 3, R: 1, S: 0 } },
        { text: "Astronomy or Arithmancy", scores: { G: 0, H: 1, R: 3, S: 0 } },
        { text: "Potions or Occlumency", scores: { G: 0, H: 0, R: 1, S: 3 } }
      ]
    },
    {
      question: "What quality do you value most in yourself?",
      answers: [
        { text: "Courage — I face my fears head on", scores: { G: 3, H: 1, R: 0, S: 0 } },
        { text: "Loyalty — I never abandon the people I care about", scores: { G: 1, H: 3, R: 0, S: 0 } },
        { text: "Intelligence — I use my mind to solve problems", scores: { G: 0, H: 0, R: 3, S: 1 } },
        { text: "Ambition — I always find a way to succeed", scores: { G: 1, H: 0, R: 1, S: 3 } }
      ]
    },
    {
      question: "Your greatest fear is...",
      answers: [
        { text: "Cowardice when it matters most", scores: { G: 3, H: 0, R: 0, S: 0 } },
        { text: "Being left behind by people you love", scores: { G: 0, H: 3, R: 0, S: 0 } },
        { text: "Remaining ignorant or being deceived", scores: { G: 0, H: 0, R: 3, S: 0 } },
        { text: "Being ordinary and forgotten", scores: { G: 0, H: 0, R: 0, S: 3 } }
      ]
    },
    {
      question: "You find a mysterious locked door deep in Hogwarts. You...",
      answers: [
        { text: "Try to open it immediately — adventure awaits!", scores: { G: 3, H: 0, R: 0, S: 1 } },
        { text: "Come back with a trusted friend before going further", scores: { G: 1, H: 3, R: 1, S: 0 } },
        { text: "Spend a week researching what might be behind it first", scores: { G: 0, H: 1, R: 3, S: 1 } },
        { text: "Find the cleverest possible way to get through it", scores: { G: 1, H: 0, R: 1, S: 3 } }
      ]
    },
    {
      question: "A fellow student is being bullied. You...",
      answers: [
        { text: "Step in immediately and confront the bully", scores: { G: 3, H: 1, R: 0, S: 0 } },
        { text: "Comfort the student and help them feel safe", scores: { G: 1, H: 3, R: 0, S: 0 } },
        { text: "Report it to a teacher with full details", scores: { G: 0, H: 1, R: 3, S: 0 } },
        { text: "Find the bully's weakness and ensure they back off", scores: { G: 1, H: 0, R: 1, S: 3 } }
      ]
    },
    {
      question: "Your ideal weekend at Hogwarts would be...",
      answers: [
        { text: "Flying and a rousing game of Quidditch", scores: { G: 3, H: 1, R: 0, S: 0 } },
        { text: "A big feast and long evening with close friends", scores: { G: 1, H: 3, R: 0, S: 0 } },
        { text: "Buried in the library discovering something new", scores: { G: 0, H: 0, R: 3, S: 1 } },
        { text: "Mapping out your plans and goals for the year", scores: { G: 0, H: 1, R: 1, S: 3 } }
      ]
    },
    {
      question: "You win a rare and valuable prize. You...",
      answers: [
        { text: "Share it with your whole house", scores: { G: 2, H: 2, R: 0, S: 0 } },
        { text: "Give it to the friend who deserves it most", scores: { G: 1, H: 3, R: 0, S: 0 } },
        { text: "Study it to understand exactly what makes it valuable", scores: { G: 0, H: 0, R: 3, S: 1 } },
        { text: "Keep it — a symbol of your achievement", scores: { G: 0, H: 0, R: 0, S: 3 } }
      ]
    },
    {
      question: "People who know you would say you are...",
      answers: [
        { text: "Brave and perhaps a little reckless", scores: { G: 3, H: 0, R: 0, S: 1 } },
        { text: "Kind, warm, and endlessly patient", scores: { G: 0, H: 3, R: 0, S: 0 } },
        { text: "Thoughtful, curious, and a bit obsessive about facts", scores: { G: 0, H: 0, R: 3, S: 0 } },
        { text: "Driven, sharp, and not someone to cross", scores: { G: 1, H: 0, R: 1, S: 3 } }
      ]
    },
    {
      question: "The password to your common room should be...",
      answers: [
        { text: "\"For all who dare!\"", scores: { G: 3, H: 0, R: 0, S: 0 } },
        { text: "\"Together we stand\"", scores: { G: 0, H: 3, R: 0, S: 0 } },
        { text: "\"Knowledge unlocks all\"", scores: { G: 0, H: 0, R: 3, S: 0 } },
        { text: "\"Power to the worthy\"", scores: { G: 0, H: 0, R: 0, S: 3 } }
      ]
    }
  ],
  results: {
    G: {
      name: "Gryffindor",
      emoji: "🦁",
      color: "#AE0001",
      accent: "#EEBA30",
      description: "You are brave, daring, and full of nerve. Gryffindors are known for their courage in the face of danger and their willingness to stand up for what is right, even when it is difficult. Like Harry, Ron, and Hermione, you lead with your heart.",
      traits: ["Brave", "Chivalrous", "Daring", "Determined"]
    },
    H: {
      name: "Hufflepuff",
      emoji: "🦡",
      color: "#FFDB00",
      accent: "#000000",
      description: "You are loyal, patient, and true. Hufflepuffs are hardworking and fair, valuing kindness above all else. You never abandon a friend and you believe deeply in doing what is right — not for glory, but because it matters.",
      traits: ["Loyal", "Patient", "Hardworking", "Kind"]
    },
    R: {
      name: "Ravenclaw",
      emoji: "🦅",
      color: "#0E1A40",
      accent: "#946B2D",
      description: "You are wise, witty, and endlessly curious. Ravenclaws prize learning and intelligence above all things. You love discovering how the world works and you are never satisfied with a shallow answer — you dig deeper.",
      traits: ["Wise", "Curious", "Creative", "Sharp-minded"]
    },
    S: {
      name: "Slytherin",
      emoji: "🐍",
      color: "#1A472A",
      accent: "#AAAAAA",
      description: "You are ambitious, cunning, and resourceful. Slytherins know what they want and they find clever ways to get it. You are a natural leader who thinks several steps ahead — and your determination is unmatched.",
      traits: ["Ambitious", "Cunning", "Resourceful", "Determined"]
    }
  }
};

const patronus = {
  title: "Patronus Charm",
  subtitle: "What form does your Patronus take?",
  icon: "✨",
  type: "patronus",
  questions: [
    {
      question: "Which word best describes you?",
      answers: [
        { text: "Brave", animal: "Stag" },
        { text: "Playful", animal: "Otter" },
        { text: "Gentle", animal: "Doe" },
        { text: "Resilient", animal: "Phoenix" }
      ]
    },
    {
      question: "Your friends would say you are...",
      answers: [
        { text: "A fierce protector", animal: "Wolf" },
        { text: "Witty and quick", animal: "Fox" },
        { text: "Free-spirited", animal: "Hare" },
        { text: "Quietly perceptive", animal: "Lynx" }
      ]
    },
    {
      question: "When things go very wrong, you...",
      answers: [
        { text: "Stand your ground and face it", animal: "Stag" },
        { text: "Find the humour and adapt", animal: "Otter" },
        { text: "Comfort those around you first", animal: "Doe" },
        { text: "Rise stronger from the experience", animal: "Phoenix" }
      ]
    },
    {
      question: "Your favourite place to be is...",
      answers: [
        { text: "Out in the wild, somewhere open", animal: "Horse" },
        { text: "Near water — rivers, lakes, the sea", animal: "Otter" },
        { text: "Somewhere calm and peaceful", animal: "Doe" },
        { text: "Somewhere high with a view", animal: "Lynx" }
      ]
    },
    {
      question: "In a group, you tend to...",
      answers: [
        { text: "Take charge and lead the way", animal: "Stag" },
        { text: "Keep everyone together and happy", animal: "Wolf" },
        { text: "Come up with the clever plan", animal: "Fox" },
        { text: "Observe quietly and act when needed", animal: "Lynx" }
      ]
    },
    {
      question: "Your greatest strength is...",
      answers: [
        { text: "Courage under pressure", animal: "Stag" },
        { text: "Compassion for others", animal: "Doe" },
        { text: "Bouncing back from hardship", animal: "Phoenix" },
        { text: "Outsmarting the competition", animal: "Fox" }
      ]
    },
    {
      question: "Which magical ability would you want most?",
      answers: [
        { text: "Shape-shifting", animal: "Hare" },
        { text: "Foresight and ancient wisdom", animal: "Phoenix" },
        { text: "Speed beyond all others", animal: "Horse" },
        { text: "Seeing the truth in all things", animal: "Lynx" }
      ]
    },
    {
      question: "Your happiest memories involve...",
      answers: [
        { text: "Protecting someone you love", animal: "Wolf" },
        { text: "Laughing until it hurts", animal: "Otter" },
        { text: "A quiet moment of peace", animal: "Doe" },
        { text: "Achieving something truly difficult", animal: "Phoenix" }
      ]
    },
    {
      question: "If you were an animal, your instinct would be to...",
      answers: [
        { text: "Run free and fast across open land", animal: "Horse" },
        { text: "Hunt cleverly and patiently", animal: "Fox" },
        { text: "Guard the pack at all costs", animal: "Wolf" },
        { text: "Disappear silently into the trees", animal: "Lynx" }
      ]
    },
    {
      question: "What do you dream of?",
      answers: [
        { text: "Standing tall at the moment it matters", animal: "Stag" },
        { text: "Starting over and becoming something more", animal: "Phoenix" },
        { text: "Running wild with the wind at your back", animal: "Hare" },
        { text: "A world that is safe for the ones you love", animal: "Doe" }
      ]
    }
  ],
  results: {
    Stag: {
      emoji: "🦌",
      description: "Noble and protective, the Stag Patronus belongs to those with a deep courage and an instinct to shield others. It is a rare and powerful form — James Potter's own Patronus."
    },
    Otter: {
      emoji: "🦦",
      description: "Playful, clever, and full of heart — the Otter Patronus is the mark of someone with quick wit and a warm spirit. Hermione Granger's Patronus takes this very form."
    },
    Doe: {
      emoji: "🦌",
      description: "Graceful and deeply intuitive, the Doe Patronus belongs to someone with a quiet, enduring love. It is a form born from the most profound loyalty."
    },
    Phoenix: {
      emoji: "🔥",
      description: "Rising from hardship stronger than before — the Phoenix Patronus is extraordinarily rare and belongs to those who have faced their darkest hour and emerged transformed."
    },
    Wolf: {
      emoji: "🐺",
      description: "Fierce, loyal, and pack-minded — the Wolf Patronus belongs to someone whose strength comes from the people they love and whose instinct is always to protect them."
    },
    Fox: {
      emoji: "🦊",
      description: "Cunning, quick-thinking, and delightfully unpredictable — the Fox Patronus belongs to someone who can find a way through any situation with wit and adaptability."
    },
    Hare: {
      emoji: "🐇",
      description: "Swift, alert, and wonderfully free — the Hare Patronus belongs to someone with a restless spirit and a deep love of freedom and spontaneity."
    },
    Lynx: {
      emoji: "🐈",
      description: "Mysterious and deeply perceptive, the Lynx Patronus belongs to someone who sees what others miss — quietly watching, always understanding more than they let on."
    },
    Horse: {
      emoji: "🐴",
      description: "Powerful, free, and unstoppable — the Horse Patronus belongs to someone with an unbreakable spirit and a natural strength that others can feel in your presence."
    }
  }
};

const subjects = {
  potions: {
    title: "Potions",
    icon: "⚗️",
    description: "Test your knowledge of brews, draughts, and elixirs from the dungeons of Hogwarts.",
    questions: [
      {
        question: "What colour is Veritaserum?",
        options: ["Bright blue", "Colourless", "Pale green", "Deep purple"],
        correctIndex: 1
      },
      {
        question: "What does Felix Felicis do to the drinker?",
        options: ["Makes them invisible", "Grants extraordinary good luck", "Allows them to fly", "Gives them superhuman strength"],
        correctIndex: 1
      },
      {
        question: "What is the key ingredient that makes Polyjuice Potion work?",
        options: ["A strand of hair from the target", "The target's tears", "A drop of the target's blood", "The target's fingernail"],
        correctIndex: 0
      },
      {
        question: "What does Amortentia smell like?",
        options: ["The same to everyone — roses and vanilla", "Nothing at all", "Different things to each person", "Whatever you last ate"],
        correctIndex: 2
      },
      {
        question: "What potion causes the drinker to speak only the truth?",
        options: ["Amortentia", "Veritaserum", "Felix Felicis", "The Draught of Living Death"],
        correctIndex: 1
      },
      {
        question: "Which potion is described as 'the most dangerous' by Dumbledore in Harry's sixth year?",
        options: ["Veritaserum", "Polyjuice Potion", "Felix Felicis", "Amortentia"],
        correctIndex: 2
      },
      {
        question: "What does the Draught of Living Death do?",
        options: ["Kills the drinker instantly", "Puts the drinker into a very deep sleep", "Makes the drinker appear dead for one hour", "Causes temporary paralysis"],
        correctIndex: 1
      },
      {
        question: "Which plant is used as an antidote to most poisons?",
        options: ["Mandrake", "Bezoar", "Gillyweed", "Dittany"],
        correctIndex: 1
      },
      {
        question: "What does Skele-Gro do?",
        options: ["Regrows vanished or broken bones", "Turns bones to rubber", "Makes bones unbreakable", "Strengthens existing bones"],
        correctIndex: 0
      },
      {
        question: "Who teaches Potions at Hogwarts in Harry's first year?",
        options: ["Professor Quirrell", "Professor Slughorn", "Professor Snape", "Professor Sprout"],
        correctIndex: 2
      }
    ]
  },
  charms: {
    title: "Charms",
    icon: "⭐",
    description: "Can you master the incantations and effects of Hogwarts' most useful spells?",
    questions: [
      {
        question: "What is the incantation for the Unlocking Charm?",
        options: ["Expelliarmus", "Alohomora", "Lumos", "Accio"],
        correctIndex: 1
      },
      {
        question: "What spell is used to levitate objects?",
        options: ["Accio", "Alohomora", "Wingardium Leviosa", "Locomotor"],
        correctIndex: 2
      },
      {
        question: "What does the Patronus Charm produce?",
        options: ["A shield of light", "A silvery magical guardian", "An explosion of sparks", "A cloud of protective smoke"],
        correctIndex: 1
      },
      {
        question: "What is the Summoning Charm incantation?",
        options: ["Accio", "Reparo", "Lumos", "Expecto"],
        correctIndex: 0
      },
      {
        question: "What does 'Reparo' do?",
        options: ["Creates a shield", "Mends broken objects", "Repairs memory", "Seals a wound"],
        correctIndex: 1
      },
      {
        question: "What charm produces light from the tip of a wand?",
        options: ["Incendio", "Lumos", "Alohomora", "Nox"],
        correctIndex: 1
      },
      {
        question: "What does the Cheering Charm do?",
        options: ["Makes someone laugh uncontrollably", "Creates a cheerful atmosphere in a room", "Makes the target feel exceptionally happy", "Summons joyful music"],
        correctIndex: 2
      },
      {
        question: "Which charm makes an object repel water?",
        options: ["Aqua Eructo", "Impervius", "Aguamenti", "Finite"],
        correctIndex: 1
      },
      {
        question: "What is the counter-charm to Lumos?",
        options: ["Finite", "Nox", "Obscuro", "Tenebrus"],
        correctIndex: 1
      },
      {
        question: "Who teaches Charms at Hogwarts throughout most of the series?",
        options: ["Professor McGonagall", "Professor Sprout", "Professor Flitwick", "Professor Dumbledore"],
        correctIndex: 2
      }
    ]
  },
  dada: {
    title: "Defence Against the Dark Arts",
    icon: "🛡️",
    description: "Face your fears and test your knowledge of Dark creatures and defensive magic.",
    questions: [
      {
        question: "What creature is defeated by laughter and changes into whatever you fear most?",
        options: ["Dementor", "Boggart", "Poltergeist", "Hag"],
        correctIndex: 1
      },
      {
        question: "What spell is used against a Boggart?",
        options: ["Expelliarmus", "Expecto Patronum", "Riddikulus", "Finite Incantatem"],
        correctIndex: 2
      },
      {
        question: "What does a Dementor force you to relive?",
        options: ["Your happiest memories", "Your worst memories and deepest fears", "Your most embarrassing moments", "Your childhood"],
        correctIndex: 1
      },
      {
        question: "What spell produces a Patronus?",
        options: ["Expecto Patronum", "Lumos Solem", "Riddikulus", "Protego"],
        correctIndex: 0
      },
      {
        question: "What is Voldemort's real name?",
        options: ["Tom Marvolo Riddle", "Tom Abraxas Riddle", "Thomas Salazar Riddle", "Tom Merlin Riddle"],
        correctIndex: 0
      },
      {
        question: "Which of these is NOT one of the three Unforgivable Curses?",
        options: ["Avada Kedavra", "Crucio", "Expelliarmus", "Imperius"],
        correctIndex: 2
      },
      {
        question: "What are Inferi?",
        options: ["Dark wizards who serve Voldemort", "Corpses reanimated by Dark magic", "Creatures that live in dark water", "Shadows given physical form"],
        correctIndex: 1
      },
      {
        question: "What is the core weakness of a Dementor?",
        options: ["Fire", "Sunlight", "A Patronus", "A Boggart"],
        correctIndex: 2
      },
      {
        question: "Which teacher is actually Voldemort in disguise in Harry's first year?",
        options: ["Professor Snape", "Professor Quirrell", "Professor Lockhart", "Professor Moody"],
        correctIndex: 1
      },
      {
        question: "What does the Killing Curse — Avada Kedavra — produce?",
        options: ["A red flash of light", "A jet of green light", "A jet of blue light", "A blinding white flash"],
        correctIndex: 1
      }
    ]
  },
  transfiguration: {
    title: "Transfiguration",
    icon: "🔮",
    description: "How well do you know the art of magically changing one thing into another?",
    questions: [
      {
        question: "Who teaches Transfiguration at Hogwarts throughout most of the series?",
        options: ["Professor Sprout", "Professor Dumbledore", "Professor McGonagall", "Professor Moody"],
        correctIndex: 2
      },
      {
        question: "What is an Animagus?",
        options: ["A wizard who can communicate with animals", "A wizard who can transform into a specific animal at will", "An animal with magical powers", "A wizard who specialises in magical beasts"],
        correctIndex: 1
      },
      {
        question: "What animal does Professor McGonagall transform into?",
        options: ["A tabby rabbit", "A tabby cat", "A grey owl", "A tortoiseshell cat"],
        correctIndex: 1
      },
      {
        question: "What is a Metamorphmagus?",
        options: ["Someone who can transform any object", "A wizard who changes appearance with a potion", "A person who can change their appearance at will without magic", "A creature that mimics human appearance"],
        correctIndex: 2
      },
      {
        question: "Who among Harry's parents' friends was NOT a registered Animagus?",
        options: ["Sirius Black", "Peter Pettigrew", "James Potter", "Remus Lupin"],
        correctIndex: 3
      },
      {
        question: "What spell Transfigures an object into a different object?",
        options: ["Wingardium Leviosa", "Vera Verto", "Mutatio", "Reparifors"],
        correctIndex: 1
      },
      {
        question: "What does the Switching Spell do?",
        options: ["Turns one object into another", "Swaps the positions of two objects", "Swaps the properties of two objects", "Duplicates an object"],
        correctIndex: 2
      },
      {
        question: "What is Neville Longbottom's boggart when faced in Transfiguration class... wait — which class teaches students about Boggarts?",
        options: ["Transfiguration", "Charms", "Defence Against the Dark Arts", "Care of Magical Creatures"],
        correctIndex: 2
      },
      {
        question: "What does 'Reparifors' do in the context of Transfiguration?",
        options: ["Mends broken bones", "Reverses minor magical transformations", "Fixes damaged objects", "Restores memory"],
        correctIndex: 1
      },
      {
        question: "Dumbledore was considered a master Transfigurer. What was his particular area of expertise?",
        options: ["Human Transfiguration", "Untransfiguration", "Conjuration", "All three equally"],
        correctIndex: 2
      }
    ]
  },
  herbology: {
    title: "Herbology",
    icon: "🌿",
    description: "Dig into your knowledge of magical plants, fungi, and the Hogwarts greenhouses.",
    questions: [
      {
        question: "What happens when a Mandrake matures and you hear its cry?",
        options: ["You fall asleep", "You are Petrified", "You die", "You lose your memory"],
        correctIndex: 2
      },
      {
        question: "What are immature Mandrakes' cries capable of?",
        options: ["Putting you to sleep", "Making you temporarily deaf", "Knocking you unconscious", "Causing mild confusion"],
        correctIndex: 2
      },
      {
        question: "Who teaches Herbology at Hogwarts?",
        options: ["Professor Sprout", "Professor Pomfrey", "Professor Grubbly-Plank", "Professor Kettleburn"],
        correctIndex: 0
      },
      {
        question: "What is Gillyweed used for?",
        options: ["Curing magical ailments", "Allowing the consumer to breathe underwater", "Making an invisibility potion", "Healing magical burns"],
        correctIndex: 1
      },
      {
        question: "What does Devil's Snare do when something struggles against it?",
        options: ["Releases immediately", "Constricts tighter", "Produces a soporific mist", "Shouts for help"],
        correctIndex: 1
      },
      {
        question: "What is the best way to defeat Devil's Snare?",
        options: ["Cut it with a magical blade", "Use fire or light", "Freeze it with an ice charm", "Pour water on it"],
        correctIndex: 1
      },
      {
        question: "Which plant produces berries that are used in Potion-making but are extremely poisonous raw?",
        options: ["Alihotsy", "Bubotuber", "Venomous Tentacula", "Baneberry"],
        correctIndex: 3
      },
      {
        question: "What do Bubotubers produce that is valuable in Potion-making?",
        options: ["A thick green paste", "Pus", "Seeds", "Oil"],
        correctIndex: 1
      },
      {
        question: "Which Hogwarts greenhouse contains the most dangerous magical plants?",
        options: ["Greenhouse One", "Greenhouse Two", "Greenhouse Three", "Greenhouse Four"],
        correctIndex: 2
      },
      {
        question: "What does the Venomous Tentacula do?",
        options: ["Sprays acid", "Stings and tries to capture prey", "Releases toxic spores", "Sings to confuse attackers"],
        correctIndex: 1
      }
    ]
  }
};

const bookKnowledge = {
  junior: {
    title: "Junior Wizard",
    subtitle: "Easy — for every Hogwarts first year",
    icon: "⚡",
    questions: [
      {
        question: "What is the name of Harry Potter's pet owl?",
        options: ["Errol", "Pigwidgeon", "Hedwig", "Fawkes"],
        correctIndex: 2
      },
      {
        question: "What shape is the scar on Harry Potter's forehead?",
        options: ["A star", "A lightning bolt", "A crescent moon", "A wand"],
        correctIndex: 1
      },
      {
        question: "What sport do wizards play on broomsticks?",
        options: ["Wizard Chess", "Quidditch", "Gobstones", "Broomball"],
        correctIndex: 1
      },
      {
        question: "What is the name of the Weasley family home?",
        options: ["The Hollow", "The Den", "The Burrow", "The Hut"],
        correctIndex: 2
      },
      {
        question: "Which Hogwarts house is Harry Potter sorted into?",
        options: ["Slytherin", "Ravenclaw", "Hufflepuff", "Gryffindor"],
        correctIndex: 3
      },
      {
        question: "What does the Mirror of Erised show the person looking into it?",
        options: ["Their future", "Their greatest fear", "Their heart's deepest desire", "Their true self"],
        correctIndex: 2
      },
      {
        question: "What is Ron Weasley's pet rat called?",
        options: ["Nibbles", "Whiskers", "Scabbers", "Ripper"],
        correctIndex: 2
      },
      {
        question: "Where do Harry and the Weasleys go to buy school supplies?",
        options: ["Knockturn Alley", "Diagon Alley", "Platform 9¾", "Hogsmeade"],
        correctIndex: 1
      },
      {
        question: "What platform do students use to board the Hogwarts Express?",
        options: ["Platform 7½", "Platform 8¾", "Platform 9¾", "Platform 10"],
        correctIndex: 2
      },
      {
        question: "What is the name of Hagrid's enormous three-headed dog?",
        options: ["Fluffy", "Fang", "Norbert", "Buckbeak"],
        correctIndex: 0
      }
    ]
  },
  senior: {
    title: "Senior Wizard",
    subtitle: "Medium — for dedicated readers of the books",
    icon: "🧙",
    questions: [
      {
        question: "What is the incantation to disarm an opponent?",
        options: ["Stupefy", "Reducto", "Expelliarmus", "Protego"],
        correctIndex: 2
      },
      {
        question: "What form does Harry's Patronus take?",
        options: ["A doe", "A wolf", "A phoenix", "A stag"],
        correctIndex: 3
      },
      {
        question: "Who is the Half-Blood Prince?",
        options: ["Tom Riddle", "Sirius Black", "Severus Snape", "Horace Slughorn"],
        correctIndex: 2
      },
      {
        question: "What is the core of Harry Potter's wand?",
        options: ["Dragon heartstring", "Unicorn hair", "Phoenix feather", "Veela hair"],
        correctIndex: 2
      },
      {
        question: "How many Horcruxes did Voldemort deliberately create?",
        options: ["5", "6", "7", "8"],
        correctIndex: 1
      },
      {
        question: "What form does Hermione Granger's Patronus take?",
        options: ["A cat", "An otter", "A hare", "A phoenix"],
        correctIndex: 1
      },
      {
        question: "What is the name of the wizarding prison?",
        options: ["Nurmengard", "Azkaban", "The Dungeons", "Mordred's Keep"],
        correctIndex: 1
      },
      {
        question: "What spell creates the Dark Mark in the sky?",
        options: ["Avada Kedavra", "Crucio", "Morsmordre", "Serpensortia"],
        correctIndex: 2
      },
      {
        question: "Who kills Dumbledore at the end of Harry Potter and the Half-Blood Prince?",
        options: ["Draco Malfoy", "Bellatrix Lestrange", "Peter Pettigrew", "Severus Snape"],
        correctIndex: 3
      },
      {
        question: "What object contains a piece of Voldemort's soul that Harry carries inside him?",
        options: ["His scar acts as a Horcrux", "The Sorting Hat", "His wand", "His Invisibility Cloak"],
        correctIndex: 0
      }
    ]
  },
  master: {
    title: "Master Wizard",
    subtitle: "Hard — for the true Potterhead nerds",
    icon: "🔮",
    questions: [
      {
        question: "What is the name of Dumbledore's brother?",
        options: ["Aurelius", "Aberforth", "Alastor", "Aldric"],
        correctIndex: 1
      },
      {
        question: "Who was the original owner of the Elder Wand?",
        options: ["Ignotus Peverell", "Cadmus Peverell", "Antioch Peverell", "Merlin"],
        correctIndex: 2
      },
      {
        question: "What does S.P.E.W. stand for?",
        options: [
          "Society for the Protection of Enchanted Wizards",
          "Society for the Promotion of Elfish Welfare",
          "Spell Protection for Endangered Wand-users",
          "Standard Protection for Every Witch and Wizard"
        ],
        correctIndex: 1
      },
      {
        question: "What is the incantation of the Killing Curse?",
        options: ["Crucio", "Morsmordre", "Avada Kedavra", "Sectumsempra"],
        correctIndex: 2
      },
      {
        question: "What does Neville Longbottom's boggart turn into?",
        options: ["A spider", "Lord Voldemort", "Professor Snape", "A full moon"],
        correctIndex: 2
      },
      {
        question: "After Trelawney is sacked in Order of the Phoenix, who temporarily takes over Divination?",
        options: ["Dumbledore himself", "Firenze the centaur", "Professor Umbridge", "Sibyll returns immediately"],
        correctIndex: 1
      },
      {
        question: "What wood is Voldemort's wand made from?",
        options: ["Elder", "Yew", "Blackthorn", "Hawthorn"],
        correctIndex: 1
      },
      {
        question: "What is the exact wording of the first task Harry faces in the Triwizard Tournament?",
        options: [
          "Retrieve a golden egg from a nesting dragon",
          "Steal a golden egg guarded by a dragon",
          "Fly past a dragon to retrieve a golden egg",
          "Defeat a dragon and claim the golden egg"
        ],
        correctIndex: 0
      },
      {
        question: "In which year did the First Wizarding War end with Voldemort's first defeat?",
        options: ["1979", "1980", "1981", "1982"],
        correctIndex: 2
      },
      {
        question: "What are the three objects that make up the Deathly Hallows?",
        options: [
          "Elder Wand, Resurrection Stone, Invisibility Cloak",
          "Elder Wand, Philosopher's Stone, Invisibility Cloak",
          "Wand of Destiny, Stone of Life, Cloak of Shadows",
          "Elder Wand, Mirror of Erised, Invisibility Cloak"
        ],
        correctIndex: 0
      }
    ]
  }
};

const quizzes = { houseSorting, patronus, subjects, bookKnowledge };
export default quizzes;
