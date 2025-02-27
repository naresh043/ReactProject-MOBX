import { useLocation, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "../../Styles/Courses/courses.css";
import Loading from "../Common/loading";
import { toast } from "react-toastify";
import Store from "../../Mobx/Store"; 
import { observer } from "mobx-react-lite";

const DynamicPage = observer(() => {
    const navigate = useNavigate();
    let { id } = useParams();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchedData = async () => {
            try {
                const { data } = await axios.get(`https://giant-ambitious-danger.glitch.me/coursesdata/${id}`);
                setData(data);
                setLoading(false);
            } catch (err) {
                setError("Error occurred while fetching data.");
                setLoading(false);
                console.log("Error occurred:", err);
            }
        };

        if (id) {
            fetchedData();
        }
    }, [id]);

    if (loading) return <Loading />;
    if (error) return <div>{error}</div>;

    const backButton = () => {
        navigate("/courses");
    };

    const handleAddCourse = async () => {
        try {
            const userData = Store.userDetails;

            if (!userData) {
                toast.error("User not found. Please log in.");
                return;
            }

            const enrolledCourses = userData.enrolledCourses || [];

            // Check if already enrolled
            if (enrolledCourses.some(course => course.id === data.id)) {
                toast.warning("You are already enrolled in this course.", { autoClose: 2000 });
                return;
            }

            // Update MobX store
            const updatedUser = {
                ...userData,
                enrolledCourses: [...enrolledCourses, data]
            };

            Store.setUserDetails(updatedUser);

            // Update API
            const response = await axios.put(
                `https://giant-ambitious-danger.glitch.me/credentials/${userData.id}`,
                updatedUser,
                { headers: { "Content-Type": "application/json" } }
            );

            if (response.status === 200) {
                toast.success("Course added successfully!", { autoClose: 1000 });
            } else {
                throw new Error("Failed to update user data.");
            }
        } catch (error) {
            console.error("Error adding course:", error.message);
            toast.error("An error occurred while enrolling.");
        }
    };

    return (
        <div className="selected-course-container">
            <div className="course-header">
                <img src={data.courseLogo} alt={data.courseName} className="course-logo" />
                <div className="course-header-text">
                    <h2 className="course-title">{data.courseName}</h2>
                    <p><b>Category:</b> {data.category}</p>
                    <p><b>Level:</b> {data.courseLevel || "N/A"}</p>
                    <p><b>Instructor:</b> {data.instructor || "N/A"}</p>
                    <p><b>Rating:</b> ⭐ {data.rating} ({data.reviewsCount} reviews)</p>
                </div>
            </div>

            <div className="course-details">
                <h3>About this Course</h3>
                <p>{data.description || "No description available."}</p>
                <p><b>Duration:</b> {data.duration}</p>
                <p><b>Price:</b> {data.price || "Free"}</p>
                <p><b>Completion Certificate:</b> {data.completionCertificate ? "Yes" : "No"}</p>

                <h3>Key Takeaways</h3>
                <ul>
                    {data.keyTakeaways.map((takeaway, index) => (
                        <li key={index}>{takeaway}</li>
                    ))}
                </ul>

                <button onClick={backButton} className="back-btn">Back to Courses</button>
                <button className="course-link" onClick={handleAddCourse}>
                    Enroll Now
                </button>
            </div>
        </div>
    );
});

export default DynamicPage;
