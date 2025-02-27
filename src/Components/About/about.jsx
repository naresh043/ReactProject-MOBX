import React from "react";
import "../../Styles/About-css/about.css";
import Footer from "../Common/Footer";
import Navbar from "../Common/Navbar";

const AboutSection = () => {
  return (
    <>
    {/* <Navbar/> */}
      <h2 className="about-us">About Us</h2><hr />
    <div className="about-container">
        
      <div className="elerrn-container">
        <div className="content-div">
          <h2>
            We Are The Leader In <br /> The E-Learning Space
          </h2>
          <p>
            E-Learning Hub is a modern, responsive web application designed to
            revolutionize online education. It provides a centralized platform
            for learners to access a wide range of courses, track their
            progress, and achieve their learning goals through an intuitive,
            user-friendly interface.
          </p>
          <h3>Key Features:</h3>
          <ul>
            <li>Interactive Course Cards with detailed descriptions.</li>
            <li>Advanced Search & Filtering options for easy resource discovery.</li>
            <li>Responsive Design for seamless use on all devices.</li>
            <li>Progress Tracking and milestones to monitor learning achievements.</li>
          </ul>
        </div>
        <div >
          <img
            src="https://res.cloudinary.com/dv5tozhs3/image/upload/v1732810195/_b8e9c9eb-e25e-4efe-91a0-66c6adbb1edc_brtaui.jpg"
            alt="About Us"
            className="img-about"
          />
        </div>
      </div>
      <div className="target-container">
      <div>
          <img
            src="https://res.cloudinary.com/dv5tozhs3/image/upload/v1732810195/_4309c9f0-f242-4402-8919-0e345fd67d15_wll8gj.jpg"
            alt="Target Audience"
            className="img-about"
          />
        </div>
        <div>
          <h3>Target Audience:</h3>
          <p>
            The platform is ideal for students, educators, and professionals
            seeking a flexible, self-paced environment to enhance their
            knowledge and skills. Whether you're a student, a professional
            upskilling, or an organization providing learning opportunities,
            E-Learning Hub offers tailored, interactive learning experiences for
            every learner.
          </p>
          <h3>Technology Stack:</h3>
          <p>
            The application is built using React for a dynamic front-end, with
            Redux for state management and CSS/SASS for styling. The back-end
            uses Node.js, Express, and MongoDB for robust data handling and
            secure JWT authentication. The platform integrates with RESTful APIs
            and Axios for efficient communication, hosted on AWS for
            scalability.
          </p>
        </div>
      </div>

     

      <div className="future-enhancements">
      
        <div>
          <h3>Future Enhancements:</h3>
          <ul>
            <li>User Authentication for personalized learning paths.</li>
            <li>Gamification with badges, leaderboards, and rewards.</li>
            <li>Mobile App for accessible on-the-go learning.</li>
            <li>AI-Powered Recommendations to suggest tailored courses.</li>
          </ul>
        </div>
        <div className="img-div">
          <img
            src="https://res.cloudinary.com/dv5tozhs3/image/upload/v1732810195/_b74e8633-6821-462c-a900-9adc362128e8_d4h3zy.jpg"
            alt="Technology Stack"
            className="img-about"
          />
        </div>
      </div>

      <div className="call-to-action">
        <div>
          <img
            src="https://res.cloudinary.com/dv5tozhs3/image/upload/v1732810195/_2a0e083c-d8da-409b-b0e6-1330609521c7_g3hgdy.jpg"
            alt="Ready to Start"
            className="img-about"
          />
        </div>
        <div>
          <h3>Ready to Start?</h3>
          <p>
            Start your learning journey today by exploring the courses, tracking
            your progress, and achieving your goals with personalized learning
            paths. Join us in shaping the future of education and share your
            feedback to help us enhance the platform!
          </p>
          <a href="signup.html" className="theme-btn">Get Started</a>
        </div>
      </div>
    </div>
    {/* <Footer/> */}
    </>
  );
};

export default AboutSection;
