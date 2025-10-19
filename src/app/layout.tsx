import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RobsonVerse | O Universo Digital de Robson Albuquerque",
  description:
    "Descubra o universo de Robson Albuquerque — professor de informática, desenvolvedor e apaixonado por tecnologia, inglês e música. Acesse meus projetos, redes e portfólio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
      >
        {children}
      </body>
    </html>
  );
}
