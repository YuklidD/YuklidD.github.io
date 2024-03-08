import "./portfolio.css";
import { FaGithub } from 'react-icons/fa';


import IMG1 from "../../assets/Firebase.jpg";
import IMG2 from "../../assets/Gobus.jpg";
import IMG3 from "../../assets/MathPower.jpg";
// import IMG4 from "../../assets/Raise.png";
// import IMG5 from "../../assets/Potsave.png";
// import IMG6 from "../../assets/Health.png";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "E-Store",
      img: IMG1,
      description:
        "It is the website for Purchase your needs",
      technologies: "React.js | Fire-Base | CSS | Bootstrap",
      link: "https://e-store-dev-c7551.web.app/",
      github:"https://github.com/YuklidD/e-store--Firebase-React-",
    },
    {
      id: 2,
      title: "React Gobus",
      img: IMG2,
      description:
        "We created a simple bus reservation application integrating user-friendly features for booking and viewing bus schedules. This solution streamlined the process of managing travel plans, enhancing user experience with convenient access to bus timings and reservations.",
      technologies: "React | CSS | Vite | Node.js | MongoDB",
      link: "https://gobusdemo.netlify.app/",
      github:"https://github.com/YuklidD/bus-app",
    },
    {
      id: 3,
      title: "AWS-MathApp",
      img: IMG3,
      description:
        "I developed a math power app using AWS's ecosystem, including Amplify, Lambda, IAM, API Gateway, and DynamoDB. This project provided a concise, practical experience with serverless architecture, showcasing the efficiency and scalability of AWS services.",
      technologies: "Amplify, Lambda, IAM, API Gateway and DynamoDB",
      link: "https://dev.dxcqmggj0vdis.amplifyapp.com/",
      github:"https://github.com/YuklidD/AWS-MathApp?tab=readme-ov-file",
    },
    
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
       {soloProjects.map((pro) => (
    <article className="portfolio__item" key={pro.id}>
      <div className="portfolio__item-image">
        <img src={pro.img} alt={pro.title} />
      </div>
      <div className="portfolio__item-content">
        <h3>{pro.title}</h3>
        <p>{pro.description}</p>
        <p>{pro.technologies}</p>
      </div>
      <div className="portfolio__item-cta">
        <a
          href={pro.link}
          target="_blank"
          className="btn btn-primary live-demo-btn"
          rel="noreferrer"
        >
          Live Demo
        </a>
        <a
          href={pro.github}
          target="_blank"
          className="btn github-icon-link"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
      </div>
    </article>
  ))}
</div>


    </section>
  );
};

export default Portfolio;
