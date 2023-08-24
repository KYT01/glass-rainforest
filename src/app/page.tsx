import Image from "next/image";
import home from "@/../public/home.png";
import kv from "@vercel/kv";

export default async function Home() {
  const res = await fetch(
    "https://api.github.com/repos/KYT01/glass-rainforest",
    {
      next: { revalidate: 5 },
    }
  );
  const data = await res.json();

  const pageViews = await kv.incr("views");
  return (
    <main>
      <div className="text-center">
        <h2 className="hometitle">WELCOME TO THE GLASS RAINFOREST</h2>
        <p className="intro">
          Embark on an expedition of discovery, where each post opens a door to
          the wonders that thrive within the depths of this rainforest. From
          rare and hidden animals that roam its dense undergrowth to ancient
          myths whispered by indigenous communities, we delve into the
          unexplored corners and untold narratives that make the Amazon
          Rainforest a true enigma of the natural world. Whether you're a
          curious explorer, a seeker of truths, or simply captivated by the
          unknown, our blog is your portal to a tapestry of narratives that
          illuminate the intricacies of our world. Embark with us on a voyage of
          discovery, where each page turns over a new leaf of fascination and
          every click uncovers the secrets that lie beneath the surface. Welcome
          to a place where curiosity finds its home, and the extraordinary
          unfolds in every word and image.
        </p>
        <div className="homepage">
          <div className="overlay"></div>
          <Image className="hero" src={home} alt="hero"></Image>
        </div>
      </div>
      <p className="text-center my-20">
        This page have been viewed {pageViews} times
      </p>
      <div className="gallery"></div>
    </main>
  );
}
