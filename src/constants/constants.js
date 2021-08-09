export const projects = [
  {
    title: 'Target Practice Mania',
    description: "This app is a game I created for the App Store. It uses Apple's SceneKit to allow the user to interact with 3D shapes created in Blender. The app also has a leaderboard system so the user can compete with others.",
      image: '/images/target-app.png',
      tags: ['Swift', 'SceneKit', 'GameCenter', 'Blender'],
    source: 'https://github.com/connorholm/TargetPractice',
    visit: 'https://apps.apple.com/us/app/target-practice-mania/id1551670619',
    id: 0,
  },
  {
    title: 'COVID-19 Information Provider',
    description:"Using Flask, I ran a website that displays current COVID-19 information. This was run on a Ubuntu server and the data was gathered using BeautifulSoup and the COVID Tracking Project API.",
    image: '/images/covid-app.png',
    tags: ['Flask', 'BeautifulSoup', 'HTML', 'CSS'],
    source: 'https://github.com/connorholm/Covid-19-Website',
    visit: 'https://www.youtube.com/watch?v=JMSGNJM0_Kk',
    id: 1,
  },
  {
    title: 'EPHS App',
    description: "EPHS app is an app that allows for a user to be able to connect to their schoology api. Once logged in, the user is able to see their completed assignments aswell as some upcoming announcements and grades. The app is design for students and also lets them view important websites like our grading portal, counselor appointment sign up, school contacts, and highschool calendar!",
      image: '/images/ephs-app.png',
      tags: ['SwiftUI', 'APIs'],
    source: 'https://github.com/connorholm/ephsapp2020',
    visit: 'https://apps.apple.com/us/app/ephs/id1540598932',
    id: 2,
  },
  {
    title: 'Python Chat App',
    description: "In this project, I coded a terminal and gui based chat application. It communicates through a public ubuntu server to allow for anyone to communicate with each other.",
    image: '/images/chat-app.png',
    tags: ['Python', 'TKinter', 'Sockets'],
    source: 'hhttps://github.com/connorholm/ChatApp',
    visit: '',
    id: 3,
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