import { getPostsByCategory } from "@/lib/posts";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import catimg from "@/../public/catimg.png";
import "./catslug.css";
import { Abel } from "next/font/google";

const abel = Abel({ subsets: ["latin"], weight: "400" });

type CategoryParams = {
  params: {
    catslug: string;
  };
};

export default function CategoryPage({ params }: CategoryParams) {
  const category = params.catslug;
  const posts = getPostsByCategory(params.catslug);
  return (
    <div className="text-center">
      <h2 id="cattitle" className={abel.className}>
        {category}
      </h2>
      <div className="homepage">
        <div className="overlay"></div>
        <Image className="hero" src={catimg} alt="hero"></Image>
      </div>
      <div className="thumbnail-grid">
        <ul className="thumb">
          {posts.map((post) => (
            <div key={post.category} className="thumbnail">
              <li>
                <Link href={`/blog/${post.slug}`}>
                  <Image
                    className="nailimg"
                    src={post.imageSrc}
                    alt="nail"
                    width={400}
                    height={400}
                  />
                  {post.title}
                </Link>
              </li>
            </div>
          ))}
          ;
        </ul>
      </div>
    </div>
  );
}
