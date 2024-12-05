import React from "react";
import { BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs";

const Footer = () => {
  const IconInte = ({
    icon,
    url,
    notLink = true,
  }: {
    icon: React.ReactNode;
    url?: string;
    notLink?: boolean;
  }) => {
    return (
      <>
        {notLink ? (
          <div className="w-12 h-12 rounded-xl bg-[#202222] flex justify-center items-center">
            {icon}
          </div>
        ) : (
          <a
            target="_blank"
            href={url}
            className="w-12 h-12 rounded-xl bg-[#202222] flex justify-center items-center"
          >
            {icon}
          </a>
        )}
      </>
    );
  };

  const linkDataFooter = [
    {
      title: "Product",
      links: [
        { name: "Features", url: "/" },
        { name: "Pricing", url: "/" },
        { name: "Return Policy", url: "/" },
      ],
    },
    {
      title: "Use cases",
      links: [
        { name: "Marketing", url: "/" },
        { name: "HR", url: "/" },
        { name: "Education", url: "/" },
        { name: "Content creators", url: "/" },
      ],
    },
    {
      title: "Resource",
      links: [
        { name: "Affiliate Program", url: "/" },
        { name: "Roadmap", url: "/" },
        { name: "Changelog", url: "/" },
        { name: "Help center", url: "/" },
      ],
    },
  ];

  return (
    <div className="w-full max-w-[1500px] mx-auto bg-[#171818] min-h-[400px] text-slate-100 px-10 pt-10 pb-3 flex flex-col justify-between overflow-hidden md:gap-24">
      <div className="flex justify-between md:flex-col gap-10">
        <div className="flex flex-col gap-3 w-full md:justify-between md:flex-row">
          <p className="text-4xl font-semibold">meiro</p>
          <div className="flex gap-3">
            <IconInte icon={<BsTwitterX size={20} />} />
            <IconInte
              notLink={false}
              url="https://www.linkedin.com/in/muhammad-fajri-8741031ba/"
              icon={<BsLinkedin size={20} />}
            />
            <IconInte
              url="https://github.com/FajriSiiv"
              icon={<BsGithub size={20} />}
              notLink={false}
            />
          </div>
        </div>
        <div className="flex gap-x-14 gap-y-7 md:justify-between sm:flex sm:flex-col">
          {linkDataFooter.map((data, index) => (
            <div key={index} className="flex gap-y-4 flex-col min-w-[180px]">
              <p className="text-lg font-semibold">{data.title}</p>
              <div className="flex flex-col gap-y-2.5 font-light text-white/80">
                {data.links.map((link, index) => (
                  <span
                    className="hover:text-[#D5FE52] transition-colors duration-75 cursor-pointer"
                    key={index}
                  >
                    {link.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center text-xs font-light text-white/80 w-full sm:flex-col-reverse sm:gap-10">
        <p className=" ">&copy; 2024 FajriSiiv. All rights reserved</p>
        <div className="flex gap-x-3 sm:hidden">
          <IconInte
            url="https://github.com/FajriSiiv"
            icon={<BsGithub size={20} />}
            notLink={false}
          />
          <IconInte
            url="https://www.linkedin.com/in/muhammad-fajri-8741031ba/"
            icon={<BsLinkedin size={20} />}
            notLink={false}
          />
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
