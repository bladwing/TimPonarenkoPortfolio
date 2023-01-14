import React from "react";
import { useTranslation } from "react-i18next";

export default function Title() {
  const { t } = useTranslation();

  const lang = JSON.parse(localStorage.getItem("lang"));

  return (
    <div className="wrapper Header">
      <h1 style={{ fontFamily: lang === "ge" ? "BPG Glaho" : "Josefin Sans" }}>
        {t("TitleName")}
      </h1>
    </div>
  );
}
