import NewsletterShadow from "../../assets/image/newsletterShadow.png";

const Newsletter = () => {
  return (
    <section className="relative z-10 mt-16 font-sora">
      <div className="w-full max-w-6xl mx-auto border-2 border-white rounded-[28px] p-6 bg-[rgba(255,255,255,0.16)] ">
        <div className="rounded-[28px] border border-[rgba(19,19,19,0.18)] bg-cover bg-center bg-white px-6 py-14 text-center sm:px-10"
        style={{
          backgroundImage: `url(${NewsletterShadow})`,
        }}
        >
          <h2 className="text-[28px] font-bold text-[#131313]">
            Subscribe to our Newsletter
          </h2>
          <p className="mt-2 text-[16px] text-[rgba(19,19,19,0.6)]">
            Get the latest updates and news right in your inbox!
          </p>

          <form
            className="mx-auto mt-7 flex max-w-140 flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-xl border border-[rgba(19,19,19,0.1)] bg-white px-5 py-3.5 text-[#131313] placeholder:text-[#898990] outline-none"
            />
            <button
              type="submit"
              className="rounded-xl bg-gradient-to-r from-[#FF4FA3] to-[#FFB43D] px-7 py-3.5 font-bold text-white cursor-pointer"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
