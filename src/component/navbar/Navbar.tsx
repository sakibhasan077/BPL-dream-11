import { useState } from "react";
import DollarIcon from "../../assets/image/dollarIcon.png";
import Logo from "../../assets/image/logo.png";

const NAV_LINKS = ["Home", "Fixture", "Teams", "Schedules"];

interface NavbarType {
  credit: number;
}

const Navbar = ({ credit }: NavbarType) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full bg-white py-2 shadow font-sora">
      <div className="container mx-auto flex items-center justify-between px-4">

        {/* Logo */}
        <div>
          <img
            src={Logo}
            alt="Website Logo"
            className="w-16 sm:w-20"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-10 lg:flex">

          <ul className="flex gap-8 text-[#131313]">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <a href="#">{link}</a>
              </li>
            ))}
          </ul>

          {/* Coin */}
          <button className="flex items-center gap-1.5 rounded-[10px] border-2 border-[#e7e7e7] px-5 py-3 font-black text-[17px] whitespace-nowrap">
            <img
              src={DollarIcon}
              className="h-5 w-5"
              alt="Dollar Icon"
            />
            {credit.toLocaleString("en-US")}
          </button>
        </div>

        {/* Mobile / Tablet */}
        <div className="flex items-center gap-3 lg:hidden">

          {/* Coin */}
          <button className="flex items-center gap-1 rounded-[10px] border-2 border-[#e7e7e7] px-3 py-2 font-bold text-sm whitespace-nowrap sm:px-4 sm:py-3 sm:text-base">
            <img
              src={DollarIcon}
              className="h-4 w-4 sm:h-5 sm:w-5"
              alt="Dollar Icon"
            />
            {credit.toLocaleString("en-US")}
          </button>

          {/* Hamburger */}
          <button
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-md border border-gray-300 sm:h-11 sm:w-11"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            ) : (
              <>
                <span className="h-0.5 w-5 bg-black"></span>
                <span className="h-0.5 w-5 bg-black"></span>
                <span className="h-0.5 w-5 bg-black"></span>
              </>
            )}
          </button>

        </div>
      </div>

      {/* Mobile / Tablet Menu */}
      {menuOpen && (
        <div className="absolute left-0 right-0 top-full border-t border-[#e7e7e7] bg-white px-4 py-4 shadow-lg lg:hidden">
          <ul className="flex flex-col gap-4 text-[#131313]">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <a href="#" onClick={() => setMenuOpen(false)}>
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
