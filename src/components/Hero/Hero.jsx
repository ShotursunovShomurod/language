import heroBg from "../../assets/hero-bg.jpg";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <section className="relative">
        <img src={heroBg} alt="" className="w-full " />
        <div className=" absolute top-1/2 -translate-y-1/2 right-[40px] border p-[39px] bg-[#FFF3E3] rounded-[10px]">
          <div className="flex justify-center items-center w-[643px] h-[443px] bg-[#FFF3E3]">
            <div className="text-left p-5">
              <p className="tracking-[3px] text-[#B88E2F]">
                {t("Home.hero.p1")}
              </p>
              <h1 className="text-6xl font-bold mb-5 text-[#B88E2F]">
                {t("Home.hero.h1")}
              </h1>
              <p className="text-xl mb-5">{t("Home.hero.lorem§")}</p>
              <button className="p-5 px-16 bg-[#B88E2F] text-white">
                {t("Home.hero.btn")}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
