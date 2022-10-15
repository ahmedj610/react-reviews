import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0)
  const { name, job, image, text } = people[index]

  function nextPerson() {
    index === people.length - 1 ?
      setIndex(0) :
      setIndex(prev => prev + 1)
  }

  function prevPerson() {
    index === 0 ?
      setIndex(people.length - 1) :
      setIndex(prev => prev - 1)
  }
  
  function randomPerson() {
    setIndex(Math.ceil(Math.random() * (people.length - 1)))
  }

  return (
    <div className="review">
      <div className="img-container">
        <img className="person-img" src={image} alt={name} />
        <span className="quote-icon"><FaQuoteRight /></span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-contain">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>
        Surprise Me
      </button>
    </div>  
  )
};

export default Review;
