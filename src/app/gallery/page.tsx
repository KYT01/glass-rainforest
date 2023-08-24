import Image from "next/image";
import "./gallery.css";
import gallery from "@/../public/gallery.png";
import butter from "@/../public/david-clode-2.jpg";
import river from "@/../public/filippo-cesarini.jpg";
import monkey from "@/../public/berend-leupen.jpg";
import snake from "@/../public/chris-curry.jpg";
import flower from "@/../public/kalea-jerielle.jpg";
import longriver from "@/../public/mohmed-nazeeh.jpg";
import water from "@/../public/nate-johnston.jpg";
import parrot from "@/../public/david-clode.jpg";

export default async function Home() {
  return (
    <main>
      <div className="text-center">
        <h2 className="hometitle">GALLERY</h2>
        <p className="intro">
          Step into our enchanting rainforest gallery, where the captivating
          beauty of nature unfolds in every photograph. Here, the vibrant hues
          of lush foliage, the delicate dance of sunlight through the canopy,
          and the intricate details of exotic creatures take center stage. Our
          curated collection celebrates the wondrous diversity of the
          rainforest, as seen through the lenses of talented photographers who
          have ventured deep into its heart.
        </p>
        <div className="homepage">
          <div className="overlay"></div>
          <Image className="hero" src={gallery} alt="hero"></Image>
        </div>
      </div>
      <div className="gallery">
        <div className="container">
          <div className="imgcontainer">
            <Image className="photo1" src={flower} alt="photo"></Image>
            <p className="photographer">Kalea Jerielle</p>
          </div>
          <div className="imgcontainer">
            <Image className="photo1" src={longriver} alt="photo"></Image>
            <p className="photographer">Mohmed Nazeeh</p>
          </div>
          <div className="imgcontainer">
            <Image className="photo1" src={river} alt="photo"></Image>
            <p className="photographer">Filippo Cesarini</p>
          </div>
        </div>
        <div className="imgcontainer">
          <Image className="photo" src={monkey} alt="photo"></Image>
          <p className="photographer">Berend Leupen</p>
        </div>
        <div className="container2">
          <div className="imgcontainer">
            <Image className="photo2" src={snake} alt="photo"></Image>
            <p className="photographer">Chris Curry</p>
          </div>
          <div className="imgcontainer">
            <Image className="photo2" src={butter} alt="photo"></Image>
            <p className="photographer">David Clode</p>
          </div>
        </div>
        <div className="imgcontainer">
          <Image className="photo" src={parrot} alt="photo"></Image>
          <p className="photographer">David Clode</p>
        </div>
        <div className="imgcontainer">
          <Image className="photo" src={water} alt="photo"></Image>
          <p className="photographer">Nate Johnston</p>
        </div>
      </div>
    </main>
  );
}
