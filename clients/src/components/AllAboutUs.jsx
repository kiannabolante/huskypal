import "./Aboutus.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import appIcon from "../images/appIcon.png";

import UserContext from "../contexts/UserContext";

const AllAboutUs = () => {
  const { loggedInUser } = useContext(UserContext);
  console.log(loggedInUser);
  return (
    <div className="aboutUsContainer">
      <section className="titleDesc">
        <h3 style={{padding: "60px", marginTop: "100px" }}>
          Welcome to HuskyPal: Discover everything UW has to offer with your virtual companion!
        </h3>
        <img
          src={appIcon}
          alt="husky pall app icon"
          style={{ width: "500px", height: "auto", marginTop: "-50px" }}
        />
        <p>
          HuskyPal is your personalized guide to exploring the University of
          Washington. Start each quarter by picking a trait for your HuskyPal,
          like adventurous or studious, and get ready for a series of exciting
          challenges. From walking trails to attending events, each activity is
          a step towards discovering what UW has to offer.
        </p>
      </section>

      <section className=' box displayDesk'>
        <h5>Customize Your Journey!</h5>
        <p>
          As you complete challenges, you'll level up and unlock accessories for
          your HuskyPal, making your virtual companion uniquely yours. Finish
          all your challenges for the quarter, and you'll earn an exclusive
          reward.
        </p>
      </section>

      <section className=' box displayDesk'>
        <h5>Connect and Share!</h5>
        <p>
          HuskyPal isn't just for solo adventures; it's a way to connect with
          other students. Share your experiences and take on challenges
          together, enriching your UW experience.
        </p>
      </section>
      <section>
        <h5>
          <button type="button" className="button">
            <Link to="/home">Get Started</Link>
          </button>{" "}
        </h5>
        <p>
          Get ready to turn your UW journey into an adventure filled
          with discovery, growth, and community. Your HuskyPal is ready to
          explore with you!
        </p>
      </section>
    </div>
  );
};

export default AllAboutUs;
