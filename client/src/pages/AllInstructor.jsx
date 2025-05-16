import React from "react";

const instructors = [
  {
    name: "John Doe",
    img: "/images/left-imgs/img-1.jpg",
    profile: "/instructor_profile_view",
    category: "Wordpress & Plugin Tutor",
    students: "100K Students",
    courses: "15 Courses",
    socials: ["facebook-f", "twitter", "linkedin-in", "youtube"],
  },
  {
    name: "Kerstin Cable",
    img: "/images/left-imgs/img-2.jpg",
    profile: "/instructor_profile_view",
    category: "Language Learning Coach, Writer, Online Tutor",
    students: "14K Students",
    courses: "11 Courses",
    socials: ["facebook-f", "twitter", "linkedin-in", "youtube"],
  },
  {
    name: "Jose Portilla",
    img: "/images/left-imgs/img-3.jpg",
    profile: "/instructor_profile_view",
    category: "Head of Data Science, Pierian Data Inc.",
    students: "1M Students",
    courses: "25 Courses",
    socials: ["facebook-f", "twitter", "linkedin-in", "youtube"],
  },
  {
    name: "Kyle Pew",
    img: "/images/left-imgs/img-5.jpg",
    profile: "/instructor_profile_view",
    category: "Microsoft Certified Trainer - 380,000+ Udemy Students",
    students: "300K Students",
    courses: "18 Courses",
    socials: ["facebook-f", "twitter", "linkedin-in", "youtube"],
  },
  {
    name: "Jaysen Batchelor",
    img: "/images/left-imgs/img-7.jpg",
    profile: "/instructor_profile_view",
    category: "Illustrator & Designer",
    students: "491K Students",
    courses: "13 Courses",
    socials: ["facebook-f", "twitter", "linkedin-in", "youtube"],
  },
  {
    name: "Quinton Batchelor",
    img: "/images/left-imgs/img-8.jpg",
    profile: "/instructor_profile_view",
    category: "Photographer & Instructor",
    students: "364K Students",
    courses: "6 Courses",
    socials: ["facebook-f", "twitter", "linkedin-in", "youtube"],
  },
  {
    name: "Eli Natoli",
    img: "/images/left-imgs/img-10.jpg",
    profile: "/instructor_profile_view",
    category: "Entrepreneur - Passionate Teacher",
    students: "115K Students",
    courses: "8 Courses",
    socials: ["facebook-f", "twitter", "linkedin-in", "youtube"],
  },
  {
    name: "Sunny William",
    img: "/images/left-imgs/img-11.jpg",
    profile: "/instructor_profile_view",
    category: "Entrepreneur - Passionate Teacher",
    students: "615K Students",
    courses: "12 Courses",
    socials: ["facebook-f", "twitter", "linkedin-in", "youtube"],
  },
  {
    name: "Neha Smith",
    img: "/images/left-imgs/img-12.jpg",
    profile: "/instructor_profile_view",
    category: "English Teacher",
    students: "15K Students",
    courses: "5 Courses",
    socials: ["facebook-f", "twitter", "linkedin-in", "youtube"],
  },
  {
    name: "Sukhwinder Singh",
    img: "/images/left-imgs/img-13.jpg",
    profile: "/instructor_profile_view",
    category: "Web Development",
    students: "215K Students",
    courses: "15 Courses",
    socials: ["facebook-f", "twitter", "linkedin-in", "youtube"],
  },
  {
    name: "Saloni Prabhakar",
    img: "/images/left-imgs/img-14.jpg",
    profile: "/instructor_profile_view",
    category: "Photographer",
    students: "10K Students",
    courses: "3 Courses",
    socials: ["facebook-f", "twitter", "linkedin-in", "youtube"],
  },
];

const AllInstructor = () => (
  <div className="wrapper">
    <div className="sa4d25">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12 col-lg-8">
            <div className="section3125">
              <div className="explore_search">
                <div className="ui search focus">
                  <div className="ui left icon input swdh11">
                    <input
                      className="prompt srch_explore"
                      type="text"
                      placeholder="Search Tutors..."
                    />
                    <i className="uil uil-search-alt icon icon2"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="_14d25">
              <div className="row">
                {instructors.map((inst, idx) => (
                  <div className="col-xl-3 col-lg-4 col-md-6" key={idx}>
                    <div className="fcrse_1 mt-30">
                      <div className="tutor_img">
                        <a href={inst.profile}>
                          <img src={inst.img} alt={inst.name} />
                        </a>
                      </div>
                      <div className="tutor_content_dt">
                        <div className="tutor150">
                          <a href={inst.profile} className="tutor_name">
                            {inst.name}
                          </a>
                          <div className="mef78" title="Verify">
                            <i className="uil uil-check-circle"></i>
                          </div>
                        </div>
                        <div className="tutor_cate">{inst.category}</div>
                        <ul className="tutor_social_links">
                          {inst.socials.map((icon, i) => (
                            <li key={i}>
                              <a href="#" className={icon.slice(0, 2)}>
                                <i className={`fab fa-${icon}`}></i>
                              </a>
                            </li>
                          ))}
                        </ul>
                        <div className="tut1250">
                          <span className="vdt15">{inst.students}</span>
                          <span className="vdt15">{inst.courses}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="col-md-12">
                  <div className="main-loader mt-50">
                    <div className="spinner">
                      <div className="bounce1"></div>
                      <div className="bounce2"></div>
                      <div className="bounce3"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Footer can be a separate component */}
    <footer className="footer mt-30">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-6">
            <div className="item_f1">
              <a href="/about_us">About</a>
              <a href="/our_blog">Blog</a>
              <a href="/career">Careers</a>
              <a href="/press">Press</a>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6">
            <div className="item_f1">
              <a href="/help">Help</a>
              <a href="/coming_soon">Advertise</a>
              <a href="/coming_soon">Developers</a>
              <a href="/contact_us">Contact Us</a>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6">
            <div className="item_f1">
              <a href="/terms_of_use">Copyright Policy</a>
              <a href="/terms_of_use">Terms</a>
              <a href="/terms_of_use">Privacy Policy</a>
              <a href="/sitemap">Sitemap</a>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6">
            <div className="item_f3">
              <a href="#" className="btn1542">
                Teach on Cursus
              </a>
              {/* Language dropdown omitted for brevity */}
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="footer_bottm">
            <div className="row">
              <div className="col-md-6">
                <ul className="fotb_left">
                  <li>
                    <a href="/">
                      <div className="footer_logo">
                        <img src="/images/logo1.svg" alt="" />
                      </div>
                    </a>
                  </li>
                  <li>
                    <p>
                      © 2020 <strong>Cursus</strong>. All Rights Reserved.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="col-md-6">
                <div className="edu_social_links">
                  <a href="#"><i className="fab fa-facebook-f"></i></a>
                  <a href="#"><i className="fab fa-twitter"></i></a>
                  <a href="#"><i className="fab fa-google-plus-g"></i></a>
                  <a href="#"><i className="fab fa-linkedin-in"></i></a>
                  <a href="#"><i className="fab fa-instagram"></i></a>
                  <a href="#"><i className="fab fa-youtube"></i></a>
                  <a href="#"><i className="fab fa-pinterest-p"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
);

export default AllInstructor;