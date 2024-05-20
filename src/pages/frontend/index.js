import React, { useEffect, useRef } from "react";
import $ from "jquery";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import Header from './component/Header';
import Footer from './component/Footer';
import bannerleftside from '../../assets/images/main/banner-left-side.png';
import RightArrow from '../../assets/images/vector/RightArrow.png';
import bannerright from  '../../assets/images/main/banner-right-car.png';
import bannerright2 from  '../../assets/images/main/banner-right-car2.png';
import recent1 from  '../../assets/images/cars/recent1.png';
import recent2 from  '../../assets/images/cars/recent2.png';
import recent3 from  '../../assets/images/cars/recent3.png';
import trending1 from  '../../assets/images/cars/trending1.png';
import trending2 from  '../../assets/images/cars/trending2.png';
import trending3 from  '../../assets/images/cars/trending2.png';
import maruti from  '../../assets/images/brands/Maruti.png';
import tata from  '../../assets/images/brands/TATA.png';
import kia1 from  '../../assets/images/brands/KIA.png';
import kia2 from  '../../assets/images/brands/KIA2.png';
import("../../assets/css/buyCar.css");
import("../../assets/css/header.css");
import("../../assets/css/calculateFinalValue.css");
import("../../assets/css/sellCarDetails.css");
import("../../assets/css/main.css");

const Home = () => {
   
  return (
    <div>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"></link>
    <link rel="icon" type="image/x-icon" href="images/logo/AutoScanLogo.png"></link>
    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" integrity="sha512-tS3S5qG0BlhnQROyJXvNjeEM4UpMXHrQfTGmbQ1gKmelCxlSEBUaxhRBj/EFTzpbP4RVSrpEikbmdJobCvhE3g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css" integrity="sha512-sMXtMNL1zRzolHYKEujM2AqCLUR9F2C4/05cdbxjjLSRvMQIciEPCQZo++nk7go3BtSuK9kfa/s+a4f4i5pLkw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
      <Header />
      <main>
        <section className="banner-section">
          <div className="container">
            <div className="row">
              <div className="col-md-6 left-bio-side">
                <a href="inspection.php">
                  <div className="card">
                    <figure className="m-0">
                      <img src={bannerleftside} alt="" className="W100" />
                    </figure>
                    <div className="bio-content">
                      <h2 className="l-title">CHECK FAIR MARKET VALUE FOR ANY VEHICLE WITH</h2>
                      <h2 className="l-title theme-color">AUTOSCAN</h2>
                      <div className="button">Schedule a Car Inspection Now!</div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-md-6 RightServicesSide">
                <div className="row RightTop">
                  <a href="sellCar.php">
                    <div className="col-md-12 span-item1">
                      <div className="card">
                        <div className="card-body">
                          <figure><img src={RightArrow} alt="" className="arrow-img arrow-img1" /></figure>
                          <h5 className="card-title">Sell your Used car at best prices!</h5>
                          <p className="card-text badge">Sell car</p>
                          <h6 className="btn">SELL CAR NOW</h6>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href="buyCar.php">
                    <div className="col-md-12 span-item2">
                      <div className="card">
                        <div className="card-body">
                          <figure><img src={RightArrow} alt="" className="arrow-img arrow-img2" /></figure>
                          <h5 className="card-title">Buy your Dream car with us</h5>
                          <p className="card-text badge">Buy</p>
                          <h6 className="btn">EXPLORE CAR</h6>
                        </div>
                      </div>
                    </div>
                  </a>
                  <div className="col-md-12 span-item3">
                    <a href="carValuation.php">
                      <div className="card">
                        <div className="card-body">
                          <h5 className="card-title">Check Approximate Value With our Calculator</h5>
                          <figure><img src={bannerright} alt="" className="" /></figure>
                          <h6 className="btn">CHECK ONLINE VALUE</h6>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="highlightsServes">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <div className="card bg-none text-center white border-none">
                  <div className="card-body">
                    <h5 className="card-title">50000+ Cars Inspected</h5>
                    <p className="card-text">We will conduct a thorough inspection to ensure the genuine value of your car.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card bg-none text-center white border-none">
                  <div className="card-body">
                    <h5 className="card-title">Pan India Sevices</h5>
                    <p className="card-text">We offer nationwide car inspection services across India, ensuring convenience and accessibility for all.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card bg-none text-center white border-none">
                  <div className="card-body">
                    <h5 className="card-title">500+ Inspectors</h5>
                    <p className="card-text">With a team of over 500 inspectors, we provide professional car inspections nationwide, ensuring thorough assessments and peace of mind for every customer.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card bg-none text-center white border-none">
                  <div className="card-body">
                    <h5 className="card-title">500+ Inspectors</h5>
                    <p className="card-text">Rest assured of precise value accuracy withour inspections, delivering confidence and transparency in every assessment.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="recent-searches default-cars-advertise">
          <div className="container">
          <div className="row">
              <div className="head">
                <h2>RECENT SEARCHES</h2>
                <a href="buyCar.php" className="btn p-0 ">VIEW ALL</a>
              </div>
              <div className="col-md-4">
                <a href="sellCarDetails.php" className="link-color">
                  <div className="card">
                    <div className="card-body p-0">
                      <figure className="m-0"><img src={recent1} alt="" className="arrow-img W100" /></figure>
                      <div className="card-content">
                        <h5 className="card-title">Maruti FRONX</h5>
                        <a href="sellCarDetails" className="btn p-0 ">₹6.37 - ₹7.54 Lakh</a>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-md-4">
                <a href="sellCarDetails.php" className="link-color">
                  <div className="card">
                    <div className="card-body p-0">
                      <figure className="m-0"><img src={recent2}  alt="" className="arrow-img W100" /></figure>
                      <div className="card-content">
                        <h5 className="card-title">Mahindra Scorpio</h5>
                        <a href="sellCarDetails" className="btn p-0 ">₹6.37 - ₹7.54 Lakh</a>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-md-4">
                <a href="sellCarDetails.php" className="link-color">
                  <div className="card">
                    <div className="card-body p-0">
                      <figure className="m-0"><img src={recent3} alt="" className="arrow-img W100" /></figure>
                      <div className="card-content">
                        <h5 className="card-title">BYD Seal</h5>
                        <a href="sellCarDetails" className="btn p-0 ">₹6.37 - ₹7.54 Lakh</a>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="trendingSearches default-cars-advertise">
          <div className="container">
            <div className="row">
              <div className="head">
                <h2>TRENDING SEARCHES NEW YOU</h2>
                <a href="buyCar.php" className="btn p-0 ">VIEW ALL</a>
              </div>
              <div className="col-md-4">
                <a href="sellCarDetails.php" className="link-color">
                  <div className="card">
                    <div className="card-body p-0">
                      <figure className="m-0"><img src={trending1} alt="" className="arrow-img W100" /></figure>
                      <div className="card-content">
                        <h5 className="card-title">Hyundai Creta</h5>
                        <a href="sellCarDetails" className="btn p-0 ">₹6.37 - ₹7.54 Lakh</a>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-md-4">
                <a href="sellCarDetails.php" className="link-color">
                  <div className="card">
                    <div className="card-body p-0">
                      <figure className="m-0"><img src={trending2}  alt="" className="arrow-img W100" /></figure>
                      <div className="card-content">
                        <h5 className="card-title">Mahindra Scorpio</h5>
                        <a href="sellCarDetails" className="btn p-0 ">₹6.37 - ₹7.54 Lakh</a>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-md-4">
                <a href="sellCarDetails.php" className="link-color">
                  <div className="card">
                    <div className="card-body p-0">
                      <figure className="m-0"><img src={recent3}  alt="" className="arrow-img W100" /></figure>
                      <div className="card-content">
                        <h5 className="card-title">BYD Seal</h5>
                        <a href="sellCarDetails" className="btn p-0 ">₹6.37 - ₹7.54 Lakh</a>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="popular-brands">
          <div className="container">
            <div className="row">
              <div className="head">
                <h2>Popular Brands</h2>
                <a href="#" className="btn p-0 ">VIEW ALL BRANDS</a>
              </div>
              <div className="popular-brands-slider owl-carousel owl-theme owl-loaded owl-drag">
                <div className="item text-center">
                  <figure><img src={maruti}  alt="" /></figure>
                  <h4>Maruti</h4>
                </div>
                <div className="item text-center">
                  <figure><img src={tata}  alt="" /></figure>
                  <h4>TATA</h4>
                </div>
                <div className="item text-center">
                  <figure><img src={kia1}  alt="" /></figure>
                  <h4>KIA</h4>
                </div>
                <div className="item text-center">
                  <figure><img src={kia2}  alt="" /></figure>
                  <h4>KIA2</h4>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="testimoial-sect">
          Aires of Life: The story of how humans used gold in decorative arts in ancient times
            <div className="container">
              <div className="row">
                <div className="testimonial-slider owl-carousel owl-theme owl-loaded owl-drag">
                  <div className="item">
                    <figure className="m-0"><img src="images/testimonial/testimonial1.jpg" alt="" /></figure>
                    <div className="reviews">
                      <p className="clientReviews">
                      Delighted with AS! The finance and sales teams provided fantastic support. I received the car within a day, and I'm extremely happy.
                      </p>
                      <h4 className="clientName">Himanshu Pagare</h4>
                    </div>
                  </div>
                  <div className="item">
                    <figure className="m-0"><img src="images/testimonial/testimonial2.png" alt="" /></figure>
                    <div className="reviews">
                      <p className="clientReviews">“
                        Delighted with AS! The finance and sales teams provided fantastic support. I received the car within a day, and I'm extremely happy.
                      </p>
                      <h4 className="clientName">Rachana Singh</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Footer />
          
    </main>


    </div>
  );
};

export default Home;