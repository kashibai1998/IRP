import { useEffect, useRef, useState } from "react";
import "./styles.css";

export default function App() {
  const [inputArr, setInputArr] = useState(new Array(5).fill(""));
  const refArr = useRef([]);
  useEffect(() => {
    refArr.current[0].focus();
  }, []);

  const handleInputChange = (value, index) => {
    if (isNaN(value)) return;
    const newValue = value.trim();
    const newArr = [...inputArr];
    newArr[index] = newValue.slice(-1);
    setInputArr(newArr);
    newValue && refArr.current[index + 1]?.focus();
  };

  const handleKeyDown = (e, index) => {
    if (!e.target.value && e.key === "Backspace") {
      refArr.current[index - 1]?.focus();
    }
  };

  return (
    <div className="App">
      <p>Validate OTP</p>
      {inputArr.map((input, index) => {
        return (
          <input
            key={index}
            className="otp-input"
            value={inputArr[index]}
            ref={(input) => (refArr.current[index] = input)}
            onChange={(e) => handleInputChange(e.target.value, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
          />
        );
      })}
    </div>
  );
}
