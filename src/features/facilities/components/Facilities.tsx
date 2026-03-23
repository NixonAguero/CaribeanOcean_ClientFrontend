import styles from "./Facilities.module.css";

interface Props {
  data?: any;
}

export const Facilities = ({ data }: Props) => {
  return (
    <div className={styles.container}>
      <h2>Facilities</h2>
    </div>
  );
};