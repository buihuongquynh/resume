import { CalendarOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";

type Props = {
  title: string;
  issued: string;
  description: string;
  date: string;
};

export const Honor = ({ title, issued, description, date }: Props) => (
  <div>
    <div>{title}</div>
    <div>{issued}</div>
    <div>{description}</div>
    <Button icon={<CalendarOutlined />}>{date}</Button>
  </div>
);
