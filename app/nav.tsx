import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import styles from "./nav.module.css";

export default function NavMenu() {
    const pathname = usePathname();
    return (
        <header className={styles.header}>
            <Image
                src="/icon.png"
                alt="PB icon"
                width='32'
                height='32'
            />
            <nav className={styles.navMenu}>
                <ul className={styles.links}>
                    <li><Link className={`${styles.link} ${pathname === '/' ? styles.active : ''}`} href="/">home</Link></li>
                    <li><Link className={`${styles.link} ${pathname === '/writing' ? styles.active : ''}`} href='/writing'>writing</Link></li>
                    <li><Link className={`${styles.link} ${pathname === '/speaking' ? styles.active : ''}`} href="/speaking">speaking</Link></li>
                    <li><Link className={`${styles.link} ${pathname === '/coding' ? styles.active : ''}`} href='/coding'>coding</Link></li>
                </ul>
            </nav>
        </header>
    );
}