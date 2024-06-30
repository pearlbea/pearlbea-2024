import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
   
          <Image 
            src='/full-pb-photo.jpg' 
            alt='Photo of Pearl'
            width='600'
            height='316'
            />
      
            <Image
              src="/icon.png"
              alt="PB icon"
              className={styles.pbIcon}
              width='100'
              height='100'
              priority
            />
   
  
      <h1 className={styles.headline}>Pearl Latteier</h1>


      <div className={styles.grid}>


      </div>
    </main>
  );
}
