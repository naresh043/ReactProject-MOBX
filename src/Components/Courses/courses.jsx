import React, { useState, useEffect } from "react";
import Loading from "../Common/loading";
import "../../Styles/Courses/courses.css";
import Navbar from "../Common/Navbar";
import Footer from "../Common/Footer";
import { Link } from "react-router-dom";

function Courses() {
  const [reviews, setReviews] = useState([]); // Store fetched reviews
  const [loading, setLoading] = useState(true); // Handle loading state
  const [error, setError] = useState(null); // Handle errors
  const [selectedCourse, setSelectedCourse] = useState(null); // Track the selected course
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState(""); // Search query state

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(
          "https://giant-ambitious-danger.glitch.me/coursesdata"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch reviews");
        }
        const data = await response.json();
        setReviews(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Filter reviews based on search query and category
  const filteredReviews = reviews.filter((val) => {
    const matchesSearch = val.courseName
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "" || val.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      {!loading && (
        <>
          <div className="Course_container">
            <div className="Courses_header">
              <h2>Explore Our Courses</h2>
              <div className="filter_container">
                <select
                  className="category-filter"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value="">All Categories</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Programming">Programming</option>
                  <option value="Database">Database</option>
                  <option value="Data Science">Data Science</option>
                  <option value="Version Control">Version Control</option>
                  <option value="Cloud Computing">Cloud Computing</option>
                </select>
                <div className="search_container">
                  <input
                    type="text"
                    placeholder="Search courses..."
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <span className="search_icon">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </span>
                </div>
              </div>
            </div>
            <hr />
            <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}>
              {filteredReviews.length > 0 ? (
                filteredReviews.map((val, ind) => (
                  <div key={ind} className="Course_card">
                    <div className="img_div">
                      <img
                        src={val.courseLogo}
                        alt={val.className}
                        className="card-image"
                      />
                    </div>
                    <div className="card-content">
                      <h3>{val.courseName}</h3>
                      <hr />
                      <p>
                        <b>Category: </b>
                        {val.category}
                      </p>
                      <p className="duration">
                        <i className="fa-regular fa-clock"></i>{" "}
                        <b>Duration: </b>
                        {val.duration}
                      </p>
                      <Link to={`/courses/${ind + 1}`}>
                        <button
                          className="overview-btn"
                          onClick={() => setSelectedCourse(val)}
                        >
                          Course Overview <i className="fas fa-arrow-right"></i>
                        </button>
                      </Link>
                    </div>
                  </div>
                ))
              ) : (
                <div className="no-courses-container">
                  <img
                    src="https://res.cloudinary.com/dv5tozhs3/image/upload/v1732542334/_889df780-3e78-46b2-8665-f26fcd6518f1_nu8n1t.jpg"
                    alt="No Courses Found"
                    className="no-courses-message"
                  />
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Courses;
