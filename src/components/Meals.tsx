'use client'

import styles from "../styles/Meals.module.css"
import { Button } from "./Button"
import Image from "next/image"
import vegIcon from "../assets/Veg-icon.svg"
import nonVegIcon from "../assets/Non-veg-icon.svg"
import { Inter, Lora } from 'next/font/google';

const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '500', '600'],
});

const lora = Lora({
    subsets: ['latin'],
    weight: ['600', '500', '400'],
});


export const Meals = () => {
    return (
        <div className={styles.mealsContainer}>
            <h2 className={lora.className}>Meals</h2>
            <p className={inter.className}>
                A cook is available to prepare local specialities and a delicious spread of home-cooked meals all day, at an additional charge
            </p>
            <div className={`${styles.optionsContainer} ${inter.className}`}>
                <div className={styles.option}>
                    <Image src={vegIcon} alt="Green circle inside a green square" />
                    <p>Veg</p>
                </div>
                <div className={styles.option}>
                <Image src={nonVegIcon} alt="Red circle inside a red square" />
                    <p>Non Veg</p>
                </div>
            </div>
            <div className={styles.buttonsContainer}>
                <Button text="View Menu" disabled={false} bgColor="buttonTransparent" />
                <Button text="Meal Rate Card" disabled={false} bgColor="buttonTransparent" />
            </div>
        </div>
    )
}