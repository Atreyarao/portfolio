"use client";
import { nicolasUtility } from "@/utility";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useEffect, useState } from "react";
const Header = () => {
  useEffect(() => {
    nicolasUtility.stickyNav();
  }, []);
  const [toggle, setToggle] = useState(false);

  const pathName = usePathname();

  const menus = [
    { id: 1, title: "home", href: "/" },
    { id: 2, title: "about", href: "about" },
    { id: 3, title: "skills", href: "skills" },
    { id: 4, title: "portfolio", href: "portfolio" },
    // { id: 5, title: "blog", href: "blog" },
    { id: 6, title: "contact", href: "contact" },
  ];

  return (
    <Fragment>
      {/* Mobile Menu */}
      <div className="nicolas_sa_mobile_menu">
        <div className="mobile_menu_inner">
          <div className="mobile_in">
            <div className="logo">
              <a href="#">
                <img src="img/logo/logo.png" alt="" />
              </a>
            </div>
            <div className="trigger" onClick={() => setToggle(!toggle)}>
              <div className="hamburger hamburger--slider">
                <div className="hamburger-box">
                  <div className="hamburger-inner" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="dropdown"
          style={{ display: toggle ? "block" : "none" }}
        >
          <div className="dropdown_inner">
            <ul>
              {menus.map((menu) => (
                <li key={menu.id}>
                  <Link href={menu.href}>{menu.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* /Mobile Menu */}
      {/* Header */}
      <div className="nicolas_sm_header">
        <div className="overlay_el">
          <div className="overlay_bg" />
          <div className="overlay_content">
            <div className="logo">
              <Link href="/">
                <img src="img/logo/logo.png" alt={2} />
              </Link>
            </div>
            <div className="menu">
              <ul>
                {menus.map((menu) => (
                  <li key={menu.id}>
                    <Link
                      href={menu.href}
                      className={
                        pathName.includes(menu.title)
                          ? "active"
                          : pathName === menu.href
                          ? "active"
                          : " "
                      }
                    >
                      {menu.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="button">
              <Link href="contact">
                Let's talk 
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* /Header */}
    </Fragment>
  );
};
export default Header;

export const OnePageHeader = () => {
  useEffect(() => {
    nicolasUtility.stickyNav();
    nicolasUtility.activeMenuBySection();
  }, []);
  const [toggle, setToggle] = useState(false);

  const pathName = usePathname();

  const menus = [
    { id: 1, title: "home", href: "#home" },
    { id: 2, title: "about", href: "#about" },
    { id: 3, title: "skills", href: "#skills" },
    { id: 4, title: "portfolio", href: "#portfolio" },
    // { id: 4, title: "Blog", href: "#blog" },
    { id: 5, title: "contact", href: "#contact" },
  ];

  return (
    <Fragment>
      {/* Mobile Menu */}
      <div className="nicolas_sa_mobile_menu">
        <div className="mobile_menu_inner">
          <div className="mobile_in">
            <div className="logo">
              <a href="#">
                <img src="img/logo/logo.png" alt="" />
              </a>
            </div>
            <div className="trigger" onClick={() => setToggle(!toggle)}>
              <div className="hamburger hamburger--slider">
                <div className="hamburger-box">
                  <div className="hamburger-inner" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="dropdown"
          style={{ display: toggle ? "block" : "none" }}
        >
          <div className="dropdown_inner">
            <ul className="anchor_nav">
              {menus.map((menu) => (
                <li key={menu.id}>
                  <Link href={menu.href}>{menu.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* /Mobile Menu */}
      {/* Header */}
      <div className="nicolas_sm_header">
        <div className="overlay_el">
          <div className="overlay_bg" />
          <div className="overlay_content">
            <div className="logo">
              <Link href="/">
                <img src="img/logo/logo.png" alt={2} />
              </Link>
            </div>
            <div className="menu">
              <ul className="anchor_nav">
                {menus.map((menu) => (
                  <li key={menu.id}>
                    <Link href={menu.href}>{menu.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="button">
              <Link href="contact">
                Let's talk
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* /Header */}
    </Fragment>
  );
};
