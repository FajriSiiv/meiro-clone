import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { CheckCheck } from "lucide-react";

export const HeroSection = ({ opacity, dNone }: any) => {
  return (
    <motion.div
      className="w-[740px] fixed -translate-x-1/2 left-1/2 "
      style={{
        opacity: opacity,
        display: dNone,
        perspective: "1200px",
      }}
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
