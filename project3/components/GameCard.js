import Link from "next/link";
import GameCover from "./GameCover";
import RatingBadge from "./RatingBadge";
import styles from "./GameCard.module.css";

export default function GameCard({ game, platformId }) {
  return (
    <Link href={`/platform/${platformId}/${game.id}`} className={styles.card}>
      <GameCover
        game={game}
        sizes="(max-width: 600px) 45vw, (max-width: 1100px) 25vw, 220px"
      />
      <div className={styles.body}>
        <h3 className={styles.title}>{game.title}</h3>
        <div className={styles.meta}>
          <span>
            {game.genre} · {game.year}
          </span>
          <RatingBadge rating={game.rating} />
        </div>
      </div>
    </Link>
  );
}
