import { Link } from "lucide-react";
import React from "react";
import { AiFillPicture } from "react-icons/ai";
import {
  BsFillGrid3X3GapFill,
  BsFillLockFill,
  BsFillTelephoneFill,
  BsGlobeAsiaAustralia,
  BsInputCursorText,
} from "react-icons/bs";
import { FaEyeSlash, FaFlag, FaHashtag } from "react-icons/fa";
import { IoCheckmarkDoneCircleOutline, IoPerson } from "react-icons/io5";
import { MdOutlineCheckCircle } from "react-icons/md";
import {
  SiAirtable,
  SiGoogleanalytics,
  SiGooglesheets,
  SiMaildotru,
} from "react-icons/si";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

import domainImg from "@/assets/img/domain-1.png";
import embeddingImg from "@/assets/img/embedding-1.webp";
import scoreBased from "@/assets/img/score-based.png";
import { IoMdMail } from "react-icons/io";
import { RiTwitterXLine, RiWebhookFill } from "react-icons/ri";
import { TbBrandZapier, TbSql } from "react-icons/tb";
import { PiMetaLogoBold } from "react-icons/pi";

const ContentSection = () => {
  const TypesEle = ({
    text,
    icon,
  }: {
    text: string;
    icon?: React.ReactNode;
  }) => {
    return (
      <div className="flex gap-3 rounded-2xl py-3 px-4 bg-[#202222]">
        <span>{icon}</span>
        {text}
      </div>
    );
  };

  const IconInte = ({
    icon,
    textTooltip,
  }: {
    icon: React.ReactNode;
    textTooltip: string;
  }) => {
    return (
      <TooltipProvider delayDuration={300}>
        <Tooltip>
          <TooltipTrigger className="w-12 h-12 rounded-xl bg-[#202222] flex justify-center items-center">
            {icon}
          </TooltipTrigger>
          <TooltipContent className="bg-[#202222] text-sm" side="bottom">
            {textTooltip}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  };

  return (
    <div className="pt-20 cursor-default">
      <h2 className="text-4xl leading-normal font-semibold sm:text-2xl">
        One platform, endless potential
      </h2>
      <h2 className="text-4xl leading-normal font-semibold sm:text-2xl text-zinc-500">
        All features you need included
      </h2>
      <div className="grid grid-cols-10 gap-8 py-4 min-h-[320px] sm:flex sm:flex-col">
        <div className=" col-span-4 bg-[#171818] h-full p-5 rounded-2xl">
          <h3 className="font-semibold text-2xl">Six types of blocks</h3>
          <div className="flex flex-wrap gap-3 mt-5">
            <TypesEle
              icon={<MdOutlineCheckCircle fill="#9961ff" size={20} />}
              text="Single coice"
            />
            <TypesEle
              icon={
                <IoCheckmarkDoneCircleOutline
                  className="stroke-orange-400"
                  size={20}
                />
              }
              text="Multiple coice"
            />
            <TypesEle
              icon={<IoPerson fill="#9a43dc" size={20} />}
              text="Lead form"
            />
            <TypesEle
              icon={<FaFlag fill="#f69555" size={20} />}
              text="Result"
            />
            <TypesEle
              icon={<AiFillPicture fill="#e8298f" size={20} />}
              text="Picture choice"
            />
            <TypesEle
              icon={<BsFillGrid3X3GapFill fill="#3368f7" size={20} />}
              text="Fill in the gaps"
            />
          </div>
        </div>

        <div className=" col-span-6 bg-[#171818] h-full p-5 rounded-2xl">
          <h3 className="font-semibold text-2xl">Six types of blocks</h3>
          <div className="flex flex-wrap gap-3 mt-5">
            <TypesEle icon={<IoPerson size={20} />} text="Name" />
            <TypesEle icon={<SiMaildotru size={20} />} text="Email" />
            <TypesEle
              icon={<BsFillTelephoneFill size={20} />}
              text="Phone number"
            />
            <TypesEle
              icon={<BsInputCursorText size={20} />}
              text="Text field"
            />
            <TypesEle icon={<FaHashtag size={20} />} text="Number " />
            <TypesEle
              icon={<BsGlobeAsiaAustralia size={20} />}
              text="Country"
            />
            <TypesEle icon={<Link size={20} />} text="Link" />
            <TypesEle icon={<FaEyeSlash size={20} />} text="Privacy" />
            <TypesEle icon={<BsFillLockFill size={20} />} text="reCAPTCHA" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-8 py-4 min-h-[320px]  sm:flex sm:flex-col">
        <div className="  bg-[#171818] h-full p-5 rounded-2xl overflow-hidden relative">
          <h3 className="font-semibold text-2xl">Embedding</h3>
          <div className=" mt-5">
            <img
              src={embeddingImg}
              alt="dinosour embedding "
              className="w-full h-full translate-x-[5%] translate-y-[10%] scale-110"
            />
          </div>
        </div>
        <div className=" bg-[#171818] h-full p-5 rounded-2xl relative overflow-hidden">
          <h3 className="font-semibold text-2xl">Six types of blocks</h3>
          <div className="mt-5">
            <img
              src={domainImg}
              alt="custom domain"
              className="w-full h-full translate-x-[5%] translate-y-[10%] scale-110"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-8 py-4 min-h-[280px] sm:flex sm:flex-col">
        <div className=" col-span-1 bg-[#171818] h-full p-5 rounded-2xl">
          <h3 className="font-semibold text-2xl">Protection against retries</h3>
          <div className="flex flex-col justify-end">
            <h3 className="mt-3">Basen on</h3>
            <div className="flex flex-wrap gap-3 mt-3">
              <TypesEle text="Fingepring" />
              <TypesEle text="User IP" />
              <TypesEle text="User-Agent" />
            </div>
          </div>
        </div>
        <div className=" col-span-1 bg-[#171818] h-full p-5 rounded-2xl relative overflow-hidden">
          <h3 className="font-semibold text-2xl">Score-based results</h3>
          <div className="flex flex-col gap-y-3 mt-3">
            <h3>
              Assign points for correct answers and create a score-based system
              for results
            </h3>
            <img
              src={scoreBased}
              alt="score based results "
              className="w-full h-full object-contain translate-x-[30%] translate-y-[100%] scale-150 sm:translate-y-0 sm:scale-100 sm:translate-x-[10%]"
            />
          </div>
        </div>
        <div className=" col-span-1 bg-[#171818] h-full p-5 rounded-2xl">
          <h3 className="font-semibold text-2xl">Integrations</h3>
          <div className="flex flex-wrap mt-3 gap-3">
            <IconInte
              icon={<SiGooglesheets size={25} />}
              textTooltip="Google Sheet"
            />
            <IconInte icon={<IoMdMail size={25} />} textTooltip="Email" />
            <IconInte
              icon={<RiWebhookFill size={25} />}
              textTooltip="Webhooks"
            />
            <IconInte icon={<TbSql size={25} />} textTooltip="SQL" />
          </div>
          <h3 className="mt-3 text-gray-500">Coming soon</h3>
          <div className="flex flex-wrap mt-3 gap-3">
            <IconInte icon={<TbBrandZapier size={25} />} textTooltip="Zapier" />
            <IconInte icon={<SiAirtable size={25} />} textTooltip="Airtable" />
            <IconInte
              icon={<SiGoogleanalytics size={25} />}
              textTooltip="Google Analytics"
            />
            <IconInte
              icon={<PiMetaLogoBold size={25} />}
              textTooltip="Meta Pixel"
            />
            <IconInte
              icon={<RiTwitterXLine size={25} />}
              textTooltip="X Pixel"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSection;
