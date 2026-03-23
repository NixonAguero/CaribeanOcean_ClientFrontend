import styles from "./Booking.module.css";

interface Props {
  data?: any;
}

export const Booking = ({ data }: Props) => {
  return (
    <div className={styles.container}>
      <h2>Booking</h2>
    </div>
  );
};