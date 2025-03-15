
export default function Footer() {
    return (
        <footer
            style={{
                backgroundColor: "black",
                color: "#ffffff",
                padding: "60px 0",
            }}
        >
            <div className="container">
                <div className="row">
                    <div
                        className="col-xl-3 col-md-6"
                    >
                        <h4 style={{ marginBottom: "20px", fontWeight: "600" }}>
                            EliteEshop
                        </h4>
                        <p>
                            Leading online store for the latest electronics. Quality products,
                            unbeatable prices, and exceptional customer service.
                        </p>
                    </div>

                    {/* الروابط السريعة */}
                    <div
                        className="col-xl-3 col-md-6"
                    >
                        <h4 style={{ marginBottom: "20px", fontWeight: "600" }}>
                            Quick Links
                        </h4>
                        <ul style={{ listStyle: "none", padding: "0" }}>
                            <li>
                                <a
                                    href="/"
                                    style={{ color: "#ffffff", textDecoration: "none" }}
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    style={{ color: "#ffffff", textDecoration: "none" }}
                                >
                                    Shop
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    style={{ color: "#ffffff", textDecoration: "none" }}
                                >
                                    Contact Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    style={{ color: "#ffffff", textDecoration: "none" }}
                                >
                                    FAQs
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* دعم العملاء */}
                    <div
                        className="col-xl-3 col-md-6"
                    >
                        <h4 style={{ marginBottom: "20px", fontWeight: "600" }}>
                            Customer Support
                        </h4>
                        <p>
                            <i className="fas fa-phone-alt"></i> +1 800 123 456
                        </p>
                        <p>
                            <i className="fas fa-envelope"></i> support@eliteeshop.com
                        </p>
                        <p>
                            <i className="fas fa-map-marker-alt"></i> 456 Tech Street, San
                            Francisco, CA
                        </p>
                    </div>

                    {/* مواقع التواصل الاجتماعي */}
                    <div
                        className="col-xl-3 col-md-6"
                    >
                        <h4 style={{ marginBottom: "20px", fontWeight: "600" }}>
                            Follow Us
                        </h4>
                        <div style={{ display: "flex", gap: "15px" }}>
                            <a href="/" style={{ color: "#ffffff", fontSize: "20px" }}><i className={`fab fa-facebook-f`}></i></a>
                            <a href="/" style={{ color: "#ffffff", fontSize: "20px" }}><i className={`fab fa-twitter`}></i></a>
                            <a href="/" style={{ color: "#ffffff", fontSize: "20px" }}><i className={`fab fa-instagram`}></i></a>
                            <a href="/" style={{ color: "#ffffff", fontSize: "20px" }}><i class="fab fa-linkedin-in"></i></a>

                            {/* {["facebook-f", "twitter", "instagram", "linkedin-in"].map(
                                (icon, index) => (
                                    <a
                                        key={icon}
                                        href="/"
                                        style={{ color: "#ffffff", fontSize: "20px" }}
                                    >
                                        <i className={`fab fa-${icon}`}></i>
                                    </a>
                                )
                            )} */}
                        </div>
                    </div>
                </div>

                {/* حقوق النشر */}
                <div
                    style={{
                        marginTop: "40px",
                        textAlign: "center",
                        borderTop: "1px solid #333",
                        paddingTop: "20px",
                    }}
                >
                    <p>&copy; EliteEshop. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
