import React from 'react';
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";


const AnimatedBarChart = ({ percentage })=> {
 

  return (
    <div style={{ width: "100px" }}>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          textSize: "16px",
          textColor: "#3e98c7",
          pathColor: "#3e98c7",
          trailColor: "#d6d6d6",
        })}

      />
      <h6 className='text-white text-center'>Steps</h6>
    </div>
    
  );
};


export default AnimatedBarChart;
