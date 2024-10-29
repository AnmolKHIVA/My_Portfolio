import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'PEC_WEB',
      description:"PEC Web is a virtual community platform for students at PEC, offering a dedicated space for social interaction and updates. PEC Web allows students to share personal posts, connect with peers, and stay updated on departmental news and events. By blending personal engagement with academic updates, PEC Web enhances the sense of community within PEC, providing students with a centralized platform to connect, share, and stay informed.",
      // description:"An E-Commerce platform, crafted with Next.js and React for the frontend, and powered by Node.js and Express on the backend, offers a comprehensive online shopping experience. This is a full stack project consisting secure authentication to effortless payment processing, intuitive cart management, and real-time product updates via Amazon API integration.",
      // description: 'A fully functioning E-Commerce Shopping website developed from scratch. It contains all features such as Cart, Authentication, Payment Gateway and API. For Frontend, React and Next.js is used and for Backend Node and Express.js is used. ',
      img: 'images/PEC_WEB.png',
      link: 'https://github.com/AnmolKHIVA/Pec-Web'
    },
    {
      title: 'Real Estate Price Predictor',
      // description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime eveniet ex nulla. Eligendi, beatae a? Enim magni voluptate, et exercitationem minus dolores iusto non vero, expedita voluptatibus rerum obcaecati quasi?',
    //  description:` Crafted a user-centric web application facilitating connections between individuals in need and donors, utilizing
    //  Node.js, Express.js, EJS, and MongoDB. The platform streamlines fundraising efforts driving impactful social change.`,
    description:"Created a Machine Learning model using a raw dataset to predict prices. The primary emphasis is given on cleaning the data, followed by visualizing the results to identify trends and patterns. Additionally, a user-friendly website is developed to enable users to input parameters and receive price predictions based on the trained model. This project effectively combines data processing, visualization, and web development to deliver a robust solution for price prediction.",
      img: 'images/Realestate.png',
      link: 'https://github.com/AnmolKHIVA/ML-House-Prediction-Model'
    },
    {
      title: 'Ingredient_Chef',
      // description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime eveniet ex nulla. Eligendi, beatae a? Enim magni voluptate, et exercitationem minus dolores iusto non vero, expedita voluptatibus rerum obcaecati quasi?',
      description: `Created a web application utilizing Vanilla JavaScript and the MealDB API to streamline meal planning. This
      innovative tool offers diverse recipes and meal options from a main ingredient, simplifying cooking process.`,
      img: 'images/ingridientchef.png',
      link: 'https://github.com/AnmolKHIVA/IngridientChef'
    },
    {
      title: 'TIC_TAC_TOE',
      // description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime eveniet ex nulla. Eligendi, beatae a? Enim magni voluptate, et exercitationem minus dolores iusto non vero, expedita voluptatibus rerum obcaecati quasi?',
     description:`Developed famous Tic-Tac-Toe game with great UI with the help of React.`,
      img: 'images/tictactoe.png',
      link: 'https://github.com/AnmolKHIVA/Tic-Tac-Toe'
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  return (
    <div className="projects-section" id="projects">
      <h2>Projects</h2>
      <Slider {...settings}>
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <img src={project.img} alt={project.title} className="project-img" />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">Visit</a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Projects;
