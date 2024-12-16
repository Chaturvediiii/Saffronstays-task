import styles from "./Reviews.module.css"
import Image from "next/image"
import star from "../../assets/Star.svg"
import share from "../../assets/Share.svg"
import heart from "../../assets/Like.svg"

export const Reviews = () => {
    return (
        <div className={styles.reviewContainer}>
            <div className={styles.ratingContainer}>
                <div>
                    <Image src={star} alt="Yellow star"/>
                    <p className={styles.ratingText}>4.5 
                        <span>/ 5</span>
                    </p>
                </div>
                <span>|</span>
                <p className={styles.ratingCount}>105 reviews</p>
            </div>
            <div className={styles.iconsDiv}>
                <div className={styles.icon}>
                    <Image src={share} alt="Share icon" />
                </div>
                <div className={styles.icon}>
                    <Image src={heart} alt="Heart icon" />
                </div>
            </div>
        </div>
    )
}