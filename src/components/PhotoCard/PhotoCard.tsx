import styles from "./PhotoCard.module.css"
import Image from "next/image"
import photo from "../../assets/House-photo.svg"
import ellipse from "../../assets/Ellipse.svg"

export const PhotoCard = () => {
    return (
        <li className={styles.card}>
            <Image src={photo} alt="house's picture" />
            <p>Vinay <Image src={ellipse} alt="circle icon" /> Sep 03, 2023</p>
        </li>
    )
}