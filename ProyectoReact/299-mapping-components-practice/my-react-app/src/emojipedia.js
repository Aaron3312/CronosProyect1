const emojipedia = [
  {
    id: 1,
    emoji: "💪",
    name: "Tense Biceps",
    meaning:
      "“You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym."
  },
  {
    id: 2,
    emoji: "🙏",
    name: "Person With Folded Hands",
    meaning:
      "Two hands pressed together. Is currently very introverted, saying a prayer, or hoping for enlightenment. Is also used as a “high five” or to say thank you."
  },
  {
    id: 3,
    emoji: "🤣",
    name: "Rolling On The Floor, Laughing",
    meaning:
      "This is funny! A smiley face, rolling on the floor, laughing. The face is laughing boundlessly. The emoji version of “rofl“. Stands for „rolling on the floor, laughing“."
  },{
    id: 4,
    emoji: "😍",
    name: "Smiling Face With Heart-Eyes",
    meaning:
      "Shows love, admiration, or strong affection towards someone or something. Often used to convey being in love or infatuation."
  },
  {
    id: 5,
    emoji: "😢",
    name: "Crying Face",
    meaning:
      "A sad face with a tear rolling down. Represents sadness, grief, or pain. Often used to express deep sorrow or disappointment."
  },
  {
    id: 6,
    emoji: "🤔",
    name: "Thinking Face",
    meaning:
      "A face with a hand under the chin, deep in thought. Represents contemplation or pondering something important. Sometimes used to indicate skepticism or questioning."
  },
  {
    id: 7,
    emoji: "🎉",
    name: "Party Popper",
    meaning:
      "A party popper bursting in celebration. Used to express joy, celebration, or the marking of a special occasion like a birthday or achievement."
  },
  {
    id: 8,
    emoji: "😎",
    name: "Smiling Face With Sunglasses",
    meaning:
      "A cool smiley face wearing sunglasses. Represents being cool, confident, or carefree. Often used to indicate relaxation or a laid-back attitude."
  },
  {
    id: 9,
    emoji: "💤",
    name: "Sleeping Symbol",
    meaning:
      "A series of 'Z's indicating someone is sleeping or feeling sleepy. Used to show tiredness, boredom, or the need for rest."
  },
  {
    id: 10,
    emoji: "🤷",
    name: "Person Shrugging",
    meaning:
      "A person shrugging their shoulders, representing ignorance, indifference, or the feeling of 'I don't know'. Often used to express uncertainty or a lack of information."
  },
  {
    id: 11,
    emoji: "🔥",
    name: "Fire",
    meaning:
      "A flame, often used to indicate something is hot, trendy, or amazing. Also used to express passion or intensity."
  },
  {
    id: 12,
    emoji: "💡",
    name: "Light Bulb",
    meaning:
      "A glowing light bulb, symbolizing an idea or inspiration. Often used to represent thinking or a moment of realization."
  },
  {
    id: 13,
    emoji: "📚",
    name: "Books",
    meaning:
      "A stack of books, representing knowledge, study, or reading. Often used in contexts related to education or learning."
  },
  {
    id: 14,
    emoji: "🥒",
    name: "Cucumber",
    meaning:
      "A cool and crunchy cucumber. Often associated with salads, pickling, or just being 'as cool as a cucumber.' Occasionally used in random contexts where it doesn’t really make sense."
  },
  {
    id: 15,
    emoji: "🦄",
    name: "Unicorn",
    meaning:
      "A mythical unicorn with a colorful mane. Represents something rare, magical, or fanciful. Often used in contexts that are whimsical or out-of-this-world."
  },
  {
    id: 16,
    emoji: "🐙",
    name: "Octopus",
    meaning:
      "An octopus with multiple tentacles. Used to represent sea creatures or something that's multi-tasking. Occasionally thrown into conversations just for its strange and curious nature."
  },
  {
    id: 17,
    emoji: "👽",
    name: "Alien",
    meaning:
      "A green alien face with large eyes. Used to represent extraterrestrial life or someone who feels out of place. Often seen in weird or mysterious conversations."
  },
  {
    id: 18,
    emoji: "🥳",
    name: "Partying Face",
    meaning:
      "A face with a party hat, blowing a party horn. Represents someone who’s in the mood to celebrate but with a strangely exaggerated enthusiasm."
  },
  {
    id: 19,
    emoji: "🍥",
    name: "Fish Cake With Swirl",
    meaning:
      "A fish cake with a pink swirl in the center, a common ingredient in ramen. Represents something oddly specific and niche, usually thrown into discussions that have nothing to do with fish or cake."
  },
  {
    id: 20,
    emoji: "🧀",
    name: "Cheese Wedge",
    meaning:
      "A wedge of cheese. Represents something cheesy or corny, but also used when someone’s just being a bit weird and random."
  },
  {
    id: 21,
    emoji: "🌚",
    name: "New Moon Face",
    meaning:
      "A new moon with a slightly creepy human face. Represents something dark, mysterious, or just plain weird. Often used in an ironic or humorous way."
  },
  {
    id: 22,
    emoji: "🧟",
    name: "Zombie",
    meaning:
      "A green zombie, representing the undead. Used to indicate someone who’s feeling lifeless or brain-dead, or just to inject some zombie-like weirdness into a conversation."
  },
  {
    id: 23,
    emoji: "🦷",
    name: "Tooth",
    meaning:
      "A human tooth. Represents dental care, biting, or something oddly specific like losing a tooth. Occasionally used in a weird or unsettling context."
  },
  {
    id: 24,
    emoji: "🥕",
    name: "Carrot",
    meaning:
      "A bright orange carrot with green leaves. Represents something healthy or a random vegetable. Often used in contexts where a carrot just doesn’t seem to belong."
  },
  {
    id: 25,
    emoji: "🧻",
    name: "Toilet Paper",
    meaning:
      "A roll of toilet paper. Represents hygiene, but also used in random or awkward conversations where its presence feels out of place and slightly uncomfortable."
  },
  {
    id: 26,
    emoji: "🥌",
    name: "Curling Stone",
    meaning:
      "A heavy curling stone used in the sport of curling. Represents something niche and obscure, often thrown into conversations with no connection to sports or stones."
  },
  {
    id: 27,
    emoji: "🦀",
    name: "Crab",
    meaning:
      "A red crab with pincers. Represents the beach or seafood, but also used to signify someone being crabby or as an odd way to inject a sea creature into a conversation."
  },
  {
    id: 28,
    emoji: "🥒",
    name: "Cucumber",
    meaning:
      "A cool and crunchy cucumber. Just sitting there, representing something cool, refreshing, or just utterly random. Perfect for moments when you want to drop an odd vegetable into a chat."
  },
  {
    id: 29,
    emoji: "🍠",
    name: "Roasted Sweet Potato",
    meaning:
      "A steaming roasted sweet potato. Represents something warm and comforting, but also quite random. Often used when a sweet potato is the last thing anyone expects."
  },
  {
    id: 30,
    emoji: "🧦",
    name: "Socks",
    meaning:
      "A pair of mismatched socks. Represents comfort or warmth, but more often thrown into discussions where socks have no reason to appear, making things delightfully weird."
  },
  {
    id: 31,
    emoji: "🥢",
    name: "Chopsticks",
    meaning:
      "A pair of chopsticks. Represents eating or Asian cuisine, but also used in strange and random contexts, where chopsticks are just an odd and out-of-place addition."
  },
  {
    id: 32,
    emoji: "🍍",
    name: "Pineapple",
    meaning:
      "A tropical pineapple. Represents something exotic or sweet, but also used when a pineapple is the most random and nonsensical thing to throw into a conversation."
  },
  {
    id: 33,
    emoji: "🧀",
    name: "Cheese Wedge",
    meaning:
      "A wedge of cheese. Represents something cheesy or corny, but also randomly added to conversations to inject some dairy-filled weirdness."
  }


];

export default emojipedia;