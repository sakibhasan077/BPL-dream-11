import DollarIcon from "../../assets/image/dollarIcon.png";
import Logo from "../../assets/image/logo.png";



const Navbar = () => {
  return (
    <nav className="fixed top-0 z-50 bg-white shadow w-full py-2">
      <div className="container mx-auto flex justify-between items-center ">
        <div>
          <img src={Logo} alt="Website Logo" />
        </div>
        <div className="flex gap-18 items-center">
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
            <button className="flex gap-1.5 items-center border-2 rounded-[10px] border-[#e7e7e7] px-5 py-4 font-black text-[17px] ">
              <img src={DollarIcon} className="w-5 h-5" alt="Dollar Icon " />
              0
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;