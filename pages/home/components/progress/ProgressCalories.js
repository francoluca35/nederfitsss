import React from 'react';
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";


const ProgressCalories = ({ percentageCalories })=> {
 

  return (
    <div style={{ width: "100px" }}>
      <CircularProgressbar
        value={percentageCalories}
        text={`${percentageCalories}%`}
        styles={buildStyles({
          textSize: "16px",
          textColor: "#EB2626",
          pathColor: "#EB2626",
          trailColor: "#d6d6d6",
        })}

      />
      <h6 className='text-white text-center'>Calories</h6>
    </div>
    
  );
};


export default ProgressCalories;
