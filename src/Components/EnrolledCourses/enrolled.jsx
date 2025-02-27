import { observer } from "mobx-react-lite";
import Store from "../../Mobx/Store";
import axios from "axios"; 
import "../../Styles/Enrolled-css/enrolled.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EnrolledCourses = observer(() => {
  const userData = Store.userDetails || {};
  const enrolledCoursesData = userData.enrolledCourses || [];
  
  console.log("User ID:", userData.id); // Debugging
  
  const deleteCourse = async (id) => {
    if (!userData.id) {
      console.error("Error: userData.id is undefined.");
      toast.error("User ID is missing. Please try again.");
      return;
    }

    try {
      // Filter out the deleted course
      const latestCourses = enrolledCoursesData.filter((val) => val.id !== id);
      const updatedUser = { ...userData, enrolledCourses: latestCourses };

      console.log("Updated User Data:", updatedUser); // Debugging API payload

      // Send API request first
      const response = await axios.put(
        `https://giant-ambitious-danger.glitch.me/credentials/${userData.id}`,
        updatedUser,
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.status === 200) {
        // Only update MobX store if API is successful
        Store.setUserDetails(updatedUser);
        toast.success("Course deleted successfully!", { position: "top-right", autoClose: 1000 });
      } else {
        throw new Error(`API responded with status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error deleting course:", error);
      toast.error("Failed to delete course. Try again later.", { position: "top-right", autoClose: 1000 });
    }
  };

  return (
    <>
      <h2 className="enrolled-name">Enrolled Courses</h2>
      <hr />
      {enrolledCoursesData.length > 0 ? (
        <div className="courses-container">
          {enrolledCoursesData.map((course) => (
            <div className="course-card" key={course.id}>
              <div className="course-card-left">
                <h3>{course.courseName}</h3>
                <p>COURSE</p>
                <a href={course.courseLink} target="_blank" rel="noopener noreferrer">
                  View all chapters
                </a>
              </div>
              <div className="course-card-right">
                <h4>Chapter {course.id || "1"}</h4>
                <p>{Array.isArray(course.keyTakeaways) && course.keyTakeaways[0] ? course.keyTakeaways[0] : "Callbacks & Closures"}</p>
                <div className="progress-container">
                  <div className="progress-bar">
                    <span style={{ width: `${(course.challengesCompleted / course.totalChallenges) * 100}%` }}></span>
                  </div>
                  <p className="progress-text">{course.challengesCompleted}/{course.totalChallenges} Challenges</p>
                </div>
                <div className="btn-div-enrolled">
                  <button className="continue-button" onClick={() => window.open(course.courseLink, "_blank")}>
                    Continue
                  </button>
                  <button className="delete-button" onClick={() => deleteCourse(course.id)}>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="no-enrolled-container">
          <img
            src="https://res.cloudinary.com/dv5tozhs3/image/upload/v1733423220/_f03aa6dd-59c0-43bb-9e07-f2b4f5e0a9fa_jy0irl.jpg"
            alt="No Courses Found"
            className="no-enrolled-message"
          />
        </div>
      )}
    </>
  );
});

export default EnrolledCourses;
