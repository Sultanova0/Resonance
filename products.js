// Six instruments in each category. These are examples for a student project.
const products = [
    {
        id: 1,
        name: "Classic Acoustic",
        category: "Guitars",
        price: 85000,
        image: "assets/acoustic.svg",
        description: "A warm acoustic sound for your first chords, favourite songs and relaxed evenings."
    },
    {
        id: 2,
        name: "Blue Electric",
        category: "Guitars",
        price: 140000,
        image: "assets/electric.svg",
        description: "An electric guitar for riffs and solos. Connect it to an amplifier to explore your sound."
    },
    {
        id: 3,
        name: "Groove Bass",
        category: "Guitars",
        price: 175000,
        image: "assets/bass.svg",
        description: "A bass guitar for deep notes and steady rhythms. An amplifier is needed for playing."
    },
    {
        id: 4,
        name: "Travel Acoustic",
        category: "Guitars",
        price: 65000,
        image: "assets/acoustic.svg",
        description: "An acoustic guitar idea for small spaces, simple melodies and everyday practice."
    },
    {
        id: 5,
        name: "Stage Electric",
        category: "Guitars",
        price: 195000,
        image: "assets/electric.svg",
        description: "An electric guitar for band rehearsals and expressive lead parts. Use it with an amplifier."
    },
    {
        id: 6,
        name: "Concert Acoustic",
        category: "Guitars",
        price: 125000,
        image: "assets/acoustic.svg",
        description: "An acoustic guitar for fingerpicking, soft chords and sharing music with friends."
    },
    {
        id: 7,
        name: "Studio Piano",
        category: "Pianos",
        price: 245000,
        image: "assets/piano.svg",
        description: "A digital piano concept for a peaceful practice corner and your favourite piano pieces."
    },
    {
        id: 8,
        name: "Home Piano",
        category: "Pianos",
        price: 210000,
        image: "assets/piano.svg",
        description: "A digital piano idea for learning at home, from simple scales to complete songs."
    },
    {
        id: 9,
        name: "Melody Piano",
        category: "Pianos",
        price: 230000,
        image: "assets/piano.svg",
        description: "A digital instrument for exploring piano melodies and developing a daily practice habit."
    },
    {
        id: 10,
        name: "Classic Piano",
        category: "Pianos",
        price: 280000,
        image: "assets/piano.svg",
        description: "A digital piano concept inspired by classical music, clear notes and expressive playing."
    },
    {
        id: 11,
        name: "Stage Piano",
        category: "Pianos",
        price: 340000,
        image: "assets/piano.svg",
        description: "A digital piano idea for playing melodies, accompanying singers and practising performances."
    },
    {
        id: 12,
        name: "Evening Piano",
        category: "Pianos",
        price: 260000,
        image: "assets/piano.svg",
        description: "A digital piano concept for quiet musical evenings and learning at your own pace."
    },
    {
        id: 13,
        name: "Sound Explorer",
        category: "Keyboards",
        price: 110000,
        image: "assets/synth.svg",
        description: "A keyboard concept for discovering different sounds and creating your first arrangements."
    },
    {
        id: 14,
        name: "Mini MIDI",
        category: "Keyboards",
        price: 65000,
        image: "assets/midi.svg",
        description: "A MIDI controller idea for a home studio. It needs a computer and music software to make sound."
    },
    {
        id: 15,
        name: "Creative Keys",
        category: "Keyboards",
        price: 135000,
        image: "assets/synth.svg",
        description: "A keyboard idea for experimenting with chords, melodies and musical textures."
    },
    {
        id: 16,
        name: "Studio MIDI",
        category: "Keyboards",
        price: 95000,
        image: "assets/midi.svg",
        description: "A MIDI controller concept for recording musical ideas with a computer and music software."
    },
    {
        id: 17,
        name: "Live Keys",
        category: "Keyboards",
        price: 185000,
        image: "assets/synth.svg",
        description: "A keyboard concept for band practice, layered melodies and playing with other musicians."
    },
    {
        id: 18,
        name: "First Melody",
        category: "Keyboards",
        price: 80000,
        image: "assets/synth.svg",
        description: "A keyboard idea for beginners who want to learn notes and play their first songs."
    },
    {
        id: 19,
        name: "Rhythm Kit",
        category: "Drums",
        price: 320000,
        image: "assets/drums.svg",
        description: "An acoustic drum kit concept for learning beats and finding your own rhythm."
    },
    {
        id: 20,
        name: "First Beat Kit",
        category: "Drums",
        price: 220000,
        image: "assets/drums.svg",
        description: "A drum kit idea for beginner exercises, steady timing and your first grooves."
    },
    {
        id: 21,
        name: "Studio Kit",
        category: "Drums",
        price: 380000,
        image: "assets/drums.svg",
        description: "An acoustic drum kit concept for practising full arrangements and recording ideas."
    },
    {
        id: 22,
        name: "Jazz Kit",
        category: "Drums",
        price: 295000,
        image: "assets/drums.svg",
        description: "A drum kit idea inspired by swing, gentle rhythms and expressive cymbal patterns."
    },
    {
        id: 23,
        name: "Rock Kit",
        category: "Drums",
        price: 410000,
        image: "assets/drums.svg",
        description: "An acoustic drum kit concept for strong backbeats, band rehearsals and energetic songs."
    },
    {
        id: 24,
        name: "Session Kit",
        category: "Drums",
        price: 350000,
        image: "assets/drums.svg",
        description: "A drum kit idea for exploring different styles and playing along with favourite tracks."
    },
    {
        id: 25,
        name: "Sonata Violin",
        category: "Violins",
        price: 95000,
        image: "assets/violin.svg",
        description: "A violin concept for expressive melodies, careful bowing and the beauty of string music."
    },
    {
        id: 26,
        name: "First Note Violin",
        category: "Violins",
        price: 70000,
        image: "assets/violin.svg",
        description: "A violin idea for learning basic bow movements and playing your first notes."
    },
    {
        id: 27,
        name: "Harmony Violin",
        category: "Violins",
        price: 115000,
        image: "assets/violin.svg",
        description: "A violin concept for playing with a teacher, a friend or a small string group."
    },
    {
        id: 28,
        name: "Chamber Violin",
        category: "Violins",
        price: 150000,
        image: "assets/violin.svg",
        description: "A violin idea inspired by chamber music and the conversation between instruments."
    },
    {
        id: 29,
        name: "Concert Violin",
        category: "Violins",
        price: 185000,
        image: "assets/violin.svg",
        description: "A violin concept for practising expressive pieces and preparing for a performance."
    },
    {
        id: 30,
        name: "Cadenza Violin",
        category: "Violins",
        price: 225000,
        image: "assets/violin.svg",
        description: "A violin idea for musical storytelling, lyrical phrases and a personal playing style."
    }
];
