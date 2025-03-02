"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2 text-slate-400">
        <li>AI/ML - NLP, Generative AI, Computer Vision, Predictive Models</li>
        <li>Programming - Python, NextJS, TypeScript, FastAPI, SQL</li>
        <li>Cloud & Data - Google Cloud (GCP), Vector Databases, Flowise AI, Docker</li>
        <li>Frameworks - TensorFlow, PyTorch, LangChain</li>
        <li>Applications - Chatbot Development, Automation, Data Mining</li>
      </ul>
    )
  },
  {
    title: "Advance",
    id: "advance",
    content: (
      <ul className="list-disc pl-2 text-slate-400">
        <li>Problem Solving - Analytical approach to challenges</li>
        <li>Team Collaboration - Effective coordination and leadership</li>
        <li>Communication - Clear technical and business communication</li>
        <li>Research Orientation - Continuous exploration of new technologies</li>
        <li>Continuous Learning - Staying updated with industry trends</li>
      </ul>
    )
  },
  {
    title: "Experiences",
    id: "experiences",
    content: (
      <ul className="list-disc pl-2 text-slate-400">
        <li>2023-2024: Tech Lead - Jaxtina Education System</li>
        <li>2022-2023: Tech Lead - KidsPlaza System</li>
        <li>2020-2022: Tech Lead - Savis Technology Company</li>
        <li>2010-2019: IT Specialist - Viettel Military Telecommunications Group</li>
      </ul>
    )
  }
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          alt="About Image"
          src="/images/about-image.png"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">
            Đôi điều về tôi
          </h2>
          <p className="text-base lg:text-lg text-gray-400 text-justify">
            Tôi là chuyên gia CNTT với 15 năm kinh nghiệm trong ngành công nghệ thông tin, 
            có chứng chỉ Google Professional Machine Learning Engineer với thành tích đã chứng minh 
            trong việc phát triển các hệ thống AI: chatbot AI, hệ thống tự động hóa sử dụng AI 
            và giải pháp thị giác máy tính. Thành thạo Python, NextJS và Google Cloud, 
            tôi có khả năng thích ứng nhanh với công nghệ và luôn khát khao nâng cao năng lực. 
            Làm việc nhóm là thế mạnh của tôi, và tôi đam mê sử dụng dữ liệu để thúc đẩy đổi mới 
            trong các dự án công nghệ hàm lượng kỹ thuật cao.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Kỹ năng chuyên môn{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("advance")}
              active={tab === "advance"}
            >
              {" "}
              Kỹ năng nâng cao{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experiences")}
              active={tab === "experiences"}
            >
              {" "}
              Quá trình làm việc{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
