import Image from "next/image";
import styles from "./page.module.css";
import Banner from "./Components/Banner";
import Carousel from "./Components/Carousel";
import DealCarousel from "./Components/DealCarousel";

import Header from "./Components/Header";
export default function Home() {
  return (
    <div className="d-flex flex-column ">
      <Header/>
      <Carousel/>
     <Banner/>
     <DealCarousel/>
    </div>
  );
}
