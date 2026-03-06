import { useTranslation } from "react-i18next";
import { Mail, MessageCircle, Calendar } from "lucide-react";

const EMAIL = "jadsonalexandreg@gmail.com";
const WHATSAPP_NUMBER = "5583988455567";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;
const BOOKING_LINK = "https://calendly.com/jadsonalexandreg/30min";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer
      id="contact"
      className="bg-linear-to-r from-cyan-300 to-lime-300 text-black py-24 px-4 md:px-6 -mt-6 relative left-1/2 right-1/2 w-screen -ml-[50vw] -mr-[50vw]"
    >
      <div className="max-w-4xl mx-auto flex flex-col gap-12">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-black/90">
          {t("footer.title")}
        </h2>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-6">
          <a
            href={`mailto:${EMAIL}`}
            className="flex items-center gap-2 px-4 py-3 rounded-lg bg-white hover:bg-gray-100 transition-colors text-black"
            aria-label={t("footer.emailLabel")}
          >
            <Mail className="w-5 h-5 text-cyan-700 shrink-0" />
            <span className="text-sm md:text-base break-all">{EMAIL}</span>
          </a>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-3 rounded-lg bg-white hover:bg-gray-100 transition-colors text-black"
            aria-label={t("footer.whatsappLabel")}
          >
            <MessageCircle className="w-5 h-5 text-lime-700 shrink-0" />
            <span className="text-sm md:text-base">WhatsApp</span>
          </a>

          <a
            href={BOOKING_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-3 rounded-lg bg-white text-black  hover:bg-gray-100 transition-colors"
            aria-label={t("footer.scheduleLabel")}
          >
            <Calendar className="w-5 h-5 shrink-0" />
            <span className="text-sm md:text-base">{t("footer.scheduleButton")}</span>
          </a>
        </div>

        <p className="text-center text-black text-sm">
          © {new Date().getFullYear()} Jadscript
        </p>
      </div>
    </footer>
  );
};

export default Footer;
