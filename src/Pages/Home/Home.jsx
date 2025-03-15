import './Home.css'
import axios from "axios"
import Header from "../../Components/NavBar"
import UpNavBar from "../../Components/UpNavBar"
import { useEffect, useState } from "react"
import Marquee from "react-fast-marquee"
import Footer from '../../Components/Footer'

const Home = () => {

    const [products, setProducts] = useState([])


    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then((response) => {
                console.log(response.data); // Check Data
                setProducts(response.data)
            })
            .catch((error) => console.error("Error fetching products:", error))
    }, [])

    const ButtonStyle = {
        width: "46px",
        height: "46px",
        borderRadius: "50%",
        border: "none",
        backgroundColor: "rgba(245, 245, 245, 1)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "1.2rem",
        color: "#555",
        cursor: "pointer",
    }

    const style1 = {
        width: "80px",
        height: "80px",
        borderRadius: "50%",
        backgroundColor: "#2F2E30",
        marginBottom: "10px"
    }

    const style2 = {
        width: "58px",
        height: "58px",
        borderRadius: "50%",
        backgroundColor: "#000000"
    }

    const ShowData = () => (
        <div className="mt-4">
            <Marquee pauseOnHover={true} pauseOnClick={true} speed={50}>
                {products.map((item) => (
                    <div key={item.id} className="upcard mx-4" style={{ width: "18rem", border: "none" }}>
                        <div className="position-relative">
                            <i class="far fa-heart position-absolute" style={{ top: "10px", right: "10px", cursor: "pointer" }}></i>
                            <i className="far fa-eye position-absolute" style={{ top: "30px", right: "10px", cursor: "pointer" }}></i>
                        </div>
                        <div className="d-flex justify-content-center">
                            <img src={item.image} className="card-img-top" style={{ width: "190px", height: "180px" }} alt={item.name} />
                        </div>
                        {/* <img
                            className="card-img-top"
                            src={item.image}
                            alt="Card"
                            height={300}
                            width={300}
                        /> */}
                        <div className="card-body">
                            <h5 className="card-title" style={{ fontFamily: "Poppins", fontWeight: "500", fontSize: "16px", lineHeight: "24px" }}>
                                {item.title.slice(0, 20)}...
                            </h5>
                            <p style={{ fontFamily: "Poppins", fontWeight: "500", fontSize: "16px", lineHeight: "24px", color: "#DB4444" }}>
                                ${item.price}
                            </p>
                            <p>
                                {item.rating.rate}{" "}
                                <i className="fas fa-star" style={{ color: "#FFD700" }}></i>
                            </p>
                            <button
                                style={{ width: "100%", height: "41px", borderRadius: "4px", backgroundColor: "#000000", color: "#FFFFFF", fontFamily: "Poppins", fontWeight: "500", fontSize: "16px", lineHeight: "24px", border: "none" }}
                            >
                                Add To Cart
                            </button>
                        </div>
                    </div>
                ))}
            </Marquee>
        </div>
    )

    return (
        <>
            <UpNavBar />
            <Header />
            <main>
                <div className="container">
                    <div className="row">
                        {/* ****************************************** Start Main Section ********************************************* */}
                        <div className="col-2 d-none d-md-block" style={{ marginTop: "40px" }}>
                            <div>
                                <ul className="list-group">
                                    {[
                                        { name: "Electronics", icon: "fas fa-angle-right" },
                                        { name: "Fashion", icon: "fas fa-angle-right" },
                                        { name: "Home & Kitchen" },
                                        { name: "Beauty & Health" },
                                        { name: "Sports & Outdoors" },
                                        { name: "Toys & Games" },
                                        { name: "Automotive" },
                                        { name: "Books" },
                                        { name: "Groceries" },
                                    ].map((category, index) => (
                                        <li
                                            key={index}
                                            className="list-group-item border-0"
                                        >
                                            <a href="/" className="text-decoration-none text-dark fw-normal" style={{ fontFamily: "Poppins", fontSize: "16px", lineHeight: "24px" }}>
                                                {category.name}
                                                <i className={`${category.icon} float-end`} style={{ marginTop: "7px" }}></i>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-10 col-12" style={{ marginTop: "40px" }}>
                            <div id="carouselExampleIndicators" className="carousel slide">
                                <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                </div>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src="../assets/img1.jpg" className="d-block w-100" alt="..." style={{ height: "350px", objectFit: "cover" }} />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="../assets/img2.jpg" className="d-block w-100" alt="..." style={{ height: "350px", objectFit: "cover" }} />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="..//assets/img3.jpg" className="d-block w-100" alt="..." style={{ height: "350px", objectFit: "cover" }} />
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                        {/* ****************************************** End Main Section ********************************************* */}
                    </div>
                </div>
            </main>

            <section style={{ marginTop: "140px" }}>
                <div className="container">
                    <div className="row">
                        {/* ****************************************** Start Section One ********************************************* */}
                        <div className="col-12">
                            <div className="d-flex align-items-center gap-4">
                                <div style={{ backgroundColor: "#DB4444", width: "20px", height: "40px", borderRadius: "4px" }}></div>
                                <p className="m-0" style={{ fontFamily: "Poppins", fontWeight: "600", fontSize: "16px", lineHeight: "20px", color: "#DB4444" }}>Today’s</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-6">
                            <h2 style={{ marginTop: "24px", fontSize: "36px", fontWeight: "600", lineHeight: "48px", letterSpacing: "3px" }}>Flash Sales</h2>
                        </div>
                        <div className="col-6 d-flex gap-3 justify-content-end">
                            <button style={ButtonStyle}>
                                <i class="fas fa-arrow-left"></i>
                            </button>
                            <button style={ButtonStyle}>
                                <i class="fas fa-arrow-right"></i>
                            </button>
                        </div>
                        {/* ****************************************** End Section One ********************************************* */}
                    </div>

                    <ShowData />

                    <div className="d-flex justify-content-center" style={{ margin: "60px 0" }}>
                        <button
                            style={{ width: "234px", height: "56px", borderRadius: "4px", padding: "16px 48px", backgroundColor: "#DB4444", color: "#FAFAFA", fontFamily: "Poppins", fontWeight: "500", fontSize: "16px", lineHeight: "24px", border: "none" }}>
                            View All Products
                        </button>
                    </div>

                    <hr />

                </div>
            </section>

            <section style={{ marginTop: "80px" }}>
                <div className="container">
                    <div className="row">
                        {/* ****************************************** Start Section Two ********************************************* */}
                        <div className="col-12">
                            <div className="d-flex align-items-center gap-4">
                                <div style={{ backgroundColor: "#DB4444", width: "20px", height: "40px", borderRadius: "4px" }}></div>
                                <p className="m-0" style={{ fontFamily: "Poppins", fontWeight: "600", fontSize: "16px", lineHeight: "20px", color: "#DB4444" }}>Categories</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-6">
                            <h2 style={{ marginTop: "24px", fontSize: "36px", fontWeight: "600", lineHeight: "48px", letterSpacing: "3px" }}>Browse By Category</h2>
                        </div>
                        <div className="col-6 d-flex gap-3 justify-content-end">
                            <button style={ButtonStyle}>
                                <i class="fas fa-arrow-left"></i>
                            </button>
                            <button style={ButtonStyle}>
                                <i class="fas fa-arrow-right"></i>
                            </button>
                        </div>
                    </div>

                    <div className="row" style={{ marginTop: "60px" }}>
                        <div className="upSec col-12 d-flex flex-wrap justify-content-center" style={{gap:"55px"}}>
                            <div className="cardSec d-flex flex-column justify-content-center align-items-center" style={{ width: "170px", height: "145px", borderRadius: "4px", border: "1px solid #0000004D" }}>
                                <i className="iconSec fas fa-mobile-alt" style={{ width: "56px", height: "56px" }}></i>
                                <span style={{ fontFamily: "Poppins", fontWeight: "400", fontSize: "16px", lineHeight: "24px", marginTop: "16px" }}>Phones</span>
                            </div>
                            <div className="cardSec d-flex flex-column justify-content-center align-items-center" style={{ width: "170px", height: "145px", borderRadius: "4px", border: "1px solid #0000004D" }}>
                                <i className="iconSec fas fa-desktop" style={{ width: "56px", height: "56px" }}></i>
                                <span style={{ fontFamily: "Poppins", fontWeight: "400", fontSize: "16px", lineHeight: "24px", marginTop: "16px" }}>Computers</span>
                            </div>
                            <div className="cardSec d-flex flex-column justify-content-center align-items-center" style={{ width: "170px", height: "145px", borderRadius: "4px", border: "1px solid #0000004D" }}>
                                <i className="iconSec far fa-gem" style={{ width: "56px", height: "56px" }}></i>
                                <span style={{ fontFamily: "Poppins", fontWeight: "400", fontSize: "16px", lineHeight: "24px", marginTop: "16px" }}>Jewelery</span>
                            </div>
                            <div className="cardSec d-flex flex-column justify-content-center align-items-center" style={{ width: "170px", height: "145px", borderRadius: "4px", border: "1px solid #0000004D" }}>
                                <i className="iconSec fas fa-camera" style={{ width: "56px", height: "56px" }}></i>
                                <span style={{ fontFamily: "Poppins", fontWeight: "400", fontSize: "16px", lineHeight: "24px", marginTop: "16px" }}>Camera</span>
                            </div>
                            <div className="cardSec d-flex flex-column justify-content-center align-items-center" style={{ width: "170px", height: "145px", borderRadius: "4px", border: "1px solid #0000004D" }}>
                                <i className="iconSec fas fa-headphones" style={{ width: "56px", height: "56px" }}></i>
                                <span style={{ fontFamily: "Poppins", fontWeight: "400", fontSize: "16px", lineHeight: "24px", marginTop: "16px" }}>HeadPhones</span>
                            </div>
                            <div className="cardSec d-flex flex-column justify-content-center align-items-center" style={{ width: "170px", height: "145px", borderRadius: "4px", border: "1px solid #0000004D" }}>
                                <i className="iconSec fas fa-gamepad" style={{ width: "56px", height: "56px" }}></i>
                                <span style={{ fontFamily: "Poppins", fontWeight: "400", fontSize: "16px", lineHeight: "24px", marginTop: "16px" }}>Gaming</span>
                            </div>
                        </div>
                    </div>

                    <hr style={{ marginTop: "70px" }} />
                </div>
            </section>

            <section style={{ marginTop: "70px" }}>
                <div className="container">
                    <div className="row">
                        {/* ****************************************** Start Section Three ********************************************* */}
                        <div className="col-12">
                            <div className="d-flex align-items-center gap-4">
                                <div style={{ backgroundColor: "#DB4444", width: "20px", height: "40px", borderRadius: "4px" }}></div>
                                <p className="m-0" style={{ fontFamily: "Poppins", fontWeight: "600", fontSize: "16px", lineHeight: "20px", color: "#DB4444" }}>This Month</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-6">
                            <h2 style={{ marginTop: "24px", fontSize: "36px", fontWeight: "600", lineHeight: "48px", letterSpacing: "3px" }}>Best Selling Products</h2>
                        </div>
                        <div className="col-6 d-flex gap-3 justify-content-end">
                            <button className='btn' style={{ border: "none", borderRadius: "4px", backgroundColor: "#DB4444", color: "#FAFAFA", fontFamily: "Poppins", lineHeight: "24px" }}>
                                View All
                            </button>
                        </div>
                    </div>

                    <div className="row" style={{ marginTop: "60px" }}>
                        {products
                            .filter((item) => item.category === "women's clothing")
                            .slice(0, 4)
                            .map((item, index) => (
                                <div key={index} className="col-12 col-md-6 col-lg-3 d-flex justify-content-center">
                                    <div className="upcard border-0" style={{ width: "18rem" }}>
                                        <div className="position-relative">
                                            <i class="far fa-heart position-absolute" style={{ top: "10px", right: "10px", cursor: "pointer" }}></i>
                                            <i className="far fa-eye position-absolute" style={{ top: "30px", right: "10px", cursor: "pointer" }}></i>
                                        </div>
                                        <div className="d-flex justify-content-center">
                                            <img src={item.image} className="card-img-top" style={{ width: "190px", height: "180px" }} alt={item.name} />
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title" style={{ fontFamily: "Poppins", fontWeight: "500", fontSize: "16px", lineHeight: "24px" }}>
                                                {item.title.slice(0, 20)}...
                                            </h5>
                                            <p style={{ fontFamily: "Poppins", fontWeight: "500", fontSize: "16px", lineHeight: "24px", color: "#DB4444" }}>
                                                ${item.price}
                                            </p>
                                            <p>
                                                {item.rating.rate}{" "}
                                                <i className="fas fa-star" style={{ color: "#FFD700" }}></i>
                                            </p>
                                            <button
                                                style={{ width: "100%", height: "41px", borderRadius: "4px", backgroundColor: "#000000", color: "#FFFFFF", fontFamily: "Poppins", fontWeight: "500", fontSize: "16px", lineHeight: "24px", border: "none" }}
                                            >
                                                Add To Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                    <div className="row" style={{ marginTop: "140px" }}>
                        <div className="col-12 d-flex flex-wrap justify-content-between p-5 align-items-center" style={{ width: "100%", height: "500px", backgroundColor: "#000000" }}>
                            <div className='upInfo' style={{ width: "443px" }}>
                                <h2 style={{ fontFamily: "Poppins", fontWeight: "600", fontSize: "16px", lineHeight: "20px", color: "#00FF66" }}>Categories</h2>
                                <p className='para2' style={{ fontWeight: "600", color: "#FAFAFA" }}>Enhance Your Music Experience</p>
                                <button className='btn' style={{ borderRadius: "4px", border: "#00FF66", backgroundColor: "#00FF66", color: "#FAFAFA" }}>Buy Now!</button>
                            </div>
                            <div className='upImg'>
                                <img
                                    src="../assets/JBL_BOOMBOX.png" alt="" />
                            </div>
                        </div>
                        {/* ****************************************** End Section Three ********************************************* */}
                    </div>
                </div>
            </section>

            <section style={{ marginTop: "71px" }}>
                <div className="container">
                    <div className="row">
                        {/* ****************************************** Start Section Four ********************************************* */}
                        <div className="col-12">
                            <div className="d-flex align-items-center gap-4">
                                <div style={{ backgroundColor: "#DB4444", width: "20px", height: "40px", borderRadius: "4px" }}></div>
                                <p className="m-0" style={{ fontFamily: "Poppins", fontWeight: "600", fontSize: "16px", lineHeight: "20px", color: "#DB4444" }}>Our Products</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-6">
                            <h2 style={{ marginTop: "24px", fontSize: "36px", fontWeight: "600", lineHeight: "48px", letterSpacing: "3px" }}>Explore Our Products</h2>
                        </div>
                        <div className="col-6 d-flex gap-3 justify-content-end">
                            <button style={ButtonStyle}>
                                <i class="fas fa-arrow-left"></i>
                            </button>
                            <button style={ButtonStyle}>
                                <i class="fas fa-arrow-right"></i>
                            </button>
                        </div>
                    </div>

                    <div className="row" style={{ marginTop: "60px" }}>
                        {products
                            .filter((item) => item.category === "electronics")
                            .slice(0, 6)
                            .map((item, index) => (
                                <div key={index} className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
                                    <div className="upcard border-0" style={{ width: "18rem" }}>
                                        <div className="position-relative">
                                            <i class="far fa-heart position-absolute" style={{ top: "10px", right: "10px", cursor: "pointer" }}></i>
                                            <i className="far fa-eye position-absolute" style={{ top: "30px", right: "10px", cursor: "pointer" }}></i>
                                        </div>
                                        <div className="d-flex justify-content-center">
                                            <img src={item.image} className="card-img-top" style={{ width: "190px", height: "180px" }} alt={item.name} />
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title" style={{ fontFamily: "Poppins", fontWeight: "500", fontSize: "16px", lineHeight: "24px" }}>
                                                {item.title.slice(0, 20)}...
                                            </h5>
                                            <p style={{ fontFamily: "Poppins", fontWeight: "500", fontSize: "16px", lineHeight: "24px", color: "#DB4444" }}>
                                                ${item.price}
                                            </p>
                                            <p>
                                                {item.rating.rate}{" "}
                                                <i className="fas fa-star" style={{ color: "#FFD700" }}></i>
                                            </p>
                                            <button
                                                style={{ width: "100%", height: "41px", borderRadius: "4px", backgroundColor: "#000000", color: "#FFFFFF", fontFamily: "Poppins", fontWeight: "500", fontSize: "16px", lineHeight: "24px", border: "none" }}
                                            >
                                                Add To Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                        {/* ****************************************** End Section Four ********************************************* */}
                    </div>

                    <div className="d-flex justify-content-center" style={{ marginTop: "60px" }}>
                        <button
                            style={{ width: "234px", height: "56px", borderRadius: "4px", padding: "16px 48px", backgroundColor: "#DB4444", color: "#FAFAFA", fontFamily: "Poppins", fontWeight: "500", fontSize: "16px", lineHeight: "24px", border: "none" }}>
                            View All Products
                        </button>
                    </div>
                </div>
            </section>

            <section style={{ marginTop: "140px" }}>
                <div className="container">
                    <div className="row">
                        {/* ****************************************** Start Section Five ********************************************* */}
                        <div className="col-12">
                            <div className="d-flex align-items-center gap-4">
                                <div style={{ backgroundColor: "#DB4444", width: "20px", height: "40px", borderRadius: "4px" }}></div>
                                <p className="m-0" style={{ fontFamily: "Poppins", fontWeight: "600", fontSize: "16px", lineHeight: "20px", color: "#DB4444" }}>Featured</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-6">
                            <h2 style={{ marginTop: "24px", fontSize: "36px", fontWeight: "600", lineHeight: "48px", letterSpacing: "3px" }}>New Arrival</h2>
                        </div>
                    </div>

                    <div className="row d-flex" style={{ marginTop: "60px" }}>
                        <div className="upImgps col-xl-6 col-12" style={{ backgroundColor: "#000000", borderRadius: "4px" }}>
                            <img src="../assets/ps5-slim.png" alt="" />
                        </div>
                        <div className="upThree col-xl-6 col-12 d-flex flex-column" style={{ gap: "35px" }}>
                            <div className="up" style={{ height: "286px", backgroundColor: "#000000", borderRadius: "4px" }}>
                                <img src="../assets/attractive-woman-wearing-hat-posing.png" alt="" style={{ borderRadius: "4px" }} />
                            </div>
                            <div className="down d-flex justify-content-between" style={{ gap: "30px" }}>
                                <div className="photo1 p-5" style={{ height: "284px", backgroundColor: "#000000", borderRadius: "4px" }}>
                                    <img src="../assets/69-694768_amazon-echo-png-clipart-transparent-amazon-echo-png.png" alt="" />
                                </div>
                                <div className="photo2 p-5" style={{ height: "284px", backgroundColor: "#000000", borderRadius: "4px" }}>
                                    <img src="../assets/652e82cd70aa6522dd785109a455904c.png" alt="" />
                                </div>
                            </div>
                        </div>
                        {/* ****************************************** End Section Five ********************************************* */}
                    </div>
                </div>
            </section>

            <section style={{ margin: "140px" }}>
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center bg-drk text-center">

                        {/* القسم الأول */}
                        <div className='col-xl-4 col-md-6 col-12 d-flex flex-column align-items-center'>
                            <div className='d-flex justify-content-center align-items-center' style={style1}>
                                <div className='d-flex justify-content-center align-items-center' style={style2}>
                                    <img src="../assets/icon-delivery.png" alt="" />
                                </div>
                            </div>
                            <div>
                                <p style={{ fontFamily: "Poppins", fontWeight: "600", fontSize: "20px", lineHeight: "28px" }}>FREE AND FAST DELIVERY</p>
                                <p style={{ fontFamily: "Poppins", fontWeight: "400", fontSize: "14px", lineHeight: "21px" }}>Free delivery for all orders over $140</p>
                            </div>
                        </div>

                        {/* القسم الثاني */}
                        <div className='col-xl-4 col-md-6 col-12 d-flex flex-column align-items-center'>
                            <div className='d-flex justify-content-center align-items-center' style={style1}>
                                <div className='d-flex justify-content-center align-items-center' style={style2}>
                                    <img src="../assets/Icon-Customer service.png" alt="" />
                                </div>
                            </div>
                            <div>
                                <p style={{ fontFamily: "Poppins", fontWeight: "600", fontSize: "20px", lineHeight: "28px" }}>24/7 CUSTOMER SERVICE</p>
                                <p style={{ fontFamily: "Poppins", fontWeight: "400", fontSize: "14px", lineHeight: "21px" }}>Friendly 24/7 customer support</p>
                            </div>
                        </div>

                        {/* القسم الثالث */}
                        <div className='col-xl-4 col-md-6 col-12 d-flex flex-column align-items-center'>
                            <div className='d-flex justify-content-center align-items-center' style={style1}>
                                <div className='d-flex justify-content-center align-items-center' style={style2}>
                                    <img src="../assets/Icon-secure.png" alt="" />
                                </div>
                            </div>
                            <div>
                                <p style={{ fontFamily: "Poppins", fontWeight: "600", fontSize: "20px", lineHeight: "28px" }}>Friendly 24/7 customer support</p>
                                <p style={{ fontFamily: "Poppins", fontWeight: "400", fontSize: "14px", lineHeight: "21px" }}>We reurn money within 30 days</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default Home