import axios from "axios";
import React, { useEffect, useState } from "react";

interface JokeData {
  setup: string;
  punchline: string;
}

const JokeGenerator: React.FC = () => {
  const [joke, setJoke] = useState<JokeData | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get<JokeData>(
        "https://official-joke-api.appspot.com/random_joke"
      );
      setJoke(response.data);
    } catch (error) {
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log("response", joke);

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-100 px-4">
        <div className="max-w-md w-full bg-slate-900/80 border border-slate-700 rounded-2xl shadow-2xl p-6 sm:p-8 backdrop-blur">
          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl font-semibold text-center mb-2">
            Random Joke Generator
          </h1>
          <p className="text-slate-400 text-center mb-6 text-sm">
            Click the button below to get a fresh joke anytime 😄
          </p>

          {/* Joke box */}
          <div className="bg-slate-800/80 rounded-xl p-4 sm:p-5 mb-6 min-h-[100px] flex flex-col justify-center">
            {joke ? (
              <>
                <p className="font-medium mb-2 leading-relaxed">
                  {joke.setup}
                </p>
                <p className="text-emerald-400 font-semibold">
                  {joke.punchline}
                </p>
              </>
            ) : (
              <p className="text-slate-400 text-center text-sm">
                Click the button to load a joke.
              </p>
            )}
          </div>

          {/* Button */}
          <button
            onClick={fetchData}
            disabled={loading}
            className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 disabled:opacity-70 disabled:cursor-not-allowed transition-all py-3 text-sm sm:text-base font-semibold shadow-lg shadow-emerald-500/30"
          >
            {loading && (
              <svg
                className="animate-spin h-4 w-4 sm:h-5 sm:w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
              </svg>
            )}
            {loading ? "Getting a joke..." : "Click for New Joke"}
          </button>
        </div>
      </div>
    </>
  );
};

export default JokeGenerator;
