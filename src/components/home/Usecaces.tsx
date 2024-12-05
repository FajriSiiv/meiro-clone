import { dataMagicWork, dataMagicWork2 } from "@/constant";
import { FaArrowRight } from "react-icons/fa";
import { LuSparkle } from "react-icons/lu";

const UsecacesSection = () => {
  const TextCase = ({ text }: { text: string }) => {
    return (
      <p className="flex gap-x-2 items-center">
        <LuSparkle size={20} className="fill-white stroke-none" /> {text}
      </p>
    );
  };

  return (
    <div className="pt-20">
      <h2 className="text-4xl leading-normal font-semibold sm:!text-2xl">
        AI magic works for everyone
      </h2>
      <h2 className="text-4xl leading-normal font-semibold text-zinc-500 sm:text-2xl">
        Just bring us your cases
      </h2>
      <div className="mt-8"></div>
      <div className="grid grid-cols-2 min-h-[240px] gap-8 py-4 cursor-default sm:flex sm:flex-col">
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
      <div className="grid grid-cols-2 min-h-[240px] gap-8 py-4 sm:flex sm:flex-col">
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
  );
};

export default UsecacesSection;
