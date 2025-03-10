import { useState } from "react";
import styles from "./AuthForm.module.css";

const AuthForm = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div
      className={`${styles.container} ${
        isSignUp ? styles.rightPanelActive : ""
      }`}
    >
      <div className={styles.formContainer + " " + styles.signUpContainer}>
        <form className={styles.sr_fr}>
          <h1 className={styles.sr_h1}>Create Account</h1>
          <div className={styles.socialContainer}>
            <a href="#" className={styles.social}>
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className={styles.social}>
              <i className="fab fa-google-plus-g"></i>
            </a>
            <a href="#" className={styles.social}>
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <span>or use your email for registration</span>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button className={styles.sr_btn1}>Sign Up</button>
        </form>
      </div>

      <div className={styles.formContainer + " " + styles.signInContainer}>
        <form className={styles.sr_fr}>
          <h1 className={styles.sr_h1}>Sign in</h1>
          <div className={styles.socialContainer}>
            <a href="#" className={styles.social}>
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className={styles.social}>
              <i className="fab fa-google-plus-g"></i>
            </a>
            <a href="#" className={styles.social}>
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <span>or use your account</span>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a href="#">Forgot your password?</a>
          <button className={styles.sr_btn1}>Sign In</button>
        </form>
      </div>

      <div className={styles.overlayContainer}>
        <div className={styles.overlay}>
          <div className={styles.overlayPanel + " " + styles.overlayLeft}>
            <h1 className={styles.sr_h1}>Welcome Back!</h1>
            <p className={styles.sr_p1}>
              To keep connected with us please login with your personal info
            </p>
            <button className={styles.ghost} onClick={() => setIsSignUp(false)}>
              Sign In
            </button>
          </div>
          <div className={styles.overlayPanel + " " + styles.overlayRight}>
            <h1 className={styles.sr_h1}>Hello, Friend!</h1>
            <p className={styles.sr_p1}>
              Enter your personal details and start your journey with us
            </p>
            <button className={styles.ghost} onClick={() => setIsSignUp(true)}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
