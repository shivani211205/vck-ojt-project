
import { Link } from "react-router-dom";
import Header from "../components/Header/Header";
import "../styles/Pages.css"

const HomePage = () => {

return(
    <div id="root">
        <Header/>
        <div className="main">
            <div id="main-layout">
                <div className="demo4">
                    <img src="/images/vck.jpg" alt="" className="img"/>
                    <div className="demo5">
                        <h1>Welcome to Vivekanand <br />  College!</h1>
                        <p id="p1">Your journey to excellence starts here.</p>
                        <Link to="/admissions"><button id="c2">Apply Now!</button></Link>
                    </div>

                </div>  
                <p><b>Vivekanand College</b> is a premier educational institution dedicated to fostering academic excellence, innovation, and holistic development. Established in [Year of Establishment, e.g., 1980], we have proudly served generations of students, empowering them to achieve their full potential.</p>
                <p>At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. Our state-of-the-art facilities, experienced faculty, and diverse student community create a unique ecosystem where curiosity thrives and future leaders are shaped.</p>
                
                <h2>Why Choose Vivekanand College?</h2>
                <ul>
                    <li><strong>Legacy of Excellence : </strong> Decades of commitment to quality education.</li>
                    <li><strong>Experienced Faculty : </strong>Learn from renowned experts and passionate educators.</li>
                    <li><strong>Modern Facilities : </strong> Well-equipped labs, expansive library, and comfortable campus.</li>
                    <li><strong>Holistic Development : </strong>Focus on co-curricular activities, sports, and community service.</li>
                    <li><strong>Strong Placements : </strong>Excellent career opportunities with leading companies.</li>
                </ul>
                <h2>Campus Life & Facilities</h2>
                <div id="img1">
                    <img src="/images/campus.jpeg" alt="" className="img2" />
                    <img src="/images/vck1.jpg" alt="" className="img3" />
                
                </div>
                <p>Explore our vibrant campus and state-of-the-art facilities designed to enhance your learning experience and personal growth.</p>
                <div>
                    <center><p id="p2">Ready to explore our courses?</p></center>
                    <Link to="/courses"><center><button id="c1">Explore Courses</button></center></Link>
                </div>
                
                
            </div>
            
        </div>
        
    </div>
)
}
export default HomePage;
