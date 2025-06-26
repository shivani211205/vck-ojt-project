import Header from "../components/Header/Header";

const ContactPage = () => {

        

return(
    <div>
        <Header/>
        <div className="main2">
            <div id="main-layout1">
                <center><h1 className="heading">Contact Us</h1></center>
                <p>We ' d  love  to  hear  from   you !  Whether  you  have  questions  about  admissions  ,  programs  , or  campus  life  ,  our   team  is  here  to  help .</p>
                <h2><strong>General Enquiries</strong></h2>
                <p><b>Vivekanand College Main Campus</b></p>
                <p>[Your College Full Address Here, e.g., Mahatma Gandhi Road, Chembur, Mumbai, Maharashtra 400071]</p>
                <p>India</p>
                <p>Phone: <strong>+91 12345 67890</strong></p>
                <p>Email<b>info@vivekanandcollege.edu</b></p>
                <p>Office Hours: Monday - Friday, 9:00 AM - 5:00 PM IST</p>

                <h2>Admissions Office</h2>
                <p>For all admission-related queries regarding undergraduate or postgraduate programs:</p>
                <p>Phone: +91 98765 43210</p>
                <p>Email: admissions@vivekanandcollege.edu</p>

                <h2>Student Support Services</h2>
                <p>For current student support, academic advising, or general assistance:</p>
                <p>Phone: +91 87654 32109</p>
                <p>Email: studentsupport@vivekanandcollege.edu</p>

                <h2>Find Us on the Map</h2>
                <p>[You can embed a Google Map here later using an iframe or a React map library.]</p>
                <a href="https://www.google.com/maps/search/Vivekanand+College/@16.695294,74.235904,14z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D">View On Google Page</a> 
                <h2>Send Us a Message</h2>
                <p>[A contact form with fields for Name, Email, Subject, Message can be added here.]</p>   

            </div>
        </div>
    </div>
)
}
export default ContactPage;