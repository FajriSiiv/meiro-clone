const UnlimitedSection = () => {
  return (
    <div className="bg-[#171818] h-fit py-10 px-14 relative flex justify-start rounded-3xl overflow-hidden">
      <div className="absolute top-0 right-0 bg-block max-w-[300px] h-[500px] "></div>
      <div className="flex gap-10 z-10">
        <p className="text-3xl font-semibold max-w-[300px]">
          Meiro is completely unlimited
        </p>
        <p className="max-w-[400px] text-slate-300">
          Don't worry about the number of quizzes and tests, questions, views,
          and the number of completions. Feel free!
        </p>
      </div>
    </div>
  );
};

export default UnlimitedSection;
