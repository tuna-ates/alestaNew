import "../styles/Announcements .css";
import image2 from "../icons/office3.jpg"
import image3 from "../icons/image3.jpg"
import image4 from "../icons/office2.jpg"
import useLocalStorage from "../hooks/useLocalStorage";
import { useTranslation } from "react-i18next";
const Announcements = () => {
    const { t, i18n } = useTranslation();
    const [lang, setLang] = useLocalStorage("lang");
  
    const changeLang = () => {
      const newLang = lang === "tr" ? "en" : "tr";
      setLang(newLang);
      i18n.changeLanguage(newLang);
    }; 
    return (
        <section id="announcements">
        <div className="announcements_general_container">
            <div className="announcements_head">
                <p>{t("announcementAndUpdates")}</p>
            </div>
            <div className="announcements_container">
                <div className="col">
                    <img className="image" src={image2} />
                    <p className="col_head">{t("lukasSaginaw")}</p>
                    <p className="col_prg">
                    {t("companyNewsletters")}
                    </p>
                    <button className="readMore">{t("readMore")}</button>
                </div>
                <div className="col">
               
                        <img className="image" src={image4} />
                


                    <p className="col_head">{t("creatingCulture")}</p>
                    <p className="col_prg">
                    {t("companyNewsletters")}
                    </p>


                    <button className="readMore">{t("readMore")}</button>
                </div>
                <div className="col">
                    <img className="image" src={image3} />
                    <p className="col_head">     {t("review")}</p>
                    <p className="col_prg">
                    {t("companyNewsletters")}
                    </p>
                    <button className="readMore">{t("readMore")}</button>
                </div>
            </div>
        </div>
        </section>
    );
};
export default Announcements;
