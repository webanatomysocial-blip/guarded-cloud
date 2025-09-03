import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../css/Testimonial.css";
import test1 from '../assets/images/Testimonial-imgs/1.jpg';
import test2 from '../assets/images/Testimonial-imgs/2.jpg';
import test3 from '../assets/images/Testimonial-imgs/3.jpg';
import Union from '../assets/images/Testimonial-imgs/Union.png';


const testimonials = [
  {
    "text": "Guarded Cloud gave us peace of mind. Their team spotted gaps we didn’t even know we had and set up monitoring that caught issues before they became problems. It feels like having a 24/7 security department without the cost.",
    "name": "Mark T",
    "role": " IT Director, Mid-sized Healthcare Company",
    "Images": test2
  },
  {
    "text": "As a small business, we didn’t think we could afford enterprise-grade protection. Guarded Cloud proved us wrong. They made security simple, affordable, and effective — and our auditors were impressed.",
    "name": "Sarah L",
    "role": "COO, Regional Accounting Firm",
    "Images": test1
  },
  {
    "text": "Their onboarding was smooth, their reporting is clear, and their response times are fast. We finally feel confident our data and client trust are protected.",
    "name": "David R",
    "role": "Founder, SaaS Startup",
    "Images": test3
  },
  
];

const TestimonialCarousel = () => (
  <section className="testimonialcarousel-section">
    <p className="main-heading ">What Our Early Clients Are Saying</p>
    <Swiper
      slidesPerView={1.5}
      spaceBetween={32}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      style={{ paddingBottom: "40px" }}
    >
      {testimonials.map((testimonial, idx) => (
        <SwiperSlide key={idx}>
          <div className="testimonialcarousel-card">
            <div className="testimonialcarousel-img-container">
              <img src={testimonial.Images} alt="Employee" className="testimonialcarousel-img" />
            </div>
            <div className="testimonialcarousel-content">
              <img src={Union} alt="Quote" className="testimonialcarousel-quote-img" />
              <p className="testimonialcarousel-text">{testimonial.text}</p>
              <div className="testimonialcarousel-meta">
                <span className="testimonialcarousel-name">{testimonial.name}</span>
                <span className="testimonialcarousel-role">{testimonial.role}</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
);

export default TestimonialCarousel;