import { useNavigate } from "react-router-dom";
import styles from "../styles/rooms.module.css";
import { Badge } from "./Badge";

interface Props {
  room: any;
  isActive: boolean;
}

export default function RoomCard({ room, isActive }: Props) {
  const navigate = useNavigate();

  const handleBook = () => {
    if (isActive) {
      navigate("/reservation"); 
    }
  };

  return (
    <div className={`${styles.card} ${isActive ? styles.active : ""}`}>
      <img src={room.image} alt={room.title} />

      <h3>{room.title}</h3>
      <p>${room.price}</p>

      <button
        className={styles.button}
        onClick={handleBook}
        disabled={!isActive} 
        style={{
          cursor: isActive ? "pointer" : "not-allowed",
          opacity: isActive ? 1 : 0.5
        }}
      >
        Book
      </button>

      <div className={styles.features}>
        {room.features?.map((f: string, i: number) => (
          <Badge key={i} text={f} />
        ))}
      </div>
    </div>
  );
}