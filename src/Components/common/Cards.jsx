
import React from "react";
import { DollarSign, Zap, Users } from "lucide-react";
import Styles from "./common.module.css"; // Import the CSS file for styling

const plans = [
  {
    name: "60%",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    subtitle: "Lower Costs",
    icon: <DollarSign size={50} className={Styles.icon} />,
  },
  {
    name: "2.5X",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    subtitle: "Faster than traditional hiring",
    icon: <Zap size={50} className={Styles.icon} />,
  },
  {
    name: "3X",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    subtitle: "More qualified candidates",
    icon: <Users size={50} className={Styles.icon} />,
  },
];

const Card = () => {
  return (
    <div className="container">
      <div className={Styles.row}>
        {plans.map((plan, index) => (
          <div key={index} className={Styles.cardWrapper}>
            <div className={Styles.card}>
              <div className={Styles.iconContainer}>{plan.icon}</div>
              <h1 className={Styles.cardTitle}>{plan.name}</h1>
              <div className={Styles.subtitle}>{plan.subtitle}</div>
              <p className={Styles.description}>{plan.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;


