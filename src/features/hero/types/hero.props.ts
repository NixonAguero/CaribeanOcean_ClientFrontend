import type { HeroImage } from "./hero.types";

export interface HeroCarruselProps {
    images: HeroImage[];
    currentSlide: number;
    title: string;
}

export interface HeroContentProps {
    title: string;
    description: string;
}

export interface HeroArrowProps {
    onPrev: () => void;
    onNext: () => void;
}

export interface HeroDotsProps {
    totalSlides: number;
    currentSlide: number;
    onSelect: (index: number) => void;
}