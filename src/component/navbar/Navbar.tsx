import DollarIcon from "../../assets/image/dollarIcon.png";
import Logo from "../../assets/image/logo.png";



const Navbar = () => {
  return (
    <nav className="fixed top-0 z-50 w-full bg-white py-2 shadow">
      <div className="container mx-auto flex items-center justify-between">

        <div>
          <img src={Logo} alt="Website Logo" />
        </div>

        <div className="flex items-center gap-18">

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

          <div>
            <button className="flex items-center gap-1.5 rounded-[10px] border-2 border-[#e7e7e7] px-5 py-4 text-[17px] font-black">
              <img
                src={DollarIcon}
                className="h-5 w-5"
                alt="Dollar Icon"
              />
              0
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;