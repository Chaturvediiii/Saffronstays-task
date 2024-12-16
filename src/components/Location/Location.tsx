'use client'

import styles from "./Location.module.css"
import Image from "next/image"
import map from "../../assets/Map.svg"
import { Button } from "../Button/Button"
import { Lora } from 'next/font/google';

const lora = Lora({
    subsets: ['latin'],
    weight: ['600', '500', '400'],
});

export const Location = () => {
    return (
        <div className={styles.locationContainer}>
            <h2 className={lora.className}>Location</h2>
            <Image src={map} alt="Map" className={styles.map}/>
            <Button text="Get Direction" disabled={false} bgColor="buttonTransparent" />
        </div>
    )
}