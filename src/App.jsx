import { Sidebar } from "./components/Sidebar";
import { Tweet } from "./components/Tweet";
import { TwitterForm } from "./components/TwitterForm";
import { randomUUID } from "node:crypto";

function App() {
  const addNewTweet = (content, includeImage = false) => {
    const newTweet = {
      id: randomUUID,
    };
  };

  return (
    <>
      <div className="flex mx-auto max-w-7xl ">
        <Sidebar />
        <main className="flex-grow border-l border-r border-gray-700 max-w-xl">
          <header className="sticky top-0 z-10 bg-twitter-background bg-opacity-80 backdrop-blur-sm">
            <h2 className="px-4 py-3 text-xl font-bold">For You</h2>
          </header>
          <TwitterForm />
          <div>
            <Tweet />
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
