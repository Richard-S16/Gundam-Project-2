"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ImageCard from "./ImageCard";
import styles from "./SceneLoader.module.css";
import { Character } from "@/types/Character";

const fadeVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.4 } },
  exit: { opacity: 0, transition: { duration: 0.25 } },
};

export default function SceneLoader() {
  const [character, setCharacter] = useState<Character>("");
  const showTitle = character === "";

  return (
    <>
      <div className={styles.sceneLoader}>
        <AnimatePresence mode="wait">
          {showTitle ? (
            <motion.div
              key="title"
              className={styles.titleBlock}
              variants={fadeVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <h1 className={styles.defaultTitle}>Select a Character</h1>
              <p className={styles.subtitle}>— Mobile Suit Gundam —</p>
            </motion.div>
          ) : (
            <motion.div
              key={character}
              style={{ width: "100%" }}
              variants={fadeVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <video src={`/assets/${character}.mp4`} controls autoPlay />
            </motion.div>
          )}
        </AnimatePresence>

        {!showTitle && (
          <button
            className={styles.backButton}
            onClick={() => setCharacter("")}
            aria-label="Back to character selection"
          >
            ← Back
          </button>
        )}
      </div>

      <div className={styles.imageCardRow}>
        <ImageCard onCharacterClick={setCharacter} />
      </div>
    </>
  );
}
