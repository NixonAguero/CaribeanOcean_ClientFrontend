import styles from "../styles/add.module.css";
import { usePublicity } from "../hooks/useAdd";

export default function AddModal() {
  const { currentAdd } = usePublicity(5000);

  if (!currentAdd) return null;

  return (
    <div className={styles["pub-modal"]}>
      <img
        src={currentAdd.imageURL}
        alt="Publicidad"
        className={styles["pub-image"]}
      />
    </div>
  );
}