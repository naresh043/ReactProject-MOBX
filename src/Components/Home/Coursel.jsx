import Carousel from "react-bootstrap/Carousel";
import { useNavigate } from "react-router-dom";
import "../../Styles/home-css/coursel.css";

function Coursel_home() {
  const navigate=useNavigate()   

  const EnrollCourse = () => {
    navigate("/courses");
    console.log("btn clicked");
  };
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block"
          src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1420&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="First slide"
        />

        <Carousel.Caption>
          <div className="Carousel-overlap">
            <h5 className="Carousel-inner-text">First slide label</h5>
            <p className="Carousel-inner-text2">
              Learning is the only thing the mind never exhausts, never fears,
              and never regrets
            </p>
            <button onClick={EnrollCourse} className="Carousel-btn">Enroll Course Here</button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1462536943532-57a629f6cc60?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Second slide"
        />
        <Carousel.Caption>
          <div className="Carousel-overlap">
            <h5 className="Carousel-inner-text">Second slide label</h5>
            <p className="Carousel-inner-text2">
              Never stop learning because life never stops teaching.
            </p>
            <button onClick={EnrollCourse} className="Carousel-btn">Enroll Course Here</button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/26833275/pexels-photo-26833275/free-photo-of-open-book-with-spread-pages.jpeg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <div className="Carousel-overlap">
            <h5 className="Carousel-inner-text">Third slide label</h5>
            <p className="Carousel-inner-text2">
              The beautiful thing about learning is that nobody can take it away
              from you
            </p>
            <button onClick={EnrollCourse} className="Carousel-btn">Enroll Course Here</button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1462536943532-57a629f6cc60?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Second slide"
        />
        <Carousel.Caption>
          <div className="Carousel-overlap">
            <h5 className="Carousel-inner-text">Second slide label</h5>
            <p className="Carousel-inner-text2">
              Never stop learning because life never stops teaching.
            </p>
            <button onClick={EnrollCourse} className="Carousel-btn">Enroll Course Here</button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Coursel_home;
