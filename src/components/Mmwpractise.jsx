import React from "react";
import image1 from "../images/image1.png";
import image2 from "../images/image2.png";
import image3 from "../images/image3.png";
import image4 from "../images/image4.png";
import image5 from "../images/image5.png";
import image6 from "../images/image6.png";
import image7 from "../images/image7.png";
import image8 from "../images/image8.png";
import image9 from "../images/image9.png";
import image10 from "../images/image10.png";
import image17 from "../images/image17.png";
import image18 from "../images/image18.png";
import image19 from "../images/image19.png";
import image20 from "../images/image20.png";

import AOS from "aos";

AOS.init({
  offset: 120,
  duration: 400,
});

const Mmwpractise = () => {
  return (
    <>
      <div className="container-fluid pl-5" id="mmw-main-container">
        <div className="row">
          <div className="col-md-6 py-4 pl-5" data-aos="fade-up">
            <img src={image1} alt="my-pic" id="mmw-logo" />
            <h2 id="mmw-div-h2">
              Complete Web Solution<br></br> Services Australia
            </h2>
            <p id="mmw-div-h2-p1">
              High-end solutions for small & large business
            </p>
            <p id="mmw-div-h2-p2">Helping local businesses go online</p>
            <p id="mmw-div-h2-p">
              We’ve put on our creative hats to level up web design,
              Australia-wide. It’s about time to put forth your business on the
              world wide web and be second to none. Innovation is the key to
              creating designs that don’t let users hit the “back” button, and
              that is what we strive for at Make My Website.
            </p>
            <button type="button" id="mmw-div-h2-btn">
              <i className="fa fa-phone"></i>
              1300 769 302
            </button>
          </div>
          <div className="col-md-5 py-5" id="input-div" data-aos="fade-up">
            <h4>Talk to Our Experts</h4>
            <h6>take your first step towards going online</h6>
            <div id="login-img-1">
              <img src={image2} alt="my-pic" id="input-logo1" />
              <input type="text" placeholder="Email Address" id="input" />
            </div>
            <div id="login-img-2">
              <img src={image3} alt="my-pic" id="input-logo2" />
              <input type="text" placeholder="First Name" id="input1"></input>
            </div>
            <div id="login-img-3">
              <img src={image3} alt="my-pic" id="input-logo3" />
              <input type="text" placeholder="Last Name" id="input1" />
            </div>
            <div id="login-img-4">
              <img src={image4} alt="my-pic" id="input-logo4" />
              <input type="number" placeholder="Phone Number" id="input1" />
            </div>
            <div id="login-img-5">
              <img src={image5} alt="my-pic" id="input-logo5" />
              <input
                type="text"
                placeholder="describe your project or ask us a question"
                id="input2"
              />
            </div>
            <br></br>
            <button type="button" id="input-btn">
              Submit
            </button>
          </div>
        </div>
      </div>

      <div className="container-fluid pl-5" id="mmw-owned-div">
        <div className="row pl-5">
          <div className="col-md-3" id="mmw-owned1" data-aos="fade-up">
            <h6>10+</h6>
            <h5>Years Of Expertise</h5>
          </div>
          <div className="col-md-3" id="mmw-owned2" data-aos="fade-up">
            <h6>100%</h6>
            <h5>Australian Owned</h5>
          </div>
          <div className="col-md-3" id="mmw-owned3" data-aos="fade-up">
            <h6>5-Star rated</h6>
            <h5>Web Design Agency</h5>
          </div>
          <div className="col-md-3" id="mmw-owned4" data-aos="fade-up">
            <h6>800+</h6>
            <h5>Satisfied Clients</h5>
          </div>
        </div>
      </div>

      <div
        id="demo"
        className="carousel slide"
        data-ride="carousel"
        data-aos="fade-up"
      >
        <div id="carausol-story">
          <h4>Our Services</h4>
          <p>
            Our focus is on designing stunning, professional, and optimised
            websites<br></br> to help you meet your business goals and succeed
            online.
          </p>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" id="carausol-main-para">
            <img src={image6} alt="New York" id="about-slider-img" />

            <div className="carousel-caption">
              <div id="carausel-para1">
                <h3>Web Design & Development</h3>
                <p>
                  Web design is a medium that reflects the value you are adding
                  as a business. It should be engaging, innovative, humanistic,
                  and have a story to tell.
                </p>
                <p>
                  Make My Website embraces technological advancement and puts
                  forth what’s the best for your brand. Your online presence is
                  important to your business, and we exhibit our passion and
                  creativity.
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item" id="carausol-main-para">
            <img src={image6} alt="New York" id="about-slider-img" />
            <div className="carousel-caption">
              <div id="carausel-para1">
                <h3>Digital Marketing</h3>
                <p>
                  Even the best of websites without a good reach, drop bland
                  into the market since it gets no audience to avail the
                  purposes it is built for. By marketing digitally, as a
                  business owner, you reach out to the right demographic thus
                  making conversion a much faster and simpler process than
                  normal.
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item" id="carausol-main-para">
            <img src={image6} alt="New York" id="about-slider-img" />
            <div className="carousel-caption">
              <div id="carausel-para1">
                <h3>Branding</h3>
                <p>
                  Branding in itself takes a lot of understanding of brand
                  values and the identity you want the world to remember you
                  with as a brand. Branding has various realms including
                  designing logos, business cards, letterheads, brochures that
                  stretches onto creating business taglines, prints, and
                  finalizing on fonts and the overall connecting quotient of the
                  brand in the market. How the audience resonates with your
                  brand largely depends on what are the projections from the
                  tiniest of elements that represent it.
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item" id="carausol-main-para">
            <img src={image6} alt="New York" id="about-slider-img" />
            <div className="carousel-caption">
              <div id="carausel-para1">
                <h3>Web And Email Hosting</h3>
                <p>
                  Your business’s online address is what is your base for
                  starting everything. This address is nothing but your web
                  hosting i.e. the space you have rented on the internet to
                  store and showcase your business’s projects, deliverables and
                  content. While it may seem like simply registering your domain
                  name once your task is done, it’s the hosting bit that defines
                  your business’ success as a website in the pool of many.
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item" id="carausol-main-para">
            <img src={image6} alt="New York" id="about-slider-img" />
            <div className="carousel-caption">
              <div id="carausel-para1">
                <h3>Photography And Videography</h3>
                <p>
                  Photography & Videography is a medium to visually represent
                  your business. Make My Website and Make My Memories work
                  collaboratively with a visionary approach to enhance your
                  brand presence.
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item" id="carausol-main-para">
            <img src={image6} alt="New York" id="about-slider-img" />
            <div className="carousel-caption">
              <div id="carausel-para1">
                <h3>Customer Care</h3>
                <p>
                  Support is highly crucial when running a website for your
                  business and it is not feasible to handle all of it by
                  yourself. Offering support for a domain and running its
                  various functionalities optimally requires skill, expertise
                  and experience. Holistic support for your website involves
                  monthly management involving resolution of security issues,
                  updating the plugins, changes in website as per demand,
                  dynamic platform establishment, and making new updates as per
                  search engine’s upgraded algorithms.
                </p>
              </div>
            </div>
          </div>
        </div>
        <a className="carousel-control-next" href="#demo" data-slide="next">
          <span className="carousel-control-next-icon"></span>
        </a>
        <a className="carousel-control-prev" href="#demo" data-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </a>
      </div>

      <div className="container py-5" id="project" data-aos="fade-up">
        <div className="row">
          <div className="col-md-12" id="project-div">
            <h2 id="project-h2">Have A Project In Mind?</h2>
            <p id="project-p">
              Want to collaborate and give wings to your dream project?
            </p>
            <p>Let’s talk!</p>
            <button type="button" id="project-btn">
              Get a Quote
            </button>
          </div>
        </div>
      </div>

      <div className="container py-5" id="team-project" data-aos="fade-up">
        <h2>
          We team up with the leading names of the<br></br> industry
        </h2>
        <p>
          We have established a close channel with major technology brands
          across <br></br>the world and it enables us to bring the best to every
          business, every time.
        </p>
        <div className="row">
          <div className="col-md-3">
            <img src={image7} alt="New York" id="team-project-img" />
          </div>
          <div className="col-md-3">
            <img src={image8} alt="New York" id="team-project-img" />
          </div>
          <div className="col-md-3">
            <img src={image9} alt="New York" id="team-project-img" />
          </div>
          <div className="col-md-3">
            <img src={image10} alt="New York" id="team-project-img" />
          </div>
        </div>
      </div>
      <div className="container py-5" id="latest-container" data-aos="fade-up">
        <div className="row py-4">
          <div className="col-md-12" data-aos="fade-up">
            <h3 id="latest-h3">Latest Work</h3>
            <button type="button" id="latest-btn">
              View All Projects
            </button>
          </div>
        </div>
      </div>

      <div
        className="container-fluid py-5 pl-5"
        data-aos="fade-up"
        id="service-delivery-container"
      >
        <div className="row">
          <div className="col-md-6" id="service-delivery-div">
            <div>
              <h2 id="service-h2" data-aos="fade-up">
                Service Delivery With A Sense Of<br></br> Pride
              </h2>

              <p id="service-p" data-aos="fade-up">
                We’re trusted by these industry experts Australia-wide!
              </p>
              <div id="service-delivery-div">
                <div>
                  <div id="service-img-div" data-aos="fade-up">
                    <img src={image17} alt="New York" id="service-img" />
                  </div>
                  <div id="service-img-div" data-aos="fade-up">
                    <img src={image18} alt="New York" id="service-img" />
                  </div>
                </div>
                <div>
                  <div id="service-img-div" data-aos="fade-up">
                    <img src={image19} alt="New York" id="service-img" />
                  </div>
                  <div id="service-img-div" data-aos="fade-up">
                    <img src={image20} alt="New York" id="service-img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-md-5 py-5"
            id="service-input-div"
            data-aos="fade-up"
          >
            <h4 id="service-input-h4">Contact Us</h4>
            <p id="service-input-p">
              Help us with your details. Our experts will reach out <br></br>in
              no time.
            </p>
            <div id="login-img-1">
              <img src={image2} alt="my-pic" id="service-input-logo1" />
              <input
                type="text"
                placeholder="Email Address"
                id="sevice-input1"
              />
            </div>
            <div id="login-img-2">
              <img src={image3} alt="my-pic" id="service-input-logo2" />
              <input
                type="text"
                placeholder="First Name"
                id="sevice-input2"
              ></input>
            </div>
            <div id="login-img-3">
              <img src={image3} alt="my-pic" id="service-input-logo3" />
              <input type="text" placeholder="Last Name" id="sevice-input3" />
            </div>
            <div id="login-img-4">
              <img src={image4} alt="my-pic" id="service-input-logo4" />
              <input
                type="number"
                placeholder="Phone Number"
                id="sevice-input4"
              />
            </div>
            <div id="login-img-5">
              <img src={image5} alt="my-pic" id="service-input-logo5" />
              <input
                type="text"
                placeholder="describe your project or ask us a question"
                id="service-input5"
              />
            </div>
            <br></br>
            <div id="service-btn-div">
              <button type="button" id="service-input-btn">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid " id="footer-main-container">
        <div className="row ">
          <div className="col-md-7">
            <div className="row">
              <div className="col-md-8">
                <div className="row">
                  <div className="col-md-6">
                    <h4 id="first-h4">Victoria</h4>
                    <p id="first-p1">
                      <i className="fa-solid fa-map-location-dot"></i>3/17
                      Perpetual St,
                    </p>
                    <h6 id="first-h6">
                      TRUGANINA VIC<br></br> 3029
                    </h6>
                  </div>
                  <div className="col-md-6">
                    <h4 id="first-h4">New South Wales</h4>
                    <p id="first-p1">
                      <i className="fa-solid fa-map-location-dot"></i>3/17
                      Perpetual St,
                    </p>
                    <h6 id="first-h6">
                      TRUGANINA VIC<br></br> 3029
                    </h6>
                  </div>
                </div>
                <div className="row" id="dot-row">
                  <div className="col-md-6">
                    <p id="circle-dot">
                      <i className="fa-solid fa-circle-check"></i>
                      Web Design Sydney
                    </p>
                    <p id="circle-dot">
                      <i className="fa-solid fa-circle-check"></i>Web Design
                      Perth
                    </p>
                    <p id="circle-dot">
                      <i className="fa-solid fa-circle-check"></i> Web Design
                      Geelong
                    </p>
                    <p id="circle-dot">
                      <i className="fa-solid fa-circle-check"></i> Web Design
                      Newcastle
                    </p>
                  </div>
                  <div className="col-md-6">
                    <p id="circle-dot">
                      <i className="fa-solid fa-circle-check"></i>Web Design
                      Sydney
                    </p>
                    <p id="circle-dot">
                      <i className="fa-solid fa-circle-check"></i> Web Design
                      Perth
                    </p>
                    <p id="circle-dot">
                      <i className="fa-solid fa-circle-check"></i>Web Design
                      Geelong
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <h4 id="quick-h4">Quick Links</h4>
                <p id="quick-p">
                  <i className="fa-solid fa-circle-check"></i> About Us
                </p>
                <p id="quick-p">
                  <i className="fa-solid fa-circle-check"></i> FAQs
                </p>
                <p id="quick-p">
                  <i className="fa-solid fa-circle-check"></i>Our Portfolio
                </p>
                <p id="quick-p">
                  <i className="fa-solid fa-circle-check"></i>Services
                </p>
                <p id="quick-p">
                  <i className="fa fa-circle-check"></i>Blog
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <p id="third-p">
              Creating future-proof digital experiences is what we do. Tell us
              about your needs, we’d love to collaborate with you.
            </p>
            <h6 id="third-h6">info@makemywebsite.com.au</h6>
            <div id="footer-social-icons">
              <p>
                <i className="fa-brands fa-facebook-square"></i>
              </p>
              <p>
                <i className="fa-brands fa-instagram-square"></i>
              </p>
              <p>
                <i className="fa-brands fa-linkedin"></i>
              </p>
              <p>
                <i className="fa-brands fa-twitter"></i>
              </p>
              <p>
                <i className="fa-brands fa-youtube"></i>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="footer-last">
        <p>©2022Make My Website. All rights reserved</p>
        <p>Terms & Condition | Privacy Policy</p>
      </div>
    </>
  );
};
export default Mmwpractise;
