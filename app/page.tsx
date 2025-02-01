import Carousel from "./carousel/carousel";
import Navbar from "./navbar/navbar";
import "./globals.css";
import Desc from "./desc/desc";
import HiburanCards from "./card/card";

export default function Home() {
  return (
    <>
    <Navbar />
    <Carousel />
    <Desc />
    <HiburanCards />
    </>
  );
}
