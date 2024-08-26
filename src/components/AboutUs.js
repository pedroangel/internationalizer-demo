import React from "react";
import { useTranslation } from "react-i18next";

function AboutUs() {
  const { t } = useTranslation();
  return (
    <div className="bg-white py-20 px-4 text-center">
      <div className="max-w-2xl mx-auto">
        <span
          className="bg-yellow-400 text-sm text-slate-600 py-2 px-5 rounded-md font-semibold
         inline-block mb-4"
        >
          {t("about.upperText")}
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-600">
          {t("about.title")}
        </h1>
        <p className="mt-4 text-lg text-gray-700">{t("about.subTitle")}</p>
      </div>
    </div>
  );
}

export default AboutUs;
