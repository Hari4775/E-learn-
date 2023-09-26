import React from "react";
import "./banner.scss";

// logo
import assuranceLogo from "../../assets/logos/assurance-logo-navbar.svg";

// images
import bannerIllustration from "../../assets/images/banner-illustration.svg";

// icons
import { ReactComponent as BellIcon } from "../../assets/icons/icon-bell.svg";

const Banner = () => {
  return (
    <section className="banner">
      <div className="container-lg">
        <div className="row">
          <div className="col-xl-5 col-sm-8 col-10">
            <div className="banner-card">
              <h3 className="banner-title">Welcome John Doe</h3>
              <p className="banner-description">
                All the courses are specially curated by our experts.Lets start
                learning
              </p>
            </div>
          </div>
        </div>
        <div className="banner-illustration-wrap">
          <img src={bannerIllustration} alt="banner illustration" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
