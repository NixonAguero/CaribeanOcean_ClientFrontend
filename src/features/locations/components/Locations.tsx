import styles from "./Locations.module.css";

interface Props {
  data?: any;
}

export const Locations = ({ data }: Props) => {
  return (
    <div className={styles.container}>
      <h2>Locations</h2>
    </div>
  );
};