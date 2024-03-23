import React from "react";
import { Flex } from "antd";
import styles from "./Title.module.css";

type Props = {
  iconUrl: string;
  title: string;
  description: string;
};

export const Title = ({ title, description, iconUrl }: Props) => (
  <Flex justify="center" vertical gap={24}>
    <img className={styles.icon} src={iconUrl} alt="icon url" />
    <p className={styles.title}>{title}</p>
    <p className={styles.des}>{description}</p>
  </Flex>
);
