
import styles from './Booking.module.css'
import type { BookingSearchFromProps } from '../types/booking.types';

export const BookingSearchForm = ({
    startDate, setStartDate,
  endDate, setEndDate,
  roomType, setRoomType,
  onSearch, hasSearched
}: BookingSearchFromProps) => {
return (
    <section className={styles.searchHero}>
      <form className={styles.card} onSubmit={onSearch}>
        <h2 className={styles.title}>Reservation</h2>
        <div className={styles.datesGrid}>
          <div className={styles.inputGroup}>
            <label htmlFor="startDate">Start Date</label>
            <input type="date" id="startDate" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="endDate">End Date</label>
            <input type="date" id="endDate" value={endDate} onChange={(e) => setEndDate(e.target.value)} required />
          </div>
        </div>
        <div className={`${styles.inputGroup} ${styles.centered}`}>
          <label htmlFor="roomType">Room Type</label>
          <select id="roomType" value={roomType} onChange={(e) => setRoomType(e.target.value)}>
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
