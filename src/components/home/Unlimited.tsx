const UnlimitedSection = () => {
  return (
    <div className="bg-[#171818] h-fit py-10 px-14 relative flex justify-start rounded-3xl overflow-hidden sm:p-7">
      <div className="absolute top-0 right-0 bg-block max-w-[300px] h-[500px] md:hidden"></div>
      <div className="flex gap-10 z-10 md:justify-between md:w-full sm:flex-col">
        <p className="text-3xl font-semibold max-w-[300px] sm:text-xl sm:max-w-full">
          Meiro is completely unlimited
        </p>
        <p className="max-w-[400px] text-slate-300 sm:text-sm">
          Don't worry about the number of quizzes and tests, questions, views,
          and the number of completions. Feel free!
        </p>
      </div>
    </div>
  );
};

export default UnlimitedSection;
