// import React from "react";
// import "./Rightbar.css";
// // import { RiHome4Line } from "react-icons/ri";
// // import { IoIosChatbubbles } from "react-icons/io";
// // import { FaFireFlameCurved } from "react-icons/fa6";
// // import { MdGroups } from "react-icons/md";
// // import { FaBookmark } from "react-icons/fa";
// // import { FaQuestionCircle } from "react-icons/fa";
// // import { FaBuilding } from "react-icons/fa";
// // import { MdEmojiEvents } from "react-icons/md";
// // import { SiDiscourse } from "react-icons/si";
// // import { BsFillPersonPlusFill } from "react-icons/bs";
// // import { CgProfile } from "react-icons/cg";
// // import { AiOutlineSetting } from "react-icons/ai";
// import Online from "../online/Online";
// import { Users } from "../../../dummyData.js";
// export default function Rightbar({profile}) {
//   const HomeRightbar=()=>{
// return (
//   <>
//     <div className="birthdayContainer">
//       <img
//         className="birthdayImg"
//         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF01PvrAm3f_b0pK5WJFddwWwsz6v1IOgNTg&s"
//         alt=""
//       />
//       <span className="birthdayText">
//         <b>Sangram Singh</b> and <b>3 other friends</b> have birthday today
//       </span>
//     </div>
//     <img
//       className="rightbarAd"
//       src="https://wallpaperaccess.com/full/1116867.jpg"
//       alt=""
//     />
//     <h4 className="rightbarTitle">Online Friends</h4>
//     <ul className="rightbarFriendList">
//       {Users.map((user) => (
//         <Online key={user.id} userId={user.id} />
//       ))}
//     </ul>
//   </>
// );

//   } ;
//   const ProfileRightbar=()=>{

//     return (
//       <>
//         <h4 className="rightbarTitle">User information</h4>
//         <div className="rightbarInfo">
//           <div className="rightbarInfoItem">
//             <span className="rightbarInfoKey">City:</span>
//             <span className="rightbarInfoValue">Mumbai</span>
//           </div>
//           <div className="rightbarInfoItem">
//             <span className="rightbarInfoKey">From:</span>
//             <span className="rightbarInfoValue">India</span>
//           </div>
//           <div className="rightbarInfoItem">
//             <span className="rightbarInfoKey">Relationship:</span>
//             <span className="rightbarInfoValue">Single</span>
//           </div>
//         </div>
//         <h4 className="rightbarTitle">User friends</h4>
//         <div className="rightbarFollowings">
//           <div className="rightbarFollowing">
//             <img
//               src="https://images.pexels.com/photos/428333/pexels-photo-428333.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
//               alt=""
//               className="rightbarFollowingImg"
//             />
//             <span className="rightbarFollowingName">Sangram Singh</span>
//           </div>
//           <div className="rightbarFollowing">
//             <img
//               src="https://images.pexels.com/photos/428333/pexels-photo-428333.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
//               alt=""
//               className="rightbarFollowingImg"
//             />
//             <span className="rightbarFollowingName">Sangram Singh</span>
//           </div>
//           <div className="rightbarFollowing">
//             <img
//               src="https://images.pexels.com/photos/428333/pexels-photo-428333.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
//               alt=""
//               className="rightbarFollowingImg"
//             />
//             <span className="rightbarFollowingName">Sangram Singh</span>
//           </div>
//           <div className="rightbarFollowing">
//             <img
//               src="https://images.pexels.com/photos/428333/pexels-photo-428333.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
//               alt=""
//               className="rightbarFollowingImg"
//             />
//             <span className="rightbarFollowingName">Sangram Singh</span>
//           </div>
//           <div className="rightbarFollowing">
//             <img
//               src="https://images.pexels.com/photos/428333/pexels-photo-428333.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
//               alt=""
//               className="rightbarFollowingImg"
//             />
//             <span className="rightbarFollowingName">Sangram Singh</span>
//           </div>
//           <div className="rightbarFollowing">
//             <img
//               src="https://images.pexels.com/photos/428333/pexels-photo-428333.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
//               alt=""
//               className="rightbarFollowingImg"
//             />
//             <span className="rightbarFollowingName">Sangram Singh</span>
//           </div>
//           <div className="rightbarFollowing">
//             <img
//               src="https://images.pexels.com/photos/428333/pexels-photo-428333.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
//               alt=""
//               className="rightbarFollowingImg"
//             />
//             <span className="rightbarFollowingName">Sangram Singh</span>
//           </div>
//           <div className="rightbarFollowing">
//             <img
//               src="https://images.pexels.com/photos/428333/pexels-photo-428333.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
//               alt=""
//               className="rightbarFollowingImg"
//             />
//             <span className="rightbarFollowingName">Sangram Singh</span>
//           </div>
//         </div>
//       </>
//     );
//   }
//    return (
//     <>
//       <div className="rightbar">
//         <div className="rightWrapper">
//         {profile ?<ProfileRightbar/>:<HomeRightbar/>}
//         </div>
//       </div>
//     </>
//   );
// }

import React from "react";
import "./Rightbar.css";
import Online from "../online/Online";
import { Users } from "../../../dummyData.js";

export default function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img
            className="birthdayImg"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF01PvrAm3f_b0pK5WJFddwWwsz6v1IOgNTg&s"
            alt=""
          />
          <span className="birthdayText">
            <b>Ankita Singh</b> and <b>1 other friends</b> have birthday in
            coming days
          </span>
        </div>
        <img
          className="rightbarAd"
          src="https://wallpaperaccess.com/full/1116867.jpg"
          alt=""
        />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((user) => (
            <Online key={user.id} userId={user.id} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Mumbai</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">India</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="rightbarFollowing">
              <img
                src="https://images.pexels.com/photos/428333/pexels-photo-428333.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">Sangram Singh</span>
            </div>
          ))}
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightWrapper">
        {profile ?"" : <HomeRightbar />}
      </div>
    </div>
  );
}

//  // data:image/png;base64,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
// like png img

// method to find search query
