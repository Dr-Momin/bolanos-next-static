// import Image from 'next/image';
"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("white");
  const [linkColor, setLinkColor] = useState("#1f2937");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-12 2xl:px-16">
        <Link href="/">
          <img src={'/images/logo.png'} className={"w-32"} />
        </Link>

        <div className="flex items-center gap-5">
          <ul
            style={{ color: `${linkColor}` }}
            className="hidden md:flex font-bold"
          >
            <li className="ml-10 text-xs uppercase hover:text-primary active:text-primary hover:border-b-2 hover:border-primary duration-200">
              <Link href="/">Home</Link>
            </li>
            <li className="ml-10 text-xs uppercase hover:text-primary active:text-primary hover:border-b-2 hover:border-primary duration-200">
              <Link href="/product-services">Product & Services</Link>
            </li>
            <li className="ml-10 text-xs uppercase hover:text-primary active:text-primary hover:border-b-2 hover:border-primary duration-200">
              <Link href="/faq">FAQ & Resources</Link>
            </li>
            <li className="ml-10 text-xs uppercase hover:text-primary active:text-primary hover:border-b-2 hover:border-primary duration-200">
              <Link href="/about-us">About Us</Link>
            </li>
            <li className="ml-10 text-xs uppercase hover:text-primary active:text-primary hover:border-b-2 hover:border-primary duration-200">
              <Link href="/login">Login</Link>
            </li>
          </ul>

          <button
            className={
              "bg-primary hidden sm:flex text-white px-6 py-3 rounded-lg items-center gap-2 text-xs"
            }
          >
            Sign Up
          </button>
        </div>

        {/* Hamburger Icon */}
        <div
          style={{ color: `${linkColor}` }}
          onClick={handleNav}
          className="md:hidden"
        >
          <AiOutlineMenu size={25} />
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <img src={'/images/logo.png'} className={"w-32"} />
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
          </div>
          <div className="pt-24 flex flex-col justify-center items-center gap-12">
            <ul className="uppercase text-primary text-center font-bold ">
              <Link href="/">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link href="/product-services">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Product & Services
                </li>
              </Link>
              <Link href="/faq">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  FAQs
                </li>
              </Link>
              <Link href="/about-us">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  About Us
                </li>
              </Link>
              <Link href="/login">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Login
                </li>
              </Link>
            </ul>

            <button
              className={
                "bg-primary flex text-white px-6 py-3 rounded-lg items-center gap-2 text-xs"
              }
            >
              Sign Up
              {/* <Image src={user} width={"20"} height={"20"} className={""} />  */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
