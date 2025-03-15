import "../../src/App.css";

export default function UpNavBar() {
    return (
        <header
            className="subnav-header"
        >
            <nav className="subnav-nav">
                <div className="subnav-container">
                    <p className="subnav-text p-0 m-0">
                        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                    </p>
                    <a href="/" className="subnav-link">
                        Shop Now
                    </a>
                </div>
                <div className="subnav-select">
                    <select
                        name="language"
                        id="language-select"
                        className="subnav-language"
                    >
                        <option value="ar">Arabic</option>
                        <option value="en">English</option>
                        <option value="fr">French</option>
                    </select>
                </div>
            </nav>
        </header>
    )
}
