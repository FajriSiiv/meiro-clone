import React from "react";
import { BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  const IconInte = ({ icon }: { icon: React.ReactNode }) => {
    return (
      <div className="w-12 h-12 rounded-xl bg-[#202222] flex justify-center items-center">
        {icon}
      </div>
    );
  };

  return (
    <div className="w-full max-w-[1500px] mx-auto bg-[#171818] min-h-[400px] text-slate-100 px-10 pt-10 pb-3 flex flex-col justify-between overflow-hidden">
      <div className="flex justify-between">
        <div className="flex flex-col gap-3">
          <p className="text-4xl font-semibold">meiro</p>
          <div className="flex gap-3">
            <IconInte icon={<BsTwitterX size={20} />} />
            <IconInte icon={<BsLinkedin size={20} />} />
            <IconInte icon={<SiGmail size={20} />} />
          </div>
        </div>
        <div className="flex gap-x-14 gap-y-7">
          <div className="flex gap-y-4 flex-col min-w-[180px]">
            <p className="text-lg font-semibold">Product</p>
            <div className="flex flex-col gap-y-2.5 font-light text-white/80">
              <span>Features</span>
              <span>Pricing</span>
              <span>Return Policy</span>
            </div>
          </div>
          <div className="flex gap-y-4 flex-col min-w-[180px] ">
            <p className="text-lg font-semibold">Use cases</p>
            <div className="flex flex-col gap-y-2.5 font-light text-white/80">
              <span>Marketing</span>
              <span>HR</span>
              <span>Education</span>
              <span>Content creators</span>
            </div>
          </div>
          <div className="flex gap-y-4 flex-col min-w-[180px]">
            <p className="text-lg font-semibold">Resources</p>
            <div className="flex flex-col gap-y-2.5 font-light text-white/80">
              <span>Affiliate Program</span>
              <span>Roadmap</span>
              <span>Changelog</span>
              <span>Help center</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center text-xs font-light text-white/80 w-full">
        <p className=" ">&copy; 2024 FajriSiiv. All rights reserved</p>
        <div className="flex gap-x-3">
          <IconInte icon={<BsGithub size={20} />} />
          <IconInte icon={<BsLinkedin size={20} />} />
        </div>
        <div className="flex gap-x-10">
          <p>Privacy Policy</p>
          <p>Terms of Use</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
