import React from 'react';
import SwiperComponent from './SwiperComponent';

const qualities = [
  {
    title: 'Problem Solver',
    description: 'I enjoy finding creative solutions to technical challenges and translating complex requirements into functional web applications.'
  },
  {
    title: 'Team Player',
    description: 'I thrive in collaborative environments and have a proven ability to work effectively with designers, product managers, and other developers to deliver exceptional results.'
  },
  {
    title: 'Passionate Learner',
    description: "I'm constantly seeking new knowledge and opportunities to expand my skills, keeping myself updated on the latest trends and advancements in web development."
  }
];

const QualitiesSwiper = () => {
  return (
    <SwiperComponent
      items={qualities}
      renderItem={(quality) => (
        <div className="child-box-container">
          <h2>{quality.title}</h2>
          <p>{quality.description}</p>
        </div>
      )}
    />
  );
};

export default QualitiesSwiper;
