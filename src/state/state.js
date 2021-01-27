//my works images
import work0 from "../assets/img/content/myWorks/work-0.jpg"
import work1 from "../assets/img/content/myWorks/work-1.jpg"
// import work2 from "../assets/img/content/myWorks/work-2.jpg";
import work3 from "../assets/img/content/myWorks/work-3.jpg"
import work4 from "../assets/img/content/myWorks/work-4.jpg"
import work5 from "../assets/img/content/myWorks/work-5.jpg"
import work6 from "../assets/img/content/myWorks/work-6.jpg"
import work7 from "../assets/img/content/myWorks/work-7.jpg"

import certificateImg1 from "../assets/img/content/myCertificates/cert2.jpg"
import certificateImg2 from "../assets/img/content/myCertificates/cert1.jpg"
import certificateImg3 from "../assets/img/content/myCertificates/cert3.jpg"
import certificateImg4 from "../assets/img/content/myCertificates/cert4.jpg"

import parallaxSectionImg1 from "../assets/img/bg/landskape.jpg"
import parallaxSectionImg2 from "../assets/img/bg/mountain2.jpg"

const state = {
  navHome: [
    { id: 1, name: "Home" },
    { id: 2, name: "Work" },
    { id: 3, name: "Skills" },
    { id: 4, name: "Certifications" },
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
  ],
  works: [
    {
      id: 0,
      subtitle: "Task-Manager API",
      descText1:
        "A Representational State Transfer API for managing all user tasks. Has full fledged support for user login and sign up. Filter and sort user tasks with pagination. Upload image avatar, and a lot more features accessible with just some simple requests.",
      descText2:
        "Node.js, Express.js, MongoDB, Mongoose, REST API and Nodemailer/SendGrid",
      socials: [
        {
          id: 1,
          ariaLabel: "Link to github",
          img: "git",
          link: "https://github.com/ohotnikarturik/task-manager-api",
          socialName: "GitHub ",
        },
        {
          id: 2,
          ariaLabel: "Link to website",
          img: "openPage",
          link: "https://ohotnikarturik-task-manager.herokuapp.com/",
          socialName: "Demo",
        },
      ],
      img: work0,
    },
    {
      id: 1,
      subtitle: "My Cloud Storage",
      descText1:
        "My Cloud Storage is a full-stack app. The app's goal is to store, secure, and retrieve client's data. My Cloud Storage app is currently in development mode. At the moment the app has the following authentication features: Sign Up, Sign In, Forgot Password, and Change Password.",
      descText2: "CSS, MaterializeCSS, JavaScript, React.js, Redux, AWS",
      socials: [
        {
          id: 1,
          ariaLabel: "Link to github",
          img: "git",
          link: "https://github.com/ohotnikarturik/my-cloud-storage",
          socialName: "GitHub ",
        },
        {
          id: 2,
          ariaLabel: "Link to website",
          img: "openPage",
          link: "https://main.d3b0qy09er9iyp.amplifyapp.com/",
          socialName: "Demo",
        },
      ],
      img: work1,
    },
    // {
    //   id: 2,
    //   subtitle: "Yard",
    //   descText1:
    //     "Private repository. A teamwork project. Mobile app to book, check in and plan a trip to Helsinki. The app includes all the essential information and services for the traveler.",
    //   descText2:
    //     "React Native, JavaScript, Expo, Native Base, TypeScript, Redux, Contentful CMS and AWS",
    //   socials: [
    //     {
    //       id: 1,
    //       ariaLabel: "Link to github",
    //       img: "git",
    //       link: "https://github.com/ohotnikarturik/yard-app",
    //       socialName: "GitHub ",
    //     },
    //     {
    //       id: 2,
    //       ariaLabel: "Link to website",
    //       img: "openPage",
    //       link: "https://www.apple.com/app-store/",
    //       socialName: "Demo",
    //     },
    //   ],
    //   img: work2,
    // },
    {
      id: 3,
      subtitle: "My Portfolio",
      descText1:
        "My Portfolio is an animated, scrollable, and fully responsive web app, which showcases my professional work as a junior full-stack developer. The app features my work, my skills, my certifications, and a contact section if you'd like to get in touch with me.",
      descText2: "CSS, SASS, JavaScript, React.js, EmailJS",
      socials: [
        {
          id: 1,
          ariaLabel: "Link to github",
          img: "git",
          link: "https://github.com/ohotnikarturik/my-portfolio",
          socialName: "GitHub ",
        },
        {
          id: 2,
          ariaLabel: "Link to website",
          img: "openPage",
          link: "",
          socialName: "Demo",
        },
      ],
      img: work3,
    },
    {
      id: 4,
      subtitle: "Terveet Tavat",
      descText1:
        "A group project. This is a responsive web app with a blog section. My role was to create the UI Design, styling, making the app responsive, creating animations as well as building components, and working on some of the functionalities.",
      descText2: "CSS, Contentful, JavaScript, React.js, Gatsby.js, MailShip",
      socials: [
        {
          id: 1,
          ariaLabel: "Link to github",
          img: "git",
          link: "https://github.com/ohotnikarturik/sami_ylipuranen",
          socialName: "GitHub ",
        },
        {
          id: 2,
          ariaLabel: "Link to website",
          img: "openPage",
          link: "https://terveettavat.fi/",
          socialName: "Demo",
        },
      ],
      img: work4,
    },
    {
      id: 5,
      subtitle: "Product countries",
      descText1:
        "Private repository. This app has a small part on an E-Commerce web application. You can get a list of products by fetching data from an API, filter and sort list, and add/remove products to and from a basket. The app has a theme color switch functionality.",
      descText2:
        "CSS, Materialize CSS, React.js, JavaScript, TypeScript, Redux and Docker",
      socials: [
        {
          id: 1,
          ariaLabel: "Link to github",
          img: "git",
          link:
            "https://github.com/ohotnikarturik/full-stack-4-typescript-redux-template/tree/react-redux-ts-artur-newversion",
          socialName: "GitHub ",
        },
        {
          id: 2,
          ariaLabel: "Link to website",
          img: "openPage",
          link: "https://eloquent-benz-3bb6de.netlify.app/",
          socialName: "Demo",
        },
      ],
      img: work5,
    },
    {
      id: 6,
      subtitle: "Burger One-Page Scroll",
      descText1:
        "A responsive website built to further improve the understanding of relevant Technologies.",
      descText2:
        "HTML, CSS, SASS, BEM, JavaScript, JQuery, Yandex.Maps API, responsive and adaptive design",
      socials: [
        {
          id: 1,
          ariaLabel: "Link to github",
          img: "git",
          link: "https://github.com/ohotnikarturik/BurgerEn",
          socialName: "GitHub ",
        },
        {
          id: 2,
          ariaLabel: "Link to website",
          img: "openPage",
          link: "https://ohotnikarturik.github.io/BurgerEn/",
          socialName: "Demo",
        },
      ],
      img: work6,
    },
    {
      id: 7,
      subtitle: "Mika Rekilae",
      descText1: "Static Web site for Cow farmer",
      descText2: "HTML, CSS, BEM, JavaScript, JQuery",
      socials: [
        {
          id: 1,
          ariaLabel: "Link to github",
          img: "git",
          link: "https://github.com/websitegithub/mikarekilae",
          socialName: "GitHub ",
        },
        {
          id: 2,
          ariaLabel: "Link to website",
          img: "openPage",
          link: "https://websitegithub.github.io/mikarekilae/index.html",
          socialName: "Demo",
        },
      ],
      img: work7,
    },
  ],
  skills: [
    {
      id: 1,
      img: "html",
      subtitle: "Html5",
      ariaLabel: "Link-button to view skill",
      href: "https://www.w3schools.com/html/",
      completed: 90,
    },
    {
      id: 2,
      img: "css",
      subtitle: "Css3",
      ariaLabel: "Link-button to view skill",
      href: "https://www.w3schools.com/css/",
      completed: 80,
    },
    {
      id: 3,
      img: "sass",
      subtitle: "Sass",
      ariaLabel: "Link-button to view skill",
      href: "https://sass-lang.com/",
      completed: 70,
    },
    {
      id: 4,
      img: "response",
      subtitle: "Responsive design",
      ariaLabel: "Link-button to view skill",
      href: "https://www.w3schools.com/html/html_responsive.asp",
      completed: 70,
    },
    {
      id: 5,
      img: "js",
      subtitle: "Java Script",
      ariaLabel: "Link-button to view skill",
      href: "https://javascript.info/",
      completed: 70,
    },
    {
      id: 6,
      img: "ts",
      subtitle: "TypeScript",
      ariaLabel: "Link-button to view skill",
      href: "https://www.typescriptlang.org/",
      completed: 50,
    },
    {
      id: 7,
      img: "react",
      subtitle: "React",
      ariaLabel: "Link-button to view skill",
      href: "https://reactjs.org/",
      completed: 70,
    },
    {
      id: 8,
      img: "react",
      subtitle: "React Native",
      ariaLabel: "Link-button to view skill",
      href: "https://reactnative.dev/",
      completed: 50,
    },
    {
      id: 9,
      img: "redux",
      subtitle: "Redux",
      ariaLabel: "Link-button to view skill",
      href: "https://redux.js.org/",
      completed: 60,
    },
    {
      id: 10,
      img: "node",
      subtitle: "Node.js",
      ariaLabel: "Link-button to view skill",
      href: "https://nodejs.org/en/",
      completed: 50,
    },
    {
      id: 11,
      img: "express",
      subtitle: "Express.js",
      ariaLabel: "Link-button to view skill",
      href: "https://expressjs.com/",
      completed: 60,
    },
    {
      id: 12,
      img: "mongo",
      subtitle: "MongoDB",
      ariaLabel: "Link-button to view skill",
      href: "https://www.mongodb.com/",
      completed: 60,
    },
    {
      id: 13,
      img: "api",
      subtitle: "Rest API",
      ariaLabel: "Link-button to view skill",
      href: "https://www.restapitutorial.com/",
      completed: 60,
    },
    {
      id: 14,
      img: "graphql",
      subtitle: "GraphQL",
      ariaLabel: "Link-button to view skill",
      href: "https://graphql.org/",
      completed: 50,
    },
    {
      id: 15,
      img: "aws",
      subtitle: "AWS",
      ariaLabel: "Link-button to view skill",
      href: "https://aws.amazon.com/amplify/",
      completed: 50,
    },
    {
      id: 16,
      img: "cms",
      subtitle: "Contentful",
      ariaLabel: "Link-button to view skill",
      href: "https://www.contentful.com/",
      completed: 60,
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
  certificates: [
    { id: 1, img: certificateImg1 },
    { id: 2, img: certificateImg2 },
    { id: 3, img: certificateImg3 },
    { id: 4, img: certificateImg4 },
  ],
  parallaxSectionImg: [
    { id: 1, img: parallaxSectionImg1 },
    { id: 2, img: parallaxSectionImg2 },
  ],
}

export default state
