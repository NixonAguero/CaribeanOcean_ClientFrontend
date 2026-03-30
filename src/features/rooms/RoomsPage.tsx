import { useRooms } from "./hooks/useRooms";
import { Rooms } from "./components/Rooms";
import { Footer } from "../../app/layout/Footer/Footer";

export const RoomsPage = () => {
  const { data } = useRooms();

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <main style={{ flex: 1 }}>
        <Rooms data={data} />
      </main>
      <Footer />
    </div>
  );
};