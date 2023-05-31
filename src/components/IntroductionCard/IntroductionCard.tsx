import { NextPage } from "next";

const IntroductionCard: NextPage = () => {
  return (
    <div className="grid justify-items-center items-center w-6/12 md:w-5/12">
      <div className="grid grid-rows-2 rounded-xl gap-4 w-full min-h-[25rem] bg-slate-100 dark:bg-slate-800 md:grid-rows-1 md:grid-cols-[2fr_4fr] md:min-h-[9rem]">
        <div className="bg-hero-header bg-cover bg-center rounded-xl"></div>
        <div className="grid p-4 text-center text-slate-300 md:text-left">
          <div>Meru Test Project</div>
          <div>
            <div className="text-sky-500 dark:text-sky-400">
              By Josue Zavala
            </div>
            <div className="text-slate-700 dark:text-slate-500">
              Front End Developer
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroductionCard;
