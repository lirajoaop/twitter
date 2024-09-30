import {
  faCalendarAlt,
  faChartBar,
  faFilm,
  faImage,
  faMapMarkedAlt,
  faSmile,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import PropTypes from "prop-types";

export function TwitterForm({ onTweet }) {
  const [tweetLength, setTweetLength] = useState(0);
  const textAreaRef = useRef();

  function handleKeyDown(event) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      if (tweetLength <= 280) {
        handleSubmit();
      }
    }
  }

  function handleChange(event) {
    const value = event.target.value;
    if (value.length <= 280) {
      setTweetLength(value.length);
    }
    textAreaRef.current.value = value.slice(0, 280);
  }

  function handleSubmit() {
    if (textAreaRef.current.value && tweetLength <= 280) {
      onTweet(textAreaRef.current.value);
      textAreaRef.current.value = "";
      setTweetLength(0);
    }
  }

  return (
    <div className="border-b border-gray-800 p-4">
      <textarea
        className="w-full bg-transparent text-white text-xl resize-none outline-none"
        placeholder="What's happening?"
        ref={textAreaRef}
        onKeyDown={handleKeyDown}
        onChange={handleChange}
      />

      <div className="flex justify-between items-center mt-4">
        <span className="text-base">{tweetLength}/280</span>
        <div className="flex space-x-4">
          <FontAwesomeIcon
            icon={faImage}
            className="text-twitter-blue cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faFilm}
            className="text-twitter-blue cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faChartBar}
            className="text-twitter-blue cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faSmile}
            className="text-twitter-blue cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faCalendarAlt}
            className="text-twitter-blue cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faMapMarkedAlt}
            className="text-twitter-blue cursor-pointer"
          />
        </div>
        <button
          className="bg-twitter-blue text-white font-medium lg:font-bold px-4  py-2  rounded-full hover:bg-blue-600 transition duration-200"
          onClick={handleSubmit}
          disabled={tweetLength > 280}
        >
          Tweet
        </button>
      </div>
    </div>
  );
}

TwitterForm.propTypes = {
  onTweet: PropTypes.func,
};
