"use client";

import Image from "next/image";
import { motion, useMotionValue, useTransform, Variants } from "framer-motion";
import {
  Github,
  Linkedin,
  Instagram,
  Facebook,
  Mail,
  Globe,
  Guitar,
  MessageCircle,
  Palette,
} from "lucide-react";
import { useEffect } from "react";

export default function Home() {
  const links = [
    { nome: "Portfólio", icone: <Globe />, url: "https://robson-dev-portfolio.vercel.app/#/" },
    { nome: "Aprenda Violão Online", icone: <Guitar />, url: "https://aprenderviolaoonline.com.br/" },
    { nome: "ArtevivaQ", icone: <Palette />, url: "https://artevivaq.vercel.app/" },
    { nome: "GitHub", icone: <Github />, url: "https://github.com/robsonalbuquerquedev" },
    { nome: "LinkedIn", icone: <Linkedin />, url: "https://www.linkedin.com/in/robson-monteiro-de-albuquerque-8b3853230/" },
    { nome: "Instagram", icone: <Instagram />, url: "https://www.instagram.com/robson.albuquerque_cm" },
    { nome: "Facebook", icone: <Facebook />, url: "https://www.facebook.com/robson.albuquerque098" },
    { nome: "E-mail", icone: <Mail />, url: "mailto:robson.albuquerque.docs@gmail.com" },
    { nome: "WhatsApp", icone: <MessageCircle />, url: "https://wa.me/5581971168633" },
  ];

  // 🪄 Valores reativos de movimento do mouse
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const translateX = useTransform(mouseX, [0, 1], ["-50%", "-46%"]);
  const translateY = useTransform(mouseY, [0, 1], ["-50%", "-46%"]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      mouseX.set(x);
      mouseY.set(y);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, duration: 0.6 },
    },
  };

  const leftSideVariants: Variants = {
    hidden: { opacity: 0, x: -80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.2, ease: ["easeOut"] },
    },
  };

  const rightSideVariants: Variants = {
    hidden: { opacity: 0, x: 80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.2, ease: ["easeOut"] },
    },
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-blue-900 text-white flex flex-col md:flex-row items-center justify-center px-6 py-16 gap-12 overflow-hidden">
      <motion.div
        className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* 🎬 Lado esquerdo: Imagem fixa com fundo parallax suave */}
        <motion.div
          className="relative flex flex-col items-center md:items-end md:w-1/2"
          variants={leftSideVariants}
        >
          {/* 💡 Fundo radial com leve movimento do mouse */}
          <motion.div
            style={{
              translateX,
              translateY,
            }}
            className="absolute -z-10 top-1/2 left-1/2 w-[400px] h-[400px] rounded-full bg-gradient-radial from-blue-500/40 via-blue-500/10 to-transparent blur-3xl"
          ></motion.div>

          <Image
            src="/robson.png"
            alt="Robson Albuquerque"
            width={220}
            height={220}
            className="rounded-full border-4 border-blue-500 shadow-2xl mb-6"
          />

          <motion.h1
            className="text-4xl font-bold tracking-wide text-center md:text-right"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Robson Albuquerque
          </motion.h1>

          <motion.p
            className="text-blue-200 mt-3 text-center md:text-right"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Professor de Informática | Desenvolvedor | Apaixonado por tecnologia, educação e música 🎸
          </motion.p>
        </motion.div>

        {/* 🎬 Lado direito: Conteúdo animado de forma sincronizada */}
        <motion.div
          className="flex flex-col gap-3 w-full max-w-md md:w-1/2"
          variants={rightSideVariants}
        >
          {links.map((link, i) => (
            <motion.a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(59,130,246,0.6)",
              }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 py-3 rounded-xl backdrop-blur-md transition font-medium"
            >
              {link.icone}
              <span>{link.nome}</span>
            </motion.a>
          ))}

          <motion.footer
            className="mt-8 text-sm text-blue-200/70 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
          >
            © {new Date().getFullYear()} RobsonVerse
          </motion.footer>
        </motion.div>
      </motion.div>
    </main>
  );
}
