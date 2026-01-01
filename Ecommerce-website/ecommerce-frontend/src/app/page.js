import Image from "next/image";
import styles from "./page.module.css";
import Banner from "./Components/Banner";
import Carousel from "./Components/Carousel";

import Header from "./Components/Header";
import Companies from "./Components/Companies";
export default function Home() {
  return (
    <div className="d-flex flex-column ">

      <Header/>

      <Carousel/>
     <Banner/>
     <Companies/>

    </div>
  );
}
