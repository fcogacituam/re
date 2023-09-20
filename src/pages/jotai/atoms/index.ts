import { atom } from "jotai";

export const selectedValueAtom = atom("1");

export const languageAtom = atom("es");
export const languagesAtom = atom(["es", "en"]);

export const greetOptionsAtom = atom([
  {
    id: 1,
    description_es: "Hola",
    description_en: "Hi",
  },
  {
    id: 2,
    description_es: "Buenas",
    description_en: "Good afternoon :D",
  },
  {
    id: 3,
    description_es: "Saludos",
    description_en: "Greets!",
  },
]);
export const byeOptionsAtom = atom([
  {
    id: 1,
    description_es: "Chao",
    description_en: "Bye",
  },
  {
    id: 2,
    description_es: "Adiós",
    description_en: "Goodbye",
  },
  {
    id: 3,
    description_es: "Ahí te ves",
    description_en: "see u later!",
  },
]);
