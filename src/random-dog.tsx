import { useEffect, useState } from "react";

export function RandomDog() {
  const [dogUrl, setDogUrl] = useState<string>("");
  const [loading, setLoading] = useState(true);

  // We move the fetch into a function so we can call it anytime (on load AND on button click)
  const fetchDog = () => {
    setLoading(true);
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        setDogUrl(data.message);
        setLoading(false);
      });
  };

  // Run once on start
  useEffect(() => {
    fetchDog();
  }, []);

  return (
    <div className="bg-white/30 backdrop-blur-md border border-white/40 p-6 rounded-[2.5rem] shadow-2xl flex flex-col items-center gap-4 max-w-sm">
      <h3 className="text-white font-black uppercase text-xs tracking-tighter">Daily Doggy</h3>
      
      <div className="w-64 h-64 rounded-2xl overflow-hidden border-4 border-white/50 shadow-inner bg-gray-200">
        {loading ? (
          <div className="w-full h-full flex items-center justify-center text-gray-500 animate-pulse">Loading...</div>
        ) : (
          <img src={dogUrl} alt="Random Dog" className="w-full h-full object-cover" />
        )}
      </div>

      <button 
        onClick={fetchDog}
        className="w-full bg-blue-600 text-white font-bold py-3 rounded-xl transition-all hover:scale-105 active:scale-95 hover:bg-blue-700 shadow-lg shadow-blue-500/30"
      >
        Refresh Dog 🐶
      </button>
    </div>
  );
}