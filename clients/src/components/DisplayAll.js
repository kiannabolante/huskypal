// UserList.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const DisplayAll = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users from the server
    axios
      .get("http://localhost:8000/api/users")
      .then((response) => {
        setUsers(response.data.users);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            <Link
              to={`https://www.instagram.com/${user.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="instagramLink"
            >
              {user.instagram}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayAll;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./TrackPal.css";
// import { Link } from "react-router-dom";

// import deactivatedHome from "../images/nav-bar/deactivatedHome.png";
// import activatedPals from "../images/nav-bar/activatedPals.png";
// import deactivatedLevels from "../images/nav-bar/deactivatedLevels.png";
// import deactivatedCloset from "../images/nav-bar/deactivatedCloset.png";

// import user from "../images/Pal-images/user.png";
// import email from "../images/Pal-images/email.png";

// const DisplayAll = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     // Fetch users from the server
//     axios
//       .get("http://localhost:8000/api/users")
//       .then((response) => {
//         setUsers(response.data.users);
//       })
//       .catch((error) => {
//         console.error("Error fetching users:", error);
//       });
//   }, []);

//   return (
//     <div style={{ backgroundColor: "#F8F3E2" }}>
//       <h1> Track Pals </h1>
//       <section>
//         <h4> Connect with people completing the same track as you! </h4>
//         <hr />
//       </section>

//       {/* List of Pals */}
//       <div className="emailListContainer">
//         <ul className="emailList">
//           {users.map((oneUser) => {
//             console.log("Instagram:", oneUser.instagram);
//             return (
//               <li key={oneUser._id} className="emailItem">
//                 <img src={user} alt="User Icon" className="icon userIcon" />
//                 <a
//                   href={`https://www.instagram.com/${oneUser.instagram}`}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   style={{ color: "blue", textDecoration: "underline" }}
//                 >
//                   {oneUser.instagram}
//                 </a>
//                 <img src={email} alt="Email Icon" className="icon emailIcon" />
//               </li>
//             );
//           })}
//         </ul>
//       </div>

//       {/* Navigation Bar */}
//       <section className="logos">
//         <div>
//           <Link to="/">
//             <img
//               src={deactivatedHome}
//               alt="home button to get to home page"
//               className="imageSize imageSpace"
//             />
//           </Link>
//         </div>
//         <div>
//           <Link to="/user/accessories">
//             <img
//               src={deactivatedCloset}
//               alt="closet button to see accessories"
//               className="imageSize imageSpace"
//             />
//           </Link>
//         </div>
//         <div>
//           <Link to="/user/level">
//             <img
//               src={deactivatedLevels}
//               alt="levels button to see progress and rewards"
//               className="imageSize imageSpace"
//             />
//           </Link>
//         </div>
//         <div>
//           <Link to="/user/pal">
//             <img
//               src={activatedPals}
//               alt="pal button to connect with others"
//               className="imageSize imageSpace"
//             />
//           </Link>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default DisplayAll;

// //const loginUser = async (req, res) => {
// //   try {
// //     const user = await User.findOne({ email: req.body.email });
// //     if (user) {
// //       const passwordMatch = await bcrypt.compare(
// //         req.body.password,
// //         user.password
// //       );
// //       if (passwordMatch) {
// //         const userToken = jwt.sign(
// //           {
// //             _id: user._id,
// //             email: user.email,
// //             firstName: user.firstName,
// //             lastName: user.lastName,
// //           },
// //           process.env.SECRET_KEY,
// //           { expiresIn: "1d" }
// //         );
// //         res.cookie("userToken", userToken, { httpOnly: true }).json({
// //           msg: "success!",
// //           user: {
// //             id: user._id,
// //             firstName: user.firstName,
// //             lastName: user.lastName,
// //             email: user.email,
// //             jwt: userToken,
// //           },
// //         });
// //       } else {
// //         res.status(400).json({ msg: "Invalid Login Attempt" });
// //       }
// //     } else {
// //       res.status(400).json({ msg: "Invalid Login Attempt" });
// //     }
// //   } catch (error) {
// //     console.log(error);
// //     return res.status(500).json(error);
// //   }
// // };
