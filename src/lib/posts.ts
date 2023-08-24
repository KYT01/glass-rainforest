import Image from "next/image";

const CATEGORIES = [
  { name: "ANIMALS", catslug: "ANIMALS" },
  { name: "FAUNA", catslug: "FAUNA" },
  { name: "MYTHS", catslug: "MYTHS" },
];

const POSTS = [
  {
    title: "Mysteries Unveiled: The Amazonian Jaguar",
    date: "24/08/23",
    slug: "jaguar",
    category: "ANIMALS",
    imageSrc: "/jaguar.png",
    content:
      "In the heart of the Amazon Rainforest prowls a majestic and enigmatic creature known as the Amazonian Jaguar (Panthera onca). This apex predator, cloaked in sleek, spotted fur, commands the dense foliage with a regal presence. With powerful limbs and sharp senses, it seamlessly navigates the tangled undergrowth, embodying the untamed spirit of the rainforest. Revered by indigenous cultures and shrouded in myth, the Amazonian Jaguar symbolizes both the mystery and resilience of this biodiverse ecosystem.",
  },
  {
    title: "Blossom of Intrigue: The Corpse Flower",
    date: "23/08/23",
    slug: "corpse",
    category: "FAUNA",
    imageSrc: "/corpse.png",
    content:
      "Nestled within the Amazon Rainforest's verdant embrace, the Amazonian Corpse Flower (Rafflesia spp.) emerges as a botanical wonder of rare intrigue. This mesmerizing flower, shrouded in mystery, is renowned for its colossal size and captivating fragrance, akin to the scent of decomposing matter. With petals unfurling like deep red tapestries, the Corpse Flower remains a biological enigma, drawing scientists and nature enthusiasts into its captivating realm. Revered by indigenous cultures and hailed as both fascinating and bizarre, this remarkable creation offers a glimpse into the intricate interplay of life and decay within the Rainforest.",
  },
  {
    title: "Whispers of the Canopy: The Enigmatic White Uakari Monkey",
    date: "22/08/23",
    slug: "monkey",
    category: "MYTHS",
    imageSrc: "/monkey.png",
    content:
      "Deep in the Amazon Rainforest, an enigmatic figure reigns—the Amazonian White Uakari Monkey (Cacajao spp.). Its striking white coat and vivid red face have woven a tapestry of myths among indigenous cultures. Yet, this primate is more than folklore. Feeding on fruits and seeds, it plays a vital role in the rainforest's rhythm, a living thread in the rich narrative of this complex ecosystem. Journey with us to explore the captivating realm of the Amazon's White Uakari Monkey, where myths and reality converge, adding another layer to the remarkable story of the rainforest.",
  },
  {
    title: "Whispers of the Amazon: El Tunchi, the Mournful Spirit",
    date: "21/08/23",
    slug: "spirit",
    category: "MYTHS",
    imageSrc: "/spirit.png",
    content:
      "Deep within the Amazon Rainforest, a chilling presence lingers—the malevolent spirit known as El Tunchi. Reverberating through the dense foliage, this folklore figure is said to be the embodiment of lost souls, wandering the night with a mournful whistle. With origins rooted in the tales of indigenous communities, El Tunchi's haunting existence underscores the intricate relationship between the rainforest and the myths that weave its tapestry. In this exploration, we navigate the eerie world of El Tunchi, delving into its legends, cultural significance, and the echoes of ancient beliefs that continue to resonate in the heart of the Amazon.",
  },
  {
    title: "Anaconda: Constrictor of Myths and Realities",
    date: "20/08/23",
    slug: "anaconda",
    category: "ANIMALS",
    imageSrc: "/anaconda.png",
    content:
      "In the Amazon Rainforest, the mighty Anaconda (Eunectes spp.) glides silently, a symbol both of myth and nature's power. Amid indigenous legends of colossal snakes, the Anaconda's colossal size fuels tales of awe and respect. Beyond myths, it plays a vital role as a top predator, shaping the rainforest's delicate balance by regulating prey populations. The Anaconda's cultural significance runs deep, reflecting the rainforest's vitality in rituals and art. Science unveils truths as researchers study its habits and ecology, revealing the Anaconda's intricate role in this vibrant ecosystem. Join us on an exploration into the heart of the Amazon, where the Anaconda's narrative intertwines myth and science—a creature both of extraordinary tales and ecological importance.",
  },
  {
    title: "Ghost Orchid: Mysterious Beauty of the Amazon",
    date: "19/08/23",
    slug: "ghost",
    category: "FAUNA",
    imageSrc: "/ghost.png",
    content:
      "In the heart of the Amazon Rainforest, a spectral beauty resides—the Ghost Orchid (Dendrophylax lindenii). Its delicate form and translucent petals have sparked both myth and fascination. Beyond its eerie allure, the Ghost Orchid thrives in innovative ways, drawing nutrients from the air. Revered by indigenous communities, it whispers tales of interconnectedness. Science delves into its enigmatic existence, shedding light on its role in the intricate rainforest ecosystem. Embark on a journey with us, as we explore the captivating world of the Ghost Orchid—a symbol of delicate beauty and the mysteries that thrive within the depths of the Amazon. ",
  },
  {
    title: "Unveiling the Giant Water Lily: Aquatic Marvel of the Amazon",
    date: "18/08/23",
    slug: "lily",
    category: "FAUNA",
    imageSrc: "/lily.png",
    content:
      "Amid the tranquil waterways of the Amazon Rainforest, the Giant Water Lily (Victoria amazonica) unfolds its remarkable beauty. With leaves that stretch across the water's surface like living tapestries, this aquatic marvel captures the essence of the rainforest's lush diversity. Beyond its grandeur, the Giant Water Lily's ingenious adaptations offer both habitat and refuge to aquatic life, showcasing the intricate balance that sustains the Amazon's watery ecosystems. Join us as we delve into the world of the Giant Water Lily, a symbol of nature's boundless creativity and the vital connections that thrive beneath the rainforest canopy.",
  },
  {
    title:
      "Mystique of the Pink Amazon River Dolphin: Navigating Myths and Reality",
    date: "17/08/23",
    slug: "dolphin",
    category: "ANIMALS",
    imageSrc: "/dolphin.png",
    content:
      "In the watery labyrinth of the Amazon River, an enchanting figure emerges—the Pink Amazon River Dolphin (Inia geoffrensis). With its soft hues and captivating aura, this remarkable creature has woven itself into the fabric of Amazonian lore, where myth and reality intertwine in fascinating ways. The Pink Amazon River Dolphin, also known as the boto has long captivated the imagination of those who call the rainforest home. Its rosy complexion and graceful presence have given rise to tales of shape-shifting and mystical powers among indigenous communities. Beyond the legends, the Pink Amazon River Dolphin holds a vital role in the river's intricate ecosystem, feeding on fish and crustaceans and influencing the river's delicate balance. Embedded in the cultural tapestry of Amazonian communities, the Pink Dolphin is both revered and respected, symbolizing the deep connection between the people and the river that sustains them. Scientists continue to unravel the mysteries of the Pink Amazon River Dolphin, studying its behaviors, communication, and role in maintaining aquatic biodiversity. Join us as we embark on a journey into the heart of the Amazon River, where the Pink Dolphin dances on the edge of myth and science—a world where enchantment meets reality, and the river's secrets unfold with each ripple.",
  },
  {
    title: "El Lobizón: Exploring the Werewolf Legend of South America",
    date: "16/08/23",
    slug: "wolf",
    category: "MYTHS",
    imageSrc: "/wolf.png",
    content:
      "In the folklore of South America, a chilling presence emerges under the moonlit sky—El Lobizón, the legendary werewolf. Entwined with centuries-old beliefs and tales of transformation, El Lobizón is said to be a cursed soul, shifting between human and wolf form. Steeped in cultural traditions, this mysterious figure embodies the intriguing interplay between mythology and the human imagination. In this exploration, we venture into the realm of El Lobizón, tracing its origins, cultural significance, and enduring presence in the narratives of the night.",
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
