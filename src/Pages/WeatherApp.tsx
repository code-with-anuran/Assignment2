import axios from "axios";
import { useEffect, useState, type ChangeEvent } from "react";

interface weatherInterface {
  name?: string;
  message: string;
  main?: {
    feels_like?: number;
    grnd_level?: number;
    humidity?: number;
    pressure?: number;
    sea_level?: number;
    temp?: number;
    temp_max?: number;
    temp_min?: number;
  };
  sys?: {
    country?: string;
    sunrise?: number;
    id?: number;
    sunset?: number;
  };
}

const WeatherApp = () => {
  const [weather, setWeather] = useState<weatherInterface>();
  const [city, setCity] = useState("");

  const [showCity, setShowCity] = useState("");

  const [loading, setLoading] = useState(false);


  const apikey = "74751f4bd472e679e32d0a19995edc8f";

  const getWather = async () => {
    setLoading(true);
    try {
      const Response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`
      );
      console.log("response", Response);

      setWeather(Response?.data);
    } catch (error) {
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getWather();
  }, [showCity]);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-500 via-sky-400 to-cyan-400 flex items-center justify-center px-4">
        <div className="w-full max-w-md bg-white/20 backdrop-blur-md rounded-2xl shadow-xl p-6 text-white">
          <h1 className="text-3xl font-bold text-center mb-6"> Weather</h1>

          <div className="flex gap-2 mb-6">
            <input
              type="text"
              value={city}
              className="flex-1 px-3 py-2 rounded-xl bg-white/30 placeholder-white/70 outline-none"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setCity(e.target.value)
              }
            />

            <button
              onClick={() => setShowCity(city)}
              className="bg-white/30 hover:bg-white/40 p-2 rounded-xl text-black text-lg"
            >
              Search
            </button>
          </div>

          {weather?.name ? (
            loading ? (
              <p>...loading</p>
            ) : (
              <div>
                {showCity ? (
                  <div className="text-center space-y-4">
                    <h2 className="flex justify-center items-center gap-2 text-3xl font-semibold">
                      City: {weather?.name}
                    </h2>

                    <div className="flex justify-center items-center text-left gap-4">
                      <div>
                        <p className="text-xl font-bold">
                          Temperature: {weather?.main?.temp?.toFixed(1)}°C
                        </p>
                        <p className="text-xl font-bold">
                          Max Temperature: {weather?.main?.temp_max?.toFixed(1)}
                          °C
                        </p>
                        <p className="text-xl font-bold">
                          Feels Like: {weather?.main?.feels_like?.toFixed(1)}°C
                        </p>
                        <p className="text-xl font-bold">
                          Humidity: {weather?.main?.humidity}% | Pressure:{" "}
                          {weather?.main?.pressure} hPa
                        </p>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            )
          ) : (
            <p>City not found.....</p>
          )}
        </div>
      </div>
    </>
  );
};

export default WeatherApp;
