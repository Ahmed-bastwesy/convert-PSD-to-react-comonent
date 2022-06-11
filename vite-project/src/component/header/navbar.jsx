import { Link } from "react-router-dom";
import logoUrl from '../../public/images/logo.jpg';
export default function NavBar() {

    return (
      <div>
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link to="/" className="navbar-brand" href="#"><img src={logoUrl} alt="Logo" style={{width:"25px",height:"30px"}}/>Charger</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                                <Link to="/about" className="nav-link" href="#">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link" >Home</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href = "mailto: ahmed.reda.bastawesy@gmail.com">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
      </div>
    );
  }