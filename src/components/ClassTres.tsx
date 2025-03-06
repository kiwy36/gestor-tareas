import React, { useEffect, useState } from "react";


const ClassTres: React.FC = () => {
  const [index, setIndex] = useState(1);
  const [fizzBuzzValue, setFizzBuzzValue] = useState<string>("");

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex < 100 ? prevIndex + 1 : 1));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const getFizzBuzzValue = (i: number) => {
      if (i % 15 === 0) return "FizzBuzz";
      if (i % 3 === 0) return "Fizz";
      if (i % 5 === 0) return "Buzz";
      return i.toString();
    };
    setFizzBuzzValue(getFizzBuzzValue(index));
  }, [index]);

  return (
    <div>
      <ul>
        <li>{fizzBuzzValue}</li>
      </ul>
    </div>
  );
};

export default ClassTres;
