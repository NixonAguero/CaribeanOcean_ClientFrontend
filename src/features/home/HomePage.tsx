import { useHome } from "./hooks/useHome";
import { Home } from "./components/Home";

export const HomePage = () => {
  const { data, loading } = useHome();

  if (loading) return <p>Cargando...</p>;

  return (
    <main>
      <h1>Home</h1>
      <Home data={data} />
    </main>
  );
};