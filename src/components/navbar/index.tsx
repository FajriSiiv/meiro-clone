import { useState } from "react";
import { Button } from "../ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { IoIosArrowUp } from "react-icons/io";
import { TbTarget } from "react-icons/tb";
import { BsGithub, BsLinkedin, BsPeopleFill } from "react-icons/bs";
import { ImBook } from "react-icons/im";
import { FaMoneyBillWave, FaNewspaper } from "react-icons/fa";
import { HiBookOpen, HiMiniMap, HiMiniMegaphone } from "react-icons/hi2";
import { MdKeyboardArrowRight } from "react-icons/md";

const Navbar = () => {
  const [hover, setHover] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [openNav, setOpenNav] = useState(false);

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

  const NavDropdownMenu = ({
    icon,
    name,
  }: {
    icon: React.ReactNode;
    name: string;
  }) => {
    return (
      <Button className="rounded-md flex justify-start items-center gap-x-2 h-fit group w-full p-2 md:bg-transparent md:shadow-none relative md:p-0 md:hover:bg-transparent">
        <div className=" h-11 w-11 flex justify-center items-center rounded-xl bg-[#202222]">
          {icon}
        </div>
        <span className="group-hover:text-[#d5fe52] md:text-base">{name}</span>
        <div className="absolute top-1/2 -translate-y-1/2 right-5">
          <MdKeyboardArrowRight className="scale-125 group-hover:fill-[#d5fe52]" />
        </div>
      </Button>
    );
  };

  const NavUseCases = {
    title: "Use cases",
    links: [
      {
        linkName: "Marketing",
        icon: <TbTarget />,
      },
      {
        linkName: "HR",
        icon: <BsPeopleFill />,
      },
      {
        linkName: "Education",
        icon: <ImBook />,
      },
      {
        linkName: "Content creators",
        icon: <FaNewspaper />,
      },
    ],
  };

  const NavResources = {
    title: "Resources",
    links: [
      {
        linkName: "Affiliate Program",
        icon: <FaMoneyBillWave className="scale-110" />,
      },
      {
        linkName: "Roadmap",
        icon: <HiMiniMap className="scale-110" />,
      },
      {
        linkName: "Changelog",
        icon: <HiMiniMegaphone className="scale-110" />,
      },
      {
        linkName: "Help Center",
        icon: <HiBookOpen className="scale-110" />,
      },
    ],
  };

  const handleNav = () => {
    if (openNav) {
      setOpenNav(false);
    } else {
      setOpenNav(true);
    }
  };

  return (
    <div className="fixed w-screen h-[84px] bg-[#0e0f0f] flex justify-between items-center px-8 text-white/95 max-w-[1500px] left-1/2 -translate-x-1/2 z-50">
      <div className="bg-[#0e0f0f] absolute left-0 top-0 h-[84px] w-screen -z-10" />
      <p className="font-bold text-4xl">meiro</p>
      <div className="bg-[#171818] p-2 rounded-xl flex gap-x-2 md:hidden">
        <Button className="hover:bg-[#202222] rounded-xl py-3">Features</Button>
        <div className="relative">
          <Button
            className="hover:bg-[#202222] rounded-xl py-3 "
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            Use case
            <IoIosArrowUp
              className={`transition-all duration-75 ${
                hover ? "rotate-0" : "rotate-180"
              }`}
              size={15}
            />
          </Button>

          <AnimatePresence>
            {hover && (
              <motion.div
                onMouseEnter={() => setHover(true)} // Tetap aktif saat hover dropdown
                onMouseLeave={() => setHover(false)} // Hilang saat keluar dari dropdown
                className="mt-4 right-0 rounded-lg absolute min-w-[100px] bg-[#171717] p-2 flex-col gap-5"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <NavDropdownMenu
                  icon={<TbTarget className="scale-150" />}
                  name="Resource"
                />
                <NavDropdownMenu
                  icon={<BsPeopleFill className="scale-110" />}
                  name="HR"
                />
                <NavDropdownMenu
                  icon={<ImBook className="scale-110" />}
                  name="Education"
                />
                <NavDropdownMenu
                  icon={<FaNewspaper className="scale-110" />}
                  name="Content creators"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="relative">
          <Button
            className="hover:bg-[#202222] rounded-xl py-3 "
            onMouseEnter={() => setHover2(true)}
            onMouseLeave={() => setHover2(false)}
          >
            Resources
            <IoIosArrowUp
              className={`transition-all duration-75 ${
                hover ? "rotate-0" : "rotate-180"
              }`}
              size={15}
            />
          </Button>

          <AnimatePresence>
            {hover2 && (
              <motion.div
                onMouseEnter={() => setHover2(true)}
                onMouseLeave={() => setHover2(false)}
                className="mt-4 right-0 rounded-lg absolute min-w-[100px] bg-[#171717] p-2 flex-col gap-5"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <NavDropdownMenu
                  icon={<FaMoneyBillWave className="scale-110" />}
                  name="Affiliate Program"
                />
                <NavDropdownMenu
                  icon={<HiMiniMap className="scale-110" />}
                  name="Roadmap"
                />
                <NavDropdownMenu
                  icon={<HiMiniMegaphone className="scale-110" />}
                  name="Changelog"
                />
                <NavDropdownMenu
                  icon={<HiBookOpen className="scale-110" />}
                  name="Help center"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <Button className="hover:bg-[#202222] rounded-xl py-3">Pricing</Button>
      </div>
      <div className="flex gap-x-3 md:hidden">
        <Button className="hover:bg-[#202222] bg-transparent py-6 px-5 rounded-2xl">
          Login
        </Button>
        <Button className="hover:bg-[#bfff47] bg-[#d5fe52] py-6 px-5 rounded-2xl text-primary">
          Get started
        </Button>
      </div>
      <div
        className="bg-gradient-to-br from-20% to-40% from-[#D5FE52] to-[#f8d6eb] h-11 w-11 relative navHidden:hidden rounded-xl group"
        onClick={handleNav}
      >
        <motion.div
          className={`w-5 h-0.5 bg-[#171818] absolute left-1/2  -translate-x-1/2   ${
            openNav ? "rotate-45 top-1/2" : "top-1/3"
          }  transition-all`}
        />
        <motion.div
          className={`w-5 h-0.5 bg-[#171818] absolute left-1/2  -translate-x-1/2   ${
            openNav ? "-rotate-45 top-1/2" : "bottom-1/3"
          } transition-all`}
        />
      </div>

      <AnimatePresence>
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: !openNav ? "-100%" : "0%" }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.2 }}
          className="absolute bg-[#0e0f0f] w-screen max-w-[1500px] max-h-[1000px] h-[80vh] -z-20 left-0 top-0 overflow-auto navHidden:hidden"
        >
          <div className="h-fit flex flex-col gap-y-6 pt-[90px] pb-5 p-8 sm:px-4">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-[#171818] rounded-2xl px-6 py-4 font-semibold text-center">
                Login
              </div>
              <div className="bg-[#d5fe52] text-primary rounded-2xl px-6 py-4 font-semibold text-center">
                Get started
              </div>
            </div>
            <p className="font-semibold text-2xl">Features</p>
            <p className="font-semibold text-2xl">Pricing</p>

            <div className="flex flex-col">
              <p className="font-semibold text-2xl">{NavUseCases.title}</p>
              <div className="flex flex-col gap-y-2 pt-2">
                {NavUseCases.links.map((link, index) => (
                  <NavDropdownMenu
                    key={index}
                    icon={link.icon}
                    name={link.linkName}
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col">
              <p className="font-semibold text-2xl">{NavResources.title}</p>
              <div className="flex flex-col gap-y-2 pt-2">
                {NavResources.links.map((link, index) => (
                  <NavDropdownMenu
                    key={index}
                    icon={link.icon}
                    name={link.linkName}
                  />
                ))}
              </div>
            </div>
            <div className="flex gap-5 justify-center items-center">
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
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
