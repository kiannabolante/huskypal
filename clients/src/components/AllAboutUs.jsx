// import './AboutUs.css'; // Assuming your CSS file is named DubsTrack.css
// import UserContext from '../contexts/UserContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

import UserContext from '../contexts/UserContext';

const AllAboutUs = () => {
  const { loggedInUser } = useContext(UserContext)
  // const {loggedInUser} = useContext(UserContext);
  console.log(loggedInUser)
  return (
    <div>
      <section>

        <h5>Welcome to HuskyPal{loggedInUser.firstName}: Discover UW with Your Virtual Companion!</h5>
        <p>HuskyPal is your personalized guide to exploring the University of Washington.
          Start each quarter by picking a trait for your HuskyPal, like adventurous or studious,
          and get ready for a series of exciting challenges. From walking trails to attending events,
          each activity is a step towards discovering what UW has to offer.</p>
      </section>

      <section>
        <h5>Customize Your Journey</h5>
        <p>As you complete challenges, you'll level up and unlock accessories for your HuskyPal,
          making your virtual companion uniquely yours. Finish all your challenges for the quarter,
          and you'll earn an exclusive reward.</p>
      </section>
      <section> <h4>Connect and Share</h4>
        <p>HuskyPal isn't just for solo adventures; it's a way to connect with other students.
          Share your experiences and take on challenges together, enriching your UW experience.</p>
      </section>
      <section>
        <h5>   <button type="button"><Link to="/home">Get Started</Link></button> </h5>
        <p>Join HuskyPal today and turn your UW journey into an adventure filled with discovery,
          growth, and community. Your HuskyPal is ready to explore with you!</p>

      </section>

    </div>
  )
}


export default AllAboutUs