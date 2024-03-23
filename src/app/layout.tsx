import type { Metadata } from "next";
import "./globals.css";
import { ConfigProvider } from "antd";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "Huong Quynh Resume",
  description: "p",
};

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={inter.className}>
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
