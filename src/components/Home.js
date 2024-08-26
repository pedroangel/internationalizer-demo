import React from "react";
import { useTranslation } from "react-i18next";
import banner1_BG from "../assets/images/banner1_bg.png";

function Home() {
  const { t, ready } = useTranslation();

  if (!ready) return <></>;

  return (
    <div className="flex items-center justify-between py-4">
      <div className="max-w-lg">
        <p className="text-base font-bold text-slate-600">
          {t("home.upperText")}
        </p>
        <h1 className="md:text-5xl font-bold text-slate-600 mt-2 text-3xl">
          {t("home.title")}
        </h1>
        <p className="md:text-lg text-gray-700 mt-4 text-md">
          {t("home.subTitle")}
        </p>
        <div className="mt-6 space-x-4">
          <button className="bg-yellow-500 text-white py-2 px-4 rounded-3xl hover:bg-yellow-600 md:text-md text-sm">
            {t("home.btn.trial")}
          </button>
          <button className="bg-teal-500 text-white py-2 px-4 rounded-3xl hover:bg-teal-600 md:text-md text-sm">
            {t("home.btn.demo")}
          </button>
        </div>
      </div>
      <div className="hidden lg:block">
        <img src={banner1_BG} alt="" className="w-full max-w-sm" />
      </div>
    </div>
  );
}

export default Home;
