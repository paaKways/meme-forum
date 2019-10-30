const fakeMemes = [
    {
        id: 1,
        src: 'meme.jpg',
        title: 'What is a meme?',
        author: { name: 'SammyB', img: 'me.jpeg'},
        timestamp: '1:59PM',
        comments: [
            {
                commentAuthor: 'Kofi Babone',
                comment: 'This was really funny',
                timestamp: '2:00PM'
            },
            {
                commentAuthor: 'Kwasi Korboe',
                comment: 'Hahaha',
                timestamp: '2:10PM'
            },
            {
                commentAuthor: 'John Doe',
                comment: 'Surreal man!',
                timestamp: '2:20PM'
            }
        ]
    },
    {
        id: 2,
        src: 'meme2.jpg',
        title: 'Another meme?',
        comments: []
    }
]


export default fakeMemes