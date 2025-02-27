import React, { useEffect, useState } from "react";
import "../../Styles/Roadmap-css/roadmap.css";
import Loading from "../Common/loading";
import Navbar from "../Common/Navbar";
import Footer from "../Common/Footer";

const RoadmapCourseCard = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  // Fetch data from the API
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Start loading
      try {
        const response = await fetch(
          "https://giant-ambitious-danger.glitch.me/roadmapdata"
        );
        if (!response.ok)
          throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Stop loading
      }
    };
    fetchData();
  }, []);

  // Filter logic
  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.coursename
      ?.toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "" || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const courseCards = filteredCourses.map((course) => (
    <div className="Rodamap-card" id="course-card" key={course.id}>
      <div className="road-card-header">
        <img
          src={course.courseRoadmapLogo || "fallback-image.jpg"}
          alt={`${course.courseName} Logo`}
          className=""
        />
      </div>
      <h3>{course.coursename}</h3>
      <hr />
      <div className="card-body">
        <p>
          <strong>Category:</strong> {course.category || "N/A"}
        </p>
        <p>
          <strong>Level:</strong> {course.level || "N/A"}
        </p>
        <p>
          <strong>Description:</strong> {course.description || "N/A"}
        </p>
        <p>
          <strong>Estimated Time:</strong> {course.estimatedTime || "N/A"}
        </p>
        <p>
          <strong>Prerequisites:</strong> {course.prerequisites || "N/A"}
        </p>
        <p>
          <strong>Target Audience:</strong> {course.targetAudience || "N/A"}
        </p>
        <p>
          <strong>Last Updated:</strong> {course.lastUpdated || "N/A"}
        </p>
        <div className="roadmap-card-footer">
          <button className="vivewroadmapbtn">
            <a
              href={course.courseRoadmapLink || "#"}
              target="_self"
              rel="noopener noreferrer"
            >
              View Roadmap
              <i className="fas fa-arrow-right"></i>
            </a>
          </button>
        </div>
      </div>
    </div>
  ));

  return (
    <>
    {/* <Navbar/> */}
    <div className="roadmap-body">
      {/* Search and Filter Section */}
     

        {/* Display Loading Indicator */}
        {loading ? (
         <div className="loadind_roadmap"> <Loading/></div>
        ) : (
        <div className="raodmap_header">
          <h2>Developer Roadmaps</h2>
          <div className="roadmap_filter_container">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="category-filter"
            >
              <option value="">All Categories</option>
              <option value="Programming">Programming</option>
              <option value="Database">Database</option>
              <option value="DevOps">DevOps</option>
              <option value="Cloud Computing">Cloud Computing</option>
              <option value="Operating Systems">Operating Systems</option>
              <option value="Mobile Development">Mobile Development</option>
              <option value="Core Concepts">Core Concepts</option>
              <option value="Software Engineering">Software Engineering</option>
              <option value="AI and Machine Learning">
                AI and Machine Learning
              </option>
              <option value="UI/UX Design">UI/UX Design</option>
            </select>
            <div className="raodmap-search_container">
              <input
                type="text"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
              <span className="search_icon">
                <i className="fa-solid fa-magnifying-glass"></i>
              </span>
            </div>
          </div>
         
            <hr id="custom-hr" />




          <div className="card-container">
            {courseCards.length > 0 ? (
              courseCards
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
        )}
      </div>
   

    {/* <Footer/> */}
    </>
  );
};

export default RoadmapCourseCard;