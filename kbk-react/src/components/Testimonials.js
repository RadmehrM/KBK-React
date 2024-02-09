// Testimonials.js

import React from 'react';
import './Testimonials.css';

function Testimonial({ title, text }) {
  return (
    <div className="testimonial">
      <h3 className="testimonial-title">{title}</h3>
      <p className="testimonial-text">{text}</p>
    </div>
  );
}

function Testimonials() {
  return (
    <div className="testimonials">
      <div className="testimonials-header">
        <h2>Testimonials</h2>
      </div>
      <Testimonial
        title="Empowering Dreams Through Sport!"
        text="I can't express how grateful I am for the incredible work of this non-profit organization..."
      />
      <Testimonial
        title="A Beacon of Hope for Young Athletes"
        text="As a single parent, providing my children with sports equipment was often financially challenging..."
      />
      <Testimonial
        title="Turning Passion into Possibility"
        text="This non-profit has transformed the lives of so many children, including mine..."
      />
    </div>
  );
}

export default Testimonials;
