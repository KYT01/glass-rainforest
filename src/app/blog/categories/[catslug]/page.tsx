import { getPostsByCategory } from "@/lib/posts";
import Link from "next/link";
import React from "react";
import Image from "next/image";

type CategoryParams = {
  params: {
    catslug: string;
  };
};

export default function CategoryPage({ params }: CategoryParams) {
  const posts = getPostsByCategory(params.catslug);
  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.category}>
              <Image src={post.imageSrc} alt="nail" width={400} height={400} />
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
