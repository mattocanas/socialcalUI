export default [
  {
    postId: 1,
    user: {
      id: 1,
      username: 'matt',
      name: 'Matt Ocanas',
      photo:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjjabwwlfyXOKJ0TJHq37NAOrugsLRtUWGPg&usqp=CAU',
    },
    eventType: 'Fitness',
    description: 'Going to the gym!',
    address: '416 Cincinnati Ave',
    time: new Date('August 12, 2021 09:00:00'),
    likes: [
      {
        likeId: 1,
        userId: 2,
        username: 'herbie',
        name: 'Herbie Esquer',
        photo:
          'https://static.wikia.nocookie.net/marvelanimated/images/8/87/Captain_America.jpg/revision/latest?cb=20110724032205',
      },
      {
        likeId: 2,
        userId: 3,
        username: 'eden',
        name: 'Eden Valenzuela',
        photo: 'https://i.ytimg.com/vi/M6YzhZw1GMo/maxresdefault.jpg',
      },
    ],
    comments: [],
    taggers: [
      {
        taggerId: 1,
        userId: 2,
        username: 'herbie',
        name: 'Herbie Esquer',
        photo:
          'https://static.wikia.nocookie.net/marvelanimated/images/8/87/Captain_America.jpg/revision/latest?cb=20110724032205',
      },
      {
        taggerId: 2,
        userId: 3,
        username: 'eden',
        name: 'Eden Valenzuela',
        photo: 'https://i.ytimg.com/vi/M6YzhZw1GMo/maxresdefault.jpg',
      },
    ],
    muscles: [],
    photo: '',
  },
  {
    postId: 2,
    user: {
      id: 2,
      username: 'herbie',
      name: 'Herbie Esquer',
      photo:
        'https://static.wikia.nocookie.net/marvelanimated/images/8/87/Captain_America.jpg/revision/latest?cb=20110724032205',
    },
    eventType: 'Class',
    description: 'Thermodynamics class',
    time: new Date('12 August 2021 13:00:00 MST'),
    likes: [],
    comments: [],
    taggers: [],
    luck: [],
    photo: '',
    exam: true,
  },
  {
    postId: 3,
    user: {
      id: 1,
      username: 'matt',
      name: 'Matt Ocanas',
      photo: '',
    },
    eventType: 'Study',
    description: 'Study session for thermo exam tm!',
    time: new Date('12 August 2021 17:00:00 MST'),
    likes: [],
    comments: [],
    taggers: [],
    photo: '',
    documents: [],
  },
];