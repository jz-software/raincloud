import logo from '../logo.png';
import './style.css';

const Header = () => {
    return(
        <header>
            <img className="logo" src={logo} alt="logo" />
            <nav>
                <ul className="nav-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                </ul>
            </nav>
            <a className="cta" href="#"><button>Contact</button></a>
        </header>
    )
}

export default Header;