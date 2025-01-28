import React, { useEffect, useState } from "react";
import "./Ironman.css"; 
import { assets } from "../assets/assets";

const IronMan = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Automatically remove the component after the animation ends
    const timer = setTimeout(() => {
      setVisible(false);
    }, 7000); // Total duration: 7 seconds (flyIn + wave + flyOut)

    return () => clearTimeout(timer);
    
  }, []);
  console.log(assets.ironman);

  if (!visible) return null; // Hide the component when animation is done

  return (
    <div className="iron-man-container">
      <div className="iron-man">
        <img
          src={assets.ironman}
          alt="Iron Man"
          className="iron-man-image"
        />
        <p className="greeting">Hello, User!</p>
        
      </div>
    </div>
  );
};

export default IronMan;
