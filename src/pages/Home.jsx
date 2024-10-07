import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import { IoShareSocial } from "react-icons/io5";

import { Swiper, SwiperSlide } from "swiper/react";
// import './styles.css';

// import required modules
import { EffectCards } from "swiper/modules";

import Gallery from "../Data/Gallery";
import { useEffect, useState } from "react";


const bgImages = [
  'url("/Images/heroo.jpg")',
  'url("/Images/Gallery/cr1.jpeg")',
  'url("/Images/Gallery/cr20.jpg")',
  'url("/Images/Gallery/cr19.jpeg")',
  'url("/Images/Gallery/cr15.jpeg")',
  'url("/Images/Gallery/cr6.jpeg")',
  'url("/Images/Gallery/cr17.jpeg")',
  'url("/Images/Gallery/cr31.jpeg")',
  'url("/Images/Gallery/cr14.jpeg")',
  'url("/Images/Gallery/cr24.jpeg")',
];

const Home = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Set up an interval to change the background image every 5 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
    }, 5000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);


  return (
    <>
      <div 
        className="hero"
        style={{
          // height: '400px',
          // width: '800px',
          backgroundImage: bgImages[currentIndex],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '24px',
          transition: 'background-image 1s ease-in-out',
        }}
      
      >
        <div className="container">
          <div className="d-flex">
            <div className="hero-content">
              <h1 className="fw-bold text-white">CLASSIC ROYALS FA</h1>
              <p className="text-white">Win the GAME, Win the DAY</p>
            </div>
            <div className="hero-img">
              {/* <img
                src="../../Images/hero.png"
                className="img-fluid "
                alt="lll"
              /> */}
            </div>
          </div>
        </div>
      </div>

      <div className="news py-5">
        <div className="container">
          <h5 className="fw-bold text-center">NEWS</h5>
        <div class="main-news py-1">
                <div class="container">
                    <div className="news-header mb-4 d-flex align-items-center justify-content-end">
                        <Link to="/news" className="nav-link fw-bold">ALL NEWS</Link>
                        <IoIosArrowForward />
                    </div>

                    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    <div class="col overflow-hidden">
                            <div class="news-card bg-white">
                                <div className="card-image">
                                    <img src="../Images/matchday-1.jpg" alt="" />
                                </div>

                                <div class="card-body ">
                                    <p className="text-muted time mt-3">30 DAYS AGO</p>
                                    <p className="topic fw-bold my-2">ISL MATCHWEEK ONE</p>
                                    <p class="card-text">The Isco Sport League (ISL) kicked off its much-anticipated season with Matchweek One, showcasing exhilarating performances... </p>
                                    <div class="d-flex share justify-content-between align-items-center">
                                        <p className="badge bg-primary">ISL</p>
                                        <small class="text-muted"><IoShareSocial size={20} /></small>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col overflow-hidden">
                            <div class="news-card bg-white">
                                <div className="card-image">
                                    <img src="../Images/squad-list.jpeg" alt="" />
                                </div>

                                <div class="card-body ">
                                    <p className="text-muted time mt-3">30 DAYS AGO</p>
                                    <p className="topic fw-bold my-2">ISCO SPORT LEAGUE SQUAD LIST</p>
                                    <p class="card-text">Classic Royals FA players representing the team in the ISL LEAGUE... </p>
                                    <div class="d-flex share justify-content-between align-items-center">
                                        <p className="badge bg-primary">ISL</p>
                                        <small class="text-muted"><IoShareSocial size={20} /></small>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col overflow-hidden">
                            <div class="news-card bg-white">
                                <div className="card-image">
                                    <img src="../Images/trial.jpg" alt="" />
                                </div>

                                <div class="card-body ">
                                    <p className="text-muted time mt-3">30 DAYS AGO</p>
                                    <p className="topic fw-bold my-2">CLASSIC ROYALS TRIAL</p>
                                    <p class="card-text">Your Chance to Shine: Classic Royals Invite Talented Players for Open Trials... </p>
                                    <div class="d-flex share justify-content-between align-items-center">
                                        <p className="badge bg-primary">CRFA</p>
                                        <small class="text-muted"><IoShareSocial size={20} /></small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
      </div>

      <div className="about_us py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-5">
              <div className="about_image">
                <img src="../../Images/about.jpg" alt="about us Img" />
              </div>
            </div>
            <div className="col-lg-6 col-md-7  mt-3 mt-md-0">
              <h2 className="fw-bold mb-3 dash">About CRFA</h2>
              <div className="about_text">
                <p>
                welcome to Classic Royals Football Academy – where every kick counts and every dream matters. We're not just a team; we're a family, bound by our love for the game and our desire to see each other succeed.<br />
                  <br />
                  At Classic Royals, our coaches aren't just here to teach you skills; they're here to cheer you on, pick you up when you're down, and celebrate your victories like they're their own. We believe in the power of teamwork, dedication, and a good old-fashioned love for football.
                  <br />
                  <br />
                  Whether you're just starting out or you've been playing since you could walk, there's a place for you here at Classic Royals. So, come join us on the field, where we'll work hard, play hard, and have a whole lot of fun along the way. Because at Classic Royals Football Academy, we're not just building players – we're building champions, both on and off the pitch.
                </p>
                <Link className="mt-3" to="about">
                  <button className="button-37 mt-3">More About Us</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="training">
        <div className="container">
          <h3 className="fw-bold py-3 text-center">Training Schedule</h3>

          <div className="row row-cols-1 row-cols-md-2 g-3 row-cols-lg-3">
            <div className="col">
              <div>
                <div className="card-2 card-3 d-flex align-items-center justify-content-center flex-column p-3">
                  <h6 className="fw-bold">Mondays</h6>
                  {/* <TbPlayFootball size={25} className="mb-2 icon" /> */}
                  <p>Fitness & Conditioning exercises</p>
                  <div className="m-0 mt-2 p-0 d-flex w-100 align-items-center justify-content-between">
                    <div className="d-flex align-items-center gap-1">
                      <CiLocationOn />
                      <p className="m-0 p-0">OAU staff school pitch</p>
                    </div>
                    <p className="m-0 p-0">4:00pm</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div>
                <div className="card-2 card-3 d-flex align-items-center justify-content-center flex-column p-3">
                  <h6 className="fw-bold">Wednessdays</h6>
                  {/* <TbPlayFootball className="mb-2 icon" /> */}
                  <p>Technical Drills</p>
                  <div className="m-0 mt-2 p-0 d-flex w-100 align-items-center justify-content-between">
                    <div className="d-flex align-items-center gap-1">
                      <CiLocationOn />
                      <p className="m-0 p-0">OAU staff school pitch</p>
                    </div>
                    <p className="m-0 p-0">4:00pm</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div>
                <div className="card-2 card-3 d-flex align-items-center justify-content-center flex-column p-3">
                  <h6 className="fw-bold">Fridays</h6>
                  {/* <TbPlayFootball className="mb-2 icon" /> */}
                  <p>Full sided games</p>
                  <div className="m-0 mt-2 p-0 d-flex w-100 align-items-center justify-content-between">
                    <div className="d-flex align-items-center gap-1">
                      <CiLocationOn />
                      <p className="m-0 p-0">OAU staff school pitch</p>
                    </div>
                    <p className="m-0 p-0">4:00pm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="gallery py-5">
        <div className="container">
          <h3 className="fw-bold text-center mb-4">Team Gallery</h3>
          <p className="lead text-muted mb-5 text-center">
            Welcome to our football team gallery! Here, we train hard and play
            even harder. Together, we're a formidable force on the pitch, driven
            by passion and teamwork. Join us as we strive for success and create
            unforgettable moments both on and off the field.
          </p>
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            {Gallery.map((item) => {
              return (
                <SwiperSlide>
                  <img className="slider-img" loading="lazy" src={`../${item}`} alt="" />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>


      <div className="staff py-5">
        <div className="container">
          <h3 className="fw-bold text-center">Staff and Coach</h3>
          <p className="lead text-muted text-center">
            Classic Royals Football Academy consists of a professional, unique,
            and diverse team of coaches and club staff. All our coaches have
            different origins, each with their own individual understanding of
            the game.
          </p>
          <div className="container2 mx-auto  row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3  g-2 my-3">
            <div className="col">
              <div>
                <div className="card card-2 shadow">
                  <div className="player_image">
                    <img src="../Images/crfa_logo.png" className="no-img" alt="" />
                  </div>
                  <div className="player_name p-sm-3 p-2 mb-0">
                    <h6 className="fw-bold player_number">Coach</h6>
                    <h6 className="fw-bold m-0 text-uppercase">Yengibiri Henry</h6>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div>
                <div className="card card-2 shadow">
                  <div className="player_image">
                    <img src="../Images/crfa_logo.png" className="no-img" alt="" />
                  </div>
                  <div className="player_name p-sm-3 p-2 mb-0">
                    <h6 className="fw-bold player_number">Manager</h6>
                    <h6 className="fw-bold m-0 text-uppercase">Adeniji Temitope</h6>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div>
                <div className="card card-2 shadow">
                  <div className="player_image">
                    <img src="../Images/crfa_logo.png" className="no-img" alt="" />
                  </div>
                  <div className="player_name p-sm-3 p-2 mb-0">
                    <h6 className="fw-bold player_number">Asst. Coach</h6>
                    <h6 className="fw-bold m-0 text-uppercase">Daniel A.D</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
