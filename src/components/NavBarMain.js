import { Link } from "react-router-dom";
import { useState } from "react";
import LanguageSelector from "./LanguageSelector";
import { useTranslation } from "react-i18next";

function NavBarMain() {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-slate-600 p-4 text-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold uppercase">{t("mainMenu.site")}</div>

        <div className="hidden md:flex space-x-4">
          <Link to="/" className="hover:underline p-1.5">
            {t("mainMenu.home")}
          </Link>
          <Link to="/about-us" className="hover:underline p-1.5">
            {t("mainMenu.about")}
          </Link>
          <div className="relative group p-1.5">
            <button className="hover:underline focus:outline-none">
              {t("mainMenu.service")}
            </button>
            <div className="absolute hidden group-hover:block bg-white text-gray-800 mt-0.5 pb-2 rounded shadow-lg w-36">
              <Link to="/" className="block px-4 py-2 hover:bg-gray-200">
                {t("mainMenu.service.service1")}
              </Link>
              <Link to="/" className="block px-4 py-2 hover:bg-gray-200">
                {t("mainMenu.service.service2")}
              </Link>
            </div>
          </div>
          <div className="relative group p-1.5">
            <button className="hover:underline focus:outline-none">
              {t("mainMenu.products")}
            </button>
            <div className="absolute hidden group-hover:block bg-white text-gray-800 mt-0.5 pb-2 rounded shadow-lg w-36">
              <Link to="/" className="block px-4 py-2 hover:bg-gray-200">
                {t("mainMenu.products.product1")}
              </Link>
              <Link to="/" className="block px-4 py-2 hover:bg-gray-200">
                {t("mainMenu.products.product2")}
              </Link>
              <Link to="/" className="block px-4 py-2 hover:bg-gray-200">
                {t("mainMenu.products.product3")}
              </Link>
            </div>
          </div>
          <Link to="/" className="hover:underline p-1.5">
            {t("mainMenu.contact")}
          </Link>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        <LanguageSelector />
      </div>

      {menuOpen && (
        <div className="md:hidden">
          <Link to="/" className="block px-4 py-2 hover:bg-slate-600">
            {t("mainMenu.home")}
          </Link>
          <Link to="/about-us" className="block px-4 py-2 hover:bg-slate-600">
            {t("mainMenu.about")}
          </Link>
          <Link to="/" className="block px-4 py-2 hover:bg-slate-600">
            {t("mainMenu.service.service1")}
          </Link>
          <Link to="/" className="block px-4 py-2 hover:bg-slate-600">
            {t("mainMenu.service.service2")}
          </Link>
          <Link to="/" className="block px-4 py-2 hover:bg-slate-600">
            {t("mainMenu.products.product1")}
          </Link>
          <Link to="/" className="block px-4 py-2 hover:bg-slate-600">
            {t("mainMenu.products.product2")}
          </Link>
          <Link to="/" className="block px-4 py-2 hover:bg-slate-600">
            {t("mainMenu.products.product3")}
          </Link>
          <Link to="/" className="block px-4 py-2 hover:bg-slate-600">
            {t("mainMenu.contact")}
          </Link>
        </div>
      )}
    </nav>
  );
}

export default NavBarMain;
