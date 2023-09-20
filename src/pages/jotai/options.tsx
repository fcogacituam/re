import React from "react";
import "./styles.css";
import { useAtom } from "jotai";
import { languageAtom, selectedValueAtom } from "./atoms";

export const Options = () => {
  const [language] = useAtom(languageAtom);
  const [selected] = useAtom(selectedValueAtom);

  const greets = [
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
  ];

  const byes = [
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
  ];

  return (
    <div>
      <h3>Opciones</h3>
      <div>
        {selected === "1" ? (
          <>
            {greets.map((greet, index) => (
              <div className='card' key={index}>
                <p>
                  {language === "es"
                    ? greet.description_es
                    : greet.description_en}
                </p>
              </div>
            ))}
          </>
        ) : (
          <>
            {byes.map((bye, index) => (
              <div className='card' key={index}>
                <p>
                  {language === "es" ? bye.description_es : bye.description_en}
                </p>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};
