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
        <li>React Native - TypeScript</li>
        <li>RestApi - GraphQL</li>
        <li>ReactQuery - Redux/RTK - Redux thunk</li>
        <li>MongoDB/MySQL</li>
        <li>Firebase</li>
        <li>Facebook SDK</li>
        <li>Websocket</li>
        <li>Stripe/Paypal/VnPay/MomoPay - Payment Gateway</li>
      </ul>
    )
  },
  {
    title: "Advance",
    id: "advance",
    content: (
      <ul className="list-disc pl-2 text-slate-400">
        <li>Mobile Design UI/UX with Figma</li>
        <li>Token Design</li>
        <li>React Native Performance Optimization</li>
        <li>Dynamic Components Architecture</li>
        <li>Micro Front End Design</li>
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
          <p className="text-base lg:text-lg text-gray-400">
            Tôi là một kỹ sư lập trình ứng dụng Mobile hiệu năng cao. Tôi có
            kinh nghiệm làm việc với các ngôn ngữ JavaScript, React Native -
            TypeScript, Redux, Node.js, NoSQL/SQL Database, RestApi/GraphQl,
            Git, Jira, Bitrise CI/CD cho Mobile App. Tôi có khả năng thích ứng
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
