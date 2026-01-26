import { useEffect, useState } from 'react';
import './styles.css'
const ProgressBar = ({ progress }) => {

  const [animatedProgress, setAnimatedProgress] = useState(0)

  useEffect(() => {
    setTimeout(() => { setAnimatedProgress(progress) }, 200)
  }, [progress])

  return (
    <div className="outer">
      <div
        className="inner"
        role="progressbar"
        area-valuenow={progress}
        area-valuemax="100"
        area-valuemin="0"
        style={{

          transform: `translateX(${animatedProgress - 100}%)`,
          color: animatedProgress < 5 ? "black" : "white"
        }}
      >
        {animatedProgress}%
      </div>
    </div>
  );
};
export default ProgressBar;

// .App {
//     font-family: sans-serif;
//     text-align: center;
//   }
  
//   .outer {
//     border: 1px solid black;
//     border-radius: 10px;
//     overflow: hidden;
//     margin: 10px 0px;
//   }
  
//   .inner {
//     background-color: green;
//     color: white;
//     padding: 1px;
//     transition: 1s ease-in;
//     text-align: right;
//   }
