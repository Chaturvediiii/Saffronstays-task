'use client'

import styles from "./Form.module.css"
import { Button } from "../Button/Button";
import { Inter } from 'next/font/google';

const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '500', '600'],
});

export const Form = () => {
    return (
        <form className={`${styles.formContainer} ${inter.className}`}>
            <div className={styles.formTitle}>
                <span>₹1,49,086</span>
                <h2>₹1,00,086/Night</h2>
            </div>
            <div className={styles.border}></div>
            <div className={styles.promo}>
                <span>Special discounts available!!</span>
                <Button text="Unlock Price" disabled={false} bgColor="buttonGold"/>
            </div>
            <input className={styles.inputCalendar} placeholder="Check in - Check out"/>
            <input type="number" className={styles.inputGuests} placeholder="2 Guests"/>
            <Button text="Check Availability" disabled={false} bgColor="buttonSquare" />
        </form>
    )
}