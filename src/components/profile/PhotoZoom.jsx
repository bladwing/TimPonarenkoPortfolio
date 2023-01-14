import React from "react";
import { useState, useEffect, useRef } from "react";
import "./profile.scss";

export default function PhotoZoom() {
  const ref = useRef();
  const [isModalOpen, setModalOpen] = useState(false);
  
   const useOnClickOutside = (ref, handler) => {
    useEffect(() => {
      const listener = (event) => {
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      };
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    }, [ref, handler]);
  }


  useOnClickOutside(ref, () => setModalOpen(false));
  return (
    <div className="ProfileContainer">
      <div className="body">
        {isModalOpen ? (
          <div className="modal__backdrop">
            <div className="modal__container" ref={ref}>
              <img
                src="/img/profilePhoto.png"
                alt="profilePhoto"
                onClick={() => setModalOpen(false)}
              />
            </div>
          </div>
        ) : (
          <img
            onClick={() => setModalOpen(true)}
            src="/img/profilePhoto.png"
            alt="profilePhoto"
            className="profilePhoto"
          />
        )}
      </div>
    </div>
  );
}
