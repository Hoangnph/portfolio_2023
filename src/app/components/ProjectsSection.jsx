"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Full stack E-commerce Website",
    description: "Fullstack FE/BE Node.js, RTK, MongoDB, GraphQL",
    image: "/images/projects/ecom_web.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://ecommerce-front-liard.vercel.app/"
  },
  {
    id: 2,
    title: "Kidsplaza Mobile App",
    description: "React Native, Redux thunk, OneSignal, VNPay Gateway",
    image: "/images/projects/kidsplaza.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl:
      "https://apps.apple.com/vn/app/kidsplaza-mẹ-bầu-em-bé/id1570027587?l=vi"
  },
  {
    id: 3,
    title: "Vega City Mobile Application",
    description: "Project task: Figma Design, React native",
    image: "/images/projects/travel.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/"
  },
  {
    id: 4,
    title: "Movies Library Mobile Application",
    description: "React Native, TMDB cdn ,Firebase, ",
    image: "/images/projects/movies.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/"
  },
  {
    id: 5,
    title: "Mobile Chat App",
    description:
      "React native,Facebook SDK, Firebase, Websocket, MongoDB, RestApi",
    image: "/images/projects/chatapp.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/"
  },
  {
    id: 6,
    title: "Animation Portfolio",
    description: "Nextjs13, 1 days build",
    image: "/images/projects/portfolio.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://portfolio-2023-three-phi.vercel.app/"
  }
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 }
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
