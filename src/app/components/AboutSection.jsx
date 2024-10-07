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
        <li>AI Generative - GPT/BERT/T5/LLama</li>
        <li>Chatbot Tech - TTS/STT/NLU/NLP</li>
        <li>Mobile App Development - React Native</li>
        <li>Web App Development - NextJS</li>
        <li>Backend Development - NestJS/Python</li>
        <li>Database - MongoDB/PostgreSQL/MySQL</li>
        <li>Cloud Service - AWS/Firebase</li>
      </ul>
    )
  },
  {
    title: "Advance",
    id: "advance",
    content: (
      <ul className="list-disc pl-2 text-slate-400">
        <li>Chánh niệm - Tập trung vào nhiệm vụ</li>
        <li>Quản lý kỳ vọng - Tập trung vào kết quả</li>
        <li>Tự học - Tự nâng cao năng lực</li>
        <li>Làm việc nhóm - Tập trung phối hợp hiệu quả</li>
        <li>Làm việc độc lập - Tự giác và tự chủ</li>
      </ul>
    )
  },
  {
    title: "Experiences",
    id: "experiences",
    content: (
      <ul className="list-disc pl-2 text-slate-400">
        <li>
          2010-2019: Viettel R&D - Tập đoàn Công nghiệp Viễn thông Quân đội.
        </li>
        <li>2019-2021: Savis Technology Company</li>
        <li>2021-2023: KidsPlaza Retails Company</li>
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
            Tôi là một kỹ sư  ứng dụng AI tạo sinh để tạo ra các sản phẩm hiệu năng cao. Tôi có
            kinh nghiệm làm việc với các hệ thống AI tạo sinh cùng một số kiến thức phát triển App full stack như: 
            Python, JavaScript, React Native, TypeScript, Redux, Node.js, NoSQL/SQL Database (MongoDB/ PostgreSQL/ MySQL) , RestApi/GraphQl,
            Git, Jira, Bitrise CI/CD... để tạo ra sản phẩm hoàn chỉnh. Tôi có khả năng thích ứng
            nhanh với công nghệ và luôn khát khao nâng cao năng lực và kỹ năng
            của mình. Làm việc nhóm là thế mạnh của tôi. Tôi thích tham gia
            trong những dự án công nghệ hàm lượng kỹ thuật cao và tạo ra những
            sản phẩm tuyệt vời.
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
