import { Quote, Star } from "lucide-react";

const TestimonialSection = () => {
  return (
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
          When I found Meiro, BOOM. Not only can I use Meiro for grammar tests,
          level assessments and comprehension quizzes but this has changed the
          ball-game in regards to my promotions and marketing too
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
  );
};

export default TestimonialSection;
