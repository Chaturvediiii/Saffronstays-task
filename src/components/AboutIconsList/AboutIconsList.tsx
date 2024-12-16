import styles from "./AboutIconsList.module.css"
import Image from "next/image"
import ellipse from '../../assets/Ellipse.svg'
import house from "../../assets/House.svg"
import people from "../../assets/Group.svg"
import bed from "../../assets/Bed.svg"
import paw from "../../assets/Animal.svg"
import { Inter } from 'next/font/google';

const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '500', '600'],
});

export const AboutIconsList = () => {
    return (
        <ol className={`${styles.iconsContainer} ${inter.className}`}>
            <li className={`${styles.iconDiv} ${inter.className}`}>
                <Image src={house} alt="House Icon" />
                <span>Entire Villa</span>
            </li>
            <Image src={ellipse} alt="Ellipse icon" />
            <li className={styles.iconDiv}>
                <Image src={people} alt="Icon with two people" />
                <span>6-12 Guests</span>
            </li>
            <Image src={ellipse} alt="Ellipse icon" />
            <li className={styles.iconDiv}>
                <Image src={bed} alt="Bed icon" />
                <span>8 Bedrooms</span>
            </li>
            <Image src={ellipse} alt="Ellipse icon" />
            <li className={styles.iconDiv}>
                <Image src={paw} alt="Paw icon" />
                <span>Pet-Friendly</span>
            </li>
        </ol>
    )
}