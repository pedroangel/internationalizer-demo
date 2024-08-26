import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-slate-600 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">{t("footer.company")}</h3>
            <ul>
              <li className="mb-2">
                <Link to="/" className="hover:underline">
                  {t("mainMenu.home")}
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/" className="hover:underline">
                  {t("mainMenu.about")}
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/" className="hover:underline">
                  {t("mainMenu.contact")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">{t("footer.support")}</h3>
            <ul>
              <li className="mb-2">
                <Link to="/" className="hover:underline">
                  {t("mainMenu.products")}
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/" className="hover:underline">
                  {t("mainMenu.service")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">{t("footer.followUs")}</h3>
            <ul>
              <li className="mb-2">
                <Link to="/" className="hover:underline">
                  {t("mainMenu.contact")}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-left mt-8">
          <p className="text-sm">
            &copy; 2024 Pedro Alarcon. {t("footer.copyright")}.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
