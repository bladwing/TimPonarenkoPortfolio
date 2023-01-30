import React from "react";
import { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import "./tiktokpopup.scss";

export default function PhotoZoom() {
  const ref = useRef();
  const { t } = useTranslation();
  const [isModalOpen, setModalOpen] = useState(false);
  
const Close = () => {
  setModalOpen(false) || console.clear()
}

  return (
    <div className="ProfileContainer">
      <div className="body">
        {isModalOpen ? (
          <div className="modal__backdropVideo">
            <div className="modal__containerVideo" ref={ref}>
              <button onClick={() => Close()}>
                <span className="close">&times;</span>
              </button>
              <h1>
                Work Process
                <img
                  src="./img/loading.gif"
                  alt="progress"
                  style={{ width: "20px", height: "20px", marginLeft: "20px" }}
                />
              </h1>
              <iframe
                title="TikTokVideo"
                src="https://www.tiktok.com/embed/7145970491776388353"
                allowFullScreen
                scrolling="no"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                height="570px"
                border="none"
              />
            </div>
          </div>
        ) : (
         
          <Link
          to=""
          className="btn-flip"
          data-back={t("menuAndTitle.Video")}
          data-front={t("menuAndTitle.Video1")}
          aria-label="tiktok"
          onClick={() => setModalOpen(true)}
        >
        </Link>
        )}
      </div>
    </div>
  );
}
