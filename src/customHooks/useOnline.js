//Custom Hook for Online/Offline feature

import { useEffect, useState } from "react";

const useOnline = () => {
  const [isOnline, setIsOnline] = useState(() =>{
    return navigator.onLine
})

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
    };
    const handleOffline = () => {
      setIsOnline(false);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  });

  return isOnline;
};

export default useOnline;
