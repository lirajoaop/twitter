import { useState, useEffect } from "react";
import { Sidebar } from "./components/Sidebar";
import { Tweet } from "./components/Tweet";
import { TwitterForm } from "./components/TwitterForm";
import { getAvatar, getRandomImage } from "./utils/generateImages";
import { v4 } from "uuid";

function App() {
  const [tweets, setTweets] = useState([]);

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

  const randomTweet = () => {};

  const addNewTweet = (content, includeImage = false) => {
    const newTweet = {
      id: v4,
      name: "User",
      username: `user${Math.floor(Math.random() * 1000)}`,
      avatar: getAvatar(`user${Math.floor(Math.random() * 1000)}@email.com`),
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
      <div className="flex mx-auto max-w-7xl ">
        <Sidebar />
        <main className="flex-grow border-l border-r border-gray-700 max-w-xl">
          <header className="sticky top-0 z-10 bg-twitter-background bg-opacity-80 backdrop-blur-sm">
            <h2 className="px-4 py-3 text-xl font-bold">For You</h2>
          </header>
          <TwitterForm
            onTweet={(content) => addNewTweet(content, Math.random() > 0.6)}
          />
          <div>
            {tweets.map((tweet) => (
              <Tweet key={tweet.id} tweet={tweet} />
            ))}
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
