import Image from "next/image";
import styles from "./GameCover.module.css";

export default function GameCover({ game, sizes, priority = false }) {
  return (
    <div className={styles.cover}>
      <Image
        src={game.image}
        alt=""
        aria-hidden="true"
        fill
        sizes={sizes}
        className={styles.backdrop}
      />
      <Image
        src={game.image}
        alt={game.title}
        fill
        sizes={sizes}
        priority={priority}
        className={styles.image}
      />
    </div>
  );
}
