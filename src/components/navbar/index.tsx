import { useState } from "react";
import { Button } from "../ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { IoIosArrowUp } from "react-icons/io";
import { TbTarget } from "react-icons/tb";
import { BsPeopleFill } from "react-icons/bs";
import { ImBook } from "react-icons/im";
import { FaMoneyBillWave, FaNewspaper } from "react-icons/fa";
import { HiBookOpen, HiMiniMap, HiMiniMegaphone } from "react-icons/hi2";

const Navbar = () => {
  const [hover, setHover] = useState(false);
  const [hover2, setHover2] = useState(false);

  const NavDropdownMenu = ({
    icon,
    name,
  }: {
    icon: React.ReactNode;
    name: string;
  }) => {
    return (
      <Button className="rounded-md py-2 flex justify-start items-center gap-x-2 h-fit px-2 group w-full">
        <div className="p-2 rounded-xl bg-[#202222]">{icon}</div>
        <span className="group-hover:text-[#d5fe52]">{name}</span>
      </Button>
    );
  };

  return (
    <div className="fixed w-screen h-[84px] bg-[#0e0f0f] flex justify-between items-center px-8 text-white/95 max-w-[1500px] left-1/2 -translate-x-1/2 z-50">
      <p className="font-bold text-4xl">meiro</p>
      <div className="bg-[#171818] p-2 rounded-xl flex gap-x-2">
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
      <div className="flex gap-x-3">
        <Button className="hover:bg-[#202222] bg-transparent py-6 px-5 rounded-2xl">
          Login
        </Button>
        <Button className="hover:bg-[#bfff47] bg-[#d5fe52] py-6 px-5 rounded-2xl text-primary">
          Get started
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
