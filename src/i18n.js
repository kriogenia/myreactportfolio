import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import XHR from 'i18next-xhr-backend';

i18n
	.use(XHR)					// loads translations
	.use(LanguageDetector)		// detects user language
	.use(initReactI18next) 		// passes i18n down to react-i18next
	.init({
		fallbackLng: "en", 		// use en if detected lng is not available
		saveMissing: true, 		// send not translated keys to endpoint
		keySeparator: false,
		interpolation: {
			escapeValue: false
		}
	});

export default i18n;