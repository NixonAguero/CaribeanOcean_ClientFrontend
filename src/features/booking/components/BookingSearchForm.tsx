
import styles from './Booking.module.css'
import type { BookingSearchFromProps } from '../types/booking.types';

export const BookingSearchForm = ({
  filters, updateFilter,
  onSearch, hasSearched, error
}: BookingSearchFromProps) => {
return (
    <section className={styles.searchHero}>
      <form className={styles.card} onSubmit={onSearch}>
        <h2 className={styles.title}>Reservation</h2>

        {/* NUEVO: Si la variable de estado error tiene texto, dibujamos la alerta */}
        {error && (
          <div className={styles.errorMessageContainer}>
            <span className={styles.errorIcon}>⚠</span>
            <span>{error}</span>
          </div>
        )}


        <div className={styles.datesGrid}>
          <div className={styles.inputGroup}>
            <label htmlFor="startDate">Start Date</label>
            <input type="date" id="startDate" value={filters.startDate} onChange={(e) => updateFilter("startDate", e.target.value)} required />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="endDate">End Date</label>
            <input type="date" id="endDate" value={filters.endDate} onChange={(e) => updateFilter("endDate", e.target.value)} required />
          </div>
        </div>
        <div className={`${styles.inputGroup} ${styles.centered}`}>
          <label htmlFor="roomType">Room Type</label>
          <select id="roomType" value={filters.roomType} onChange={(e) => updateFilter("roomType", e.target.value)}>
            <option value="">Any Type</option>
            <option value="standard">Standard</option>
            <option value="deluxe">Deluxe</option>
            <option value="suite">Suite</option>
            <option value="villa">Beachfront Villa</option>
          </select>
        </div>
        <button type="submit" className={styles.reserveButton}>
          {hasSearched ? "Search Again" : "Search Availability"}
        </button>
      </form>
    </section>
  );
};
