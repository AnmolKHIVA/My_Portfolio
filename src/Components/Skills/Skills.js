import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'C++', img: 'images/cpp.png' },
    { name: 'JavaScript', img: 'images/javascript.png' },
    { name: 'Python', img: 'images/python.png' },
    { name: 'Data Structures', img: 'images/data_structures.png' },
    { name: 'OOP\'s', img: 'images/oops.png' },
    { name: 'React.js', img: 'images/react_js.png' },
    { name: 'Node.js', img: 'images/node_js.png' },
    { name: 'Express.js', img: 'images/express.png' },
    { name: 'MongoDB', img: 'images/mongo_db.png' },
    { name: 'SQL', img: 'images/sql.png' },
    { name: 'Git', img: 'images/git.png' },
    { name: 'GitHub', img: 'images/github.png' },
  ];

  return (
    <div className="skills-section" id="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <img src={skill.img} alt={skill.name} className="skill-icon" />
            {skill.name}
          </div>
        ))}
      </div>
    </div>
  );
};
 
export default Skills;
