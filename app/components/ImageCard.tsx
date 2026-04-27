"use client";

import { Character } from "@/types/Character";
import styles from "./ImageCard.module.css";

interface ImageCardProps {
  onCharacterClick: (character: Character) => void;
}

export default function ImageCard({ onCharacterClick }: ImageCardProps) {
  return (
    <>
      <div className={styles.imageCard}>
        <img
          className={styles.gundamImages}
          src="/assets/gundam.jpg"
          alt="Gundam"
          onClick={() => onCharacterClick("gundam")}
        />
      </div>

      <div className={styles.imageCard}>
        <img
          className={styles.gundamImages}
          src="/assets/zaku.jpg"
          alt="Zaku"
          onClick={() => onCharacterClick("zaku")}
        />
      </div>

      <div className={styles.imageCard}>
        <img
          className={styles.gundamImages}
          src="/assets/unicorn.jpg"
          alt="Unicorn"
          onClick={() => onCharacterClick("unicorn")}
        />
      </div>
    </>
  );
}
