import { useEffect, useState } from "react";

export const TodoDate = () => {
  const [dateTime, setDateTime] = useState("");
  //Todo Date and time
  // Use useEffect for clean up
  useEffect(() => {
    const interval = setInterval(() => {
      const today = new Date();
      const date = today.toLocaleDateString();
      const time = today.toLocaleTimeString();
      setDateTime(`${date} - ${time}`);
    }, 1000);
    return () => clearInterval(interval); //clean up function to clear interval when component unmounts
  }, []);

  return <h2 className="date-time">{dateTime}</h2>;
};
