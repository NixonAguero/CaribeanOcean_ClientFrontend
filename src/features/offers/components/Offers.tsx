import { useOffers } from "../hooks/useOffers";
import { useCarousel } from "../hooks/useCarousel";
import styles from "../styles/Offers.module.css";
import OfferCard from "./OfferCard";

export default function Offers() {

  const {data : offers, loading} = useOffers();
  const { visibleItems, next, prev } = useCarousel(offers);

  if (loading) {
    return <div className={styles.container}>Loading special offers...</div>;
  }

  return (
    <div className={styles.container}>
      <h2 className={`text-h2 ${styles.title}`}>Special Offers</h2>
      
      <div className={styles.carouselWrapper}>
        <button className={styles.arrow} onClick={prev} aria-label="Previous offers">
          &#10094;
        </button>
        
        <div className={styles.grid}>
          {visibleItems && visibleItems.length > 0 ? (
            visibleItems.map((offer) => (
              <OfferCard key={offer.id} offer={offer} />
            ))
          ) : (
            <p>There are no current offers.</p>
          )}
        </div>

        <button className={styles.arrow} onClick={next} aria-label="Next offers">
          &#10095;
        </button>
      </div>

    </div>
  );
};