import React from "react";
import { Link } from "react-router-dom";
import "../landingpage.css";

class LandingPage extends React.Component {
  render() {
    return (
      <div className="container text-center">
        <div className="container diagonal-split-background">
          <div className="logo-heading">
            <h1>PTS</h1>
          </div>
          <h2>Track Patients and Appointments the Easy Way</h2>
          <div className="signup">
            <Link to="/signup">
              <button className="btn btn-primary">Sign Up</button>
            </Link>
            <Link to="/login">
              <button className="btn btn-primary ml-2">Login</button>
            </Link>
          </div>
          <img
            className="hero-image"
            src="https://images.unsplash.com/photo-1561746254-c5c290762792"
            alt="overview image of desk with cell phone, desktop, and misc accessories"
          />
          <div className="more-info">
            <div className="col col1">
              <h3>Lorem, ipsum dolor.</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Eveniet deleniti numquam, accusamus possimus placeat facilis
                obcaecati quam inventore sequi suscipit.
              </p>
            </div>
            <div className="col col2">
              <h3>Lorem, ipsum dolor.</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Facilis similique tenetur laudantium error aut numquam sint
                soluta perspiciatis placeat deleniti.
              </p>
            </div>
            <div className="col col3">
              <h3>Lorem, ipsum dolor.</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
                omnis corporis nobis alias earum perferendis tempore odit! Quos,
                voluptatum ut?
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
