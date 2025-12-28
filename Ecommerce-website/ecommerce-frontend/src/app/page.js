import Image from "next/image";
import styles from "./page.module.css";
import Banner from "./Components/Banner";
import Carousel from "./Components/Carousel";
export default function Home() {
  return (
    <div className="d-flex flex-column">
      <Carousel/>
     <Banner/>
    </div>
  );
}
