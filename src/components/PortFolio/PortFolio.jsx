import React from "react";
import "./portfolio.css";

const PortFolio = () => {
  const ProjectList = [
    {
      id: 1,
      title: "Notes App",
      github: "https://github.com/kishanprajapat2564788/React-Keeps-Notes-App",
      para: "He used React JS to create a Notes app. Any user can add numerous notes and delete notes in this project. This may also be done in dark mode.",
      liveDemo: "https://shrtco.de/w9Jxpd",
    },
    {
      id: 2,
      title: "Weather App",
      github: "https://github.com/kishanprajapat2564788/weather-app",
      para: "He made a Weather app with React JS. For the weather information, he used the weather API. Any user may look for weather information for any state.",
      liveDemo: "https://shrtco.de/pTYfUo",
    },
    {
      id: 3,
      title: "URL Shortener",
      github: "https://github.com/kishanprajapat2564788/URL-Shortener",
      para: "Using React JS, he created a URL shortener app. He utilised ShrtCode for the API. Long URLs can be shortened and copied by any user.",
      liveDemo: "https://shrtco.de/aFsxUY",
    },
    {
      id: 4,
      title: "CRUD Application",
      github: "https://github.com/kishanprajapat2564788/Mern-Crud-App",
      para: "He built Crud using React JS for the frontend, Node JS for the database connection & Modal Schemas, Express JS for the server and routes, and MongoDB for the database.",
      liveDemo: "https://shrtco.de/2G7GY",
    },
    {
      id: 5,
      title: "Calculator App",
      github: "https://github.com/kishanprajapat2564788/Awesome_Calculator",
      para: "Using React JS, he created an ideal tool for everyday computations. It is usable by everybody, even on little devices with small screens. It is very fast and looking colorful.",
      liveDemo: "https://shrtco.de/WSAD34",
    },
    {
      id: 6,
      title: "JavaScript/React JS Projects",
      github: "https://github.com/kishanprajapat2564788/",
      para: `He's also made some fun and interactive JS projects with HTML, CSS, and JavaScript.`,
      liveDemo: "https://shrtco.de/b98gQW",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio/Projects</h2>

      <div className="container portfolio__Container">
        {ProjectList &&
          ProjectList.map((item, i) => {
            return (
              <article key={item.id} className="inner__Container">
                {/* <div className="image__div">
                  <img src={notesImage} alt={item.title} />
                </div> */}
                <h3>{item.title}</h3>
                <p>{item.para}</p>
                <div className="portfolio__buttons">
                  <a
                    href={item.github}
                    rel="noreferrer"
                    className="btn"
                    target={"_blank"}
                  >
                    Github
                  </a>
                  <a
                    href={item.liveDemo}
                    rel="noreferrer"
                    className="btn btn-primary"
                    target={"_blank"}
                  >
                    Live Demo
                  </a>
                </div>
              </article>
            );
          })}
      </div>
    </section>
  );
};

export default PortFolio;
