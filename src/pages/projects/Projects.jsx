import "./projects.css";
import React, { useState } from "react";

export default function Projects() {
  const slides = [
    {
      title: "Lapr2: Name of the Project",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam totam quisquam, id laborum animi dolore atque. Odio consequatur corporis, quidem earum libero consectetur pariatur iusto? Ex eos explicabo maxime optio!Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sit ad cupiditate nesciunt deserunt vel assumenda maxime ipsum molestias qui asperiores, mollitia culpa numquam praesentium laboriosam voluptas itaque dicta expedita.",
      clickEvent: () => alert("You clicked slide 1"),
    },
    {
      title: "This is a second title 2",
      description: "This is a second description",
      clickEvent: () => alert("You clicked slide 1"),
   
    },
    {

      title: "This is a third title 3",
      description: "This is a third description",
      clickEvent: () => alert("You clicked slide 1"),
    },
    {
      title: "This is a third title 4",
      description: "This is a third description",
      clickEvent: () => alert("You clicked slide 1"),
    },

  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Navigate to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Navigate to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="projects">
    <div className="cardSection">
    <div className="projectTitle">PROJECTS</div>
    <div className="slider">
          <button className="left-arrow" onClick={prevSlide}>
            &#10094;
          </button>

          <div className="slide" >
            <h2>{slides[currentIndex].title}</h2>
            <p>{slides[currentIndex].description}</p>
          </div>

          <button className="right-arrow" onClick={nextSlide}>
            &#10095;
          </button>
        </div>

    </div>
    </div>
  );
}
