import React from "react";
import { Avatar, Button, Flex } from "antd";
import styles from "./Header.module.css";
import { PhoneOutlined } from "@ant-design/icons";

export const Header = () => (
  <Flex justify="space-between" className="box mt-24" align="center">
    <Avatar size={40}>U</Avatar>
    <Flex justify="center" align="center">
      <Button type="text" block>
        Trang chủ
      </Button>

      <Button type="text" block>
        Hồ sơ
      </Button>

      <Button type="text" block>
        Kinh nghiệm
      </Button>

      <Button type="text" block>
        Kỹ năng
      </Button>
    </Flex>
    <Button
      type="primary"
      icon={<PhoneOutlined />}
      href="mailto:buigiangquynh@gmail.com"
      size="large"
    >
      Liên hệ với tôi
    </Button>
  </Flex>
);
