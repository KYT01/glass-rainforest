import Link from "next/link";
import { getCategories, getPosts } from "@/lib/posts";
import Image from "next/image";
import blog from "@/../public/blog.png";
import "./blog.css";
import { Abel } from "next/font/google";

const abel = Abel({ subsets: ["latin"], weight: "400" });

export default function CategoriesPage() {
  const categories = getCategories();

  return (
    <div className="text-center">
      <div>
        <ul className="categories">
          {categories.map((category) => (
            <li id="cat" className={abel.className} key={category.catslug}>
              <Link
                className="button2"
                href={`/blog/categories/${category.catslug}`}
              >
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="homepage2">
          <div className="overlay2"></div>
          <Image className="hero2" src={blog} alt="blog"></Image>
        </div>
      </div>
      <BlogPage />
    </div>
  );
}

function BlogPage() {
  const posts = getPosts();
  return (
    <div className="thumbnail-grid">
      <ul className="thumb">
        {posts.map((post) => (
          <div className="thumbnail">
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`}>
                <Image
                  className="nail"
                  src={post.imageSrc}
                  width={400}
                  height={400}
                />
                {post.title}
              </Link>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}
