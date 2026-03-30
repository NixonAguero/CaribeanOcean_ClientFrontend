import React from 'react';
import styles from './Booking.module.css';
import type { RoomType, GuestData } from '../types/booking.types';


interface Props {
  selectedRoom: RoomType;
  guestData: GuestData;
  updateGuestField: (field: keyof GuestData, value: string) => void;
  onAccept: (e: React.SubmitEvent) => void;
  onCancel: () => void;
} 

export const CheckoutForm = ({ selectedRoom, guestData, updateGuestField, onAccept, onCancel }: Props) => {
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
            <input type="text" id="name" value={guestData.guestName} onChange={(e) => updateGuestField('guestName', e.target.value)} required />
          </div>
          <div className={styles.inputGroup} style={{ alignItems: 'flex-start' }}>
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" value={guestData.guestLastName} onChange={(e) => updateGuestField('guestLastName', e.target.value)} required />
          </div>
          <div className={styles.inputGroup} style={{ alignItems: 'flex-start' }}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={guestData.guestEmail} onChange={(e) => updateGuestField('guestEmail', e.target.value)} required />
          </div>
          <div className={styles.inputGroup} style={{ alignItems: 'flex-start' }}>
            <label htmlFor="creditCard">Credit Card</label>
            <input type="text" id="creditCard" value={guestData.creditCard} onChange={(e) => updateGuestField('creditCard', e.target.value)} placeholder="XXXX-XXXX-XXXX-XXXX" required />
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