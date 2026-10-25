import Logo from "../../assets/image/logo.png";
const QUICK_LINKS = ["Home", "Services", "About", "Contact"];

const Footer = () => {

  return (
    <footer className="relative z-0 bg-[#0D0D0D] py-14 font-sora text-white mt-[-150px]">
      <div className="container mx-auto px-4 lg:px-0 pt-40">
        {/* Logo */}
        <div className="flex justify-center">
          <img src={Logo} alt="Cricket Logo" className="w-24" />
        </div>

        {/* Columns */}
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {/* About Us */}
          <div>
            <h3 className="text-[18px] font-bold">About Us</h3>
            <p className="mt-4 max-w-75 text-[15px] leading-relaxed text-[#B7B7B7]">
              We are a passionate team dedicated to providing the best services
              to our customers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[18px] font-bold">Quick Links</h3>
            <ul className="mt-4 list-disc list-inside marker:text-[#B7B7B7]">
              {QUICK_LINKS.map((link) => (
                <li key={link} className="mb-2 text-[15px] text-[#B7B7B7]">
                  <a href="#" className="hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h3 className="text-[18px] font-bold">Subscribe</h3>
            <p className="mt-4 text-[15px] leading-relaxed text-[#B7B7B7]">
              Subscribe to our newsletter for the latest updates.
            </p>
            <form
              className="mt-4 flex max-w-85 gap-2"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="min-w-0 flex-1 rounded-lg border border-[rgba(255,255,255,0.2)] bg-white px-4 py-3 text-[14px] text-[#131313] placeholder:text-[#898990] outline-none"
              />
              <button
                type="submit"
                className="rounded-lg bg-gradient-to-r from-[#FF4FA3] to-[#FFB43D] px-5 py-3 text-[14px] font-bold text-white cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <p className="mt-12 border-t border-white/10 pt-8 text-center text-[15px] text-[#8A8A8A]">
          @2026 BPL-Dream-11 All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
