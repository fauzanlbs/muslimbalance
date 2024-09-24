import React, { useState, useEffect } from "react";
import { PlusCircle, MinusCircle, Trophy } from "lucide-react";

const aspects = ["Quran", "Arabic", "Dunya", "Sport"];
const colors = ["yellow", "cyan", "pink", "purple"];

const RetroProgressBar = ({ value, max, color }) => (
  <div
    className={`w-full h-8 bg-gray-300 border-4 border-gray-700 rounded-full overflow-hidden`}
  >
    <div
      className={`h-full bg-${color}-500`}
      style={{ width: `${(value / max) * 100}%` }}
    ></div>
  </div>
);

const App = () => {
  const [goals, setGoals] = useState({
    Quran: 30,
    Arabic: 30,
    Dunya: 60,
    Sport: 30,
  });
  const [progress, setProgress] = useState({
    Quran: 0,
    Arabic: 0,
    Dunya: 0,
    Sport: 0,
  });
  const [streaks, setStreaks] = useState({
    Quran: 0,
    Arabic: 0,
    Dunya: 0,
    Sport: 0,
  });
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const allGoalsReached = Object.keys(progress).every(
      (key) => progress[key] >= goals[key]
    );
    if (allGoalsReached) {
      setShowAlert(true);
      setStreaks((prev) => {
        const newStreaks = { ...prev };
        Object.keys(newStreaks).forEach((key) => {
          newStreaks[key] += 1;
        });
        return newStreaks;
      });
      setTimeout(() => setShowAlert(false), 3000);
    }
  }, [progress, goals]);

  const handleIncrement = (aspect) => {
    setProgress((prev) => ({
      ...prev,
      [aspect]: Math.min(prev[aspect] + 5, goals[aspect]),
    }));
  };

  const handleDecrement = (aspect) => {
    setProgress((prev) => ({
      ...prev,
      [aspect]: Math.max(prev[aspect] - 5, 0),
    }));
  };

  return (
    <div className="min-h-screen bg-orange-100 p-8 font-mono">
      <h1
        className="text-7xl font-bold text-center mb-8 text-purple-800 tracking-tight"
        style={{ textShadow: "3px 3px 0px #FFA07A" }}
      >
        MUSLIM BALANCE
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {aspects.map((aspect, index) => (
          <div
            key={aspect}
            className={`bg-${colors[index]}-200 p-6 rounded-lg border-4 border-gray-800 shadow-retro`}
          >
            <h2
              className="text-4xl font-bold mb-4 text-gray-800"
              style={{ textShadow: "2px 2px 0px #FFFFFF" }}
            >
              {aspect}
            </h2>
            <RetroProgressBar
              value={progress[aspect]}
              max={goals[aspect]}
              color={colors[index]}
            />
            <div className="flex justify-between items-center mt-4">
              <button
                onClick={() => handleDecrement(aspect)}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full border-4 border-gray-800 focus:outline-none"
              >
                <MinusCircle size={32} />
              </button>
              <span className="text-4xl font-bold text-gray-800">
                {progress[aspect]} / {goals[aspect]}
              </span>
              <button
                onClick={() => handleIncrement(aspect)}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full border-4 border-gray-800 focus:outline-none"
              >
                <PlusCircle size={32} />
              </button>
            </div>
            <div className="mt-4 flex items-center justify-center bg-white p-2 rounded-lg border-2 border-gray-800">
              <Trophy className="text-yellow-500 mr-2" size={32} />
              <span className="text-2xl font-bold text-gray-800">
                Streak: {streaks[aspect]} days
              </span>
            </div>
          </div>
        ))}
      </div>
      {showAlert && (
        <div className="mt-8 bg-green-300 border-4 border-gray-800 p-4 rounded-lg animate-pulse">
          <div className="flex">
            <div className="flex-shrink-0">
              <Trophy className="h-12 w-12 text-yellow-500" />
            </div>
            <div className="ml-4">
              <h3
                className="text-4xl font-bold text-purple-800"
                style={{ textShadow: "2px 2px 0px #FFFFFF" }}
              >
                Radical, dude!
              </h3>
              <p className="text-2xl text-gray-800 mt-2">
                You've crushed all your goals for today. Totally awesome!
              </p>
            </div>
          </div>
        </div>
      )}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap");

        body {
          font-family: "Press Start 2P", cursive;
        }

        .shadow-retro {
          box-shadow: 8px 8px 0px #000000;
        }
      `}</style>
    </div>
  );
};

export default App;
