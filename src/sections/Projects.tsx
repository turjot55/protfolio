import darkSaasLandingPage from "@/assets/images/turja3.png";
import lightSaasLandingPage from "@/assets/images/turja4.png";
import aiStartupLandingPage from "@/assets/images/turja1.png";
import Image from "next/image";
import CheckCirclekIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "Fetch Foundation",
    year: "2023",
    title: "Worked as frontend of Fetch Foundation",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://fetchai.foundation/",
    image: darkSaasLandingPage,
    id: 1,
  },
  {
    company: "Waldur",
    year: "2023",
    title:
      "Conducted automated testing for the Waldur website using Cypress, ensuring optimal performance and functionality",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://waldur.com/",
    image: lightSaasLandingPage,
    id: 2,
  },
  {
    company: "Calender Application",
    year: "2023",
    title: "Calender Application using Angular Material",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://calenderapplication.netlify.app/",
    image: aiStartupLandingPage,
    id: 3,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24" id="projects">
      <div className="container">
        <SectionHeader
          eyebrow="Real World Results"
          title="Featured Projects"
          description="See how I transformed concepts into engaging digital experience."
        />

        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, index) => (
            <Card
              key={project.id}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky "
              style={{
                top: `calc(64px + ${index * 50}px)`,
              }}>
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="uppercase font-bold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent text-gray-900">
                    <span>{project.company} </span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((results, resultIndex) => (
                      <li
                        key={resultIndex}
                        className="flex gap-2 text-sm text-white/50 md:text-base">
                        <CheckCirclekIcon className="size-5 md:size-6" />
                        <span>{results.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span>Visit Live site</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
              {/* </div> */}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
