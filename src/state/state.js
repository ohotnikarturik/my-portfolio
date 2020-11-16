//my works images
import work1 from "../assets/img/content/myWorks/work-1.jpg";
import work2 from "../assets/img/content/myWorks/work-2.jpg";
import work3 from "../assets/img/content/myWorks/work-3.jpg";
import work4 from "../assets/img/content/myWorks/work-4.jpg";
import work5 from "../assets/img/content/myWorks/work-5.jpg";

const state = {
  navHome: [
    { id: 1, name: "Home" },
    { id: 2, name: "Works" },
    { id: 3, name: "Skills" },
    { id: 4, name: "Blogs" },
    { id: 5, name: "Contact" },
  ],
  navAllBlogs: [{ id: 1, name: "Home" }],
  navSingleBlog: [
    { id: 1, name: "Home" },
    { id: 2, name: "Blogs" },
  ],
  socials: [
    {
      id: 1,
      ariaLabel: "Link to linkedin",
      img: "in",
      link: "https://www.linkedin.com/in/artur-okhotnichenko-9104b9190/",
    },
    {
      id: 2,
      ariaLabel: "Link to github",
      img: "git",
      link: "https://github.com/ohotnikarturik",
    },
    {
      id: 3,
      ariaLabel: "Link to facebook",
      img: "fb",
      link: "https://www.facebook.com/ohotnik.art/",
    },
    {
      id: 4,
      ariaLabel: "Link to instagram",
      img: "inst",
      link: "https://www.linkedin.com/in/artur-okhotnichenko-9104b9190/",
    },
    {
      id: 5,
      ariaLabel: "Link to twitter",
      img: "twitter",
      link: "https://www.linkedin.com/in/artur-okhotnichenko-9104b9190/",
    },
    {
      id: 6,
      ariaLabel: "Link to skype",
      img: "sk",
      link: "https://www.linkedin.com/in/artur-okhotnichenko-9104b9190/",
    },
    {
      id: 7,
      ariaLabel: "Link to call me",
      img: "phone",
      link: "https://www.linkedin.com/in/artur-okhotnichenko-9104b9190/",
    },
  ],
  works: [
    {
      id: 1,
      subtitle: "World Countries Generator",
      descText1: "Get a list of countries' names. Display list of countries. Filter list of names, names starts from letters, names includes letters. Sort list. Display amount of list.",
      descText2: "HTML, CSS, JavaScript",
      socials: [
        {
          id: 1,
          ariaLabel: "Link to github",
          img: "git",
          link: "https://github.com/ohotnikarturik/worldCountries-generator",
        },
        {
          id: 2,
          ariaLabel: "Link to website",
          img: "openPage",
          link: "https://ohotnikarturik.github.io/worldCountries-generator/",
        },
      ],
      img: work1,
    },
    {
      id: 2,
      subtitle: "Burger One-Page Scroll",
      descText1: "A responsive website built to further improve the understanding of relevant Technologies.",
      descText2: "HTML, CSS, SASS, BEM, JavaScript, JQuery, Yandex.Maps API, responsive and adaptive design",
      socials: [
        {
          id: 1,
          ariaLabel: "Link to github",
          img: "git",
          link: "https://github.com/ohotnikarturik/BurgerEn",
        },
        {
          id: 2,
          ariaLabel: "Link to website",
          img: "openPage",
          link: "https://ohotnikarturik.github.io/BurgerEn/",
        },
      ],
      img: work2,
    },
    {
      id: 3,
      subtitle: "Product countries",
      descText1: "This app is a small example of an E-Commerce web application. Get a list of products by fetching data from API. Filter list by name. Sort list. Open product to get more info. Add product/s to basket and remove from the basket. Switch color theme.",
      descText2: "CSS, Materialize CSS, React.js, JavaScript, Redux",
      socials: [
        {
          id: 1,
          ariaLabel: "Link to github",
          img: "git",
          link: "https://github.com/ohotnikarturik/full-stack-4-typescript-redux-template/tree/react-redux-ts-artur-newversion",
        },
        {
          id: 2,
          ariaLabel: "Link to website",
          img: "openPage",
          link: "https://eloquent-benz-3bb6de.netlify.app/",
        },
      ],
      img: work3,
    },
    {
      id: 4,
      subtitle: "My Portfolio",
      descText1: "My Portfolio is animated, scrollable and fully responsive, a web application, which I am proud of. Home section about me description. My Works, which I made during the studying. My skills which I achieved. My Blog, where I share my thoughts. And the Contact section, where you can send an email message to me.",
      descText2: "CSS, SASS, JavaScript, React.js, EmailJS",
      socials: [
        {
          id: 1,
          ariaLabel: "Link to github",
          img: "git",
          link: "https://github.com/ohotnikarturik/my-portfolio",
        },
        {
          id: 2,
          ariaLabel: "Link to website",
          img: "openPage",
          link: "",
        },
      ],
      img: work4,
    },
    {
      id: 5,
      subtitle: "Terveet Tavat",
      descText1: "A team work project for private fitness trainer Sami Ylipuranene. This is a responsive website with blog functionality. My role was to create the UI design, styling in the responsiveness, animation as well as building components and working on some of the functionalities.",
      descText2: "CSS, Contentful, JavaScript, React.js, Gatsby.js, MailShip",
      socials: [
        {
          id: 1,
          ariaLabel: "Link to github",
          img: "git",
          link: "https://github.com/ohotnikarturik/sami_ylipuranen",
        },
        {
          id: 2,
          ariaLabel: "Link to website",
          img: "openPage",
          link: "https://terveettavat.fi/",
        },
      ],
      img: work5,
    },
  ],
  skills: [
    {
      id: 1,
      img: "html",
      subtitle: "Html5",
      ariaLabel: "Link-button to view skill",
      href: "https://www.w3schools.com/html/",
    },
    {
      id: 2,
      img: "css",
      subtitle: "Css3",
      ariaLabel: "Link-button to view skill",
      href: "https://www.w3schools.com/css/",
    },
    {
      id: 3,
      img: "sass",
      subtitle: "Sass",
      ariaLabel: "Link-button to view skill",
      href: "https://sass-lang.com/",
    },
    {
      id: 4,
      img: "response",
      subtitle: "Responsive design",
      ariaLabel: "Link-button to view skill",
      href: "https://www.w3schools.com/html/html_responsive.asp",
    },
    {
      id: 5,
      img: "js",
      subtitle: "Java Script",
      ariaLabel: "Link-button to view skill",
      href: "https://javascript.info/",
    },
    {
      id: 6,
      img: "ts",
      subtitle: "TypeScript",
      ariaLabel: "Link-button to view skill",
      href: "https://www.typescriptlang.org/",
    },
    {
      id: 7,
      img: "react",
      subtitle: "React",
      ariaLabel: "Link-button to view skill",
      href: "https://reactjs.org/",
    },
    {
      id: 8,
      img: "react",
      subtitle: "React Native",
      ariaLabel: "Link-button to view skill",
      href: "https://reactnative.dev/",
    },
    {
      id: 9,
      img: "redux",
      subtitle: "Redux",
      ariaLabel: "Link-button to view skill",
      href: "https://redux.js.org/",
    },
    {
      id: 10,
      img: "node",
      subtitle: "Node.js",
      ariaLabel: "Link-button to view skill",
      href: "https://nodejs.org/en/",
    },
    {
      id: 11,
      img: "express",
      subtitle: "Express.js",
      ariaLabel: "Link-button to view skill",
      href: "https://expressjs.com/",
    },
    {
      id: 12,
      img: "mongo",
      subtitle: "MongoDB",
      ariaLabel: "Link-button to view skill",
      href: "https://www.mongodb.com/",
    },
    {
      id: 13,
      img: "api",
      subtitle: "Rest API",
      ariaLabel: "Link-button to view skill",
      href: "https://www.restapitutorial.com/",
    },
    {
      id: 14,
      img: "graphql",
      subtitle: "GraphQL",
      ariaLabel: "Link-button to view skill",
      href: "https://graphql.org/",
    },
    {
      id: 15,
      img: "aws",
      subtitle: "AWS Amplify",
      ariaLabel: "Link-button to view skill",
      href: "https://aws.amazon.com/amplify/",
    },
    {
      id: 16,
      img: "cms",
      subtitle: "Contentful",
      ariaLabel: "Link-button to view skill",
      href: "https://www.contentful.com/",
    },
  ],
  blogs: [
    {
      id: 1,
      subtitle: "Some Blog",
      descText: "Lorem ipsum dolor sit amet.",
      linkTo: "/blog",
    },
    {
      id: 2,
      subtitle: "Some Blog",
      descText: "Lorem ipsum dolor sit amet.",
      linkTo: "/blog",
    },
  ],
  pagination: [{ id: 1 }],
  allBlogs: [
    {
      id: 1,
      subtitle: "Some Blog",
      descText: "Lorem ipsum dolor sit amet.",
      linkTo: "/blog",
    },
    {
      id: 2,
      subtitle: "Some Blog",
      descText: "Lorem ipsum dolor sit amet.",
      linkTo: "/blog",
    },
    {
      id: 3,
      subtitle: "Some Blog",
      descText: "Lorem ipsum dolor sit amet.",
      linkTo: "/blog",
    },
    {
      id: 4,
      subtitle: "Some Blog",
      descText: "Lorem ipsum dolor sit amet.",
      linkTo: "/blog",
    },
  ],
  blogText: [
    {
      id: 1,
      text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.consectetur adipisicing elit. elit.",
      blogTitle: "Some Blog Title",
    },
    {
      id: 2,
      text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.consectetur adipisicing elit. elit.",
    },
    {
      id: 3,
      text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.consectetur adipisicing elit. elit.",
    },
  ],
};

export default state;
