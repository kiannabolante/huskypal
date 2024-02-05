import React from "react";

import "./Closet.css";
import { Link } from "react-router-dom";

import deactivatedHome from "../images/nav-bar/deactivatedHome.png";
import deactivatedPals from "../images/nav-bar/deactivatedPals.png";
import deactivatedLevels from "../images/nav-bar/deactivatedLevels.png";
import activatedCloset from "../images/nav-bar/activatedCloset.png";
import image5 from "../images/athletic-rewards/image5.png";
import image6 from "../images/athletic-rewards/image6.png";
import image7 from "../images/athletic-rewards/image7.png";
import image8 from "../images/athletic-rewards/image8.png";
import image9 from "../images/athletic-rewards/image9.png";

const Closet = () => {
  return (
    <div style={{ backgroundColor: "#CEC1FB" }}>
    <div className="container" >
      <h1>Your Accessories</h1>
      <section className="displayLine">
        <table class="table custom-table">
          <thead>
            <tr className="taller-row">
              <th>
                <img src={image5} alt="activate1" className="activate" />
                <button type="button" class="oval-button">
                  In-Use
                </button>
              </th>
              <th>
                <img src={image6} alt="activate6" className="activate" />
                <button type="button" class="oval-button">
                  In-Use
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="taller-row">
              <th>
                <img src={image7} alt="activate1" className="activate" />
                <button type="button" class="oval-button">
                  In-Use
                </button>
              </th>
              <th>
                <img src={image8} alt="activate1" className="activate" />
                <button type="button" class="oval-button">
                  In-Use
                </button>
              </th>
            </tr>
            <tr className="taller-row">
              <th>
                <img src={image9} alt="activate1" className="activate" />
              </th>

              <td></td>
            </tr>
            <tr className="taller-row">
              <th></th>
              <td></td>
            </tr>
            <tr className="taller-row">
              <th></th>
              <td></td>
            </tr>
          </tbody>
        </table>

        {/* Navigation Bar */}
        <section className="logos">
          <div>
            {" "}
            <img
              src={deactivatedHome}
              alt="home button to get to home page"
              className="imageSize imageSpace"
            />
          </div>
          <div>
            <Link to="/user/accessories">
            <img
              src={activatedCloset}
              alt="closet button to see accessories "
              className="imageSize imageSpace"
            />
            </Link>
          </div>
          <div>
          <Link to="/user/level">
            <img
              src={deactivatedLevels}
              alt="levels button to see progress and rewards"
              className="imageSize imageSpace"
            />
            </Link>
          </div>
          <div>
            {" "}
            <img
              src={deactivatedPals}
              alt="pals button to connect with others"
              className="imageSize imageSpace"
            />
          </div>
        </section>

      </section>
    </div>
    </div>
  );
};
export default Closet;
