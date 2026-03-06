import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import { HomeSection, AboutSection, ExperiencesSection, SkillsSection } from "./components/sections";

function App() {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const pageTitle = t("pageTitle");
  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  useEffect(() => {
    if (!["pt-BR", "es", "en-US"].includes(currentLanguage)) {
      i18n.changeLanguage("pt-BR");
    }
  }, [currentLanguage, i18n]);

  return (
    <div className="flex flex-col py-6">
      <HomeSection />
      <AboutSection />
      <ExperiencesSection />
      <SkillsSection />
    </div>
  );
}

export default App;
