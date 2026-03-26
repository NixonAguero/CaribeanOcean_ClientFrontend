import { useState, useRef, useCallback, useEffect } from "react";

export function useCarousel(totalSlides: number, slideInterval: number = 4000) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAutoAdvance = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, slideInterval);
  }, [totalSlides, slideInterval]);

  useEffect(() => {
    if (totalSlides <= 1) return;
    startAutoAdvance();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [totalSlides, startAutoAdvance]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    startAutoAdvance();
  };

  const prevSlide = () => {
    goToSlide((currentSlide - 1 + totalSlides) % totalSlides);
  };

  const nextSlide = () => {
    goToSlide((currentSlide + 1) % totalSlides);
  };

  return {
    currentSlide,
    goToSlide,
    prevSlide,
    nextSlide,
  };
}
