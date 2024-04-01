import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import { Swiper, SwiperSlide } from "swiper/react";
// import './styles.css';

// import required modules
import { EffectCards } from "swiper/modules";

import Gallery from "../Data/Gallery";

const Home = () => {
  return (
    <>
      <div className="hero">
        <div className="container">
          <div className="d-flex">
            <div className="hero-content">
              <h1 className="fw-bold text-white">CLASSIC ROYALS FA</h1>
              <p className="text-white">Win the DAY, Win the GAME</p>
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

      <div className="about_us py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="about_image">
                <img src="../../Images/about.jpg" alt="about us Img" />
              </div>
            </div>
            <div className="col-md-6 mt-3 mt-md-0">
              <h2 className="fw-bold mb-3 dash">About CRFA</h2>
              <div className="about_text">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                  aperiam id labore fugiat. Id dolor ea odit odio, vero quo sed
                  hic nesciunt corporis autem ipsam eligendi ratione commodi
                  fugiat. <br />
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis quos nulla placeat, nobis nesciunt alias optio illum,
                  tempore maxime officiis excepturi, non exercitationem facere
                  officia sunt earum rerum. At, sequi!
                  <br />
                  <br />
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est,
                  ipsum quaerat officia atque consequuntur consequatur dicta
                  sint itaque rem eveniet, excepturi blanditiis beatae, dolores
                  labore modi vero delectus? Vel, ut!
                </p>
                <Link className="button" to="about">
                  More about us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="training">
        <div className="container">
          <h3 className="fw-bold py-3 text-center">Training Schedule</h3>

          <div className="row row-cols-1 row-cols-sm-2 g-3 row-cols-md-3">
            <div className="col">
              <div>
                <div className="card-2 card-3 d-flex align-items-center justify-content-center flex-column p-3">
                  <h6 className="fw-bold">Mondays</h6>
                  {/* <TbPlayFootball size={25} className="mb-2 icon" /> */}
                  <p>Fitness & Conditioning exercises</p>
                  <div className="m-0 p-0 d-flex w-100 align-items-center justify-content-between">
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
                  <div className="m-0 p-0 d-flex w-100 align-items-center justify-content-between">
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
                  <div className="m-0 p-0 d-flex w-100 align-items-center justify-content-between">
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
                  <img className="slider-img" src={`../${item}`} alt="" />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Home;
