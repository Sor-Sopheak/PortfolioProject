import { NavItem } from "../types";
import Button from "./Button";

const navLinks: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Project", href: "#project" },
  { label: "Skill", href: "#skill" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 h-20 w-full bg-bg-white border-b border-stroke-white bg-custom-white text-text-main shadow-sm">
      <nav className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
        <div className="flex flex-1 items-center gap-6 text-4xl font-medium font-signature tracking-wider">
          <div>
            <span className="text-text-main">Sopheak</span>
            <span className="text-text-title">Sor</span>
          </div>
          <div className="h-10 border-l border-bg-primary"></div>
        </div>
        <div className="flex flex-1 justify-center gap-8 text-xl font-medium font-navbar">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors duration-200 hover:text-text-title"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex flex-1 justify-end">
          <Button label="Contact me" variant="secondary" size="2xl" font="navbar" />
        </div>
      </nav>
    </header>
  );
}
