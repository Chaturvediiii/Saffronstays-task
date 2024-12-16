'use client'

import styles from "../styles/List.module.css"
import { Lora } from 'next/font/google';

const lora = Lora({
    subsets: ['latin'],
    weight: ['600', '500', '400'],
});

interface ListProps {
    children: React.ReactNode;
    text: string;
}

export const List = ({text, children}: ListProps) => {
    return (
        <div>
            <h2 className={lora.className}>{text}</h2>
            <ul className={styles.listContainer}>
                {children}
            </ul>
        </div>
    )
}