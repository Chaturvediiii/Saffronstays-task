import styles from "../styles/MobileForm.module.css"
import { Button } from "./Button"

export const MobileForm = () => {
    return (
        <div className={styles.responsiveFormContainer}>
            <div>
                <p>₹1,49,086</p>
                <h2>₹1,00,086/Night</h2>
            </div>
            <Button text="Check Availability" disabled={false} bgColor="buttonSquare" />
        </div>
    )
}