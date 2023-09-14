import styles from "../styles/mainBody.module.css";
import Header from "./header";
function MainBody() {
  const carNames = [
    "Audi r8",
    "McLaren Senna",
    "Aston Martin",
    "Ferrari LaFerrari",
    "Porsche 918 Spyder",
    "Lotus ST1",
    "Rimac Nevera",
  ];

  const mapCarNames = carNames.map((carName) => {
    return (
      <div key={carName} className={styles.cars}>
        {carName}
      </div>
    );
  });
  return (
    <>
      <Header />;
      <div className={styles.mainBody}>
        <div className={styles.main}>{mapCarNames}</div>
      </div>
    </>
  );
}

export default MainBody;
