import { useOffers } from "./hooks/useOffers";
import { Offers } from "./components/Offers";

export const OffersPage = () => {
  const { data, loading } = useOffers();

  if (loading) return <p>Cargando...</p>;

  return (
    <main>
      <h1>Offers</h1>
      <Offers data={data} />
    </main>
  );
};