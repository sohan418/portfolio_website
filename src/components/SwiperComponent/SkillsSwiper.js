import React from 'react';
import SwiperComponent from './SwiperComponent';

const skills = [
  {
    category: 'Front-End',
    items: [
      { name: 'HTML', logo: '/assets/images/html-logo.png' },
      { name: 'CSS', logo: '/assets/images/css-logo.png' },
      { name: 'JavaScript', logo: '/assets/images/JavaScript-logo.png' },
      { name: 'React', logo: '/assets/images/react-icon.png' }
    ]
  },
  {
    category: 'Back-End',
    items: [
      { name: 'Python', logo: '/assets/images/python-logo.png' },
      { name: 'Flask', logo: '/assets/images/flask-logo.png' }
    ]
  },
  {
    category: 'Databases',
    items: [
      { name: 'MySQL', logo: '/assets/images/mysql-logo.png' },
      { name: 'MongoDB', logo: '/assets/images/mongodb-logo.png' }
    ]
  },
  {
    category: 'Familiar with tools',
    items: [
      { name: 'VS Code', logo: '/assets/images/vs-code-logo.png' },
      { name: 'GitHub', logo: '/assets/images/git-logo.png' },
      { name: 'Excel', logo: '/assets/images/excel-logo.png' }
    ]
  }
];

const SkillsSwiper = () => {
  return (
    <SwiperComponent
      items={skills}
      renderItem={(skill) => (
        <div className="skill-list">
          <h2>{skill.category}</h2>
          <ul>
            {skill.items.map((item, idx) => (
              <li key={idx}>
                <img
                  src={`${process.env.PUBLIC_URL}${item.logo}`}
                  alt={item.name.toLowerCase()}
                  width={30}
                  height={30}
                />
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    />
  );
};

export default SkillsSwiper;
