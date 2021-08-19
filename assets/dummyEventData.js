export default [
  {
    postId: 1,
    user: {
      id: 1,
      username: 'matt',
      name: 'Matt Ocanas',
      city: 'Austin, TX',
      photo:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjjabwwlfyXOKJ0TJHq37NAOrugsLRtUWGPg&usqp=CAU',
    },
    eventType: 'Fitness',
    description: 'Going to the gym!',
    address: '416 Cincinnati Ave',
    time: new Date('August 18, 2021 09:00:00'),
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
    comments: [
      {
        commentId: 1,
        userId: 2,
        username: 'herbie',
        name: 'Herbie Esquer',
        photo:
          'https://static.wikia.nocookie.net/marvelanimated/images/8/87/Captain_America.jpg/revision/latest?cb=20110724032205',
        comment: 'Go get em!',
      },
    ],
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
    reactions: [],
    photo:
      'https://lh3.googleusercontent.com/proxy/tEetS6P75drK30jvxDnQFt_r9r1pm8q2_7w0JuaCKQC4q8zljCAcIPObW7Hzjbs081N1cBxgYTbMWjFJRqXTr82K0n1G7pK-YoAGqjzg9fCzPmESA6HWi6udBFzI2DA0LfwVKeyXH64lLAZY5LIVatos3qiW2bfflZbuU-zvfyk9E8U',
    updates: [
      {
        id: 1,
        description: 'Burned 600 Calories!',
        photo:
          'https://images.8tracks.com/cover/i/010/278/301/54b5c54af64b0d69d8d7a9f740ff0492-9578.jpg?rect=376,0,1064,1064&q=98&fm=jpg&fit=max&w=1024&h=1024',
        time: new Date('August 18, 2021 10:00:00'),
        likes: [],
        reactions: [],
        user: {
          id: 1,
          username: 'matt',
          name: 'Matt Ocanas',
          city: 'Austin, TX',
          photo:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjjabwwlfyXOKJ0TJHq37NAOrugsLRtUWGPg&usqp=CAU',
        },
      },
    ],
  },
  {
    postId: 2,
    user: {
      id: 2,
      username: 'herbie',
      name: 'Herbie Esquer',
      city: 'Austin, TX',

      photo:
        'https://static.wikia.nocookie.net/marvelanimated/images/8/87/Captain_America.jpg/revision/latest?cb=20110724032205',
    },
    eventType: 'Class',
    description: 'Thermodynamics class 🔥',
    address: 'ETC',
    time: new Date('18 August 2021 13:00:00'),
    likes: [],
    comments: [],
    taggers: [],
    reactions: [],
    photo: '',
    exam: true,
  },
  {
    postId: 3,
    user: {
      id: 1,
      username: 'matt',
      name: 'Matt Ocanas',
      city: 'Austin, TX',

      photo:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjjabwwlfyXOKJ0TJHq37NAOrugsLRtUWGPg&usqp=CAU',
    },
    eventType: 'Study',
    description: 'Study session for thermo exam tm!',
    time: new Date('18 August 2021 17:00:00'),
    likes: [],
    comments: [],
    reactions: [],
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
    photo: '',
    address: 'Life Science Library',
    documents: [],
  },

  {
    postId: 4,
    user: {
      id: 4,
      username: 'patty',
      name: 'Patrick Chacon',
      city: 'Austin, TX',

      photo:
        'https://i1.wp.com/blog.scoutingmagazine.org/wp-content/uploads/sites/2/2020/03/ThorMarvel-678x381-1.jpg?fit=678%2C381&ssl=1',
    },
    eventType: 'Party',
    description: 'Party at my place!',
    address: '714 22nd St',
    time: new Date('18 August 2021 21:30:00'),
    likes: [],
    comments: [],
    reactions: [],
    taggers: [],

    photo: '',
  },

  {
    postId: 5,
    user: {
      id: 4,
      username: 'patty',
      name: 'Patrick Chacon',
      city: 'Austin, TX',

      photo:
        'https://i1.wp.com/blog.scoutingmagazine.org/wp-content/uploads/sites/2/2020/03/ThorMarvel-678x381-1.jpg?fit=678%2C381&ssl=1',
    },
    eventType: 'FoodDrink',
    description: 'Lunch at Dons!',
    address: 'Dons Japanese Truck',
    time: new Date('18 August 2021 12:30:00'),
    likes: [],
    reactions: [],
    comments: [],
    taggers: [],

    photo: '',
  },

  {
    postId: 6,
    user: {
      id: 3,
      username: 'eden',
      name: 'Eden Valenzuela',
      city: 'San Antonio, TX',

      photo: 'https://i.ytimg.com/vi/M6YzhZw1GMo/maxresdefault.jpg',
    },
    eventType: 'Work',
    description: 'Meeting :/',
    address: '100 Main St.',
    time: new Date('18 August 2021 8:30:00'),
    likes: [],
    reactions: [],
    comments: [],
    taggers: [],

    photo: '',
  },
];
