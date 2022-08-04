import { useState } from "react";
import Cookies from "js-cookie";
import { useTranslation } from "react-i18next";

import "./langSwitcher.scss";
// import En from "../../assets/en.png"


export default function LangSwitcher() {
  const { i18n } = useTranslation();

  const languages = [
    { name: "Eng", code: "en" },
    { name: "ქარ", code: "ge" },
  ];

const currentLocale = Cookies.get("i18next") || "en";

const [language, setLanguage] = useState(currentLocale);

  const handleChangeLocale = (e) => {
    const lang = e.target.value;
    setLanguage(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <div className="LanguageContainer">
      
    <select
      onChange={handleChangeLocale}
      value={language}
      className="LangSwitcher"
    >
      {languages.map(({ name, code }) => (
        <option key={code} value={code}>
          {name}
        </option>
      ))}
    </select>
    </div>
  );
}
