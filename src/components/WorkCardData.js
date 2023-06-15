import pro1 from "../assets/real-people-travel.png";
import pro2 from "../assets/mental-oasis.jpeg";
import pro3 from "../assets/fitness.png";

const ProjectCardData = [
   {
      imgsrc: pro1,
      title: "Real People Travel",
      text: 'Have you ever thought, "I would love to go on vacation but I have no idea how to start planning it! I cant afford a travel agent and the thought of doing it on my own is too overwhelming." If your answer is yes (and we all know it is), then Real People Travel is just the site for you! We based our idea off of the following saying: "well, real people do not live like that" and the many other variations of the saying. All of which essentially state that only fictional or rich people can travel. We want to stop that stigma, real people DO travel and our website helps you do that. Who needs a travel agent when you can come to Real People Travel!',
      view: "https://elfelfa.github.io/Real-People-Travel/",
      source: "https://github.com/Elfelfa/Real-People-Travel"
   },
   {
      imgsrc: pro2,
      title: "Mental Oasis",
      text: "This project helps the user track their mental health with medication intake tracker, inspirational quotes, a calendar to track good days and bad days, input journal entries, and links to several helpline websites and call information. Mental health tracker is a great way to help the user in many different ways and aims to decrease negative effects on oneself. So many people suffer from some sort of mental health problems and not many feel like they have the information needed to get the help they need, or have a way to try to control the problems they have. Hopefully this application will help users maintain a healthy mind.",
      view: "https://mental-oasis.herokuapp.com/",
      source: "https://github.com/DavidPeguero/Mental-Oasis"
   },{
      imgsrc: pro3,
      title: "Fitness (into your day)",
      text: "A Fitness Social Network is a web application that allows fitness enthusiasts to connect, share fitness tips, and support each other on their fitness journeys. Users can create posts, view posts from other users, edit and delete their own posts. This project is built using React for the frontend, GraphQL for the API layer, and MongoDB as the database. It leverages various libraries and technologies such as Apollo Client for GraphQL communication, Next.js for server-side rendering, and Material-UI for UI components. Features User authentication: Users can sign up and log in to their accounts. Authentication is handled using JWT (JSON Web Tokens) for secure access to protected routes. Post creation: Authenticated users can create new posts, sharing fitness tips, progress updates, or any relevant information with the community. Post listing: The main page displays a list of posts from all users, sorted by the most recent. Each post includes the author's email, the post content, and the date of creation. Post editing and deletion: Users can edit and delete their own posts, allowing them to update their content or remove posts they no longer wish to share.",
      view: "https://evening-scrubland-38912.herokuapp.com/",
      source: "https://github.com/brandon6457/fitness"
   },
];

export default ProjectCardData;