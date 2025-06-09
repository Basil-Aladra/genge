// Lang.jsx
import React from "react";
import { useTranslation } from "react-i18next";

export const Lang = () => {
  const [, i18n] = useTranslation("global");

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
  };

  return (
    <div className="dropdown dropdown-left dropdown-end mt-1">
      <div
        tabIndex={0}
        role="button"
        aria-label="Change language"
        className="p-0 m-0 bg-transparent border-none shadow-none hover:bg-transparent focus:outline-none"
      >
        🌐
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-10 w-40 p-2 shadow-md"
      >
        <li>
          <button onClick={() => handleChangeLanguage("ar")}>العربية</button>
        </li>
        <li>
          <button onClick={() => handleChangeLanguage("en")}>English</button>
        </li>
        <li>
          <button onClick={() => handleChangeLanguage("hr")}>Hrvatski</button>
        </li>
      </ul>
    </div>
  );
};
