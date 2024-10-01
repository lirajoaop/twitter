import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFeatherAlt } from "@fortawesome/free-solid-svg-icons";

const TweetFeatherButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    // adjustable
    if (window.scrollY > 150) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <button
        onClick={scrollToTop}
        className={`fixed bottom-12 mb-3 right-5 bg-twitter-blue text-white p-4 h-14 w-14 rounded-full shadow-lg transition-all duration-150 ease-in-out ${
          isVisible
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <FontAwesomeIcon icon={faFeatherAlt} className="text-2xl" />
      </button>
    </>
  );
};

export default TweetFeatherButton;
