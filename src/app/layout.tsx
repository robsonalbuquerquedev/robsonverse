import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RobsonVerse 💫 | Conecte-se com Robson Albuquerque",
  description:
    "Acesse o RobsonVerse — meu universo digital com projetos, redes sociais e portfólio. Um espaço para tecnologia, educação e música 🎸",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
