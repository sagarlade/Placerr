
import React from "react";
import "./IconsStyle.css";
import Budweiser from "../../assets/budweiser.png"
import Buzzfeed from "../../assets/buzzfeed.png"
import Forbes from "../../assets/forbes.png"
import Macys from "../../assets/macys.png"
import Menshealth from "../../assets/menshealth.png"
import Mrbeast from "../../assets/mrbeast.png"

const LogoSlider = () => {
  return (
    <div>
      <div className="wrapper">
        <div className="item item1">
          <img src={Budweiser} alt="budewiser" />
        </div>
        <div className="item item2">
          <img src={Budweiser} alt="Budweiser" />
        </div>
        <div className="item item3">
          <img src={Buzzfeed} alt="Budweiser" />
        </div>
        <div className="item item4">
          <img src={Buzzfeed} alt="Buzzfeed" />
        </div>
        <div className="item item5">
          <img src={Forbes} alt="Forbes" />
        </div>
        <div className="item item6">
          <img src={Macys} alt="Macy's" />
        </div>
        <div className="item item7">
          <img src={Menshealth} alt="Men's Health" />
        </div>
        <div className="item item8">
          <img src={Mrbeast} alt="MrBeast" />
        </div>
      </div>
    </div>
  );
};

export default LogoSlider;
