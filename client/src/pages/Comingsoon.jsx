import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ComingSoon() {
  // Set your launch date here
  const launchDate = new Date("2025-12-31T00:00:00");

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = launchDate - now;
    let timeLeft = {
      days: "00",
      hours: "00",
      minutes: "00",
      seconds: "00",
    };

    if (difference > 0) {
      timeLeft = {
        days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, "0"),
        hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
        minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, "0"),
        seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [email, setEmail] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle email notification logic here
    alert("Thank you! You will be notified.");
    setEmail("");
  };

  return (
    <div className="coming_soon_style">
      <div className="wrapper coming_soon_wrapper">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="cmtk_group">
                <div className="ct-logo">
                  <Link to="/">
                    <img src="/images/ct_logo.svg" alt="Cursus Logo" />
                  </Link>
                </div>
                <div className="cmtk_dt">
                  <div className="col-lg-8 no-float no-padding center-block">
                    <ul className="clock block clearfix">
                      <li>
                        <span className="remaining-days" id="days">{timeLeft.days}</span>
                        <label>Days</label>
                      </li>
                      <li className="sep">:</li>
                      <li>
                        <span className="remaining-hours" id="hours">{timeLeft.hours}</span>
                        <label>hours</label>
                      </li>
                      <li className="sep">:</li>
                      <li>
                        <span className="remaining-minutes" id="minutes">{timeLeft.minutes}</span>
                        <label>minutes</label>
                      </li>
                      <li className="sep">:</li>
                      <li>
                        <span className="remaining-seconds" id="seconds">{timeLeft.seconds}</span>
                        <label>seconds</label>
                      </li>
                    </ul>
                  </div>
                  <h4 className="thnk_title1">We’ll be coming soon!</h4>
                  <div className="col-lg-4 col-md-6 no-float no-padding noti-block">
                    <form onSubmit={handleSubmit}>
                      <div className="ui search focus">
                        <div className="ui left icon input swdh11 thykh19">
                          <input
                            className="prompt srch_explore"
                            type="email"
                            name="emailaddress"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            id="id_email"
                            required
                            maxLength="64"
                            placeholder="Email address"
                          />
                          <button className="noti-btn" type="submit">Notify Me</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="tc_footer_main">
                  <div className="tc_footer_left">
                    <ul>
                      <li><Link to="/about_us">About</Link></li>
                      <li><Link to="/press">Press</Link></li>
                      <li><Link to="/contact_us">Contact Us</Link></li>
                      <li><Link to="/advertise">Advertise</Link></li>
                      <li><Link to="/developers">Developers</Link></li>
                      <li><Link to="/terms_of_use">Copyright</Link></li>
                      <li><Link to="/privacy_policy">Privacy Policy</Link></li>
                      <li><Link to="/terms_of_use">Terms</Link></li>
                    </ul>
                  </div>
                  <div className="tc_footer_right">
                    <p>© 2020 <strong>Cursus</strong>. All Rights Reserved.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
}

export default ComingSoon;

