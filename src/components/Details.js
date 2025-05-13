import dummyImg from './assets/dpp.avif'
import dummyContent from './assets/p1.jpg'

const newQuestion = JSON.parse(localStorage.getItem('questions'));
const newPost = JSON.parse(localStorage.getItem('posts'));
const newSpace = JSON.parse(localStorage.getItem('spaces'))

const latestQuestion = newQuestion?.[0];
const latestPost = newPost?.[0];
const latestSpace = newSpace?.[0];

export  const spacesLeft = [
        {
            url: dummyImg,
            name: "Unboxing JEE",
            description: '',
        },
        {
            url: dummyImg,
            name: "COMPETITIVE EXAMS",
            description: '',
        },
        {
            url: dummyImg,
            name: "Daily Dose of Idioms",
            description: '',
        },
        {
            url: dummyImg,
            name: "Quora Programming Challenge 2025",
            description: '',
        },
        {
            url: dummyImg,
            name: "Free Udemy coursesz",
            description: '',
        },
        {
            url: dummyImg,
            name: "English Words",
            description: '',
        },
        {
            url: dummyImg,
            name: "**Yo-Experience",
            description: '',
        },
        {
            url: dummyImg,
            name: "Daily Dose of Vocabulary",
            description: '',
        },
        {
            url: dummyImg,
            name: "Grammar Gurukul",
            description: '',
        },
    ];
if(latestSpace){
    spacesLeft.unshift(latestSpace)
}

export const spaceRight = [
        {
            url: dummyImg,
            title: "The Programmer's Cafe",
            detail: 'The space to share ideas via Coding'
        },
        {
            url: dummyImg,
            title: "Programming Algorithms",
            detail: "All about the programming, data structure and algorithms, Let's learn..."
        },
        {
            url: dummyImg,
            title: "Python and ML Basics",
            detail: 'Basics concepts of Python and Machine Learning for Beginners'
        },
        {
            url: dummyImg,
            title: "Data Analytics Basics",
            detail: 'Business Statistics | Statistical-Modeling | Analtics-Tools'
        },
        {
            url: dummyImg,
            title: "VLSi Beginners",
            detail: 'Discuss & Share Ideas, Jobs, Career Tips for VLSI Beginners'
        },
        {
            url: dummyImg,
            title: "The Internship Club",
            detail: "Joim this space to get daily updates & info on internships'S Advice"
        },
    ]

export   const mainContent = [
        {
            userUrl: dummyImg,
            postUrl: dummyContent,
            pageName: "Stoicism" ,
            authName: "Sarah Moses",
            date: " Oct 16",
            title: "How can I learn to focus well?",
            description: "This is Legit. Being greedy in progress is one of the most typical causes of procrastination. We intend to achieve our goal as quickly as possible by climbing a gigantic ladder that becomes more challenging for our brain to handle what is going on with the world",
            upvotes: 0,
            downvotes: 0,
            reshares: 0,
         },
        {
            userUrl: dummyImg,
            postUrl: dummyContent,
           pageName: "Hrithik's Universe" ,
           authName: "Hrithik Ramraj",
           date: "11mo",
           title: "What makes you feel Proud?",
           upvotes: 0,
            downvotes: 0,
            reshares: 0,
        }
    ]
if (latestPost) {
    mainContent.unshift(latestPost);
}

export const newNotification = [
    {
        url: dummyImg,
        spaceName: 'Daily Dose Of Idioms',
        authName: '',
        date: 'October 24',
        title: "Idiom #1167 - 'To Have One's Back Against The Wall'",
        action: 'Read this and 15 more new items.'
    },
     {
        url: dummyImg,
        spaceName: 'Daily Dose Of Vocabulary',
        authName: '',
        date: 'October 24',
        title: "Word #1401 - 'Aglow'",
        action: 'Read this and 15 more new items.'
    },
     {
        url: dummyImg,
        spaceName: 'Highlight in Success and Happiness',
        authName: 'Anastasia Builava',
        date: 'October 21',
        title: 'The Question about the money spells. "I need my financial situation to change. I want abundance to flow so that I dont have to Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in."',
        
    },
     {
        url: dummyImg,
        spaceName: 'Question for you',
        authName: '',
        date: 'October 19',
        title: "Which one is better, Nootan or Chugh, for preparing an ISC board exam in chemistry?",
        action: 'Write an answer and share your knowledge.',
        status: true,
    },
    {
        url: dummyImg,
        date: 'October 18',
        title: "Congratulations, Your answers had 4.224 views in the past week!",
    },
    {
        url: dummyImg,
        spaceName: 'Daily Dose Of Vocabulary',
        authName: 'Ankit Kumar Gupta',
        date: 'October 13',
        title: "Help him man...",
    },
]

export const questions = [
    {
        question: 'Is doing preparation for a government job worth it?',
        answers: [ 'Lorem.', 'Ipsum.', 'Dolor.', 'Sit.', 'Amet.', 'Consectetur.', 'Adipiscing.', 'Elit.', 'Sed.', 'Do.', 'Eiusmod.', 'Tempor.', 'Incididunt.', 'Ut.', 'Labore.'],
        date: 'Jan 25',
        Follow: 3,
    },
    {
        question: 'What are the best earbuds under rs 2,000 with long battery life?',
        answers: [ ],
        date: 'Sun',
        Follow: 1,
    },
    {
        question: 'How do search firms support diversity in executive hiring?',
        answers: [ ],
        date: 'Jan 25',
        Follow: 1,
    },
]

if (latestQuestion) {
    questions.unshift(latestQuestion);
}
