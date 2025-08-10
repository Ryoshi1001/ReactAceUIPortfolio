'use client'
import { Boxes } from "../components/ui/background-boxes";
import { FaLocationArrow } from "react-icons/fa";
import { MdOutlineCopyright } from "react-icons/md";
import { socialMedia } from "../data";

const Footer = () => {
const year =  new Date().getFullYear()

  return (
    <footer className="h-fit sm:px-10 px-5  pt-20 pb-10 w-full relative overflow-hidden bg-slate-900 text-[#fff] flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />

      <div className="flex flex-col items-center max-w-7xl w-full">
        <h1 className="text-[38px] md:text-5xl lg:text-6xl font-bold lg:max-w-[85vw] text-center z-20 leading-snug tracking-wide">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>

        <p className="text-center mt-10 text-neutral-300 relative z-20">
          Reach out to me today and let&apos;s discuss how I can help with entry
          level web development and tech support.
        </p>

        <a href="mailto:ryoshi16421@proton.me" target="_blank">
          <button className="mt-10 relative inline-flex h-12 overflow-hidden rounded-lg  p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />

            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center bg-slate-950 px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl rounded-lg">
              <div className="flex flex-row justify-center items-center gap-3">
                <span>Email Message</span>
                <FaLocationArrow />
              </div>
            </span>
          </button>
        </a>

        <div className="w-full flex flex-col md:flex-row items-center justify-between mt-10 gap-2">
          <p className="z-20 flex flex-row items-center justify-center">
            <span className="px-1">Copyright</span>
            <MdOutlineCopyright />
            <span className="px-1">{year} All Rights Reserved</span>
          </p>

          <div className="flex items-center justify-center gap-6 md:gap-4">
            {socialMedia.map(({ id, img, link }) => (
              <a
                href={link}
                target="_blank"
                key={id}
                className="z-20 h-10 w-10 bg-black-200 border border-black-300 rounded-lg saturated-180 bg-opacity-80 backdrop-filter backdrop-blur-lg flex items-center justify-center cursor-pointer"
              >
                <img src={img} alt="drawing" width={20} height={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
