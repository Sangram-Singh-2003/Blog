import React from 'react'
import './Register.css'
import { Link } from 'react-router-dom'
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { TfiEmail } from "react-icons/tfi";
const Register=()=>{
    return (
      <>
        <div className="registration_top h-[1000px] w-[90%] ml-[10%]  bg-gradient-to-r from-white to-pink-400">
          <h1 className="registration_h1 text-3xl text-black">Blog</h1>
          <div className="flex mt-[6%] gap-[10%]">
            <div>
              <img
                className="h-[500px]"
                src="https://www.plex.tv/wp-content/uploads/2023/04/watched-group.png"
                alt=""
              />
            </div>
            <div className='ml-[100px]'>
              <h1 className="text-black text-[1.5rem]">Create an acoount</h1>
              <p className="registration_p1 text-[0.8rem]">
                Share your thought with the world from today
              </p>
              <p className="registration_p1 text-[0.8rem] pt-[45%]">
                Continue with........
              </p>
              {/*  <FcGoogle /> */}
              {/*   <TfiEmail /> */}
              <div className=" combination_three flex text-black gap-[3%] mt-5 ">
                <div className="facebook pt-8 px-4">
                  <span className="facebok  ">
                    <FaFacebookF className="ml-7" />
                    Facebook
                  </span>
                </div>
                <div className="facebook pt-8 px-4">
                  <span className="facebok  ">
                    <FcGoogle className="ml-6" />
                    <p className="px-2">Google</p>
                  </span>
                </div>
                <div className="facebook pt-8 px-4">
                  <span className="facebok  ">
                    <TfiEmail className="ml-7" />
                    <p className="px-2">Email</p>
                  </span>
                </div>
              </div>
              <p className="registration_p3 mt-[130px]">
                Already have an account ?{" "}
                <span>
                  <Link to="" className="text-pink-500">
                    Sign in
                  </Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </>
    );
}

export default Register;