import React from "react";
import styles from "./Language.module.css";
import { Flex } from "antd";

type Props = {
  iconUrl: string;
  title: string;
  level: string;
};

export const Language = ({ iconUrl, title, level }: Props) => (
  <div className={styles.language}>
    <Flex align="center" gap={5}>
      <img src={iconUrl} alt="icon" />
      <div className={styles.title}>{title}</div>
    </Flex>
    <p className={styles.level}>{level}</p>
  </div>
);
