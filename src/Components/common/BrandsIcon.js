import React from "react";
import "./IconsStyle.css";

const icons = [
  "src/assets/SK.png",
  "data:image/png;base64,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",
];

const shuffleIcons = () => {
  return [...icons].sort(() => Math.random() - 0.6);
};

const BrandsIcon = () => {
  const shuffledIcons = Array.from(
    { length: 30 },
    () => shuffleIcons()[Math.floor(Math.random() * icons.length)]
  );

  return (
    <div className="container-fluid brand_cr">
      <div className="bric_cr">
        <h2>Fits Right <br/> Into Your Workflow.</h2>
        <div className="brc_icons">
          {shuffledIcons.map((icon, index) => (
            <a href="#" className="brc_icon" key={index}>
              <img src={icon} alt="brand-icon" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandsIcon;
