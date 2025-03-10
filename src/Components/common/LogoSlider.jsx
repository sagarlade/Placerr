
import React from "react";
import "./IconsStyle.css";
import MS from "../../assets/3m.png"
import S from "../../assets/budweiser.png"
import D from "../../assets/buzzfeed.png"
import E from "../../assets/forbes.png"
import F from "../../assets/macys.png"
import G from "../../assets/menshealth.png"
import H from "../../assets/mrbeast.png"

const LogoSlider = () => {
  return (
    <div>
      <div className="wrapper">
        <div className="item item1">
          <img src={MS} alt="3M" />
        </div>
        <div className="item item2">
          <img src={S} alt="Budweiser" />
        </div>
        <div className="item item3">
          <img src={S} alt="Budweiser" />
        </div>
        <div className="item item4">
          <img src={D} alt="Buzzfeed" />
        </div>
        <div className="item item5">
          <img src={E} alt="Forbes" />
        </div>
        <div className="item item6">
          <img src={F} alt="Macy's" />
        </div>
        <div className="item item7">
          <img src={G} alt="Men's Health" />
        </div>
        <div className="item item8">
          <img src={H} alt="MrBeast" />
        </div>
      </div>
    </div>
  );
};

export default LogoSlider;
