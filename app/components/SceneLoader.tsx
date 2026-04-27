"use client";

import { useState } from "react";
import ImageCard from "./ImageCard";
import styles from "./SceneLoader.module.css";
import { Character } from "@/types/Character";

export default function SceneLoader() {
  const [character, setCharacter] = useState<Character>("");
  const showTitle = character === "";

  return (
    <>
      <div className={styles.sceneLoader}>
        {character === "gundam" && (
          <video key="gundam" src="/assets/gundam.mp4" controls autoPlay />
        )}
        {character === "zaku" && (
          <video key="zaku" src="/assets/zaku.mp4" controls autoPlay />
        )}
        {character === "unicorn" && (
          <video key="unicorn" src="/assets/unicorn.mp4" controls autoPlay />
        )}

        {showTitle && (
          <h1 className={styles.defaultTitle}>Select a Character</h1>
        )}
      </div>

      <div className={styles.imageCardRow}>
        <ImageCard onCharacterClick={setCharacter} />
      </div>
    </>
  );
}
