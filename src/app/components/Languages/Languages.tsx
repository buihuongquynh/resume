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
      <Title
        iconUrl={languageIcon.src}
        title="Languages"
        description="Proficient in multiple languages, facilitating effective communication and collaboration in diverse settings."
      />
      <Language
        iconUrl={enIcon.src}
        title="English"
        level="Native or bilingual proficiency"
      />
      <Language
        iconUrl={jaIcon.src}
        title="Japanese"
        level="Elementary proficiency"
      />
    </div>
  </div>
);
