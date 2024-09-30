import React from "react";
import people1 from "../icons/people1.png";
import people2 from "../icons/people2.png";
import people3 from "../icons/people3.png";
import people4 from "../icons/people4.png";
import "../styles/Teammate.css";
import { useLang } from "../contexts/LangContext";
import useLocalStorage from "../hooks/useLocalStorage";
import { useTranslation } from "react-i18next";

const Teammate = () => {
  // const [contextLang,setContextLang]=useLang();
  // const { t, i18n } = useTranslation();
  // const [lang, setLang] = useLocalStorage("lang");

  // const changeLang = () => {
  //   const newLang = lang === "tr" ? "en" : "tr";
  //   setLang(newLang);
  //   setContextLang(newLang);
  //   i18n.changeLanguage(newLang);
  // }; 

  return (
    <section id="teammate">
    <div  style={{ backgroundColor: '#ffb923', padding:'3rem' }}>
      <h1 className="header-item-teammate">Your Teammates</h1>
      <div className="image-grid-teammate">
        <div className="image-item-teammate">
        <div className="deneme">
          <img src={people1} alt="Dart" />
          </div>
          <div className="text-item">
            <p className="team-item" >
            Carly Ferris
            </p>
            <p className="item-team">Head of Marketing</p>
          </div>
        </div>
        <div className="image-item-teammate">
        <div className="deneme">
          <img src={people1} alt="Dart" />
          </div>
          <div className="text-item">
            <p className="team-item"  >
            Elias Gillete
            </p>
            <p className="item-team">Marketing Manager</p>
          </div>
        </div>
        <div className="image-item-teammate">
          <div className="deneme">
          <img src={people1} alt="Dart" />
          </div>
          
          <div className="text-item">
            <p className="team-item" >
            Sharlene Rose
            </p>
            <p className="item-team">Marketing Manager</p>
          </div>
        </div>
        <div className="image-item-teammate">
        <div className="deneme">
          <img src={people1} alt="Dart" />
          </div>
          <div className="text-item">
            <p className="team-item" >
            Jackson Davis
            </p>
            <p className="item-team">Brand Marketing Consultant</p>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Teammate;