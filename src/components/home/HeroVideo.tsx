import { motion } from "framer-motion";
import { VideoAsGif } from "./VideoAsGif";

const HeroVideoSection = ({ widthBg }: { widthBg: any }) => {
  return (
    <div className="w-full h-screen max-h-[675px] rounded-[40px] z-10 relative ">
      <motion.div
        style={{
          width: widthBg,
        }}
        className="bg-gradient-to-r from-[#d5fe52] to-[#ffe0c9] w-[102%] h-20 -z-10 absolute blur-[200px] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 back"
      ></motion.div>
      <div className="w-full overflow-hidden max-h-[675px] rounded-[40px]">
        <VideoAsGif />
      </div>
    </div>
  );
};

export default HeroVideoSection;
