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
      <Title iconUrl={languageIcon.src} title="Ngoại ngữ" />
      <Language
        iconUrl={enIcon.src}
        title="Tiếng anh"
        level="Đọc hiểu tốt, giao tiếp cơ bản"
      />
      <Language iconUrl={jaIcon.src} title="Tiếng nhật" level="JLPT N3" />
    </div>
  </div>
);
