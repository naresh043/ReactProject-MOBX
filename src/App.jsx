import { useEffect, useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Store from "./Mobx/Store";

// Components
import Navbar from "./Components/Common/Navbar";
import LogIn from "./Components/Common/Login";
import Signup from "./Components/Common/SiginUp";
import ReviewsCards from "./Components/Home/reviews-cards";
import Courses from "./Components/Courses/courses";
import RoadmapCourseCard from "./Components/Roadmaps/roadmap_card";
import AboutSection from "./Components/About/about";
import EnrolledCourse from "./Components/EnrolledCourses/enrolled";
import DynamicPage from "./Components/Courses/dynmicPage";
import NotFound from "./Components/Common/Error/ErrorPage";

function App() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => JSON.parse(localStorage.getItem("mobx-store")) || false
  );

  // Load user data from localStorage when the app starts
  useEffect(() => {
    const storedUser = localStorage.getItem("mobx-store");
    console.log(Store.userDetails);
    if (storedUser) {
      Store.setUserDetails(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
  }, []);

  // Watch for changes in Store.userDetails and update localStorage
  useEffect(() => {
    console.log(Store.userDetails);
    if (Store.userDetails) {
      localStorage.setItem("mobx-store", JSON.stringify(Store.userDetails));
      setIsAuthenticated(true);
    } else {
      localStorage.removeItem("mobx-store");
      setIsAuthenticated(false);
    }
  }, [Store.userDetails]);

  const handleLogout = () => {
    Store.setUserDetails(null); 
    localStorage.removeItem("mobx-store"); 
    setIsAuthenticated(false);
    navigate("/Login", { replace: true });
  };


  return (
    <>
      <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
      <Routes>
        {/* Public Routes */}
        <Route
          path="/Login"
          element={
            isAuthenticated ? <Navigate to="/" replace /> : <LogIn setIsAuthenticated={setIsAuthenticated} />
          }
        />
        <Route
          path="/Signup"
          element={isAuthenticated ? <Navigate to="/" replace /> : <Signup />}
        />

        {/* Private Routes */}
        {isAuthenticated ? (
          <>
            <Route path="/" element={<ReviewsCards />} />
            <Route path="/Courses" element={<Courses />} />
            <Route path="/roadmap" element={<RoadmapCourseCard />} />
            <Route path="/about" element={<AboutSection />} />
            <Route path="/enrollecourses" element={<EnrolledCourse />} />
            <Route path="/courses/:id" element={<DynamicPage />} />
            <Route path="*" element={<NotFound />} />
          </>
        ) : (
          <Route path="*" element={<Navigate to="/Login" replace />} />
        )}
      </Routes>
    </>
  );
}

export default App;
