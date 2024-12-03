import { Button } from "@/components/ui/button";
import { CheckCheck, File, Link, Play, Quote, Star, Type } from "lucide-react";
import videoDefault from "@/assets/video/default.mp4";
import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import "@/index.css";
import domainImg from "@/assets/img/domain-1.png";
import embeddingImg from "@/assets/img/embedding-1.webp";
import scoreBased from "@/assets/img/score-based.png";
import aiFirst from "@/assets/img/ai-builder.webp";
import aiImages from "@/assets/img/ai-images.webp";
import aiDesign from "@/assets/img/design-dino.webp";
import aiAnalytics from "@/assets/img/analytic.jpg";
import {
  SiAirtable,
  SiGoogleanalytics,
  SiGooglesheets,
  SiMaildotru,
} from "react-icons/si";
import { IoMdMail } from "react-icons/io";
import { RiTwitterXLine, RiWebhookFill } from "react-icons/ri";
import { TbBrandZapier, TbSql } from "react-icons/tb";
import { PiMetaLogoBold } from "react-icons/pi";
import { LuSparkle } from "react-icons/lu";
import { FaArrowRight, FaEyeSlash, FaFlag, FaHashtag } from "react-icons/fa";
import { MdOutlineCheckCircle } from "react-icons/md";
import { IoCheckmarkDoneCircleOutline, IoPerson } from "react-icons/io5";
import { AiFillPicture } from "react-icons/ai";
import {
  BsFillGrid3X3GapFill,
  BsFillLockFill,
  BsFillTelephoneFill,
  BsGlobeAsiaAustralia,
  BsInputCursorText,
} from "react-icons/bs";

const dataAi = [
  {
    name: "AI-First Builder",
    title: "Start with your promptor use existing content",
    doc: "Create a test or quiz based on your idea or use your existing content",
    btnText: "Get started",
    category: {
      text: ["Text", "Video", "Link", "File"],
      icon: [<Type />, <Play />, <Link />, <File />],
    },
    img: aiFirst,
  },
  {
    name: "AI Images",
    title: "Bring your quiz to life with AI images",
    doc: "Use our integrated AI image builder to add stunning, high-quality images to your challenge content blocks",
    btnText: "Start creating",
    img: aiImages,
  },
  {
    name: "Design",
    title: "Tailor the content to suit your requirements",
    doc: "Tweak the blocks, modify the wording, refine the design, and remove Meiro branding to enjoy the complete white-label experience",
    btnText: "Start designing",
    img: aiDesign,
  },
  {
    name: "Analytics",
    title: "Measure success with real-time analytics",
    doc: "Delve deeper into our real-time analytics to gain insights about your leads and assess the overall success of your challenge",
    btnText: "Start analyzing",
    img: aiAnalytics,
  },
];

const dataMagicWork = [
  {
    doc: [
      "Gather more leads with better quality",
      "Improve conversion",
      "Increase brand awareness and outreach",
      "Collect new details about your customers",
    ],
    title: "Marketing",
  },
  {
    doc: [
      "Assess candidates",
      "Launch onboarding and training for employees",
      "Check staff performance, progress, and compliance awareness",
    ],
    title: "Human Resources",
  },
];
const dataMagicWork2 = [
  {
    doc: [
      "Reinforce learning material with interactive approach",
      "Give instant feedback to the students",
      "Let them learn at their own pace",
    ],
    title: "Education",
  },
  {
    doc: [
      "Increase traffic and engagement",
      "Get insights on your subscribers",
      "Feed into new sponsored activations",
    ],
    title: "Content Creators",
  },
];

const TypesEle = ({ text, icon }: { text: string; icon?: React.ReactNode }) => {
  return (
    <div className="flex gap-3 rounded-2xl py-3 px-4 bg-[#202222]">
      <span>{icon}</span>
      {text}
    </div>
  );
};

const IconInte = ({ icon }: { icon: React.ReactNode }) => {
  return (
    <div className="w-12 h-12 rounded-xl bg-[#202222] flex justify-center items-center">
      {icon}
    </div>
  );
};

const TextCase = ({ text }: { text: string }) => {
  return (
    <p className="flex gap-x-2 items-center">
      <LuSparkle size={20} className="fill-white stroke-none" /> {text}
    </p>
  );
};

const Home = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["center center", "center end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const dNone = useTransform(scrollYProgress, [0.1, 1], ["none", "block"]);

  return (
    <div className="pt-[176px] text-white/95 pb-52">
      <HeroDiv opacity={opacity} dNone={dNone} />
      <div
        className="max-w-[1200px] pt-[530px] mx-auto z-10 relative"
        ref={ref}
      >
        <div className="w-full h-screen max-h-[675px] bg-rose-500 rounded-[40px] overflow-hidden  z-10">
          <VideoAsGif />
        </div>
        <div className="flex gap-y-5 justify-center items-center pt-[100px] flex-col">
          <div className="flex gap-x-1">
            {[0, 1, 2, 3, 4].map((_, index) => (
              <Star className="fill-[#d5fe52] text-[#d5fe52]" key={index} />
            ))}
          </div>
          <p className="max-w-[860px] text-lg  text-center">
            <div className="flex justify-center">
              <span className="w-fit">
                <Quote size={10} className="fill-lime-200" />
                {"  "}
              </span>
              <span className="w-fit"> A Game Changer!</span>
            </div>
            <span className="w-fit">
              When I found Meiro, BOOM. Not only can I use Meiro for grammar
              tests, level assessments and comprehension quizzes but this has
              changed the ball-game in regards to my promotions and marketing
              too
              <span className="absolute">
                {" "}
                <Quote size={10} className="fill-lime-200 ml-2" />
              </span>
            </span>
          </p>
          <div className="flex gap-x-3">
            <div className="w-20 h-20 rounded-full bg-emerald-400"></div>
            <div className="flex flex-col gap-y-2 justify-center items-center">
              <p className="font-bold leading-none text-lg">Steve Smith</p>
              <p className="leading-none">English Tutor</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[0.5px] bg-white/20 w-full mt-[100px]"></div>
      <ScrollHorizontal />

      <div className="pt-14 max-w-[1200px] mx-auto">
        <div className="bg-[#171818] h-fit py-10 px-14 relative flex justify-start rounded-3xl overflow-hidden">
          <div className="absolute top-0 right-0 bg-block max-w-[300px] h-[500px] "></div>
          <div className="flex gap-10 z-10">
            <p className="text-3xl font-semibold max-w-[300px]">
              Meiro is completely unlimited
            </p>
            <p className="max-w-[400px] text-slate-300">
              Don't worry about the number of quizzes and tests, questions,
              views, and the number of completions. Feel free!
            </p>
          </div>
        </div>

        <div className="pt-20">
          <h2 className="text-4xl leading-normal font-semibold">
            One platform, endless potential
          </h2>
          <h2 className="text-4xl leading-normal font-semibold text-zinc-500">
            All features you need included
          </h2>
          <div className="grid grid-cols-10 gap-8 py-4 min-h-[320px] ">
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
                <TypesEle
                  icon={<BsFillLockFill size={20} />}
                  text="reCAPTCHA"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 py-4 min-h-[320px] ">
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
          <div className="grid grid-cols-3 gap-8 py-4 min-h-[280px] ">
            <div className=" col-span-1 bg-[#171818] h-full p-5 rounded-2xl">
              <h3 className="font-semibold text-2xl">
                Protection against retries
              </h3>
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
                  Assign points for correct answers and create a score-based
                  system for results
                </h3>
                <img
                  src={scoreBased}
                  alt="score based results "
                  className="w-full h-full object-contain translate-x-[30%] translate-y-[100%] scale-150"
                />
              </div>
            </div>
            <div className=" col-span-1 bg-[#171818] h-full p-5 rounded-2xl">
              <h3 className="font-semibold text-2xl">Integrations</h3>
              <div className="flex flex-wrap mt-3 gap-3">
                <IconInte icon={<SiGooglesheets size={25} />} />
                <IconInte icon={<IoMdMail size={25} />} />
                <IconInte icon={<RiWebhookFill size={25} />} />
                <IconInte icon={<TbSql size={25} />} />
              </div>
              <h3 className="mt-3 text-gray-500">Coming soon</h3>
              <div className="flex flex-wrap mt-3 gap-3">
                <IconInte icon={<TbBrandZapier size={25} />} />
                <IconInte icon={<SiAirtable size={25} />} />
                <IconInte icon={<SiGoogleanalytics size={25} />} />
                <IconInte icon={<PiMetaLogoBold size={25} />} />
                <IconInte icon={<RiTwitterXLine size={25} />} />
              </div>
            </div>
          </div>
        </div>
        <div className="pt-20">
          <h2 className="text-4xl leading-normal font-semibold">
            AI magic works for everyone
          </h2>
          <h2 className="text-4xl leading-normal font-semibold text-zinc-500">
            Just bring us your cases
          </h2>
          <div className="mt-8"></div>
          <div className="grid grid-cols-2 min-h-[240px] gap-8 py-4 ">
            {dataMagicWork.map((data, index) => (
              <div
                key={index}
                className="flex flex-col gap-y-3 bg-[#171818] p-8 rounded-2xl relative overflow-hidden group"
              >
                <div className="absolute bg-[#202222] w-9 h-9 rounded-xl flex justify-center items-center right-5 top-5 ">
                  <span className="-rotate-45 group-hover:rotate-0 group-hover:text-[#d5fe52] transition-all  ">
                    <FaArrowRight />
                  </span>
                </div>
                <h2 className="text-2xl font-semibold">{data.title}</h2>
                {data.doc.map((text, index) => (
                  <TextCase key={index} text={text} />
                ))}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 min-h-[240px] gap-8 py-4">
            {dataMagicWork2.map((data, index) => (
              <div
                key={index}
                className="flex flex-col gap-y-3 bg-[#171818] p-8 rounded-2xl relative overflow-hidden group"
              >
                <div className="absolute bg-[#202222] w-9 h-9 rounded-xl flex justify-center items-center right-5 top-5 ">
                  <span className="-rotate-45 group-hover:rotate-0 group-hover:text-[#d5fe52] transition-all  ">
                    <FaArrowRight />
                  </span>
                </div>
                <h2 className="text-2xl font-semibold">{data.title}</h2>
                {data.doc.map((text, index) => (
                  <TextCase key={index} text={text} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ScrollHorizontal = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);
  return (
    <div className=" relative h-[400vw]" ref={ref}>
      <div className="max-w-[1500px] mx-auto overflow-hidden sticky top-20 w-full">
        <motion.div style={{ x: x }} className="grid grid-cols-4 w-[400vw]">
          {dataAi.map((data, index) => {
            return (
              <div className="flex justify-center items-center gap-x-10 h-screen w-[100vw]">
                <div className="">
                  <motion.div className="w-[640px] h-[480px] rounded-3xl relative overflow-hidden bg-ai-bg">
                    <img
                      src={data.img}
                      className={`w-full h-full rounded-xl  ${
                        index === 0 ? "scale-150" : ""
                      }
                      ${
                        index === 1 || index === 2 || index === 3
                          ? "scale-105 translate-y-[20%] translate-x-[10%] object-cover object-left"
                          : ""
                      }
                      object-contain`}
                      alt={data.title}
                    />
                  </motion.div>
                </div>
                <div className="flex flex-col gap-4 max-w-[400px]">
                  <p className="text-white/70 font-medium">{data.name}</p>
                  <h2 className="text-3xl font-semibold leading-relaxed">
                    {data.title}
                  </h2>
                  <p className="text-white/70">{data.doc}</p>

                  <div className="flex gap-2 flex-wrap text-white/90">
                    {data.category &&
                      data.category.text.map((cateText, index) => (
                        <Button
                          key={index}
                          className="w-fit py-6 px-5 rounded-xl font-medium text-lg"
                        >
                          {data.category.icon[index]}
                          {cateText}
                        </Button>
                      ))}
                  </div>

                  <Button className="hover:bg-[#bfff47] bg-[#d5fe52] py-7 px-5 rounded-2xl text-primary w-fit">
                    {data.btnText}
                  </Button>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

const HeroDiv = ({ opacity, dNone }: any) => {
  return (
    <motion.div
      className="w-[740px] fixed -translate-x-1/2 left-1/2"
      style={{ opacity: opacity, display: dNone }}
    >
      <div className="text-5xl font-semibold leading-relaxed">
        <div className="flex justify-center items-center gap-x-2">
          Create
          <span>
            <svg width="37" height="38" fill="none" id="svg378967886_935">
              <path
                d="M0 .5h37v37H0V.5Z"
                fill="url(#svg378967886_935_a)"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M21.372 9.7a1.42 1.42 0 0 0 1.42 1.418h2.673v2.675a1.42 1.42 0 0 0 1.42 1.418h5.352v6.112h-5.353a1.42 1.42 0 0 0-1.419 1.42v2.673h-2.674a1.42 1.42 0 0 0-1.419 1.42v5.352h-6.111v-5.353a1.42 1.42 0 0 0-1.42-1.419h-2.673v-2.674a1.42 1.42 0 0 0-1.42-1.419H4.397v-6.112H9.75c.783 0 1.418-.635 1.418-1.418v-2.675h2.675c.783 0 1.418-.635 1.418-1.418V4.347h6.112V9.7Zm-3.818 1.375h1.524v1.79a4.64 4.64 0 0 0 4.64 4.64h1.79v1.524h-1.79a4.64 4.64 0 0 0-4.64 4.64v1.79h-1.524v-1.79a4.64 4.64 0 0 0-4.64-4.64h-1.79v-1.524h1.79a4.64 4.64 0 0 0 4.64-4.64v-1.79Z"
                fill="#0E0F0F"
              ></path>
              <defs>
                <linearGradient
                  id="svg378967886_935_a"
                  x1="5.844"
                  y1="6.761"
                  x2="30.704"
                  y2="9.895"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#D5FE52"></stop>
                  <stop offset="1" stop-color="#82F9D9"></stop>
                </linearGradient>
              </defs>
            </svg>
          </span>
          interactive content{" "}
        </div>
        <div className="flex items-center justify-center gap-x-2">
          in minutes{" "}
          <svg width="91" height="38" fill="none" id="svg1623019348_623">
            <path
              d="M0 .5h90.686v37H0V.5Z"
              fill="url(#svg1623019348_623_a)"
            ></path>
            <path
              d="M6.006 21.428h70.212v2.495c0 1.985-.506 2.495-2.474 2.495H71.27v4.991h4.948v-2.495c0-1.985.506-2.496 2.474-2.496h2.474v-4.99h4.948v-4.991h-4.948v-4.99h-2.474c-1.968 0-2.474-.511-2.474-2.496V6.456H71.27v4.99h2.474c1.968 0 2.474.51 2.474 2.496v2.495H6.006v4.99Z"
              fill="#0E0F0F"
            ></path>
            <defs>
              <linearGradient
                id="svg1623019348_623_a"
                x1="2.498"
                y1="7.142"
                x2="67.255"
                y2="29.151"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#BEE7FF"></stop>
                <stop offset="1" stop-color="#DBCBFF"></stop>
              </linearGradient>
            </defs>
          </svg>{" "}
          without limits{" "}
        </div>
      </div>

      <div className="flex flex-col gap-y-6 mt-10">
        <p className="text-center text-[20px] text-[#CED1D1]">
          Transform your brand's growth with AI-powered quizzes and tests –
          drive leads, engage audiences, and boost your brand recognition
        </p>
        <div className="mx-auto">
          <Button className="hover:bg-[#bfff47] bg-[#d5fe52] py-7 px-5 rounded-2xl text-primary">
            Get started - it's free
          </Button>
        </div>
        <div className="flex gap-x-8 justify-center">
          <div className="flex gap-x-2 items-center">
            <CheckCheck size={18} />
            <p>10-day free trial</p>
          </div>
          <div className="flex gap-x-2 items-center">
            <CheckCheck size={18} />
            <p>No credit card needed</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const VideoAsGif = () => {
  return (
    <video
      src={videoDefault}
      className="w-full h-full object-cover"
      autoPlay
      loop
      muted
      playsInline
    />
  );
};

export default Home;
