import type { Metadata } from "next";
import { retroGameFont } from "./fonts";
import "./globals.css";
import styles from "./layout.module.css";
import SoundOutputBars from "./components/SoundOutputBars";

export const metadata: Metadata = {
  title: "Get users",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={retroGameFont.className}>
        <div className={styles.layout}>
          {children}
          <SoundOutputBars />
        </div>
      </body>
    </html>
  );
}
