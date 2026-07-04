import { useState } from "react";
import { NavItem } from "../types";
import Button from "./Button";
import menuIcon from "../assets/icons/menu.png";
import Drawer from "./Drawer";
import Logo from "./Logo";

const navLinks: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Project", href: "#project" },
  { label: "Skill", href: "#skill" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 h-20 w-full bg-bg-white border-b border-stroke-white bg-custom-white text-black-main shadow-sm">
      <nav className="mx-auto flex h-full w-full items-center justify-between px-6">
        <div className="flex items-center gap-6">
          <Logo />
          <div className="hidden sm:block h-10 border-l border-green-primary"></div>
        </div>
        <div className="hidden md:flex gap-8 text-xl font-medium font-navbar font-text-text-primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors duration-200 hover:text-green-primary"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="hidden  md:flex">
          <Button
            label="Contact me"
            variant="secondary"
            size="xl"
            font="navbar"
          />
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden block cursor-pointer focus:outline-none"
        >
          {isOpen ? null : (
            <img
              src={menuIcon}
              alt="Open menu"
              className="w-6 h-6 object-contain"
            />
          )}
        </button>
      </nav>
      <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="flex flex-col text-xl font-navbar">
          {navLinks.map((link) => (
            <div key={link.href} className="hover:bg-green-primary transition-colors duration-200">
              <a
                key={link.href}
                onClick={() => setIsOpen(false)}
                className="block w-full px-4 py-3 hover:text-white"
              >
                {link.label}
              </a>
            </div>
          ))}
        </div>
      </Drawer>
    </header>
  );
}
