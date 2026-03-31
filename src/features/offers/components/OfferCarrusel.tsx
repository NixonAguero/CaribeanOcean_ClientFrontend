import type { OfferCarruselProps } from "../types/offers.props";
import styles from "../styles/Offers.module.css";
import OfferCard from "./OfferCard";
import { useCarousel } from "../hooks/useCarousel";

export default function OfferCarrusel({offers} : OfferCarruselProps){

    if(offers.length == 0) return null;
    const { visibleItems, next, prev } = useCarousel({ offers });

    return (
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
    );
}