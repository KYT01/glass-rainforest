"use client";
import { WEBSITE_URL } from "config";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

export default function CommentForm({
  slug,
  username,
}: {
  slug: string;
  username: string;
}) {
  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  async function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // @ts-ignore
    const username = event.target.username.value || "annonymous";
    // @ts-ignore
    const comment = event.target.comment.value;

    const formData = new FormData();
    formData.append("username", username);
    formData.append("comment", comment);

    const options = { body: formData, method: "POST" };
    const res = await fetch(`/api/comments/${slug}`, options);
    console.log(res);

    // @ts-ignore
    event.target.username.value = "";
    // @ts-ignore
    event.target.comment.value = "";

    startTransition(() => {
      router.refresh();
      console.log("relocation the page data");
    });
  }

  return (
    <div className="flex justify-center">
      <form onSubmit={handleFormSubmit} className="flex flex-col gap-4 w-6/12">
        <label htmlFor="username">Name</label>
        <input
          name="username"
          className="text-black border-2 border-grey-400"
        />
        <label htmlFor="comment">Comment</label>
        <textarea
          name="comment"
          cols={10}
          rows={10}
          className="text-black border-2 border-grey-400 w-auto"
          required
        />
        <button className="submit" type="submit" disabled={isPending}>
          {isPending ? "Sending..." : "Send Comment"}
        </button>
      </form>
    </div>
  );
}
