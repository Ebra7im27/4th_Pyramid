import { Link } from "react-router-dom";
import Header from "../../Components/NavBar";
import UpNavBar from "../../Components/UpNavBar";
import Footer from "../../Components/Footer";

export default function LogIin() {
    return (
        <>
            <UpNavBar />
            <Header />
            <section style={{ marginTop: "60px", marginBottom: "140px" }}>
                <div className="container-f">
                    <div className="row">
                        <div className="col-xl-6 col-12 d-none d-sm-block my-4">
                            <div className="singUp-image" style={{ height: "781px" }}>
                                <img
                                    src="../assets/LogoImg.png"
                                    alt=""
                                    style={{ height: "100%", width: "100%" }}
                                />
                            </div>
                        </div>
                        <div
                            className="col-xl-6 col-12 d-flex align-items-center justify-content-center my-4"
                        >
                            <div
                                className="login-form"
                                style={{ width: "371px", height: "auto" }}
                            >
                                <div className="login-title" style={{ marginBottom: "48px" }}>
                                    <h1
                                        style={{
                                            fontSize: "36px",
                                            fontWeight: "500",
                                            color: "black",
                                            marginBottom: "24px",
                                        }}
                                    >
                                        Log in to Exclusive
                                    </h1>
                                    <p
                                        style={{
                                            fontSize: "16px",
                                            fontWeight: "400",
                                            color: "black",
                                        }}
                                    >
                                        Enter your details below
                                    </p>
                                </div>

                                <div>
                                    <input
                                        style={{
                                            border: "none",
                                            borderBottom: "1px solid black",
                                            outline: "none",
                                            padding: "10px 0px",
                                            marginBottom: "40px",
                                        }}
                                        type="email"
                                        className="w-100"
                                        placeholder="Email or Phone Number"
                                    />
                                </div>
                                <div>
                                    <input
                                        style={{
                                            border: "none",
                                            borderBottom: "1px solid black",
                                            outline: "none",
                                            padding: "10px 0px",
                                            marginBottom: "40px",
                                        }}
                                        type="password"
                                        className="w-100"
                                        placeholder="Password"
                                    />
                                </div>

                                <div className="d-flex justify-content-between">
                                    <button
                                        style={{
                                            width: "143px",
                                            height: "56px",
                                            borderRadius: "4px",
                                            backgroundColor: "#DB4444",
                                            fontSize: "16px",
                                            fontWeight: "500",
                                            color: "#FAFAFA",
                                            border: "none",
                                        }}
                                    >
                                        Log in
                                    </button>
                                    <Link
                                        className="d-flex align-items-center"
                                        to="/login"
                                        style={{
                                            fontSize: "16px",
                                            fontWeight: "400",
                                            lineHeight: "24px",
                                            color: "#DB4444",
                                            textDecoration: "none",
                                        }}
                                    >
                                        Forget Password?
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}