import { useState, useEffect } from "react";

function NetStatus(props) {
  const [status, setStatus] = useState(navigator.onLine);

  useEffect(() => {
    const setOnline = () => {
      setStatus(true);
    };
    const setOffline = () => {
      setStatus(false);
    };

    window.addEventListener("online", setOnline);
    window.addEventListener("offline", setOffline);

    return () => {
      window.removeEventListener("online", setOnline);
      window.removeEventListener("offline", setOffline);
    };
  }, [navigator.onLine]);

  props.onStatus(status);

  return null;
}

export default NetStatus;
