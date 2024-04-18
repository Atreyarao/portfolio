"use client";
import Cursor from "@/layouts/Cursor";
import { nicolasUtility } from "@/utility";
import Link from "next/link";
import { Fragment, useEffect } from "react";
const page = () => {
  useEffect(() => {
    nicolasUtility.imgToSVG();
  }, []);
return <></>
  // return (
  //   <Fragment>
  //     <div className="introprice" style={{ display: "none" }}>
  //       <span>Intro Price</span>
  //       <h3>-80% OFF</h3>
  //       <a
  //         className="nicolas_sm_full_link"
  //         href="https://themeforest.net/user/marketify/portfolio"
  //         target="_blank"
  //       />
  //     </div>
  //     <div className="nicolas_sm_intro">
  //       <div className="logo">
  //         <img src="img/logo/logo.png" alt="" />
  //         <p>Personal Portfolio React Nextjs Template</p>
  //       </div>
  //       <div className="demos">
  //         <ul>
  //           <li>
  //             <div className="list_inner">
  //               <img src="img/intro/1.png" alt="" />
  //               <h3>Multipage Demo</h3>
  //               <Link
  //                 className="nicolas_sm_full_link"
  //                 href="/"
  //                 target="_blank"
  //               />
  //             </div>
  //           </li>
  //           <li>
  //             <div className="list_inner">
  //               <img src="img/intro/1.png" alt="" />
  //               <h3>Onepage Demo</h3>
  //               <Link
  //                 className="nicolas_sm_full_link"
  //                 href="index-one-page"
  //                 target="_blank"
  //               />
  //             </div>
  //           </li>
  //         </ul>
  //       </div>
  //       <div className="features">
  //         <div className="features_in">
  //           <div className="maintitle">
  //             <h3>Main Features</h3>
  //           </div>
  //           <div className="list">
  //             <ul>
  //               <li>
  //                 <div className="list_inner">
  //                   <img className="sm_svg" src="img/anchor.svg" alt="" />
  //                   <h3>Contact Form With EmailJS</h3>
  //                   <p>
  //                     We used the latest modern Working SMTP Contact Form with
  //                     Captcha for our form field
  //                   </p>
  //                 </div>
  //               </li>
  //               <li>
  //                 <div className="list_inner">
  //                   <img className="sm_svg" src="img/anchor.svg" alt="" />
  //                   <h3>Premium Support (Live Chat)</h3>
  //                   <p>
  //                     Our support team try to give premium support for you
  //                     within minutes via Live Chat
  //                   </p>
  //                 </div>
  //               </li>
  //               <li>
  //                 <div className="list_inner">
  //                   <img className="sm_svg" src="img/anchor.svg" alt="" />
  //                   <h3>Fully Responsive</h3>
  //                   <p>
  //                     Our template fully customizable for any devices such as
  //                     laptops, mobile, iPad and etc
  //                   </p>
  //                 </div>
  //               </li>
  //               <li>
  //                 <div className="list_inner">
  //                   <img className="sm_svg" src="img/anchor.svg" alt="" />
  //                   <h3>Lifetime Free Updates</h3>
  //                   <p>
  //                     You'll get lifetime free updates. You can get the latest
  //                     updates from your download page
  //                   </p>
  //                 </div>
  //               </li>
  //             </ul>
  //           </div>
  //           <div className="copyright">
  //             <p>
  //               Copyright © {new Date().getFullYear()} by{" "}
  //               <a href="https://themeforest.net/user/codeefly" target="_blank">
  //                 CodeeFly
  //               </a>
  //             </p>
  //             <p>All rights are reserved</p>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //     <Cursor />
  //   </Fragment>
  // );
};
export default page;
