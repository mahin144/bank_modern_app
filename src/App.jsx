import styles from "./style";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>navBar</div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div classname={`${styles.boxWidth}`}>Hero</div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div classname={`${styles.boxWidth}`}>stats</div>
    </div>
  </div>
);

export default App;
