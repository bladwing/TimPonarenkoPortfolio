import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./menu.scss";

export default function MainMenu() {
  const { t } = useTranslation();
  return (
    <div className="Menu">
      <Link to="/" className="MenuItem">
        {t("menuAndTitle.Projects")}
      </Link>
      <Link to="/experience" className="MenuItem">
        {t("menuAndTitle.Experience")}
      </Link>
      <Link to="/education" className="MenuItem">
        {t("menuAndTitle.Education")}
      </Link>
    </div>
  );
}
