import Image from "next/image"
import styles from "./Header.module.css"
import { Button } from "../Button/Button";
import Logo from "../../assets/Logo.svg"
import Logo2 from "../../assets/Logo2.svg"
import Tel from "../../assets/Tel.svg"
import LogoIcon from "../../assets/Logo-icon.svg"
import Forget from "../../assets/Search.svg"

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.div}>
                <Image src={Logo} alt="XSERIES written in gold" height={42.65} width={183.51}/>
                <input type="search" className={styles.input} placeholder="search for location, villa, facilities..."/>
            </div>
            <div className={styles.div}>
                <Image src={Logo2} alt="Flower like logo in gold with white text" />
                <Image src={Tel} alt="Contact number"/>
                <Button text="Login" disabled={false} />
            </div>
            <Image src={LogoIcon} alt="Golden logo icon" className={styles.image} />
            <Image src={Forget} alt="Forget icon" height={24} width={24} className={styles.image} />

        </header>
    )
}