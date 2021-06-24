import logo from '../logo.png';
import './style.css';

const Header = () => {
    return(
        <header>
            <img className="logo" src={logo} alt="logo" />
            <nav>
                <ul className="nav-links">
                    <li><a href="https://www.jz-software.com/">Home</a></li>
                </ul>
            </nav>
            <a className="cta" href="mailto:info@jz-software.com"><button>Contact</button></a>
        </header>
    )
}

export default Header;