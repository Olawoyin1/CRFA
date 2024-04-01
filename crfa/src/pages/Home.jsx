import { Link } from "react-router-dom";




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
    </>
  );
};

export default Home;
