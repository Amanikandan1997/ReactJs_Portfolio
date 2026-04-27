import React, { useState } from "react";

// IMPORT IMAGES
import KBM from "./assests/kbm.png";
import Kite from "./assests/kite j.png";
import EC2 from "./assests/project1.jpg";
import Port from "./assests/project4.jfif";
import Trans from "./assests/trans.png";
import StageDesign from "./assests/stage copy.jpg";
import CapeComorinAward from "./assests/project3.jpg";
import KK from "./assests/kk.jpeg";
import honey from "./assests/mtm honey 1.jpg";
import honey2 from "./assests/mtm honey 2.jpg";
import kit from "./assests/kit.jpg";
import chips from "./assests/work4.jpg";
import aasai from "./assests/aasai candy.jpg";
import lanyard from "./assests/work13 (2).jpg";
import idtag from "./assests/work13 (1).jpg";
import idcard from "./assests/id.jpg";
import surabhi from "./assests/surabhi.png";
import ecomm from "./assests/ecommerce.png";
import ec22 from "./assests/project2.jpg";
import dsr from "./assests/dsr.png";
import ludo from "./assests/ludo 1st design.jpg";
import kite2 from "./assests/kite j.png";
import kiteflyer from "./assests/KITE BROUCHER.jpg";
import kiteflyer2 from "./assests/kite python.jpg";
import vjlogo from "./assests/vj.jpeg";
import mklogo from "./assests/mk logo replace.jpg";
import sb1 from "./assests/sb1.jpg";
import sb2 from "./assests/sb2.jpg";
import job from "./assests/jobdas.png";
import sachin1 from "./assests/sachin.jpg";
import sachin2 from "./assests/sachin 2.jpg";
import book1 from "./assests/b1.jpg";
import book2 from "./assests/b2.jpg";
import QR from "./assests/QR.png";
import Currency from "./assests/Currency.png";
import manimart from "./assests/manimart.png";
import weather from "./assests/weather.png";
import porkalam from "./assests/por.jpeg";
import porkalam1 from "./assests/por1.jpeg";
import jewell from "./assests/jewell.png";
import manimart1 from "./assests/mobile app.jpg";
import md4now from "./assests/md4now.jpg";
import chatai from "./assests/ai chatbot.jpg";
import Calendar from "./assests/calendar.jpeg";

import ccmedia from "./assests/ccmedia.JPG";
import vvcf from "./assests/vvcf.JPG";
import ccmbranding   from "./assests/ccbranding.JPG";
import v4u from "./assests/v4u eschool.JPG";
import airesume from "./assests/airesume.JPG";
import crypto from "./assests/cryptotrack.JPG";
import valluvarai from "./assests/valluvarai.JPG";
import memory from "./assests/90smemory.JPG";
import kumari from "./assests/kumari.JPG";
import candycrush from "./assests/candy.JPG";
import nalamtrack from "./assests/nalamtrack.JPG";
import be from "./assests/be.JPG";

function Project() {
  const [activeTab, setActiveTab] = useState("all");

  // PROJECT DATA
const projectsData = [
  // 🔵 WEB
  {
    img: v4u  ,
    title: "Eschool Management Website",
    subtitle: "React JS & Laravel Website",
    category: "web",
    link: "http://sjseschl.v4uitsolutions.com/public/auth/login"
  },

   {
    img: airesume  ,
    title: "AI Ats Resume Analyser Website",
    subtitle: "vite JS  Website",
    category: "web",
    link: "https://ai-resume-analyazer.vercel.app/"
  },

    {
    img:valluvarai   ,
    title: "ValluvarAi Website",
    subtitle: "React JS  Website",
    category: "web",
    link: "https://amanikandan1997.github.io/Valluvar-Ai/"
  },
 
  {
    img: ccmbranding,
    title: "CCMBRANDING Website",
    subtitle: "React JS Website",
    category: "web",
    link: "https://ccmbranding.com"
  },

  {
    img: vvcf ,
    title: "VVCF Website",
    subtitle: "React JS Website",
    category: "web",
    link: "https://vvcfindia.org"
  },

  {
    img: ccmedia,
    title: "CAPECOMORINMEDIA Website",
    subtitle: "React JS Website",
    category: "web",
    link: "https://capecomorinmedia.com"
  },
  {
    img: KBM,
    title: "KBM Website",
    subtitle: "React JS Website",
    category: "web",
    link: "https://kalaimarketing.com"
  },

    {
    img: crypto   ,
    title: "Crypto Tracker Website",
    subtitle: "React JS  Website",
    category: "web",
    link: "https://amanikandan1997.github.io/maniuki-crypto-tracker/"
  },
    {
    img: memory,
    title: "90s Memory Game",
    subtitle: "React JS  Website",
    category: "web",
    link: "https://amanikandan1997.github.io/MemoryGame/"
  },

  {
    img: surabhi,
    title: "Surabhi Constructions",
    subtitle: "React JS",
    category: "web",
    link: "http://abhisurabhi.com/"
  },
  {
    img: Trans,
    title: "TransCloud Website",
    subtitle: "HTML CSS",
    category: "web",
    link: "https://kitecareer.com/transcloudservices/"
  },
  {
    img: ecomm,
    title: "Ecommerce Website",
    subtitle: "Laravel",
    category: "web",
    link: "https://kitecareer.com/ecommerce/"
  },
  {
    img: dsr,
    title: "DSR Construction",
    subtitle: "HTML CSS JS",
    category: "web",
    link: "http://dsrconstruction.net/"
  },
  {
    img: weather,
    title: "Weather App",
    subtitle: "React JS",
    category: "web",
    link: "https://amanikandan1997.github.io/Manikandan_uki_weatherManapp/"
  },
  {
    img: manimart,
    title: "Manimart Web",
    subtitle: "React JS",
    category: "web",
    link: "https://amanikandan1997.github.io/mini-e-commerce/"
  },
  {
    img: QR,
    title: "QR Generator",
    subtitle: "React JS",
    category: "web",
    link: "https://amanikandan1997.github.io/Qr-Code-Generate/"
  },
  {
    img: Currency,
    title: "Currency Converter",
    subtitle: "React JS",
    category: "web",
    link: "https://amanikandan1997.github.io/Currency_Converter_Reactjs/"
  },
  {
    img: jewell,
    title: "Jewellery Website",
    subtitle: "HTML CSS",
    category: "web",
    link: "https://amanikandan1997.github.io/Jewellery_static/"
  },
  {
    img: job,
    title: "Job Portal Dashboard",
    subtitle: "React + Flask",
    category: "web",
    link: "https://dmafashions.com/"
  },

  // 🟢 APP
  {
    img: chatai,
    title: "AI Chatbot",
    subtitle: "React Native",
    category: "app",
    link: "https://www.linkedin.com/"
  },
    {
    img: nalamtrack,
    title: "Nalam Tracker Mobile App",
    subtitle: "React Native",
    category: "app",
    link: "https://www.linkedin.com/posts/manikandan-arunachalam-2b0803262_reactnative-expogo-firebase-activity-7384954422428110849-kLm6?utm_source=share&utm_medium=member_desktop&rcm=ACoAAECMFeQB84GzGN15K_f0oAkqo4dogWqpCwk/"
  },
    {
    img: candycrush,
    title: "classic candy crash game tamil",
    subtitle: "React Native",
    category: "app",
    link: "https://www.linkedin.com/posts/manikandan-arunachalam-2b0803262_reactnative-mobilegame-candycrush-activity-7385576756553969664-uApL?utm_source=share&utm_medium=member_desktop&rcm=ACoAAECMFeQB84GzGN15K_f0oAkqo4dogWqpCwk"
  },
    {
    img: kumari,
    title: "Kumari pazhamuthirsolai Mobile App",
    subtitle: "React Native",
    category: "app",
    link: "https://www.linkedin.com/posts/manikandan-arunachalam-2b0803262_webdevelopment-reactjs-apiintegration-activity-7196511347990233088-tBR8?utm_source=share&utm_medium=member_desktop&rcm=ACoAAECMFeQB84GzGN15K_f0oAkqo4dogWqpCwk"
  },
  {
    img: manimart1,
    title: "Manimart Mobile",
    subtitle: "React Native",
    category: "app",
    link: "https://github.com/Amanikandan1997/manimart-ReactNative"
  },
  {
    img: md4now,
    title: "Doctor App",
    subtitle: "React Native",
    category: "app",
    link: "https://github.com/Amanikandan1997/React_Native_PatientManagement_UI"
  },

  // 🟣 DESIGN (Use Instagram / Behance)
      {
    img: be,
    title: "More Design Work Click Here",
    subtitle: "Print Design",
    category: "design",
    link: "https://www.behance.net/manikandanuki"
  },
  {
    img: EC2,
    title: "Easy2Cooking Logo",
    subtitle: "Logo Design",
    category: "design",
    link: "https://www.instagram.com/p/CwFz7mVyiW_/"
  },
  {
    img: ec22,
    title: "EC2 Logo Design",
    subtitle: "Branding",
    category: "design",
    link: "https://www.instagram.com/p/CwFz3qcyQ73/"
  },
  {
    img: StageDesign,
    title: "Stage Design",
    subtitle: "Mockup",
    category: "design",
    link: "https://www.instagram.com/p/Cxd-LGIyn8O/"
  },
  {
    img: CapeComorinAward,
    title: "Cape Comorin Award",
    subtitle: "Event Design",
    category: "design",
    link: "https://www.instagram.com/p/Cu9cYePNYX7/"
  },
  {
    img: honey,
    title: "Honey Product",
    subtitle: "Packaging Design",
    category: "design",
    link: "https://www.instagram.com/p/CyGLhGry1kH/"
  },
  {
    img: sb1,
    title: "Sweet Box Design",
    subtitle: "Packaging",
    category: "design",
    link: "https://www.behance.net/manikandanuki"
  },
  {
    img: book1,
    title: "Book Cover",
    subtitle: "Cover Design",
    category: "design",
    link: "https://www.linkedin.com/"
  },
  {
    img: porkalam,
    title: "Porkalam Poster",
    subtitle: "Poster Design",
    category: "design",
    link: "https://www.instagram.com/p/C3o-QC2N1Ye/"
  },
  {
    img: Calendar,
    title: "Calendar Design",
    subtitle: "Print Design",
    category: "design",
    link: "https://www.instagram.com/p/CHN8OYmrcZx/"
  },

];

  // FILTER LOGIC
  const filteredProjects =
    activeTab === "all"
      ? projectsData
      : projectsData.filter((item) => item.category === activeTab);

  return (
    <section className="filters container">
      
      {/* FILTER BUTTONS */}
      <ul className="filters__content">
        <button
          className={`filters__button ${activeTab === "all" ? "filter-tab-active" : ""}`}
          onClick={() => setActiveTab("all")}
        >
          All
        </button>

        <button
          className={`filters__button ${activeTab === "web" ? "filter-tab-active" : ""}`}
          onClick={() => setActiveTab("web")}
        >
          Web
        </button>

        <button
          className={`filters__button ${activeTab === "app" ? "filter-tab-active" : ""}`}
          onClick={() => setActiveTab("app")}
        >
          App
        </button>

        <button
          className={`filters__button ${activeTab === "design" ? "filter-tab-active" : ""}`}
          onClick={() => setActiveTab("design")}
        >
          Design
        </button>
      </ul>

      {/* PROJECTS */}
      <div className="filters__sections">
        <div className="projects__content grid">
          {filteredProjects.map((project, index) => (
            <article className="projects__card" key={index}>
              <img
                src={project.img}
                alt={project.title}
                className="projects__img"
              />

              <div className="projects__modal">
                <div>
                  <span className="projects__subtitle">
                    {project.subtitle}
                  </span>

                  <h3 className="projects__title">
                    {project.title}
                  </h3>

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="projects__button button button__small"
                    >
                      <i className="ri-link" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;