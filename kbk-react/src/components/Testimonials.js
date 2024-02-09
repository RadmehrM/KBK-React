// Testimonials.js

import React from 'react';
import './Testimonials.css';

function Testimonial({ title, children }) {
  return (
    <div className="testimonial">
      <h3 className="testimonial-title">{title}</h3>
      <p className="testimonial-body">{children}</p>
    </div>
  );
}

function Testimonials() {
  return (
    <section className="testimonials-section">
      <header className="testimonials-header">
        <h2>Testimonials</h2>
      </header>
      <div className="testimonials-container">
        <Testimonial title="Empowering Dreams Through Sport!">
          I can't express how grateful I am for the incredible work of this non-profit organization...
        </Testimonial>
        <Testimonial title="A Beacon of Hope for Young Athletes">
          As a single parent, providing my children with sports equipment was often financially challenging...
        </Testimonial>
        <Testimonial title="Turning Passion into Possibility">
          This non-profit has transformed the lives of so many children, including mine...
        </Testimonial>
      </div>
    </section>
  );
}

export default Testimonials;
