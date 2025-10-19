"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Instagram,
  Facebook,
  Mail,
  Globe,
  Guitar,
  MessageCircle,
} from "lucide-react";

export default function Home() {
  const links = [
    { nome: "Portfólio", icone: <Globe />, url: "https://robson-dev-portfolio.vercel.app/#/" },
    { nome: "Aprenda Violão Online", icone: <Guitar />, url: "https://aprenderviolaoonline.com.br/" },
    { nome: "GitHub", icone: <Github />, url: "https://github.com/robsonalbuquerquedev" },
    { nome: "LinkedIn", icone: <Linkedin />, url: "https://www.linkedin.com/in/robson-monteiro-de-albuquerque-8b3853230/" },
    { nome: "Instagram", icone: <Instagram />, url: "https://www.instagram.com/robson.albuquerque_cm" },
    { nome: "Facebook", icone: <Facebook />, url: "https://www.facebook.com/robson.albuquerque098" },
    { nome: "E-mail", icone: <Mail />, url: "mailto:robson.albuquerque.docs@gmail.com" },
    { nome: "WhatsApp", icone: <MessageCircle />, url: "https://wa.me/5581971168633" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-blue-900 flex flex-col items-center justify-center text-white px-4 py-10">
      {/* 👤 Foto e título */}
      <motion.div
        className="text-center max-w-md"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          animate={{
            y: [0, -6, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/robson.png"
            alt="Robson Albuquerque"
            width={130}
            height={130}
            className="rounded-full border-4 border-blue-500 mx-auto mb-4 shadow-lg"
          />
        </motion.div>

        <motion.h1
          className="text-3xl font-bold mb-2 tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Robson Albuquerque
        </motion.h1>

        <motion.p
          className="text-blue-200 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Professor de Informática | Desenvolvedor | Apaixonado por tecnologia, inglês e música 🎸
        </motion.p>
      </motion.div>

      {/* 🔗 Botões com animação sequencial */}
      <motion.div
        className="flex flex-col gap-3 w-full max-w-md"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.15 },
          },
        }}
      >
        {links.map((link, i) => (
          <motion.a
            key={i}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 20px rgba(59,130,246,0.5)",
            }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 py-3 rounded-xl backdrop-blur-md transition font-medium"
          >
            {link.icone}
            <span>{link.nome}</span>
          </motion.a>
        ))}
      </motion.div>

      {/* 🦶 Rodapé */}
      <motion.footer
        className="mt-10 text-sm text-blue-200/70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        © {new Date().getFullYear()} RobsonVerse
      </motion.footer>
    </main>
  );
}
