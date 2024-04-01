import React from "react";

const About = () => {
  return <div className="my-4">
    <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="about_image">
              <img src="../../Images/about.jpg" alt="about Img" />
            </div>
          </div>
          <div className="col-md-6 mt-3 mt-md-0">
            <h2 className="fw-bold mb-3 dash">About Us</h2>
            <div className="about_text">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                aperiam id labore fugiat. Id dolor ea odit odio, vero quo sed
                hic nesciunt corporis autem ipsam eligendi ratione commodi
                fugiat. <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                quos nulla placeat, nobis nesciunt alias optio illum, tempore
                maxime officiis excepturi, non exercitationem facere officia
                sunt earum rerum. At, sequi!
                <br />
                <br />
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est,
                ipsum quaerat officia atque consequuntur consequatur dicta sint
                itaque rem eveniet, excepturi blanditiis beatae, dolores labore
                modi vero delectus? Vel, ut!
              </p>
            </div>
          </div>
        </div>
      </div>
  </div>;
};

export default About;
