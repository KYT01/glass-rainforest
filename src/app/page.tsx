import Image from "next/image";
import home from "@/../public/home.png";

export default function Home() {
  return (
    <div className="text-center">
      <h2 className="hometitle">WELCOME TO THE GLASS RAINFOREST</h2>
      <p className="intro">
        Embark on an expedition of discovery, where each post opens a door to
        the wonders that thrive within the depths of this rainforest. From rare
        and hidden animals that roam its dense undergrowth to ancient myths
        whispered by indigenous communities, we delve into the unexplored
        corners and untold narratives that make the Amazon Rainforest a true
        enigma of the natural world.
      </p>
      <div className="homepage">
        <div className="overlay"></div>
        <Image className="hero" src={home} alt="hero"></Image>
      </div>
    </div>
  );
}
