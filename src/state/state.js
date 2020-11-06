const state = {
  navHome: [
    { id: 1, name: "Home" },
    { id: 2, name: "Works" },
    { id: 3, name: "Skills" },
    { id: 4, name: "Blogs" },
    { id: 5, name: "Contact" },
  ],
  navAllBlogs: [
    { id: 1, name: "Home" },
  ],
  navSingleBlog: [
    { id: 1, name: "Home" },
    { id: 2, name: "Blogs" },
  ],
  socials: [
    { id: 1, ariaLabel: "Link to linkedin", img: "in", link: "https://www.linkedin.com/in/artur-okhotnichenko-9104b9190/" },
    { id: 2, ariaLabel: "Link to github", img: "git", link: "https://github.com/ohotnikarturik" },
    { id: 3, ariaLabel: "Link to facebook", img: "fb", link: "https://www.facebook.com/ohotnik.art/"},
    { id: 4, ariaLabel: "Link to instagram", img: "inst", link: "https://www.linkedin.com/in/artur-okhotnichenko-9104b9190/" },
    { id: 5, ariaLabel: "Link to twitter", img: "twitter", link: "https://www.linkedin.com/in/artur-okhotnichenko-9104b9190/" },
    { id: 6, ariaLabel: "Link to skype", img: "sk", link: "https://www.linkedin.com/in/artur-okhotnichenko-9104b9190/" },
    { id: 7, ariaLabel: "Link to call me", img: "phone", link: "https://www.linkedin.com/in/artur-okhotnichenko-9104b9190/"},
  ],
  works: [
    { id: 1, subtitle: "Some Work", descText: "Lorem ipsum dolor sit amet.", ariaLabel: "Link-button to view my work"},
    { id: 2, subtitle: "Some Work", descText: "Lorem ipsum dolor sit amet.", ariaLabel: "Link-button to view my work"},
    { id: 3, subtitle: "Some Work", descText: "Lorem ipsum dolor sit amet.", ariaLabel: "Link-button to view my work"},
  ],
  skills: [
    { id: 1, img: "html", subtitle: "Html5", ariaLabel: "Link-button to view skill", href: "https://www.w3schools.com/html/"},
    { id: 2, img: "css", subtitle:"Css3", ariaLabel: "Link-button to view skill", href: "https://www.w3schools.com/css/"},
    { id: 3, img: "sass", subtitle:"Sass", ariaLabel: "Link-button to view skill", href: "https://sass-lang.com/"},
    { id: 4, img: "response", subtitle:"Responsive design", ariaLabel: "Link-button to view skill", href: "https://www.w3schools.com/html/html_responsive.asp"},
    { id: 5, img: "js", subtitle:"Java Script", ariaLabel: "Link-button to view skill", href: "https://javascript.info/"},
    { id: 6, img: "ts", subtitle:"TypeScript", ariaLabel: "Link-button to view skill", href: "https://www.typescriptlang.org/"},
    { id: 7, img: "react", subtitle:"React", ariaLabel: "Link-button to view skill", href: "https://reactjs.org/"},
    { id: 8, img: "react", subtitle:"React Native", ariaLabel: "Link-button to view skill", href: "https://reactnative.dev/"},
    { id: 9, img: "redux", subtitle:"Redux", ariaLabel: "Link-button to view skill", href: "https://redux.js.org/"},
    { id: 10, img: "node", subtitle:"Node.js", ariaLabel: "Link-button to view skill", href: "https://nodejs.org/en/"},
    { id: 11, img: "express", subtitle:"Express.js", ariaLabel: "Link-button to view skill", href: "https://expressjs.com/"},
    { id: 12, img: "mongo", subtitle:"MongoDB", ariaLabel: "Link-button to view skill", href: "https://www.mongodb.com/"},
    { id: 13, img: "api", subtitle:"Rest API", ariaLabel: "Link-button to view skill", href: "https://www.restapitutorial.com/"},
    { id: 14, img: "graphql", subtitle:"GraphQL", ariaLabel: "Link-button to view skill", href: "https://graphql.org/"},
    { id: 15, img: "aws", subtitle:"AWS Amplify", ariaLabel: "Link-button to view skill", href: "https://aws.amazon.com/amplify/"},
    { id: 16, img: "cms", subtitle:"Contentful", ariaLabel: "Link-button to view skill", href: "https://www.contentful.com/"},
  ],
  blogs: [
    { id: 1, subtitle: "Some Blog", descText: "Lorem ipsum dolor sit amet."},
    { id: 2, subtitle: "Some Blog", descText: "Lorem ipsum dolor sit amet."},
  ],
  pagination: [
    {id:1},
    {id:2},
    {id:3},
    {id:4},
    {id:5},
  ],
  allBlogs: [
    { id: 1, subtitle: "Some Blog", descText: "Lorem ipsum dolor sit amet."},
    { id: 2, subtitle: "Some Blog", descText: "Lorem ipsum dolor sit amet."},
    { id: 3, subtitle: "Some Blog", descText: "Lorem ipsum dolor sit amet."},
    { id: 4, subtitle: "Some Blog", descText: "Lorem ipsum dolor sit amet."},
  ],
  blogText: [
    { id: 1, text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.consectetur adipisicing elit. elit."},
    { id: 2, text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.consectetur adipisicing elit. elit."},
    { id: 3, text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.consectetur adipisicing elit. elit."},

  ]
};

export default state;
