import styles from "./AboutUs.module.css";

interface Props {
  data?: any;
}

export const AboutUs = ({ data }: Props) => {
  return (
    <div className={styles.container}>
      <h2>AboutUs</h2>
    </div>
  );
};