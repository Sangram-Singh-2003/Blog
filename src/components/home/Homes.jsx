import React, { useEffect } from "react";
import Topbar from "../navbar/Topbar";

import Feed from "../feed/Feed";
import Rightbar from "../rightbar/Rightbar";
import "./Homes.css";
import Sidebar from "../sidebar/Sidebar";
// import {account} from '../appwrite/config'
const Homes = () => {
  // useEffect(()=>{
  //   console.log(account);
  // },[])
  return (
    <div>
      <Topbar />
      <div className="homecontainer">
        <Sidebar />

        <Feed />
        <Rightbar />
      </div>
    </div>
  );
};

export default Homes;
