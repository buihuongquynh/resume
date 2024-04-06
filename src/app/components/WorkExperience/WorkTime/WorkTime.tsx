import React from "react";
import styles from "./WorkTime.module.css";
import { Button, Flex } from "antd";
import type { SVGProps } from "react";
import mapImage from "./assets/map.svg";
import { CalendarOutlined, SearchOutlined } from "@ant-design/icons";
import classnames from "classnames";

type Props = {
  title: string;
  key: string;
  location: string;
  description: string;
  time: string;
};

export const WorkTime = ({
  title,
  key,
  location,
  description,
  time,
}: Props) => (
  <Flex justify="space-between">
    <div className={styles.description}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.key}>{key}</p>
      <Flex align="center" className={styles.key}>
        <img className={styles.mapIcon} src={mapImage.src} alt="map icon" />
        <div>{location}</div>
      </Flex>
      <div
        className={classnames(styles.key, styles.description)}
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
    <Button className={styles.time} size="small" icon={<CalendarOutlined />}>
      {time}
    </Button>
  </Flex>
);
