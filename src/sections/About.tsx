"use client";

import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import StarIcon from "@/assets/icons/star.svg";
import bookImage from "@/assets/images/bookC.jpg";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CSS3Icon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import { TechIcon } from "@/components/TechIcon";
import MapImage from "@/assets/images/my location.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolsBoxItem } from "@/components/TooldBoxItems";
import { motion } from "framer-motion";
import { useRef } from "react";

export const toolboxItems = [
  {
    title: "Javascript",
    iconType: JavascriptIcon,
  },
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Java",
    iconType: ChromeIcon,
  },
  {
    title: "CSS3",
    iconType: CSS3Icon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
];

const hobbies = [
  {
    title: "Painting",
    emoji: "🎨",
    left: "5%",
    top: "5%",
  },
  {
    title: "Photography",
    emoji: "📷",
    left: "50%",
    top: "5%",
  },

  {
    title: "Hiking",
    emoji: "👞",
    left: "35%",
    top: "40%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "10%",
    top: "35%",
  },
  {
    title: "Music",
    emoji: "🎵",
    left: "70%",
    top: "45%",
  },
  {
    title: "Fitness",
    emoji: "🤸",
    left: "5%",
    top: "65%",
  },
  {
    title: "Reading",
    emoji: "📚",
    left: "45%",
    top: "70%",
  },
];

export const AboutSection = () => {
  const constrainRef = useRef(null);
  return (
    <section id="about">
      <div className="py-20 lg:py-28">
        <div className="container">
          <SectionHeader
            eyebrow="About Me"
            title="A Glimpse in to my World"
            description="Learn more about who I am , What I do , and what inspirate me"
          />
          <div className="mt-20 flex flex-col gap-6">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-5  lg:grid-cols-3">
              <Card className="h-[320px] md:col-span-2 lg:col-span-1">
                <CardHeader
                  title="My Reads"
                  description=" Explore the book to have a knowledge of C programming"
                />

                <div className="w-40 mx-auto mt-2 md:mt-0">
                  <Image src={bookImage} alt="Book cover" />
                </div>
              </Card>
              <Card className="h-[320px]  md:col-span-3 lg:col-span-2">
                <CardHeader
                  title="My Toolbox"
                  description=" Explore the technologies and tools I use to craft exceptional
                digital experience"
                  className=""
                />

                <ToolsBoxItem
                  className=""
                  itemsWrapperClassName="animate-move-left [animation-duration:30s]"
                />
                <ToolsBoxItem
                  className="mt-6 "
                  itemsWrapperClassName=" animate-move-right [animation-duration:30s]"
                />
              </Card>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:grid-cols-3 lg:col-span-3">
                <CardHeader
                  title="Beyond the code"
                  description=" Explore my interest and hobbies beyond the digital realm"
                  className="px-6 py-6"
                />

                <div className="relative flex-1" ref={constrainRef}>
                  {hobbies.map((hobbie) => (
                    <motion.div
                      key={hobbie.title}
                      className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                      style={{
                        left: hobbie.left,
                        top: hobbie.top,
                      }}
                      drag
                      dragConstraints={constrainRef}>
                      <span className="font-medium text-gray-950">
                        {" "}
                        {hobbie.title}
                      </span>
                      <span>{hobbie.emoji}</span>
                    </motion.div>
                  ))}
                </div>
              </Card>
              <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-2">
                <Image
                  src={MapImage}
                  alt="map"
                  className="h-full w-full object-cover object-left-top"
                />
                <div className="absolute top-20 left-1/2  -translate-x-1/2 -translate-y-1/2 size-30 rounded-full after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:outline-offset-2 after:rounded-full after:outline-gray-950/30">
                  <div className="absolute inset-0 rounded-full  bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:1s]"></div>
                  <div className="absolute inset-0 rounded-full  bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                  <Image src={smileMemoji} alt="smile" className="size-20" />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
