import styles from "./Galery.module.css";

interface Props {
  data?: any;
}

export const Galery = ({ data }: Props) => {
  return (
    <div className={styles.container}>
      <h2>Galery</h2>
    </div>
  );
};