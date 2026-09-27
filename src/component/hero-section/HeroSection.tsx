import HeroImg from "../../assets/image/banner-main.png";
import BgShadow from "../../assets/image/bg-shadow.png";

const HeroSection = () => {
  return (
    <main className="container mx-auto mt-24 px-4 sm:mt-28 lg:mt-31 font-sora">
      <div
        className="flex min-h-125 w-full flex-col items-center rounded-[20px] bg-cover bg-center px-4 py-10 sm:min-h-137.5 sm:px-8 lg:px-10 lg:py-0 bg-[#131313]"
        style={{
          backgroundImage: `url(${BgShadow})`,
        }}
      >
        {/* Hero Image */}
        <div className="mt-4 mb-5 sm:mt-8 sm:mb-6 lg:mt-16">
          <img
            src={HeroImg}
            alt="Cricket Team"
            className="w-56 sm:w-72 lg:w-auto"
          />
        </div>

        {/* Heading */}
        <h1 className="mb-3 text-center text-2xl font-bold leading-tight text-white sm:text-3xl lg:mb-4 lg:text-[40px]">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>

        {/* Subtitle */}
        <p className="text-center text-base font-medium text-[#ffffffb2] sm:text-xl lg:text-2xl">
          Beyond Boundaries Beyond Limits
        </p>

        {/* Button */}
        <button className="mt-5 rounded-[15px] border-2 border-white p-1.5 sm:mt-6 sm:p-2">
          <a
            href="#"
            className="inline-block rounded-lg bg-linear-to-r from-[#ca72aa] to-[#f6d066] px-4 py-3 font-black text-[#131313] sm:px-5 sm:py-3.5"
          >
            Claim Free Credit
          </a>
        </button>
      </div>
    </main>
  );
};

export default HeroSection;
