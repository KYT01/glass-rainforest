import Link from "next/link";
import { Lora } from "next/font/google";
import { Abel } from "next/font/google";
import { UserButton } from "@clerk/nextjs";

const lora = Lora({ subsets: ["latin"], weight: "400" });
const abel = Abel({ subsets: ["latin"], weight: "400" });

export default function Header() {
  return (
    <header className="flex justify-between items-center">
      <h1 className={lora.className}>
        <Link href="/">GLASS RAINFOREST</Link>
      </h1>
      <nav className={abel.className}>
        <ul className="flex gap-20 ">
          <li className="button">
            <Link href="/blog">BLOG</Link>
          </li>
          <li className="button">
            <Link href="/gallery">GALLERY</Link>
          </li>
          <li className="signin">
            <UserButton afterSignOutUrl="/" />
          </li>
        </ul>
      </nav>
    </header>
  );
}
