import styles from "../styles/Hero.module.css";
import { useHero } from "../hooks/useHero";
import { useCarousel } from "../hooks/useCarousel";

export default function Hero() {
  const { data: hero, loading } = useHero();
  const totalSlides = hero?.images.length ?? 0;

  const { currentSlide, goToSlide, prevSlide, nextSlide } = useCarousel(totalSlides);

  if (loading || !hero) return null;

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.slidesWrapper}>
        {hero.images.map((img, index) => (
          <div
            key={index}
            className={`${styles.slide} ${index === currentSlide ? styles.slideActive : ""}`}
          >
            <img
              src={img.url}
              alt={`${hero.title} - View ${index + 1}`}
              className={styles.slideImage}
              loading={index === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
        <div className={styles.overlay} />
      </div>

      <div className={styles.content}>
        <span className={styles.tagline}>Where the jungle meets the sea</span>
        <h1 className={styles.title}>{hero.title}</h1>
        <p className={styles.description}>{hero.description}</p>
        <a href="#rooms" className={styles.ctaButton}>
          Explore Our Rooms
        </a>
      </div>

      {totalSlides > 1 && (
        <>
          <button
            className={`${styles.arrow} ${styles.arrowLeft}`}
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            ‹
          </button>
          <button
            className={`${styles.arrow} ${styles.arrowRight}`}
            onClick={nextSlide}
            aria-label="Next slide"
          >
            ›
          </button>
        </>
      )}

      {totalSlides > 1 && (
        <div className={styles.dots}>
          {hero.images.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === currentSlide ? styles.dotActive : ""}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
}