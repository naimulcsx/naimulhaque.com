"use client";

import {
  easeInOut,
  easeOut,
  motion,
  useScroll,
  useTransform
} from "framer-motion";

import { ExternalLinkIcon } from "lucide-react";
import { useRef } from "react";

import { CardBody, CardContainer, CardItem } from "./3d-card";
import { Meteors } from "./meteors";

export function ProjectCard({ project }: { project: any }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const perspective = useTransform(scrollYProgress, [0, 0.5], [2000, 1000], {
    ease: easeOut
  });
  const rotateX = useTransform(scrollYProgress, [0, 0.5], [50, 0], {
    ease: easeOut
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [-0.3, 1], {
    ease: easeOut
  });
  const y = useTransform(scrollYProgress, [0, 0.5], [-100, 0], {
    ease: easeOut
  });

  const contentVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: easeInOut
      }
    }
  };

  return (
    <motion.div
      ref={cardRef}
      style={{
        perspective,
        opacity,
        y
      }}
      className="px-4 py-4 sm:px-8 md:px-12 md:py-6"
    >
      <motion.div
        style={{
          perspective: perspective,
          rotateX: rotateX,
          transformStyle: "preserve-3d"
        }}
      >
        <CardContainer className="relative w-full overflow-hidden rounded-3xl">
          <CardBody
            className="relative flex w-full flex-col gap-6 p-6 shadow-xl md:flex-row md:gap-12 md:p-16"
            style={{
              backgroundColor: project.entry.backgroundColor
            }}
          >
            <CardItem
              translateZ="10"
              className="relative left-0 top-0 space-y-4 md:absolute md:left-16 md:top-16"
            >
              <p className="inline-block rounded-md bg-white/10 px-5 py-1 text-sm">
                {project.entry.year}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.entry.techStack.map((tech: string) => (
                  <p className="inline-block text-sm text-white/70" key={tech}>
                    #{tech}
                  </p>
                ))}
              </div>
            </CardItem>

            <div className="mt-4 w-full space-y-6 md:mt-32 md:max-w-96 md:shrink-0 md:basis-96">
              <CardItem translateZ="20">
                <div className="space-y-4">
                  <motion.h2
                    variants={contentVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    className="text-2xl font-semibold text-white/90 md:text-3xl"
                  >
                    {project.entry.title}
                  </motion.h2>
                  <motion.p
                    variants={contentVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    className="text-sm leading-6 text-white/75 md:text-base md:leading-7"
                  >
                    {project.entry.description}
                  </motion.p>
                </div>
              </CardItem>

              <CardItem translateZ="30">
                <motion.a
                  href={project.entry.liveUrl}
                  target="_blank"
                  variants={contentVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false }}
                  className="flex items-center rounded-2xl border border-gray-100 px-4 py-2"
                >
                  View Live
                  <ExternalLinkIcon className="ml-2 inline-block h-4 w-4" />
                </motion.a>
              </CardItem>
            </div>
            <div className="relative w-full md:absolute md:left-[52.5%] md:z-[100000] md:w-[52.5%]">
              <CardItem translateZ="60">
                <motion.img
                  variants={contentVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false }}
                  src={`/images/projects/${project.slug}/${project.entry.image}`}
                  alt={project.entry.title}
                  className="relative h-full w-full rounded-xl object-cover object-top shadow-2xl shadow-gray-800/10"
                />
                <div
                  className="absolute inset-0 z-[1000] rounded-xl"
                  style={{
                    backgroundColor: project.entry.backgroundColor,
                    opacity: 0.25
                  }}
                />
              </CardItem>
            </div>

            <Meteors number={20} />
          </CardBody>
        </CardContainer>
      </motion.div>
    </motion.div>
  );
}
