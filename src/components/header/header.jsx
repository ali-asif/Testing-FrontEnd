import React, { useEffect, useState } from "react";
import "./header.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { AiFillHome, AiFillContacts, AiOutlineClose } from "react-icons/ai";
import { GiSkills } from "react-icons/gi";
import { MdWork } from "react-icons/md";
import MyLogo from "../../images/main logo.png";
import { MdOutlineRecommend } from "react-icons/md";

function Header() {
  useEffect(() => {
    AOS.init();
  }, []);

  const [menu, setMenu] = useState(false);

  return (
    <>
      <div className="header" data-aos="fade-right" data-aos-duration="1000">
        <div className="navTitle" data-aos="fade-left" data-aos-duration="1200">
          <img src={MyLogo} alt="Logo" />
        </div>
        <div className="navItems" data-aos="fade-left" data-aos-duration="1200">
          <a href="#about" smooth>
            About Us
          </a>
          <a href="#skills" smooth>Skills</a>
          <a href="#works" smooth>Technologies</a>
          <a href="#contact" smooth>Contact</a>
        </div>
        <div
          className="menuIconDiv"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <HiOutlineMenuAlt3
            className="menuIcon"
            onClick={() => setMenu(true)}
          />
        </div>
      </div>

      {/* Responsive Menu */}
      <div className={`responsiveMenu ${menu ? "open" : ""}`}>
        <div className="responsiveMenuItems">
          <div className="navTitle">
            <img src={MyLogo} alt="Logo" />
            <AiOutlineClose
              className="cancelIcon"
              onClick={() => setMenu(false)}
            />
          </div>
          <ul className="menuNavItems">
            <li>
              <a href="#about" onClick={() => setMenu(false)}>
                <AiFillHome className="menuBarIcons" /> About
              </a>
            </li>
            <li>
              <a href="#skills" onClick={() => setMenu(false)}>
                <GiSkills className="menuBarIcons" /> Skills
              </a>
            </li>
            <li>
              <a href="#works" onClick={() => setMenu(false)}>
                <MdWork className="menuBarIcons" /> Technologies
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setMenu(false)}>
                <AiFillContacts className="menuBarIcons" /> Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
