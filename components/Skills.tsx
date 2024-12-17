"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";

const skills = [
  {
    name: "Adobe Photoshop",
    logo: "https://kzmj3dv97lsjdhljrgwm.lite.vusercontent.net/placeholder.svg"
  },
  {
    name: "Adobe Illustrator",
    logo: "https://kzmj3dv97lsjdhljrgwm.lite.vusercontent.net/placeholder.svg"
  },
  {
    name: "Adobe InDesign",
    logo: "https://kzmj3dv97lsjdhljrgwm.lite.vusercontent.net/placeholder.svg"
  },
  {
    name: "Figma",
    logo: "https://kzmj3dv97lsjdhljrgwm.lite.vusercontent.net/placeholder.svg"
  },
  {
    name: "Sketch",
    logo: "https://kzmj3dv97lsjdhljrgwm.lite.vusercontent.net/placeholder.svg"
  },
  {
    name: "Adobe XD",
    logo: "https://kzmj3dv97lsjdhljrgwm.lite.vusercontent.net/placeholder.svg"
  },
  {
    name: "Affinity Designer",
    logo: "https://kzmj3dv97lsjdhljrgwm.lite.vusercontent.net/placeholder.svg"
  },
  {
    name: "Blender",
    logo: "https://kzmj3dv97lsjdhljrgwm.lite.vusercontent.net/placeholder.svg"
  }
];

export default function Skills() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollContent = scrollContainer.firstElementChild;
    if (!scrollContent) return;

    const scrollAnimation = () => {
      if (scrollContainer.scrollLeft >= scrollContent.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
    };

    const animationId = setInterval(scrollAnimation, 30);

    return () => clearInterval(animationId);
  }, []);

  return (
    <section className="w-full overflow-hidden bg-muted py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 md:mb-12 text-center text-2xl md:text-3xl lg:text-4xl font-bold">
          Skills & Tools
        </h2>
        <div ref={scrollRef} className="flex overflow-x-hidden">
          <div className="flex animate-infinite-scroll">
            {[...skills, ...skills].map((skill, index) => (
              <div
                key={index}
                className="mx-4 md:mx-6 lg:mx-8 flex w-20 md:w-28 lg:w-32 flex-col items-center"
              >
                <div className="h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 relative">
                  <Image
                    src={skill.logo}
                    alt={skill.name}
                    fill
                    sizes="(max-width: 768px) 48px, (max-width: 1200px) 64px, 80px"
                    className="object-contain"
                  />
                </div>
                <p className="mt-2 text-center text-xs md:text-sm lg:text-base">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
