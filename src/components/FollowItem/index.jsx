import PropTypes from "prop-types";

export function FollowItem({ name, username, avatarUrl }) {
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
      <button className="bg-white text-black rounded-full font-bold py-2 px-4 hover:bg-gray-300 transition duration-200">
        Follow
      </button>
    </div>
  );
}

FollowItem.propTypes = {
  name: PropTypes.string,
  username: PropTypes.string,
};
