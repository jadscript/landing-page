import { HomeSection, AboutSection } from "./components/sections";

import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();

  const pageTitle = t("pageTitle");
  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  return (
    <div className="flex flex-col py-6">
      <HomeSection />
      <AboutSection />
    </div>
  );
}

export default App;
