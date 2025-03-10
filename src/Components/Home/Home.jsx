import React, { useEffect } from "react";
import styles from "./Herosection.module.css";
import LogoSlider from "../common/LogoSlider";
import Card from "../common/Cards";
import Timeline from "../Timelines/Timeline";
import NewsletterSubscribe from "../News/Newsletter";
import BrandsIcon from "../common/BrandsIcon";
import Contact from "../Info/collegeplacInfo";
import Placerr from "../Layout/Placer";
import { useNavigate } from "react-router-dom";
import DU from "../../assets/du.png"


const HeroSection = () => {
  const navigate = useNavigate();


  useEffect(() => {
    window.particlesJS("particles-js", {
      particles: {
        number: { value: 100 },
        size: { value: 3 },
        move: { speed: 2 },
        color: { value: "#58c0e9" },
        line_linked: { enable: true, color: "#58c0e9" }
      }
    });
  }, []);

  return (
    <>
      <section className={`${styles.heroSection} container`} style={{ position: "relative"}}>
        {/* Particle Background */}
        <div id="particles-js" style={{ position: "absolute", width: "100%", height: "100%", top: 0, left: 0, zIndex: 0 }}></div>

        <div className="text-center text-white" style={{ position: "relative", zIndex: 1 }}>
          <h1 className={styles.heroTitle}>Campus Placement Automation</h1>
          <p className={styles.heroSubtitle}>
            Enhance your institution's market presence with an efficient end-to-end placement system using AI
          </p>
          <button className={`btn btn-primary mt-3 ${styles.heroButton}`} onClick={() => navigate("./dashboard")}>
            Get Started
          </button>
        </div>
      </section>

      <section className={`container ${styles.featuresSection}`}>
        <div className={styles.feature}>
          <img src={DU} alt="logo" />
        </div>
        <p className={styles.featuredet}></p>
      </section>
      <section>
        <LogoSlider />
      </section>
      <section className="mb-5">
        <Card />
      </section>
      <section style={{ marginTop: 100 }}>
        <Timeline />
      </section>
      <section>
        <NewsletterSubscribe />
      </section>
      <section>
        <BrandsIcon />
      </section>
      <section>
        <Contact />
      </section>
      <section>
        <Placerr />
      </section>
    </>
  );
};

export default HeroSection;
