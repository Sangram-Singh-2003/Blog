/*/* @disable codeium */

import React,{useState} from "react";
import {Link} from 'react-router-dom'
// framre motion
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import "./Home.css";
import ImageGallery from "./ImageGallery";




const Home = () => {
  const [ref2, inView2] = useInView({
    triggerOnce: false, // Animate multiple times
    threshold: 0.02, // Trigger animation when 2% of the element is in view
  });
  const [color, setColor] = useState("rgb(9, 13, 31)");

    // const images = [
    //   {
    //     index: "1",
    //     src: "https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQfeT438hsGX55mVMyBZV_mUmQblxAyJl3zC81-W37M9PH_YR0q51twkkpJemQEtcVEBBIpHxKq1_zg8jIVP6Svio5yHjwXrumG9OVa0Tw3MurnfHb4peedRFj3MHz319zPSo_Vxurmidgo5Ndd5AeNSbzNo.jpg?r=1da",
    //     title: "A Very Bridgerton Quiz",
    //     description:
    //       "Dearest Gentle Reader, prove you belong in the ton with these trivia questions.",
    //     category: "DEEP DIVE",
    //   },
    //   {
    //     index: "2",
    //     src: "https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQbHhxqDALahDo7NqrBiERQE5bjDIvt8NBq_0imcQifscaFq539rUQwt7Org8MpGW27UkrWhntF1HXj4i4nvuN6mVql7WNoEOyK360eU89JQH1iZA-jA6YepScKqK3oSatRqr615cHn9pCVK9N6dPwsWPsPw.jpg?r=7b9",
    //     title: "The Imaginary Invites You Into a Fantastic New World",
    //     description:
    //       "Studio Ponoc presents a gorgeous new adventure based on A.F. Harrold’s book.",
    //     category: "FIRST LOOK",
    //   },
    //   {
    //     index: "3",
    //     src: "https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQTPz8oaSSx-VebreZsUnYyALASLGgB9qGw8BDlt0fVne6LeviJ7m3wD6rgpPOEiH-6BSLfPgLeP07HzDlZU3T8biFHMUKeqMTDLTRewjkpYx3XfW-9E3UEaGgTaBWMs1b13_ISp_BW9oAvgzQ0lzjOF-RoY.jpg?r=f5b",
    //     title:
    //       "Watch Nicola and Luke Discover Penelope and Colin’s Astrological Compatibility",
    //     description:
    //       "Is it mere coincidence or is their romance written in the stars?",
    //     category: "DEEP DIVE",
    //   },
    // ];

      const images = [
        "https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQfeT438hsGX55mVMyBZV_mUmQblxAyJl3zC81-W37M9PH_YR0q51twkkpJemQEtcVEBBIpHxKq1_zg8jIVP6Svio5yHjwXrumG9OVa0Tw3MurnfHb4peedRFj3MHz319zPSo_Vxurmidgo5Ndd5AeNSbzNo.jpg?r=1da",
        "https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQbHhxqDALahDo7NqrBiERQE5bjDIvt8NBq_0imcQifscaFq539rUQwt7Org8MpGW27UkrWhntF1HXj4i4nvuN6mVql7WNoEOyK360eU89JQH1iZA-jA6YepScKqK3oSatRqr615cHn9pCVK9N6dPwsWPsPw.jpg?r=7b9",
        "https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQTPz8oaSSx-VebreZsUnYyALASLGgB9qGw8BDlt0fVne6LeviJ7m3wD6rgpPOEiH-6BSLfPgLeP07HzDlZU3T8biFHMUKeqMTDLTRewjkpYx3XfW-9E3UEaGgTaBWMs1b13_ISp_BW9oAvgzQ0lzjOF-RoY.jpg?r=f5b",
      ];

  return (
    <>
      <div className="top" style={{ backgroundColor: color }}>
        <nav className="topnavbar" onClick={() => setColor("white")}>
          <ul className="topnavbaritem-list lists">
            <li>Your Name</li>
          </ul>
          <ul className="topnavbaritem-list listss">
            <Link to="/homes">
              <li>Blog</li>
            </Link>
            <Link to="/projects">
              <li>Projects</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/newslatter">
              <li>NewsLetter</li>
            </Link>
            <Link to="" onClick={() => setColor("white")}>
              <li>button</li>
            </Link>
          </ul>
        </nav>
        <div className="line">
          <hr className="hrline" />
          <p className="the-blog">
            <span className="span-the">THE</span>{" "}
            <span className="span-blog">BLOG</span>
          </p>
          <hr className="hrline hrl1" />
        </div>
        <div className="recent_blog_post">
          <p className="recent_p text-white ml-[15%] ">Recent blog post</p>
        </div>
        <div className="flexSB">
          {/* 56666666666666666666666666 */}

          <div className="main">
            <div
              ref={ref2}
              className={`blog_post1 ${inView2 ? "animate" : ""}`}
            >
              <img
                className="image_blog image_blog1"
                src="https://img.freepik.com/premium-photo/study-table-with-chairs-it-is-lamp-some-books_864306-523.jpg?w=1380"
                alt=""
              />

              <div>
                <p className="p_date bg-[#694IC6]">Sunday 1,jan 2024</p>
                <p className="p_date1">UX review presentation</p>
                <p className="p_date2">
                  How do you create compelling presentation that wow
                  <br /> your colleagues and impress your managers
                </p>
                <div className="blog_button">
                  <button className="btn  btn1">Design</button>
                  <button className="btn btn2">Research</button>
                  <button className="btn btn3">Presentation</button>
                </div>
              </div>
            </div>
          </div>

          {/* 55555555555555555555555555555555555 */}
          {/* https://img.freepik.com/premium-photo/study-table-with-chairs-it-is-lamp-some-books_864306-523.jpg?w=1380 */}
          {/* https://lifehacker.com/imagery/articles/01HF2GTK599QGE8VW0ZTXBQ3WP/hero-image.fill.size_1248x702.v1699835772.jpg */}
          {/* https://img.freepik.com/free-photo/middle-aged-hispanic-business-people_23-2151099225.jpg?w=1060&t=st=1722243213~exp=1722243813~hmac=2f1882a66cc6a075af34b154c080df2f57c0bbd0580547ad7007abbf36853f49 */}
          {/*  */}
          <div className="main1">
            {/* blog_post1 blog_post12 */}
            <div
              ref={ref2}
              className={`blog_post1 blog_post12 ${inView2 ? "animate" : ""}`}
            >
              <img
                className="image_blog"
                src="https://img.freepik.com/free-photo/middle-aged-hispanic-business-people_23-2151099225.jpg?w=1060&t=st=1722243213~exp=1722243813~hmac=2f1882a66cc6a075af34b154c080df2f57c0bbd0580547ad7007abbf36853f49"
                alt=""
              />
              <div>
                <p className="p_date bg-[#694IC6]">Sunday 1,jan 2024</p>
                <p className="p_date1 p_date12">UX review presentation</p>
                <p className="p_date2 p_date22">
                  How do you create compelling <br /> presentation that wow your
                  <br /> colleagues and impress your managers
                </p>
                <div className="blog_button">
                  <button className="btn  btn1">Design</button>
                  <button className="btn btn2">Research</button>
                </div>
              </div>
            </div>

            {/* second */}

            <div
              ref={ref2}
              className={`blog_post1 blog_post13 ${inView2 ? "animate" : ""}`}
            >
              <img
                className="image_blog"
                src=" https://lifehacker.com/imagery/articles/01HF2GTK599QGE8VW0ZTXBQ3WP/hero-image.fill.size_1248x702.v1699835772.jpg "
                alt=""
              />
              <div>
                <p className="p_date bg-[#694IC6]">Sunday 1,jan 2024</p>
                <p className="p_date1 p_date12">UX review presentation</p>
                <p className="p_date2 p_date22">
                  How do you create compelling <br /> presentation that wow your
                  <br /> colleagues and impress your managers
                </p>
                <div className="blog_button">
                  <button className="btn  btn1">Design</button>
                  <button className="btn btn2">Research</button>
                </div>
              </div>
            </div>

            {/* second end */}
          </div>

          {/*  */}
        </div>
        {/*  */}
        <ImageGallery images={images} />
      
        {/*  */}
    
      </div>
    </>
  );
};

export default Home;
