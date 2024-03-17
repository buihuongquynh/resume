import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ConfigProvider } from "antd";

const inter = Inter({ subsets: ["latin"] });

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
        <body className={inter.className}>{children}</body>
      </ConfigProvider>
    </html>
  );
}
