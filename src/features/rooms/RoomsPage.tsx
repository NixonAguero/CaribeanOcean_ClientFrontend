import { useRooms } from "./hooks/useRooms";
import { Rooms } from "./components/Rooms";

export const RoomsPage = () => {
  const { data, loading } = useRooms();

  if (loading) return <p>Cargando...</p>;

  return (
    <main>
      <h1>Rooms</h1>
      <Rooms data={data} />
    </main>
  );
};