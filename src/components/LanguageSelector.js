import { useState } from "react";
import { changeLanguage } from "../i18n";
import esFlag from "../assets/images/flags/es.png";
import enFlag from "../assets/images/flags/en.png";
import frFlag from "../assets/images/flags/fr.png";

function LanguageSelector() {
  const [language, setLanguage] = useState("es");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setMenuOpen(false);
    changeLanguage(lang);
  };

  const getFlag = (lang) => {
    switch (lang) {
      case "es":
        return esFlag;
      case "en":
        return enFlag;
      case "fr":
        return frFlag;
      default:
        return esFlag;
    }
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="bg-slate-600 text-white py-2 px-4 rounded cursor-pointer flex items-center"
      >
        <img
          src={getFlag(language)}
          alt={language}
          className="inline w-6 h-6 mr-2"
        />
      </button>

      {menuOpen && (
        <ul className="absolute right-0 mt-2 bg-white border border-gray-200 rounded-md shadow-lg z-10">
          <li
            className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-200"
            onClick={() => handleLanguageChange("es")}
          >
            <img src={esFlag} alt="es" className="inline w-6 h-6 mr-2" />
          </li>
          <li
            className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-200"
            onClick={() => handleLanguageChange("en")}
          >
            <img src={enFlag} alt="en" className="inline w-6 h-6 mr-2" />
          </li>
          <li
            className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-200"
            onClick={() => handleLanguageChange("fr")}
          >
            <img src={frFlag} alt="fr" className="inline w-6 h-6 mr-2" />
          </li>
        </ul>
      )}
    </div>
  );
}

export default LanguageSelector;
