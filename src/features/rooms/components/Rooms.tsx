import RoomsCarousel from "./RoomsCarousel";
import styles from "../styles/rooms.module.css";

interface Props {
  data?: any;
  loading?: boolean;
}

export const Rooms = ({ data, loading }: Props) => {
  return (
    <div className={styles.container}>
      <h2 className="title">Rooms</h2>

      {loading && <p>Loading rooms...</p>}

      {!loading && data?.length > 0 && (
        <RoomsCarousel rooms={data} />
      )}
    </div>
  );
};