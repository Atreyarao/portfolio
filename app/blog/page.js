"use client";
import MarqueeTitle from "@/components/MarqueeTitle";
import NikolasLayout from "@/layouts/NikolasLayout";
import { nicolasUtility } from "@/utility";
import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import { useEffect } from "react";
import Slider from "react-slick";
const page = () => {
  useEffect(() => {
    nicolasUtility.dataImage();
  }, []);
return<NikolasLayout></NikolasLayout>
  // return (
  //   <NikolasLayout>
  //     {/* Page_title */}
  //     <div className="nicolas_sm_page_title">
  //       <div className="container">
  //         <div className="page_title_in">
  //           <h3>
  //             <span className="stroke_text">User </span>
  //             <span className="underline">
  //               interface <br />
  //               design{" "}
  //             </span>
  //             <span className="stroke_text">growth tips and </span>
  //             <span className="underline">trends</span>
  //           </h3>
  //         </div>
  //       </div>
  //     </div>
  //     {/* /Page_title */}
  //     {/* Blog_menu */}
  //     <div className="nicolas_sm_blog_menu">
  //       <div className="container">
  //         <div className="extra_container">
  //           <div className="menu">
  //             <ul>
  //               <li>
  //                 <a href="#">All</a>
  //               </li>
  //               <li>
  //                 <a href="#">Business</a>
  //               </li>
  //               <li>
  //                 <a href="#">Creative</a>
  //               </li>
  //               <li>
  //                 <a href="#">Design</a>
  //               </li>
  //               <li>
  //                 <a href="#">Lifestyle</a>
  //               </li>
  //               <li>
  //                 <a href="#">Development</a>
  //               </li>
  //             </ul>
  //             <div className="search">
  //               <input type="text" placeholder="Search in blog" />
  //               <input type="submit" defaultValue="" />
  //               <img className="sm_svg" src="img/svg/search.svg" alt={1} />
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //     {/* /Blog_menu */}
  //     {/* Hero_blog */}
  //     <div className="nicolas_sm_blog_hero">
  //       <div className="container">
  //         <div className="extra_container">
  //           <Slider {...sliderProps.blogHeroSlider} className="blog_slider">
  //             <div className="blog_hero_in">
  //               <div className="background">
  //                 <img src="img/thumbs/4-2.jpg" alt={1} />
  //                 <div className="main" data-bg-img="img/blog/4.jpg" />
  //               </div>
  //               <div className="news">
  //                 <span>January 26, 2024</span>
  //                 <h3>
  //                   <Link href="blog_details">
  //                     Digital and physical brand design
  //                   </Link>
  //                 </h3>
  //                 <p>
  //                   Duis aute irure dolor in reprehenderit in voluptate velit
  //                   esse cillum dolore eu fugiat nulla pariatur.
  //                 </p>
  //               </div>
  //               <div className="slider_navigation">
  //                 <div className="nav_icon active">
  //                   <a href="#" />
  //                 </div>
  //                 <div className="nav_icon">
  //                   <a href="#" />
  //                 </div>
  //                 <div className="nav_icon">
  //                   <a href="#" />
  //                 </div>
  //               </div>
  //             </div>
  //             <div className="blog_hero_in">
  //               <div className="background">
  //                 <img src="img/thumbs/4-2.jpg" alt={1} />
  //                 <div className="main" data-bg-img="img/blog/8.jpg" />
  //               </div>
  //               <div className="news">
  //                 <span>January 05, 2024</span>
  //                 <h3>
  //                   <Link href="blog_details">How to develop website</Link>
  //                 </h3>
  //                 <p>
  //                   Duis aute irure dolor in reprehenderit in voluptate velit
  //                   esse cillum dolore eu fugiat nulla pariatur.
  //                 </p>
  //               </div>
  //               <div className="slider_navigation">
  //                 <div className="nav_icon active">
  //                   <a href="#" />
  //                 </div>
  //                 <div className="nav_icon">
  //                   <a href="#" />
  //                 </div>
  //                 <div className="nav_icon">
  //                   <a href="#" />
  //                 </div>
  //               </div>
  //             </div>
  //             <div className="blog_hero_in">
  //               <div className="background">
  //                 <img src="img/thumbs/4-2.jpg" alt={1} />
  //                 <div className="main" data-bg-img="img/blog/9.jpg" />
  //               </div>
  //               <div className="news">
  //                 <span>January 03, 2024</span>
  //                 <h3>
  //                   <Link href="blog_details">
  //                     The secrets of graphic design
  //                   </Link>
  //                 </h3>
  //                 <p>
  //                   Duis aute irure dolor in reprehenderit in voluptate velit
  //                   esse cillum dolore eu fugiat nulla pariatur.
  //                 </p>
  //               </div>
  //               <div className="slider_navigation">
  //                 <div className="nav_icon active">
  //                   <a href="#" />
  //                 </div>
  //                 <div className="nav_icon">
  //                   <a href="#" />
  //                 </div>
  //                 <div className="nav_icon">
  //                   <a href="#" />
  //                 </div>
  //               </div>
  //             </div>
  //           </Slider>
  //         </div>
  //       </div>
  //     </div>
  //     {/* /Hero_blog */}
  //     {/* Blog */}
  //     <div className="nicolas_sm_blog no_padding blogpage">
  //       <div className="nicolas_sm_extra_title">
  //         <MarqueeTitle marqueeText="News" />
  //       </div>
  //       <div className="container">
  //         <div className="extra_container">
  //           <ul>
  //             <li>
  //               <div className="list_inner">
  //                 <div className="left">
  //                   <div className="news">
  //                     <span>January 26, 2024</span>
  //                     <h3>
  //                       <Link href="blog_details">
  //                         Digital and physical brand design
  //                       </Link>
  //                     </h3>
  //                   </div>
  //                   <div className="button">
  //                     <Link href="blog_details">
  //                       Read the story{" "}
  //                       <img
  //                         className="sm_svg"
  //                         src="img/svg/down_arrow.svg"
  //                         alt={1}
  //                       />
  //                     </Link>
  //                   </div>
  //                 </div>
  //                 <div className="right">
  //                   <div className="image">
  //                     <img src="img/blog/1.jpg" alt={1} />
  //                     <Link
  //                       className="nicolas_sm_full_link"
  //                       href="blog_details"
  //                     />
  //                   </div>
  //                 </div>
  //               </div>
  //             </li>
  //             <li>
  //               <div className="list_inner">
  //                 <div className="left">
  //                   <div className="news">
  //                     <span>January 26, 2024</span>
  //                     <h3>
  //                       <Link href="blog_details">
  //                         The transformation of mobile app designing
  //                       </Link>
  //                     </h3>
  //                   </div>
  //                   <div className="button">
  //                     <Link href="blog_details">
  //                       Read the story{" "}
  //                       <img
  //                         className="sm_svg"
  //                         src="img/svg/down_arrow.svg"
  //                         alt={1}
  //                       />
  //                     </Link>
  //                   </div>
  //                 </div>
  //                 <div className="right">
  //                   <div className="image">
  //                     <img src="img/blog/2.jpg" alt={2} />
  //                     <Link
  //                       className="nicolas_sm_full_link"
  //                       href="blog_details"
  //                     />
  //                   </div>
  //                 </div>
  //               </div>
  //             </li>
  //             <li>
  //               <div className="list_inner">
  //                 <div className="left">
  //                   <div className="news">
  //                     <span>January 26, 2024</span>
  //                     <h3>
  //                       <Link href="blog_details">
  //                         A beginner’s guide to running adventures
  //                       </Link>
  //                     </h3>
  //                   </div>
  //                   <div className="button">
  //                     <Link href="blog_details">
  //                       Read the story{" "}
  //                       <img
  //                         className="sm_svg"
  //                         src="img/svg/down_arrow.svg"
  //                         alt={1}
  //                       />
  //                     </Link>
  //                   </div>
  //                 </div>
  //                 <div className="right">
  //                   <div className="image">
  //                     <img src="img/blog/3.jpg" alt={3} />
  //                     <Link
  //                       className="nicolas_sm_full_link"
  //                       href="blog_details"
  //                     />
  //                   </div>
  //                 </div>
  //               </div>
  //             </li>
  //             <li>
  //               <div className="list_inner">
  //                 <div className="left">
  //                   <div className="news">
  //                     <span>January 26, 2024</span>
  //                     <h3>
  //                       <Link href="blog_details">
  //                         A beginner’s guide to running adventures
  //                       </Link>
  //                     </h3>
  //                   </div>
  //                   <div className="button">
  //                     <Link href="blog_details">
  //                       Read the story{" "}
  //                       <img
  //                         className="sm_svg"
  //                         src="img/svg/down_arrow.svg"
  //                         alt={1}
  //                       />
  //                     </Link>
  //                   </div>
  //                 </div>
  //                 <div className="right">
  //                   <div className="image">
  //                     <img src="img/blog/5.jpg" alt={5} />
  //                     <Link
  //                       className="nicolas_sm_full_link"
  //                       href="blog_details"
  //                     />
  //                   </div>
  //                 </div>
  //               </div>
  //             </li>
  //             <li>
  //               <div className="list_inner">
  //                 <div className="left">
  //                   <div className="news">
  //                     <span>January 26, 2024</span>
  //                     <h3>
  //                       <Link href="blog_details">
  //                         A beginner’s guide to running adventures
  //                       </Link>
  //                     </h3>
  //                   </div>
  //                   <div className="button">
  //                     <Link href="blog_details">
  //                       Read the story{" "}
  //                       <img
  //                         className="sm_svg"
  //                         src="img/svg/down_arrow.svg"
  //                         alt={1}
  //                       />
  //                     </Link>
  //                   </div>
  //                 </div>
  //                 <div className="right">
  //                   <div className="image">
  //                     <img src="img/blog/6.jpg" alt={6} />
  //                     <Link
  //                       className="nicolas_sm_full_link"
  //                       href="blog_details"
  //                     />
  //                   </div>
  //                 </div>
  //               </div>
  //             </li>
  //           </ul>
  //           <div className="nicolas_sm_button">
  //             <a href="#">
  //               More{" "}
  //               <img
  //                 className="sm_svg"
  //                 src="img/svg/down_arrow.svg"
  //                 alt="arrow"
  //               />
  //             </a>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //     {/* /Blog */}
  //   </NikolasLayout>
  // );
};
export default page;
