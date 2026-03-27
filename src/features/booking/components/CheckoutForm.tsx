import React from 'react';
import styles from './Booking.module.css';
import type { RoomType } from '../types/booking.types';


interface Props {
  selectedRoom: RoomType;
  guestName: string; setGuestName: (v: string) => void;
  guestLastName: string; setGuestLastName: (v: string) => void;
  guestEmail: string; setGuestEmail: (v: string) => void;
  creditCard: string; setCreditCard: (v: string) => void;
  onAccept: (e: React.SubmitEvent) => void;
  onCancel: () => void;
}

export const CheckoutForm = ({ selectedRoom, guestName, setGuestName, guestLastName, setGuestLastName, guestEmail, setGuestEmail, creditCard, setCreditCard, onAccept, onCancel }: Props) => {
  return (
    <div className={styles.checkoutHero}>
      <form className={styles.checkoutContainer} onSubmit={onAccept}>
        <h2 className={styles.title}>Reservation</h2>
        <div className={styles.checkoutHeader}>
          <h3>Room: {selectedRoom.name}</h3>
          <h3>Total Amount: ${selectedRoom.daily_rate}</h3>
        </div>
        <div className={styles.checkoutImagePlaceholder}>
          {selectedRoom.image_url ? (
            <img src={selectedRoom.image_url} alt={selectedRoom.name} className={styles.checkoutImage} />
          ) : (
            <span>Image Placeholder</span>
          )}
        </div>
        <div className={styles.checkoutFormGrid}>
          <div className={styles.inputGroup} style={{ alignItems: 'flex-start' }}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" value={guestName} onChange={(e) => setGuestName(e.target.value)} required />
          </div>
          <div className={styles.inputGroup} style={{ alignItems: 'flex-start' }}>
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" value={guestLastName} onChange={(e) => setGuestLastName(e.target.value)} required />
          </div>
          <div className={styles.inputGroup} style={{ alignItems: 'flex-start' }}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={guestEmail} onChange={(e) => setGuestEmail(e.target.value)} required />
          </div>
          <div className={styles.inputGroup} style={{ alignItems: 'flex-start' }}>
            <label htmlFor="creditCard">Credit Card</label>
            <input type="text" id="creditCard" value={creditCard} onChange={(e) => setCreditCard(e.target.value)} placeholder="XXXX-XXXX-XXXX-XXXX" required />
          </div>
        </div>
        <div className={styles.checkoutActions}>
          <button type="button" className={styles.cancelButton} onClick={onCancel}>Cancel</button>
          <button type="submit" className={styles.acceptButton}>Accept</button>
        </div>
      </form>
    </div>
  );
};