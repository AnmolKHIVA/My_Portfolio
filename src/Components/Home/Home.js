import "./Home.css"
import TypeIt from "typeit-react";
export default function Home() {
  return (
    <>
      <div className="body-section" id="home">
      <div className="photo-container">
        <img src="photo.png" alt="Anmolpreet Singh" className="photo" />
      </div>
      <div className="intro-container">
        <h2 className="intro-line">-Hello</h2>
        <h1 className="intro-line">I'm <span>A</span>nmolpreet <span>S</span>ingh</h1>
        <p className="intro-line">A  <TypeIt className="intro-line typed"
                options={{
                    loop:true
                }} 
                getBeforeInit={(instance) => {
                  instance.type("Full Stack Web Developer...").pause(800).delete(27).pause(800).type("Programmer...").pause(800).delete(13).pause(800).type("Problem Solver...").pause(750);
              
                  // Remember to return it!
                  return instance;
                }}
            /></p>
        <p className="intro-paragraph">
          Welcome to my portfolio! I'm a final-year Electronics and Communication Engineering student at Punjab Engineering College, with a keen interest in problem-solving and a solid foundation in the MERN stack. I’m actively involved in competitive programming and exploring the transformative potential of machine learning. This website provides a snapshot of my skills, projects, and experiences.       </p>
      </div>
    </div>
    </>
  )
}
