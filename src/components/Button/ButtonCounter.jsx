import styles from "./ButtonCounter.module.css";

function ButtonCounter({ counter, handleClick }) {
  return (
    <div className={styles.container}>
      <div>{counter}</div>
      <button type="button" className={styles.buttonsize} onClick={handleClick}>
        Button
      </button>
    </div>
  );
}

export default ButtonCounter;
