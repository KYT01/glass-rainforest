import { getPosts, getPostBySlug } from "@/lib/posts";
import { notFound } from "next/navigation";
import Image from "next/image";

type BlogPostParams = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  const posts = getPosts();

  return posts.map((post) => {
    return {
      slug: post.slug,
    };
  });
}

export default function BlogPost({ params }: BlogPostParams) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <Image src={post.imageSrc} width={400} height={400} />
    </div>
  );
}
