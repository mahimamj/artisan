"use client";

import Image from "next/image";
import { GALLERY_IMAGES } from "@/lib/constants";
import { FadeIn, SectionHeader } from "@/components/motion/fade-in";

export function Gallery() {
  return (
    <section className="section-padding bg-background-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          label="Gallery"
          title="Inside Our Manufacturing"
          description="A glimpse into the precision, scale, and craftsmanship behind every label."
          align="center"
        />

        <div className="mt-16 columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {GALLERY_IMAGES.map((image, index) => (
            <FadeIn key={image.alt} delay={index * 0.05}>
              <figure className="group relative break-inside-avoid overflow-hidden rounded-[16px] cursor-pointer">
                <div
                  className={`relative overflow-hidden ${
                    index % 3 === 0 ? "aspect-[3/4]" : index % 3 === 1 ? "aspect-square" : "aspect-[4/3]"
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/20 transition-colors duration-500" />
                  <figcaption className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-400">
                    <span className="inline-block px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-semibold uppercase tracking-wider text-foreground">
                      {image.category}
                    </span>
                  </figcaption>
                </div>
              </figure>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
