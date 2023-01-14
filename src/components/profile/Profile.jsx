import React from "react";

import PhotoZoom from "./PhotoZoom";

import { useTranslation } from "react-i18next";
import "./profile.scss";

export default function Profile() {
  const { t } = useTranslation();
  const lang = JSON.parse(localStorage.getItem("lang"));
  return (
    <div className="ProfileContainer" style={{ fontFamily: lang === "ge" ? "BPG Glaho" : "RobotoMono-Regular" }}>
      <h3><br />
      {t("Profile.text")}
      </h3>
      <PhotoZoom />
    </div>
  );
}
