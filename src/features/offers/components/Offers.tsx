import styles from "./Offers.module.css";

interface Props {
  data?: any;
}

export const Offers = ({ data }: Props) => {
  return (
    <div className={styles.container}>
      <h2>Offers</h2>
    </div>
  );
};