
import { useState, useEffect } from "react";
import { TrendingUp } from "lucide-react";

const LiveSellerCount = () => {
  const [count, setCount] = useState(1247);

  useEffect(() => {
    // Simulate live updates
    const interval = setInterval(() => {
      setCount(prev => prev + Math.floor(Math.random() * 3)); // Random increment 0-2
    }, 10000); // Update every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-purple-50 px-6 py-3 rounded-full border border-purple-200">
      <TrendingUp className="w-5 h-5 text-purple-600" />
      <span className="text-purple-800 font-semibold">
        🚀 {count.toLocaleString()}+ sellers have already joined
      </span>
    </div>
  );
};

export default LiveSellerCount;
