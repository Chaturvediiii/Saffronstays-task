import styles from "../styles/HouseDetails.module.css"
import Image from "next/image"
import photo from "../assets/House-photo.svg"
import { Inter } from 'next/font/google';

const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '500', '600'],
});

export const HouseDetails = () => {
    return (
        <div className={styles.cardContainer}>
            <Image src={photo} alt="house's picture" className={styles.image} />
            <ul className={inter.className}>
                <li>
                    Tucked away cosily in the lap of nature, this is the perfect destination getaway
                </li>
                <li>
                    The tourist-favourite Bhimtal Lake is only a stone’s throw away.
                </li>
            </ul>
        </div>
    )
}