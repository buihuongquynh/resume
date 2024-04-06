import React from "react";
import styles from "./Languages.module.css";
import { Title } from "../Title";
import languageIcon from "./assets/language.svg";
import { Language } from "./Language";
import enIcon from "./assets/en.svg";
import jaIcon from "./assets/ja.svg";

export const Languages = () => (
  <div className={`box ${styles.wrapper}`}>
    <div className={styles.container}>
      <Title iconUrl={languageIcon.src} title="Languages" />
      <Language
        iconUrl={enIcon.src}
        title="English"
        level="Good reading comprehension and basic communication"
      />
      <Language iconUrl={jaIcon.src} title="Japanese" level="JLPT N3" />
    </div>
  </div>
);
