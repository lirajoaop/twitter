import PropTypes from "prop-types";
import { useState } from "react";

export function FollowItem({ name, username, avatarUrl }) {
  const [isFollowing, setIsFollowing] = useState(false);

  const toggleFollow = () => {
    setIsFollowing((prevState) => !prevState);
  };

  return (
    <div className="flex items-center justify-between py-3 hover:bg-gray-800 transition duration-200">
      <div className="flex items-center">
        <img
          src={avatarUrl}
          alt="user avatar"
          className="w-12 h-12 rounded-full mr-3"
        />
        <div>
          <p className="font-bold">{name}</p>
          <p className="text-gray-500">{username}</p>
        </div>
      </div>
      <button
        onClick={toggleFollow}
        className={`rounded-full font-bold py-2 px-4 transition duration-200 ${
          isFollowing ? "bg-black text-white" : "bg-white text-black"
        }  transition duration-200}`}
      >
        {isFollowing ? "Following" : "Follow"}
      </button>
    </div>
  );
}

FollowItem.propTypes = {
  name: PropTypes.string,
  username: PropTypes.string,
};
