"use client";
import Link from "next/link";
import { Avatar } from "../material_tailwind";
import { ThemeSwitcher } from "@/Theme/ThemeSwitcher";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [activeNav, setActiveNav] = useState("#home");

  useEffect(() => {
    setActiveNav("#home");
  }, []);
console.log(activeNav)
  return (
    <div >
      <nav className="bg-dark w-full shadow-shadowColor flex justify-between items-center py-3">
        <div className="logo">
          <Link
            href="#home"
            onClick={() => {
              setActiveNav("#home");
            }}
            className={`${activeNav ? "text-xl text-accent" : "text-xl"}`}
          >
            <Avatar
              src="https://i.ibb.co/sRJYQrx/profile-pic-2.png"
              alt="avatar"
              className="border-2 border-accent rounded-full shadow-lightDarker shadow-customShadow hover:shadow-customShadow focus:shadow-customShadow hover:shadow-accent  focus:shadow-accent transition-all ease-in-out"
            />
          </Link>
        </div>
        <div className="menu text-light flex justify-center gap-3 items-center">
          <Link
            href="#home"
            onClick={() => {
              setActiveNav("#home");
            }}
          >
            Home
          </Link>
          <Link
            href="#about"
            onClick={() => {
              setActiveNav("#about");
            }}
          >
            About
          </Link>
          <Link
            href="#projects"
            onClick={() => {
              setActiveNav("#projects");
            }}
          >
            Project
          </Link>
          <Link
            href="#contact"
            onClick={() => {
              setActiveNav("#contact");
            }}
          >
            Contact
          </Link>

          <ThemeSwitcher />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;