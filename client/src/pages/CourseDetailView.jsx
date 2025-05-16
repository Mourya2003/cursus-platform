import React, { useState } from "react";
import { Link } from "react-router-dom";

const CourseDetailView = () => {
  // For modal video preview (add real logic as needed)
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div>
      {/* Video Modal */}
      {showVideo && (
        <div className="modal vd_mdl fade show" style={{ display: "block" }}>
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <button type="button" className="close" onClick={() => setShowVideo(false)}>
                <span aria-hidden="true">&times;</span>
              </button>
              <div className="modal-body">
                <iframe
                  src="https://www.youtube.com/embed/Ohe_JzKksvA"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Course Preview"
                  style={{ width: "100%", height: "400px" }}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="header clearfix">
        <button type="button" id="toggleMenu" className="toggle_menu">
          <i className="uil uil-bars"></i>
        </button>
        <button id="collapse_menu" className="collapse_menu">
          <i className="uil uil-bars collapse_menu--icon"></i>
          <span className="collapse_menu--label"></span>
        </button>
        <div className="main_logo" id="logo">
          <Link to="/"><img src="/images/logo.svg" alt="" /></Link>
          <Link to="/"><img className="logo-inverse" src="/images/ct_logo.svg" alt="" /></Link>
        </div>
        {/* ...other header elements (categories, search, notifications, etc.) */}
      </header>

      {/* Sidebar Navigation */}
      <nav className="vertical_nav">
        <div className="left_section menu_left" id="js-menu">
          <div className="left_section">
            <ul>
              <li className="menu--item">
                <Link to="/" className="menu--link active" title="Home">
                  <i className="uil uil-home-alt menu--icon"></i>
                  <span className="menu--label">Home</span>
                </Link>
              </li>
              <li className="menu--item">
                <Link to="/live_streams" className="menu--link" title="Live Streams">
                  <i className="uil uil-kayak menu--icon"></i>
                  <span className="menu--label">Live Streams</span>
                </Link>
              </li>
              <li className="menu--item">
                <Link to="/explore" className="menu--link" title="Explore">
                  <i className="uil uil-search menu--icon"></i>
                  <span className="menu--label">Explore</span>
                </Link>
              </li>
              {/* ...add more menu items as needed */}
            </ul>
          </div>
          {/* ...other sidebar sections */}
        </div>
      </nav>

      {/* Main Content */}
      <div className="wrapper _bg4586">
        <div className="_215b01">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="section3125">
                  <div className="row justify-content-center">
                    <div className="col-xl-4 col-lg-5 col-md-6">
                      <div className="preview_video">
                        <a
                          href="#"
                          className="fcrse_img"
                          onClick={e => { e.preventDefault(); setShowVideo(true); }}
                        >
                          <img src="/images/courses/img-2.jpg" alt="" />
                          <div className="course-overlay">
                            <div className="badge_seller">Bestseller</div>
                            <span className="play_btn1"><i className="uil uil-play"></i></span>
                            <span className="_215b02">Preview this course</span>
                          </div>
                        </a>
                      </div>
                      <div className="_215b10">
                        <a href="#" className="_215b11">
                          <span><i className="uil uil-heart"></i></span>Save
                        </a>
                        <a href="#" className="_215b12">
                          <span><i className="uil uil-windsock"></i></span>Report abuse
                        </a>
                      </div>
                    </div>
                    <div className="col-xl-8 col-lg-7 col-md-6">
                      <div className="_215b03">
                        <h2>The Web Developer Bootcamp</h2>
                        <span className="_215b04">
                          The only course you need to learn web development - HTML, CSS, JS, Node, and More!
                        </span>
                      </div>
                      <div className="_215b05">
                        <div className="crse_reviews mr-2">
                          <i className="uil uil-star"></i>4.5
                        </div>
                        {/* Add more details as needed */}
                      </div>
                      {/* ...add more course details, instructor info, etc. */}
                    </div>
                  </div>
                </div>
                {/* ...rest of the page */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Add footer if needed */}
    </div>
  );
};

export default CourseDetailView;

