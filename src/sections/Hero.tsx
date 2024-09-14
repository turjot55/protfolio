"use client";

import memojiImage from "@/assets/images/turja_final.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import { HeroOrbit } from "@/components/HeroOrbit";
import SparkleIcon from "@/assets/icons/sparkle.svg";

export const HeroSection = () => {
  // const handleMailTo = () => {
  //   window.location.href =
  //     "mailto:turjo_t@yahoo.com?subject=Contact&body=Hello%20Turjo,%0D%0A";
  // };
  return (
    <section id="home">
      <div className="py-32 md:py-48 lg:py-60 relative z-1 overflow-x-visible">
        <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom, transparent, black_10%, black_70%, transparent)]">
          <div
            className="absolute inset-0 -z-30 opacity-5"
            style={{ background: `url(${grainImage.src})` }}></div>
          <div className="size-[620px] hero-ring "></div>
          <div className="size-[820px] hero-ring "></div>
          <div className="size-[1020px] hero-ring "></div>
          <div className="size-[1220px] hero-ring "></div>

          <HeroOrbit
            size={430}
            rotation={-14}
            shouldOrbit
            orbitDuration="30s"
            shouldSpin
            spinDuration="6s">
            <SparkleIcon className="size-8 text-emerald-300/20" />
          </HeroOrbit>
          <HeroOrbit
            size={440}
            rotation={79}
            shouldOrbit
            orbitDuration="32s"
            shouldSpin
            spinDuration="6s">
            <SparkleIcon className="size-5 text-emerald-300/20" />
          </HeroOrbit>
          <HeroOrbit
            size={530}
            rotation={178}
            shouldOrbit
            orbitDuration="34s"
            shouldSpin
            spinDuration="6s">
            <SparkleIcon className="size-10 text-emerald-300/20" />
          </HeroOrbit>
          <HeroOrbit
            size={520}
            rotation={-41}
            shouldOrbit
            orbitDuration="36s"
            shouldSpin
            spinDuration="6s">
            <div className="size-2 rounded-full bg-emerald-300/20" />
          </HeroOrbit>
          <HeroOrbit
            size={550}
            rotation={20}
            shouldOrbit
            orbitDuration="38s"
            shouldSpin
            spinDuration="6s">
            <StarIcon className="size-12 text-emerald-300" />
          </HeroOrbit>
          <HeroOrbit
            size={590}
            rotation={98}
            shouldOrbit
            orbitDuration="40s"
            shouldSpin
            spinDuration="6s">
            <StarIcon className="size-8 text-emerald-300" />
          </HeroOrbit>
          <HeroOrbit
            size={650}
            rotation={-5}
            shouldOrbit
            orbitDuration="42s"
            shouldSpin
            spinDuration="6s">
            <div className="size-2 rounded-full bg-emerald-300/20" />
          </HeroOrbit>
          <HeroOrbit
            size={710}
            rotation={144}
            shouldOrbit
            orbitDuration="44s"
            shouldSpin
            spinDuration="6s">
            <SparkleIcon className="size-14 text-emerald-300/20" />
          </HeroOrbit>
          <HeroOrbit
            size={720}
            rotation={85}
            shouldOrbit
            orbitDuration="46s"
            shouldSpin
            spinDuration="6s">
            <div className="size-3 rounded-full bg-emerald-300/20" />
          </HeroOrbit>
          <HeroOrbit
            size={800}
            rotation={-72}
            shouldOrbit
            orbitDuration="48s"
            shouldSpin
            spinDuration="6s">
            <StarIcon className="size-28 text-emerald-300" />
          </HeroOrbit>
        </div>

        <div className="container">
          <div className="flex flex-col items-center">
            <div className="text-sm font-medium pb-4">Turjo Talukder</div>
            <Image
              src={memojiImage}
              className="size-[100px]"
              alt="Person behind the laptop is Turjo"
            />

            <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
              <div className="bg-green-500 size-2.5 rounded-full relative">
                <div className="bg-green-500 absolute inset-0 animate-ping-large rounded-full"></div>
              </div>
              <div className="text-sm font-medium">
                Available for new project
              </div>
            </div>
            <div className="max-w-lg mx-auto">
              <h1 className="font-serif text-3xl text-center mt-8 tracing-wide md:text-5xl">
                Building Exceptional User Experience
              </h1>
              <p className="mt-4 text-center text-white/60 md:text-lg">
                I have had the privilege of working on various projects,
                including frontend development using React.js, backend
                development with Java Spring Boot, and the implementation of
                authentication modules using Node.js and MongoDB.
              </p>
            </div>
            <div className="flex flex-col  items-center md:flex-row justify-center mt-8 gap-4 z-0">
              <button
                className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl"
                id="projects">
                <span className="font-semibold" id="projects">
                  Explore My Work
                </span>
                <ArrowDown className="size-4" />
              </button>

              <a
                href="mailto:turjo_t@yahoo.com?subject=Contact&body=Hello%20Turjo,%0D%0A"
                className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 rounded-xl px-6 z-10">
                <span>👋</span>
                <span className="font-semibold">Let&apos;s Connect</span>
              </a>

              {/* <div>
                <button className="nline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 rounded-xl px-6">
                  <a href="mailto:turjo_t@yahoo.com?subject=Contact&body=Hello%20Turjo,%0D%0A">
                    <span>👋</span>
                    <span className="font-semibold">Let&apos;s Connect</span>
                  </a>
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
