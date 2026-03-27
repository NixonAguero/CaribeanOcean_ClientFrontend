import { useResponsiveItems } from './useResponsiveItems';
import { usePagination } from './usePagination';

export function useCarousel<T>(items: T[] | undefined) {
  const itemsToShow = useResponsiveItems(3);
  const safeItems = items || [];
  
  const { currentIndex, next, prev } = usePagination(safeItems.length, itemsToShow);

  const visibleItems = safeItems.slice(currentIndex, currentIndex + itemsToShow);

  return {
    currentIndex,
    next,
    prev,
    visibleItems,
  };
}