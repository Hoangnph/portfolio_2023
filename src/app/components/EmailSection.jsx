"use client";

import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import FacebookIcon from "../../../public/facebook-icon.svg";
import ZaloIcon from "../../../public/zalo.svg";
import EmailIcon from "../../../public/email-icon.svg"; // Add this line
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [email, setEmail] = useState({
    emailFrom: "",
    subject: "",
    body: ""
  });
  const [emailSended, setEmailSended] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("email", email);

    await fetch("/api", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(email)
    })
      .then((res) => res?.json())
      .then((data) => console.log(data));

    setEmailSended(true);
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:hoangnph@gmail.com"; // Replace with your email
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:0963760450"; // Replace with your phone number
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Hãy kết nối để cùng tạo ra điều tuyệt vời!
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md text-justify">
          {" "}
          Tôi đang tìm kiếm cơ hội làm việc mới cho mình, Tôi luôn sẵn
          sàng chào đón bạn. Bất cứ câu hỏi hay lời làm quen nào cũng được tôi
          chào đón nồng nhiệt và phản hồi lại với bạn một cách nhanh và nhiệt
          tình nhất! Và nếu muốn biết thêm về tôi, hãy hỏi người bạn trợ lý ở 
          bên dưới góc phải màn hình nhé.
        </p>
        <button onClick={handlePhoneClick} className="text-[#ADB7BE] mb-4 max-w-md text-justify">Phone: +84 963 760450</button>
        <br />
        <button onClick={handleEmailClick} className="text-[#ADB7BE] mb-4 max-w-md text-justify">Email: hoangnph@gmail.com</button>
        <br />
        <div className="socials flex flex-row gap-2">
          <Link href=" https://zalo.me/0963760450">
            <Image src={ZaloIcon} alt="Zalo Icon" />
          </Link>
          <Link href="https://www.facebook.com/hoang.h.nguyenphu">
            <Image src={FacebookIcon} alt="Facebook Icon" />
          </Link>
        </div>
      </div>
      {/* <div className="z-10">
        {emailSended ? (
          <div className="text-white block text-2xl font-medium">
            {" "}
            <p>
              Thanks for your{" "}
              <span className=" text-purple-500 "> message</span>{" "}
              <span className="text-base">❤️</span>
            </p>
          </div>
        ) : (
          <form
            className="flex flex-col"
            method="POST"
            onSubmit={(e) => onSubmit(e)}
          >
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Email của bạn
              </label>
              <input
                type="email"
                name="emailFrom"
                id="email"
                onChange={(e) => {
                  setEmail((prev) => ({ ...prev, emailFrom: e.target.value }));
                }}
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="hoangnph@gmail.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="Say hi"
                className="text-white block text-sm mb-2 font-medium"
              >
                Tiêu đề
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                onChange={(e) => {
                  setEmail((prev) => ({ ...prev, subject: e.target.value }));
                }}
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Một nội dung vui vẻ"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Lời nhắn
              </label>
              <textarea
                name="message"
                id="message"
                onChange={(e) => {
                  setEmail((prev) => ({ ...prev, body: e.target.value }));
                }}
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Tôi muốn nhắn bạn về..."
              />
            </div>
            <button
              type="submit"
              className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Gửi cho Hoàng
            </button>
          </form>
        )}
      </div> */}
    </section>
  );
};

export default EmailSection;
