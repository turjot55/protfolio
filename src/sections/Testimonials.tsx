import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import grainImage from "@/assets/images/grain.jpg";
import { Card } from "@/components/Card";
import { Fragment } from "react";
import terryReview from "@/assets/images/review1.jpeg"

const testimonials = [
  {
    name: "Client from Fiverr",
    position: "terrypattinson's message",
    text: "Turjo did an OUTSTANDING job web scraping and converting files with impeccable attention to detail and professionalism. Working with him was a breeze, as he not only demonstrated a deep understanding but also went ABOVE AND BEYOND with his quick responsiveness. Highly recommend his services! 🙌",
    avatar: memojiAvatar1,
  },
  {
    name: "Client from Fiverr",
    position: "fiona_eurofins's message",
    text: "I am a repeated customer and it's smooth working with Turjo.",
    avatar: memojiAvatar1,
  },
  {
    name: "Client from Fiverr",
    position: "bpijanow23's message",
    text: "Professional and timely responses. Prioritized getting my project done. Delivered a great product.",
    avatar: memojiAvatar2,
  },
  {
    name: "Client from Fiverr",
    position: "missmiri1's message",
    text: "Turjo is great!! He provides thoughtful and efficient work… will use service again !",
    avatar: memojiAvatar3,
  },
  {
    name: "Client from Fiverr",
    position: "piercedempsey's message",
    text: "his was such a seamless experience. He understood what I was wanting and did it faster than I ever could have imagined. He asked questions on the front end to make sure the delivery was done right. The order was perfect on the first delivery!",
    avatar: memojiAvatar4,
  },
  
];

export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Happy Clients"
          title="What Clients Say about me"
          description="Don't just take my word for it. See what my clients have to say about my work. "
        />
        <div className="mt-12 lg:mt-24 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 pr-8 -my-4">
          <div className="flex gap-8  flex-none animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {testimonials.map((testimonial) => (
                  <Card
                    key={testimonial.name}
                    className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transiton duration-300">
                    {/* <div className="absolute inset-0 opacity-5 -z-10" style={{
              backgroundImage: `url(${grainImage.src})`
            }}></div> */}
                    <div className="flex gap-4 items-center">
                      <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="max-h-full"
                        />
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-white/40">
                          {testimonial.position}
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 md:mt-6 text-sm md:text-base">
                      {testimonial.text}
                    </p>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
