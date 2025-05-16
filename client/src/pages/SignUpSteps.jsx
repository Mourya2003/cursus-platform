import React, { useState } from "react";

const SignUpSteps = () => {
  const [activeTab, setActiveTab] = useState("instructor");

  return (
    <div className="sign_in_up_bg">
      <div className="container">
        <div className="row justify-content-lg-center justify-content-md-center">
          <div className="col-lg-12">
            <div className="main_logo25" id="logo">
              <a href="/"><img src="/images/logo.svg" alt="" /></a>
              <a href="/"><img className="logo-inverse" src="/images/ct_logo.svg" alt="" /></a>
            </div>
          </div>
          <div className="col-lg-6 col-md-8">
            <div className="sign_form">
              <div className="main-tabs">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item">
                    <button
                      className={`nav-link${activeTab === "instructor" ? " active" : ""}`}
                      id="instructor-tab"
                      onClick={() => setActiveTab("instructor")}
                      type="button"
                    >
                      Instructor Sign Up
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className={`nav-link${activeTab === "student" ? " active" : ""}`}
                      id="student-tab"
                      onClick={() => setActiveTab("student")}
                      type="button"
                    >
                      Student Sign Up
                    </button>
                  </li>
                </ul>
              </div>
              <div className="tab-content" id="myTabContent">
                {/* Instructor Tab */}
                <div
                  className={`tab-pane fade${activeTab === "instructor" ? " show active" : ""}`}
                  id="instructor-signup-tab"
                  role="tabpanel"
                  aria-labelledby="instructor-tab"
                >
                  <p>Sign Up and Create Course!</p>
                  <form>
                    <select className="ui hj145 dropdown cntry152 prompt srch_explore">
                      <option value="">Select Category</option>
                      <option value="1">Development</option>
                      <option value="2">Business</option>
                      <option value="3">Finance & Accounting</option>
                      <option value="4">IT & Software</option>
                      <option value="5">Office Productivity</option>
                      <option value="6">Personal Development</option>
                      <option value="7">Design</option>
                      <option value="8">Marketing</option>
                      <option value="9">Lifestyle</option>
                      <option value="10">Photography</option>
                      <option value="11">Health & Fitness</option>
                      <option value="12">Music</option>
                      <option value="13">Teaching & Academics</option>
                    </select>
                    <div className="ui search focus mt-15">
                      <div className="ui form swdh30">
                        <div className="field">
                          <textarea
                            rows="3"
                            name="description"
                            id="id_about"
                            placeholder="Write a little description about you..."
                          ></textarea>
                        </div>
                      </div>
                      <div className="help-block">
                        Your biography should have at least 12000 characters.
                      </div>
                    </div>
                    <button className="login-btn" type="submit">
                      Instructor Sign Up Now
                    </button>
                  </form>
                </div>
                {/* Student Tab */}
                <div
                  className={`tab-pane fade${activeTab === "student" ? " show active" : ""}`}
                  id="student-signup-tab"
                  role="tabpanel"
                  aria-labelledby="student-tab"
                >
                  <p>Sign Up and Start Learning!</p>
                  <form>
                    <div className="ui search focus mt-15">
                      <div className="ui form swdh30">
                        <div className="field">
                          <textarea
                            rows="3"
                            name="description"
                            id="id_about1"
                            placeholder="Write a little description about you..."
                          ></textarea>
                        </div>
                      </div>
                      <div className="help-block">
                        Your biography should have at least 12000 characters.
                      </div>
                    </div>
                    <button className="login-btn" type="submit">
                      Student Sign Up Now
                    </button>
                  </form>
                </div>
              </div>
              <p className="mb-0 mt-30">
                Already have an account? <a href="/sign_in">Log In</a>
              </p>
            </div>
            <div className="sign_footer">
              <img src="/images/sign_logo.png" alt="" />© 2020 <strong>Cursus</strong>. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpSteps;