import { getPosts, getPostBySlug } from "@/lib/posts";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Lora } from "next/font/google";
import "./slug.css";
import cover from "@/../public/cover.png";
import Comments from "@/components/Comments";

const lora = Lora({ subsets: ["latin"], weight: "400" });

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
      key: post.slug,
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
      <div className="text-center">
        <h3 className={lora.className}>{post.title}</h3>

        <div className="homepage">
          <div className="overlay"></div>
          <Image className="hero" src={cover} alt="hero"></Image>
        </div>
        <div className="content">
          <Image
            className="nail"
            src={post.imageSrc}
            alt="nail"
            width={400}
            height={400}
          />
          <div>
            <p className="info">{post.date}</p>
            <p className="info">{post.content}</p>
          </div>
        </div>
        <Comments slug={params.slug} />
      </div>
    </div>
  );
}
