"use client";
import { useContext, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-scroll";
import logo from "../../assets/img/header/logofinal.png";
import { BiMenuAltRight, BiX } from "react-icons/bi";
import { SearchContext } from "../../context/search";
import SearchMobile from "../srch/SearchMobile";

const HeaderAdmin = () => {
  const { setSearchActive } = useContext(SearchContext);
  const [header, setHeader] = useState(false);
  const [nav, setNav] = useState(false);
  const desktopMode = useMediaQuery({
    query: "(min-width: 1300px)",
  });
  useEffect(() => {
    const handelScroll = () => {
      if (window.scrollY > 40) {
        setHeader(true);
      } else {
        setHeader(false);
      }

      if (window.scrollY > 450) {
        setSearchActive(true);
      } else {
        setSearchActive(false);
      }
    };

    window.addEventListener("scroll", handelScroll);

    return () => {
      window.removeEventListener("scroll", handelScroll);
    };
  });
  console.log(header);

  return (
    <header
      className={`${
        header ? "bg-white shadow-md py-2" : "bg-white shadow-none py-4"
      }
      fixed w-full max-w-[100%] mx-auto z-20 transition-all duration-300`}
    >
      <div
        className="  
        flex flex-col xl:flex-row lg:items-center lg:justify-between xl:items-center xl:justify-between "
      >
        {/* Image */}
        <div className="   lg:ml-14 flex items-center justify-between px-4">
          <Link
            to="home"
            smooth={desktopMode}
            spy={true}
            className="cursor-pointer"
          >
            <img width={150} height={64} src={logo} alt="Logo" />
          </Link>
          <div
            onClick={() => {
              setNav(!nav);
            }}
            className="cursor-pointer xl:hidden"
          >
            {nav ? (
              <BiX className="text-4xl" />
            ) : (
              <BiMenuAltRight className="text-4xl" />
            )}
          </div>
        </div>
        {/* nav */}
        <nav
          className={`${
            nav ? "max-h-max  py-8 px-4 xl:py-0 xl:px-0" : "max-h-0 xl:max-h-max"
          }
                      flex flex-col gap-y-6 overflow-hidden font-bold
                      xl:font-medium xl:flex-row xl:m-max xl:gap-x-8 xl:h-max xl:bg-transparent
                      xl:pb-0 transition-all duration-150 text-center xl:text-left uppercase
                      text-sm xl:text-[15px] xl:normal-case`}
        >
          <a
            className="cursor-pointer text-[17px] font-semibold  HoverColor"
            href="/admin/home"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            Home
          </a>

          <a
            className="cursor-pointer text-[17px] font-semibold  HoverColor"
            href="/admin/list_acc"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            Accessorys
          </a>
       

          <a
            className="cursor-pointer text-[17px] font-semibold  HoverColor"
            href="/admin/book/"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            Bookings
          </a>

          {/* <Link
            className="cursor-pointer text-[17px] font-semibold  HoverColor"
            to="why"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            Why us
          </Link> */}

          {/* <Link
            className="cursor-pointer text-[17px] font-semibold  HoverColor"
            to="testimonials"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            Testimonials
          </Link> */}

        

          <SearchMobile />
        </nav>
        {/* button */}
        <div className="hidden lg:mr-32 lg:block">
          <span className="px-3 py-3 bg-customRed uppercase text-white tracking-[2px] text-[14px] rounded-lg hover:bg-red-900 transition">
            Admin Dashboard
          </span>
        </div>
      </div>
    </header>
  );
};

export default HeaderAdmin;
