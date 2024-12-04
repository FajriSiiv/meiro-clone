import { dataAi } from "@/constant";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { Button } from "../ui/button";

export const FeatureSection = () => {
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
