import Header from "../components/Header/Header";


const AdmissionPage = () => {

return(
    <div>
        <Header/>
        <div className="main">
            <div id="main-layout">
                <center><h1 className="heading">Admissions at Vivekanand College</h1></center>
                <p>Please review the eligibility criteria and key dates below for the upcoming academic year. For any queries, feel free to contact our admissions office.</p>

                <h2>Eligibility Criteria for Undergraduate Programs</h2>
                <table className="t1">
                    <tr>
                        <th><b>Programs</b></th>
                        <th><b>Minimum Qualification</b></th>
                        <th><b>Required Subject</b></th>
                        <th><b>Minimum Marks (%)</b></th>
                    </tr>
                    <tr>
                        <td>B.Sc. Computer Science</td>
                        <td>10+2 (or equivalent)</td>
                        <td>Science Streme</td>
                        <td>50%</td>
                    </tr>
            
                     <tr>
                        <td>B.Com. Accounting & Finance</td>
                        <td>10+2 (or equivalent)</td>
                        <td>Commerce Stream</td>
                        <td>45%</td>
                    </tr>
                    <tr>
                        <td>B.A. English Literature</td>
                        <td>10+2 (or equivalent)</td>
                        <td>Any Stream</td>
                        <td>40%</td>
                    </tr>
            
                </table>
                <h2>Application Process</h2>
                <ol>
                    <li><b>Online Application: </b> Fill out the application form available on our portal.</li>
                    <li><b>Document Submission:</b>Upload scanned copies of required documents (mark sheets, ID proof, etc.).</li>
                    <li><b>Entrance Exam (if applicable):</b>Appear for the college's entrance examination.</li>
                    <li><b>Merit List & Interview:</b>Check the merit list and attend the interview if shortlisted.</li>
                    <li><b>Fee Payment: </b>Complete the admission by paying the required fees.</li>
                </ol>
                 <p>For detailed information on postgraduate program admissions, specific program syllabi, and fee structures, please visit our Courses page or Contact us directly.</p>

            </div>
        </div>
    </div>
)
}
export default AdmissionPage;
