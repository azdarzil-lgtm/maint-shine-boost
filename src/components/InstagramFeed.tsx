import { Heart, Instagram, MessageCircle } from "lucide-react";

import ig1 from "@/assets/ig-1.jpg";
import ig2 from "@/assets/ig-2.jpg";
import ig3 from "@/assets/ig-3.jpg";
import ig4 from "@/assets/ig-4.jpg";
import ig5 from "@/assets/ig-5.jpg";
import ig6 from "@/assets/ig-6.jpg";

const HANDLE = "solidmaint";
const PROFILE = `https://instagram.com/${HANDLE}`;

const posts = [
  { image: ig1, caption: "Spring tidy-up in Benalmádena — palms trimmed, borders back in shape.", likes: 128, comments: 9 },
  { image: ig2, caption: "Pool water balanced and crystal clear before the owners land on Friday.", likes: 214, comments: 12 },
  { image: ig3, caption: "AC service season. Filters cleaned, gas checked, cool air restored.", likes: 96, comments: 4 },
  { image: ig4, caption: "Small jobs matter too — handles, hinges and everything in between.", likes: 74, comments: 3 },
  { image: ig5, caption: "Terrace ready for evenings like this one in Estepona.", likes: 305, comments: 21 },
  { image: ig6, caption: "Every visit logged in the Property Vault, photos included.", likes: 141, comments: 7 },
];

export function InstagramFeed() {
  return (
    <section id="instagram" className="scroll-mt-28 bg-sunlit pb-20 pt-12 md:pb-28 md:pt-16">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="section-label text-coral">09 — From our Instagram</p>
            <h2 className="mt-5 max-w-[16ch] font-display text-4xl font-semibold leading-tight md:text-5xl">
              A look at the work, week by week.
            </h2>
          </div>
          <div className="lg:text-right">
            <p className="text-lg leading-relaxed text-deep/65">
              Real visits, real homes along the Costa del Sol.
            </p>
            <a
              href={PROFILE}
              target="_blank"
              rel="noreferrer noopener"
              className="solid-button solid-button-dark mt-6 inline-flex"
            >
              <Instagram className="size-4" aria-hidden="true" /> Follow @{HANDLE}
            </a>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-3 gap-3 md:grid-cols-6 md:gap-4">
          {posts.map((post) => (
            <a
              key={post.caption}
              href={PROFILE}
              target="_blank"
              rel="noreferrer noopener"
              className="group relative block overflow-hidden rounded-[1rem]"
            >
              <img
                src={post.image}
                alt={post.caption}
                loading="lazy"
                width={816}
                height={816}
                className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-0 flex flex-col justify-end bg-deep/70 p-4 text-sunlit opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="text-sm leading-snug">{post.caption}</span>
                <span className="mt-3 flex items-center gap-4 text-xs font-bold">
                  <span className="flex items-center gap-1"><Heart className="size-3.5" aria-hidden="true" />{post.likes}</span>
                  <span className="flex items-center gap-1"><MessageCircle className="size-3.5" aria-hidden="true" />{post.comments}</span>
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
