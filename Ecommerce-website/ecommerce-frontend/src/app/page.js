import Image from "next/image";
import styles from "./page.module.css";
import Banner from "./Components/Banner";
export default function Home() {
  return (
    <div className={styles.page}>
     <Banner/>
    </div>
  );
}
