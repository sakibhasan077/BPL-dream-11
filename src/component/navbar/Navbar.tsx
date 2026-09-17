import DollarIcon from "../../assets/image/dollarIcon.png";
import Logo from "../../assets/image/logo.png";



const Navbar = () => {
  return (
    <nav className="fixed top-0 z-50 w-full bg-white py-2 shadow">
      <div className="container mx-auto flex items-center justify-between px-4 lg:px-0">

        {/* Logo */}
        <div>
          <img
            src={Logo}
            alt="Website Logo"
            className="w-32 sm:w-36 lg:w-auto"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-10 lg:flex">

          <ul className="flex gap-8 text-[#131313]">
            <li>
              <a href="#">Home</a>
            </li>

            <li>
              <a href="#">Fixture</a>
            </li>

            <li>
              <a href="#">Teams</a>
            </li>

            <li>
              <a href="#">Schedules</a>
            </li>
          </ul>

          {/* Coin */}
          <button className="flex items-center gap-1.5 rounded-[10px] border-2 border-[#e7e7e7] px-5 py-3 font-black text-[17px]">
            <img
              src={DollarIcon}
              className="h-5 w-5"
              alt="Dollar Icon"
            />
            0
          </button>
        </div>

        {/* Mobile / Tablet */}
        <div className="flex items-center gap-3 lg:hidden">

          {/* Coin */}
          <button className="flex items-center gap-1 rounded-[10px] border-2 border-[#e7e7e7] px-3 py-2 font-bold text-sm sm:px-4 sm:py-3 sm:text-base">
            <img
              src={DollarIcon}
              className="h-4 w-4 sm:h-5 sm:w-5"
              alt="Dollar Icon"
            />
            0
          </button>

          {/* Hamburger */}
          <button
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-md border border-gray-300 sm:h-11 sm:w-11"
            aria-label="Open menu"
          >
            <span className="h-0.5 w-5 bg-black"></span>
            <span className="h-0.5 w-5 bg-black"></span>
            <span className="h-0.5 w-5 bg-black"></span>
          </button>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
