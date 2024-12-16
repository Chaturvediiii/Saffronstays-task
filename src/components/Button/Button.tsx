import styles from "./Button.module.css"
import { Inter } from 'next/font/google';

const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '500', '600'],
});

interface ButtonProps {
    text: string;
    disabled: boolean;
    bgColor?: string;
}

export const Button = ({text, disabled, bgColor}: ButtonProps) => {
    return (
        <button className={`${styles.button} ${styles[bgColor || ""]} ${inter.className}`} disabled={disabled}>
            {text}
        </button>
    )
}