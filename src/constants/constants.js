export const typewriter_list = [
  "AI/ML",
  "Mobile Dev",
  "Web Dev",
  "APIs",
  "Cloud Services"
];

export const projects = [
  {
    title: "Tiktok Watermark Remover",
    description: "This is a machine learning project that removes the Tiktok watermark from videos. It uses a convolutional neural network to detect where the watermark is on an image then removes it using computer vision inpainting.",
    image: '/images/watermark-detect.jpg',
    tags: ["ML", "Pytorch", "CNN", "Computer Vision"],
    source: 'https://github.com/connorholm/tiktok-watermark-yolov7',
    visit: '',
    id: 12,

  },
  {
    title: "Little Free Library Android App",
    description: "Helped build the Android app. Built out mapping features (Google Maps API), authentication, and the UI screens. Worked with configuring profile picutres and user information.",
    image: '/images/little-free-library.jpeg',
    tags: ["Android", "Kotlin", "Google Maps Library", "APIs"],
    source: '',
    visit: 'https://littlefreelibrary.org/app/',
    id: 11,
  },
  {
    title: "Flappy Bird Genetic Algorithm",
    description: "Modified the Flappy Bird game to use a genetic algorithm to train the bird to play the game. The bird starts off with random weights and then the algorithm trains the bird to play the game.",
    image: '/images/flappybird.png',
    tags: ["Genetic Algorithms", "AI", "Python"],
    source: 'https://github.com/connorholm/flappybird-genetic-algorithm',
    visit: "/flappybird-genetic-algorithm.pdf",
    id: 10,
  },
  {
    title: "Daily Dose of Laughter",
    description: "This website displays jokes to users! An authenticated user is able to publish jokes and interact with other people's posts. The frontend was build with React and the backend is a fully functionally Express API with a MongoDB database.",
    image: '/images/joke.png',
    tags: ['MongoDB', 'Express', 'React', 'Node'],
    source: 'https://github.com/connorholm/jokes_frontend',
    visit: 'https://jokes-frontend.herokuapp.com/',
    id: 0,
  },
  {
    title: 'Target Practice Mania',
    description: "This app is a game I created for the App Store. It uses Apple's SceneKit to allow the user to interact with 3D shapes created in Blender. The app also has a leaderboard system so the user can compete with others.",
      image: '/images/target-app.png',
      tags: ['Swift', 'SceneKit', 'GameCenter', 'Blender'],
    source: 'https://github.com/connorholm/TargetPractice',
    visit: 'https://apps.apple.com/us/app/target-practice-mania/id1551670619',
    id: 1,
  },
  {
    title: 'COVID-19 Information Provider',
    description:"Using Flask, I ran a website that displays current COVID-19 information. This was run on a Ubuntu server and the data was gathered using BeautifulSoup and the COVID Tracking Project API.",
    image: '/images/covid-app.png',
    tags: ['Flask', 'BeautifulSoup', 'HTML', 'CSS'],
    source: 'https://github.com/connorholm/Covid-19-Website',
    visit: 'https://www.youtube.com/watch?v=JMSGNJM0_Kk',
    id: 2,
  },
  {
    title: 'EPHS App',
    description: "EPHS app is an app that allows for a user to be able to connect to their schoology api. Once logged in, the user is able to see their completed assignments aswell as some upcoming announcements and grades. The app is design for students and also lets them view important websites like our grading portal, counselor appointment sign up, school contacts, and highschool calendar!",
      image: '/images/ephs-app.png',
      tags: ['SwiftUI', 'APIs'],
    source: 'https://github.com/connorholm/ephsapp2020',
    visit: 'https://apps.apple.com/us/app/ephs/id1540598932',
    id: 3,
  },
  {
    title: 'Python Chat App',
    description: "In this project, I coded a terminal and gui based chat application. It communicates through a public ubuntu server to allow for anyone to communicate with each other.",
    image: '/images/chat-app.png',
    tags: ['Python', 'TKinter', 'Sockets'],
    source: 'https://github.com/connorholm/ChatApp',
    visit: '',
    id: 4,
  },
];

export const TimeLineData = [
  { year: 2019, text: 'Started my journey, learned Java through a highschool class', },
  { year: 2020, text: 'Took an iOS App Development, and build EPHS app', },
  { year: 2021, text: 'Released Target Practice Mania', },
  { year: 2021, text: 'Won Congressional App Challenege for district MN-03 for COVID-19 Info Provider', },
  { year: 2021, text: 'Started Android Development for the Jed Mahonis Group', },
  { year: 2021, text: 'Always Learning More!', },
];

export const education = [
  { school: 'Eden Prairie High School', 
    degree: 'High School Diploma', 
    graducation: '2021', 
    image: '/images/high-school.jpg',
    classes: [
      "AP Computer Science Principles",
      "AP Java",
      "AP Calculus AB",
      "AP Calculus BC",
      "Multivariable Calculus",
      "AP Statistics",
      "AP Physics C",
      "AP Chemistry",
      "AP Macro Economics",
      "iOS App Development",
      "Advanced iOS App Development",
      "Cyber Security",
    ]
  },
  { school: 'University of Minnesota',
    degree: 'BS in Computer Science',
    graducation: 'Fall 2023',
    image: '/images/university.jpg',
    classes: [
      'CSCI 1133 - Intro to Computing and Programming Concepts',
      'CSCI 1933 - Intro to Algorithms and Data Structures',
      'CSCI 2011 - Discrete Structures of Computer Science',
      'CSCI 2021 - Machine Architecture and Organization',
      'CSCI 2033 - Elementary Computational Linear Algebra',
      'CSCI 2041 - Advanced Programming Principles',
      'CSCI 4041 - Algorithms and Data Structures',
      'CSCI 4061 - Introduction to Operating Systems',
      'CSCI 4511W - Introduction to Artificial Intelligence',
      'CSCI 4707 - Practice of Database Systems',
      'CSCI 5421 - Advanced Algorithms and Data Structures',
      'CSCI 5521 - Introduction to Machine Learning',
      'STAT 3021 - Introduction to Probability and Statistics'
    ]
  }
]