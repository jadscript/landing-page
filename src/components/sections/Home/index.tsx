import { ArrowRight, MousePointer2Icon } from "lucide-react";
import { useTranslation } from "react-i18next";
import { getWorkingYears } from "../../../utils/date";

const HomeSection = () => {
  const { t } = useTranslation();

  const scrollTo = (target: string) => {
    window.scrollTo({ top: getTarget(target), behavior: "smooth" });
  };
  const getTarget = (target: string) => {
    if (target === "#home") {
      return 0;
    }
    const targetElement = document.getElementById(target.replace("#", ""));
    return targetElement?.offsetTop || 0;
  };
  
  return (
    <section id="home" className="grid grid-cols-12 gap-4 mt-16">
      <div className="flex flex-col justify-center gap-6 col-span-12 md:col-span-6 lg:col-span-7">
        <h1 className="lg:text-6xl text-center md:text-left md:text-5xl text-4xl font-bold lg:leading-20 md:leading-14 leading-10">{t("home.title")}</h1>
        <p className="lg:max-w-md max-w-sm mx-auto lg:mx-0 text-center md:text-left leading-6 opacity-60">{t("home.description", { years: getWorkingYears() })}</p>
        <button onClick={() => scrollTo("#contact")} className="hidden md:flex bg-linear-to-r mt-2 from-cyan-300 to-lime-300 pl-6 gap-6 rounded-full font-medium w-fit items-center justify-center cursor-pointer hover:from-teal-300 hover:to-lime-300 transition-colors duration-300">
          <span className="text-lg font-semibold">{t("home.hireMe")}</span>
          <div className="flex items-center justify-center bg-black rounded-full p-2 text-white m-1 animate-left-to-right">
            <ArrowRight className="w-5 h-5" />
          </div>
        </button>
      </div>
      <div className="flex justify-center relative col-span-12 md:col-span-6 lg:col-span-5">
        <img
          src="/profile.png"
          alt="Jadscript"
          className="xl:w-full xl:h-full h-full w-fit xl:object-cover object-contain"
        />
        <div className="flex flex-col absolute top-[55%] left-15 md:left-30 animate-mouse-pointer">
          <MousePointer2Icon className="w-6 h-6 fill-cyan-300 text-cyan-300" />
          <span className="lg:text-sm text-xs bg-cyan-300 text-black rounded-full px-3 py-1 ml-5 -mt-1">
            {t("home.position-1")}
          </span>
        </div>

        <div className="flex flex-col absolute top-[40%] right-2 md:right-6 xl:-right-10 animate-mouse-pointer-reverse">
          <MousePointer2Icon className="w-6 h-6 fill-lime-300 text-lime-300" />
          <span className="lg:text-sm text-xs bg-lime-300 text-black rounded-full px-3 py-1 ml-5 -mt-1">
            {t("home.position-2")}
          </span>
        </div>

        <div className="flex flex-col absolute top-[75%] right-0 animate-mouse-pointer-2">
          <MousePointer2Icon className="w-6 h-6 fill-teal-300 text-teal-300" />
          <span className="lg:text-sm text-xs bg-teal-300 text-black rounded-full px-3 py-1 ml-5 -mt-1">
            {t("home.position-3")}
          </span>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
