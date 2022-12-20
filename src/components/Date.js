import { useEffect, useState } from "react";
import "../styles/date.css";

const Date = () => {

  const [date, setDate] = useState(new window.Date());
  // new window.Date()

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  useEffect(() => {
    let timer = setInterval(() => setDate(new window.Date()), 1000);

    return () => clearInterval(timer);
  }, []);

  console.count("rerender");

  return <div class="date">
    <h1>{monthNames[date.getMonth()]} {date.getDate()}, {date.getFullYear()}</h1>
  </div>;

};

export default Date;