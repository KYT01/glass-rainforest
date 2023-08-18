import Image from "next/image";

const CATEGORIES = [
  { name: "ANIMALS", catslug: "ANIMALS" },
  { name: "FAUNA", catslug: "FAUNA" },
  { name: "MYTHS", catslug: "MYTHS" },
];

const POSTS = [
  {
    title: "Mysteries Unveiled: The Amazonian Jaguar",
    slug: "jaguar",
    category: "ANIMALS",
    imageSrc: "/jaguar.png",
    content:
      "In the heart of the Amazon Rainforest prowls a majestic and enigmatic creature known as the Amazonian Jaguar (Panthera onca). This apex predator, cloaked in sleek, spotted fur, commands the dense foliage with a regal presence. With powerful limbs and sharp senses, it seamlessly navigates the tangled undergrowth, embodying the untamed spirit of the rainforest. Revered by indigenous cultures and shrouded in myth, the Amazonian Jaguar symbolizes both the mystery and resilience of this biodiverse ecosystem.",
  },
  {
    title: "Blossom of Intrigue: The Corpse Flower",
    slug: "corpse",
    category: "FAUNA",
    imageSrc: "/corpse.png",
    content:
      "Nestled within the Amazon Rainforest's verdant embrace, the Amazonian Corpse Flower (Rafflesia spp.) emerges as a botanical wonder of rare intrigue. This mesmerizing flower, shrouded in mystery, is renowned for its colossal size and captivating fragrance, akin to the scent of decomposing matter. With petals unfurling like deep red tapestries, the Corpse Flower remains a biological enigma, drawing scientists and nature enthusiasts into its captivating realm. Revered by indigenous cultures and hailed as both fascinating and bizarre, this remarkable creation offers a glimpse into the intricate interplay of life and decay within the Rainforest.",
  },
  {
    title: "Whispers of the Canopy: The Enigmatic White Uakari Monkey",
    slug: "monkey",
    category: "MYTHS",
    imageSrc: "/monkey.png",
    content:
      "Deep in the Amazon Rainforest, an enigmatic figure reigns—the Amazonian White Uakari Monkey (Cacajao spp.). Its striking white coat and vivid red face have woven a tapestry of myths among indigenous cultures. Yet, this primate is more than folklore. Feeding on fruits and seeds, it plays a vital role in the rainforest's rhythm, a living thread in the rich narrative of this complex ecosystem. Journey with us to explore the captivating realm of the Amazon's White Uakari Monkey, where myths and reality converge, adding another layer to the remarkable story of the rainforest.",
  },
];

// get ALL the posts (simulating an API or database)
export function getPosts() {
  return POSTS;
}

// get ONE of the posts (simulating an API or database)
export function getPostBySlug(slug: string) {
  return getPosts().find((post) => post.slug === slug);
}

export function getCategories() {
  return CATEGORIES;
}

export function getPostsByCategory(catslug: string) {
  return POSTS.filter((post) => post.category === catslug);
}
