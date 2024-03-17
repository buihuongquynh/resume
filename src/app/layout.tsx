import type { Metadata } from "next";
import "./globals.css";
import { ConfigProvider } from "antd";

export const metadata: Metadata = {
  title: "Huong Quynh Resume",
  description: "p",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#1d1d26",
          },
        }}
      >
        <body>{children}</body>
      </ConfigProvider>
    </html>
  );
}
