import {Link} from 'react-router-dom';
import './Header.css';
const Header = () => {


return(
    <div>
        <header className="main1">
            <div id="a2">
                <a href="/" id="demo2">Vivekanand College</a>
            </div>
            <nav id="demo1">
                <Link to="/home" className="demo">Home</Link>
                <Link to="/about" className="demo">About</Link>
                <Link to="/courses" className="demo">Courses</Link>
                <Link to="/contact" className="demo">Contact</Link>
                <Link to="/admission" id="add">Apply Now!</Link>   
            </nav>
            

        </header>    
    </div>
)
}
export default Header;