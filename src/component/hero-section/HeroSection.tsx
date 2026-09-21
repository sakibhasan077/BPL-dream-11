import HeroImg from "../../assets/image/banner-main.png";
import BgShadow from "../../assets/image/bg-shadow.png";

const HeroSection = () => {
  return (
    <main className={`container mx-auto  bg-[#131313] rounded-[20px] mt-31`}>
      <div
        className="flex flex-col w-full items-center  bg-cover min-h-137.5 rounded-[20px]  "
        style={{
          backgroundImage: `url(${BgShadow})`,
        }}
      >
        <div className="mt-16 mb-6">
          <img src={HeroImg} alt="" />
        </div>

        <h1 className="text-[40px] text-white font-bold mb-4">Assemble Your Ultimate Dream 11 Cricket Team</h1>

        <p className="text-2xl text-[#ffffffb2] font-medium">Beyond Boundaries Beyond Limits</p>

        <button className="border-2 border-white rounded-[15px] p-2 mt-6 inline-block">
          <a href="#" className=" bg-linear-to-r from-[#ca72aa] to-[#f6d066] text-[#131313] px-5 py-3.5 inline-block rounded-lg font-black ">Claim Free Credit</a>
        </button>
      </div>
    </main>
  );
};

export default HeroSection;
