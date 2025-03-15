import { Link } from "react-router-dom";
import "../../src/App.css";

function Header() {
    return (
        <nav
            className="navbar navbar-expand-lg border-bottom"
        >
            <div className="container">
                <p className="navbar-brand">Exclusive</p>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                Contact
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/signup">
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                    <div className="position-relative">
                        <input
                            className="form-control fw-normal"
                            style={{ fontSize: "12px", lineHeight: "18px", width: "243px", height: "38px", paddingRight: "30px" }}
                            type="search"
                            placeholder="What are you looking for?"
                            aria-label="Search"
                        />
                        <i className="fas fa-search position-absolute"
                            style={{ right: "10px", top: "50%", transform: "translateY(-50%)", color: "#000000", width: "16px", height: "16px" }}>
                        </i>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header
