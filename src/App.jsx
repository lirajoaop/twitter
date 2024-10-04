import { useState, useEffect } from "react";
import { Sidebar } from "./components/Sidebar";
import { Tweet } from "./components/Tweet";
import { TwitterForm } from "./components/TwitterForm";
import { getAvatar, getRandomImage } from "./utils/generateImages";
import { v4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faSearch,
  faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons";
import { TrendItem } from "./components/TrendItem";
import { FollowItem } from "./components/FollowItem";
import TweetFeatherButton from "./components/TweetFeatherButton";
import { MobileMenu } from "./components/MobileMenu";

function App() {
  const [tweets, setTweets] = useState([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      addNewRandomTweets();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const addNewRandomTweets = () => {
    const randomTweets = [
      "Excited to share my latest project with you all! Stay tuned for updates. 💻✨ #coding #developer",
      "Just tried this amazing new recipe, and it was a total game-changer! 🍲🔥 #foodie #homemade",
      "Can’t believe how fast this year is flying by. Time to start planning for 2025! ⏳#goals #productivity",
      "Found this beautiful spot while hiking today. Nature never ceases to amaze me. 🌲🌄 #wanderlust #naturelover",
      "What’s everyone watching this weekend? Looking for new movie recommendations! 🎥🍿 #movienight #suggestions",
      "Trying to stay productive but the weather outside is just too nice. ☀️🌻 #workfromhome #distractions",
      "Reminder: Drink more water today! Your body will thank you later. 💧#hydration #healthyliving",
      "Currently reading this amazing book on self-improvement. 📚 Any other recommendations? #booklover #reading",
      "Finally got around to cleaning my workspace. Feeling so much more organized now! 🧹🖥️ #productivity #workspace",
      "Listening to this new album on repeat! So good! 🎧🎶 #musiclover #newrelease",
      "When you wake up and realize it's Friday! 🎉 #TGIF #weekendvibes",
      "Had the best coffee today, totally made my morning! ☕😊 #coffeeaddict #morningrituals",
      "Sometimes you just need to disconnect and recharge. Taking a break from social media for a while. 🌿📵 #mentalhealth #selfcare",
      "Anyone else addicted to this new series on Netflix? Can’t stop binge-watching! 📺🍿 #Netflix #bingewatching",
      "Just saw the most stunning sunset! 🌅 #sunsetlover #eveningvibes",
      "Trying out a new workout routine today. Let’s see how this goes! 💪 #fitnessjourney #goals",
      "Can’t wait for the holiday season! Already planning my travel itinerary. ✈️🎄 #holidayplanning #wanderlust",
      "Working on a new blog post. Stay tuned for tips on how to stay productive while working remotely! 📝 #blogging #remotework",
      "Grateful for the small things in life. 🌸 #gratitude #positivity",
      "Is it just me, or do Mondays come around way too fast? 😅 #MondayBlues #weekendwarrior",
    ];

    const randomTweet =
      randomTweets[Math.floor(Math.random() * randomTweets.length)];

    addNewTweet(randomTweet, Math.random() > 0.7);
  };

  const addNewTweet = (
    content,
    includeImage = false,
    user = null,
    username = null,
    avatar = null
  ) => {
    const newTweet = {
      id: v4(),
      name: user || "User",
      username: username || `user${Math.floor(Math.random() * 1000)}`,
      avatar:
        avatar ||
        getAvatar(`user${Math.floor(Math.random() * 1000)}@email.com`),
      content,
      time: new Date().toLocaleString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      image: includeImage ? getRandomImage() : null,
      likes: 0,
      retweets: 0,
      comments: 0,
    };

    setTweets((prevTweets) => [newTweet, ...prevTweets]);
  };

  return (
    <>
      <div className="flex mx-auto max-w-7xl">
        <Sidebar />
        {/* Less Opacity Overlay */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-40 xl:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
        )}
        <MobileMenu isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />
        <main className="flex-grow border-l border-r border-gray-700 max-w-xl">
          <header className="sticky top-0 z-10 bg-twitter-background bg-opacity-80 backdrop-blur-sm">
            {/* Desktop */}
            <h2 className="px-4 py-3 text-xl font-bold hidden xl:block">
              For You
            </h2>
            {/* Desktop */}

            {/* Mobile */}
            <div className="flex justify-between items-center p-4 py-5">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="xl:hidden"
              >
                <FontAwesomeIcon icon={faBars} size="xl" />
              </button>

              <h2 className="inline xl:hidden text-center text-xl font-bold">
                Home
              </h2>
              <FontAwesomeIcon
                icon={faWandMagicSparkles}
                className="text-xl font-bold inline xl:hidden"
              />
            </div>
            {/* Mobile */}
          </header>
          <TwitterForm
            onTweet={(content) =>
              addNewTweet(
                content,
                Math.random() > 0.6,
                "Miles",
                "miles_morales",
                "/images/miles-profile.png"
              )
            }
          />
          <div>
            {tweets.map((tweet) => {
              return <Tweet key={tweet.id} tweet={tweet} />;
            })}
          </div>
        </main>
        <aside className="hidden xl:block w-80 px-4">
          <div className="sticky top-0 pt-2">
            <div className="relative">
              <FontAwesomeIcon
                icon={faSearch}
                className="absolute top-3 left-3 text-gray-500"
              />
              <input
                placeholder="Search Twitter"
                className="w-full bg-gray-800 text-white rounded-full outline-none py-2 pl-10 pr-4"
              />
            </div>
            <div className="bg-gray-800 rounded-xl mt-4 p-4">
              <h2 className="font-bold text-xl mb-4">Subscribe to Premium</h2>
              <p className="text-gray-400 mb-4">
                Subscribe to unlock new features and if eligible, receive a
                share of ads revenue.
              </p>
              <button className="bg-twitter-blue font-bold py-2 px-4 rounded-full hover:bg-blue-600 transition duration-200">
                Subscribe
              </button>
            </div>
            <div className="bg-gray-800 rounded-xl mt-4 p-4">
              <h2 className="font-bold text-xl mb-4">What's happening</h2>
              <TrendItem
                category="eSports · Trending"
                name="TitaN"
                tweetCount="1342 tweets"
              />
              <TrendItem
                category="eSports · Trending"
                name="paiN Gaming"
                tweetCount="2560 tweets"
              />
              <TrendItem
                category="Music"
                name="Kanye West"
                tweetCount="3564 tweets"
              />
              <TrendItem
                category="League of Legends"
                name="Worlds 2024 Play-In"
                tweetCount="5249 tweets"
              />
              <TrendItem category="Music" name="333" tweetCount="3030 tweets" />
            </div>
            <div className="bg-gray-800 rounded-xl mt-4 p-4">
              <h2 className="font-bold text-xl mb-4">Who to follow</h2>
              <FollowItem
                name="Matue"
                username="matue"
                avatarUrl="/images/matue-profile.png"
              />
              <FollowItem
                name="TitaN"
                username="titanlol1"
                avatarUrl="/images/titan-profile.png"
              />
            </div>
          </div>
        </aside>
        <TweetFeatherButton />
      </div>
    </>
  );
}

export default App;
