import Header from "../components/Header/Header";

const CoursesPage = () => {


return(
    <div >
        <Header/>
        <div className="main">
            <div id="main-layout">
                <center><h1 className="heading">Our Academic Programs</h1></center>
                <p>Vivekanand College offers a comprehensive range of undergraduate and postgraduate programs designed to equip students with the knowledge and skills demanded by today's dynamic global landscape. Our curriculum is regularly updated to reflect industry trends and academic advancements.</p>
                
                <h2><strong>Discover Campus Life</strong></h2>
                <video id="video" controls>
                    <source src="/videos/vck.mp4"/>
                </video>

                <h2><strong>Undergraduate Programs (UG)</strong></h2>
                <ul>
                    <li><strong>Bachelor of Science (B.Sc.)</strong></li>
                    <ul>
                        <li>Computer Science (3 years)</li>
                        <li>Information Technology (3 years)</li>
                        <li>Biotechnology (3 years)</li>
                    </ul> 
                </ul>
                <ul>
                    <li><strong>Bachelor of Commerce (B.Com)</strong></li>
                    <ul>
                        <li>Accounting & Finance (3 years)</li>
                        <li>Banking & Insurance (3 years)</li>

                    </ul>

                </ul>
                <ul>
                    <li><strong>Bachelor of Arts (B.A.)</strong></li>
                    <ul>
                        <li>English Literature (3 years)</li>
                        <li>Psychology (3 years)</li>
                    </ul>

                </ul>
                <h2><strong>Postgraduate Programs (PG)</strong></h2>
                <ul>
                    <li><strong>Master of Science (M.Sc.)</strong></li>
                    <ul>
                        <li>Computer Science (2 years)</li>
                        <li>Information Technology (2 years)</li>
                    </ul>
                </ul>
                <ul>
                    <li><strong>Master of Commerce (M.Com)</strong>(2years)</li>

                </ul>
                <ul>
                    <li><strong>Master of Arts (M.A.)</strong>(2 years)</li>

                </ul>
        
                <h2><strong>Program Details & Fee Structure (Annual)</strong></h2>
                <table>
                    <tr>
                        <th>Program Type</th>
                        <th>Course Name</th>
                        <th >Duration</th>
                        <th >Annual Fee (INR)</th>
                        <th >Eligibility</th>
                    </tr>
                    <tr >
                        <td>UG</td>
                        <td>B.Sc. Computer Science</td>
                        <td>3 Years</td>
                        <td>₹ 85,000</td>
                        <td>10+2 with PCM (50%)</td>

                    </tr>
                     <tr>
                        <td>UG</td>
                        <td>B.Com. Accounting & Finance</td>
                        <td>3 Years</td>
                        <td>₹ 70,000</td>
                        <td>10+2 Commerce (45%)</td>
                    </tr>
                    <tr>
                        <td>PG</td>
                        <td>M.Sc. Information Technology</td>
                        <td>2 Years</td>
                        <td>₹ 95,000</td>
                        <td>B.Sc. IT/CS (50%)</td>
                    </tr>

                </table>

                <h2><strong>Specialized & Vocational Courses</strong></h2>
                <p>In addition to traditional degree programs, we offer various certificate and diploma courses in areas like Digital Marketing, Web Development, Data Analytics, and Soft Skills Development, providing specialized training for career enhancement.</p>
                <p><center>Explore detailed syllabi and admission criteria on our Admissions page.</center></p>
                <center><p>Have questions about a specific course?</p></center>
                <center><a href="/contact" id="a1">Inquire About Courses</a></center>

            </div>
        </div>
    </div>
)
}
export default CoursesPage;
