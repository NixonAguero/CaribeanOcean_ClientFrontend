import styles from "./Rooms.module.css";

interface Props {
  data?: any;
}

export const Rooms = ({ data }: Props) => {
  return (
    <div className={styles.container}>
      <h2>Rooms</h2>
    </div>
  );
};