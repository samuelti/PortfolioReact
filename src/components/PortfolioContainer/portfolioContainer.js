import React from "react";

import "./portfolioContainer.css";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"

export default function PortfolioContainer() {
  const projectList = [
    {
      name: "Cocktail Database",
      linkGithub: "https://github.com/ts795/mini-project-third-party.git",
      linkDeployed: "https://hugh18019.github.io/Drinks-Library/",
      img: "https://samuelti.github.io/My-Class-Repo/02_homework/Assets/Capture.JPG",
    },
    {
      name: "Remember Calculator",
      linkGithub: "https://github.com/samuelti/Remeber_Calculator",
      linkDeployed: "https://remembering-calculator.herokuapp.com/",
      img: "https://samuelti.github.io/My-Class-Repo/02_homework/Assets/Calculator.JPG",
    },
    {
      name: "README Generator",
      linkGithub: "https://github.com/samuelti/08-README-Generator/blob/master/Develop/index.js",
      linkDeployed: "",
      img: "",
    },
    {
      name: "Password Generator",
      linkGithub: "https://github.com/samuelti/3-passwordGenerator.git",
      linkDeployed: "https://samuelti.github.io/3-passwordGenerator/index.html",
      img: "",
    },
    {
      name: "Note Taker",
      linkGithub: "https://github.com/samuelti/11_Note_Taker",
      linkDeployed: "https://cool-note-taker-for-cool-dudes.herokuapp.com/notes",
      img: "",
    },
    {
      name: "Day Planner",
      linkGithub: "https://github.com/samuelti/EventPlanner",
      linkDeployed: "https://samuelti.github.io/EventPlanner/",
      img: "",
    },
  ];
  return (
    <Container>
    
      {projectList.map((project) => {
        return (
          <div className="work">
            <div style={{backgroundImage: `url(${project.img})`}} className="image">
              <a href={project.linkDeployed}>
                {project.name}
              </a>
              <a href={project.linkGithub}>
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        );
      })}
    
    </Container>
  );
}
