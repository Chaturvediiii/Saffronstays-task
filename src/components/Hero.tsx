'use client'

import Image from "next/image"
import ImageSelector from "../assets/ImageTransition.svg"
import DetailImage from "../assets/DetailPhoto.svg"
import styles from "../styles/Hero.module.css"
import { Inter,  Playfair_Display } from 'next/font/google';

const playFair = Playfair_Display({
    subsets: ['latin'],
    weight: ['600', '500', '400'],
});

const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '500', '600'],
});

export const Hero = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.title}>
                <h1 className={playFair.className}>Sea La Vie</h1>
                <p className={inter.className}>Alibaug, Maharashtra</p>
                <div className={styles.smallLogo}>
                </div>
            </div>
            <Image src={ImageSelector} alt="Menu to check next photo" className={styles.menu}/>
            <Image src={DetailImage} alt="Smaller house picture" className={styles.detail}/>
        </div>
    )
}