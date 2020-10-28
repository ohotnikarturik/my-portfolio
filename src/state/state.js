const state = {
  nav: [
    { id: 1, name: "Home" },
    { id: 2, name: "Works" },
    { id: 3, name: "Skills" },
    { id: 4, name: "Blogs" },
    { id: 5, name: "Contacts" },
  ],
  socials: [
    { id: 1, ariaLabel: "Link to linkedin", img: "in" },
    { id: 2, ariaLabel: "Link to github", img: "git" },
    { id: 3, ariaLabel: "Link to facebook", img: "fb" },
    { id: 4, ariaLabel: "Link to instagram", img: "inst" },
    { id: 5, ariaLabel: "Link to twitter", img: "twitter" },
    { id: 6, ariaLabel: "Link to skype", img: "sk" },
    { id: 7, ariaLabel: "Link to call me", img: "phone" },
  ],
  works: [
    { id: 1, subtitle: "Some Work", descText: "Lorem ipsum dolor sit amet.", ariaLabel: "Link-button to view my work"},
    { id: 2, subtitle: "Some Work", descText: "Lorem ipsum dolor sit amet.", ariaLabel: "Link-button to view my work"},
    { id: 3, subtitle: "Some Work", descText: "Lorem ipsum dolor sit amet.", ariaLabel: "Link-button to view my work"},
  ],
  skills: [
    { id: 1, img: "html", subtitle: "Html5", ariaLabel: "Link-button to view skill"},
    { id: 2, img: "css", subtitle:"Css3", ariaLabel: "Link-button to view skill"},
    { id: 3, img: "react", subtitle:"React", ariaLabel: "Link-button to view skill"},
    { id: 4, img: "js", subtitle:"Java Script", ariaLabel: "Link-button to view skill"},
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
