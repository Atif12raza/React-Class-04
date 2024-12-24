import React from 'react';
import styles from './Input.module.css';
import img1 from '../images/signup.jpg'
const Input = () => {
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <h3>Sign up</h3>
        <p>Already have an account?</p>
        <label>
          Name
          <input
            className={styles.input}
            type="text"
            placeholder="Enter your name here"
          />
        </label>
        <br />
        <br />
        <label>
          Email id
          <input
            className={styles.input}
            type="email"
            placeholder="Enter your email id here"
          />
        </label>
        <br />
        <br />
        <label>
          Password
          <input
            className={styles.input}
            type="password"
            placeholder="Enter your password here"
          />
        </label>
        <br />
        <br />
        <label>
          <input type="checkbox" />
          By signing up, you agree to receive updates and special offers.
        </label>
        <br />
        <br />
        <button className={styles.submit}>Submit</button>
      </div>

      <div className={styles.imageContainer}>
        <img
          src={img1}
          alt="Sign Up"
        />
      </div>
    </div>
  );
};

export default Input;
