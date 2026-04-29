"use client";

import { motion } from "framer-motion";
import { Character } from "@/types/Character";
import styles from "./ImageCard.module.css";

interface ImageCardProps {
  onCharacterClick: (character: Character) => void;
}

const characters: { key: Character; src: string; alt: string; label: string }[] = [
  { key: "gundam", src: "/assets/gundam.jpg", alt: "RX-78-2 Gundam", label: "Gundam" },
  { key: "zaku",   src: "/assets/zaku.jpg",   alt: "Zaku II",        label: "Zaku" },
  { key: "unicorn",src: "/assets/unicorn.jpg",alt: "Unicorn Gundam", label: "Unicorn" },
];

export default function ImageCard({ onCharacterClick }: ImageCardProps) {
  return (
    <>
      {characters.map(({ key, src, alt, label }, i) => (
        <motion.div
          key={key}
          className={styles.imageCard}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: i * 0.1 }}
          onClick={() => onCharacterClick(key)}
          role="button"
          tabIndex={0}
          aria-label={`Select ${label}`}
          onKeyDown={(e) => e.key === "Enter" && onCharacterClick(key)}
        >
          <img className={styles.gundamImages} src={src} alt={alt} />
          <span className={styles.label}>{label}</span>
        </motion.div>
      ))}
    </>
  );
}
