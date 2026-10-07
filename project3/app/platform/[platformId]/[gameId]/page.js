import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import GameCard from "@/components/GameCard";
import GameCover from "@/components/GameCover";
import PlatformIcon from "@/components/PlatformIcon";
import RatingBadge from "@/components/RatingBadge";
import { getGame, getPlatform, platforms } from "@/data/games";
import styles from "./page.module.css";

export function generateStaticParams() {
  return platforms.flatMap((platform) =>
    platform.games.map((game) => ({
      platformId: platform.id,
      gameId: game.id,
    }))
  );
}

export async function generateMetadata({ params }) {
  const { platformId, gameId } = await params;
  const game = getGame(platformId, gameId);
  return { title: game ? `${game.title} — GameBase` : "Не найдено" };
}

export default async function GamePage({ params }) {
  const { platformId, gameId } = await params;
  const platform = getPlatform(platformId);
  const game = getGame(platformId, gameId);

  if (!game) notFound();

  const others = platform.games.filter((other) => other.id !== game.id);

  return (
    <main>
      <section className={styles.hero}>
        <Image
          src={game.image}
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          className={styles.heroBackdrop}
        />
        <div className={`container ${styles.heroInner}`}>
          <Link href={`/platform/${platform.id}`} className={styles.heroBack}>
            ‹ {platform.name}
          </Link>
          <div className={styles.heroContent}>
            <div className={styles.cover}>
              <GameCover game={game} sizes="280px" priority />
            </div>
            <div className={styles.heroText}>
              <p className={styles.genre}>{game.genre}</p>
              <h1 className={styles.title}>{game.title}</h1>
              <p className={styles.developer}>{game.developer}</p>
              <div className={styles.rating}>
                <RatingBadge rating={game.rating} large solid />
                <span>оценка критиков</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className={styles.details}>
          <section>
            <h2 className={styles.blockTitle}>Об игре</h2>
            <p className={styles.description}>{game.description}</p>
          </section>

          <section>
            <h2 className={styles.blockTitle}>Информация</h2>
            <dl className={styles.list}>
              <div className={styles.row}>
                <dt>Разработчик</dt>
                <dd>{game.developer}</dd>
              </div>
              <div className={styles.row}>
                <dt>Жанр</dt>
                <dd>{game.genre}</dd>
              </div>
              <div className={styles.row}>
                <dt>Год выхода</dt>
                <dd>{game.year}</dd>
              </div>
              <div className={styles.row}>
                <dt>Платформа</dt>
                <dd>
                  <Link
                    href={`/platform/${platform.id}`}
                    className={styles.platformLink}
                  >
                    <PlatformIcon platform={platform} size="sm" />
                    {platform.name}
                    <span className={styles.chevron}>›</span>
                  </Link>
                </dd>
              </div>
            </dl>
          </section>
        </div>

        {others.length > 0 && (
          <>
            <h2 className="sectionTitle">Ещё на {platform.name}</h2>
            <div className={styles.shelf}>
              {others.map((other) => (
                <div key={other.id} className={styles.shelfItem}>
                  <GameCard game={other} platformId={platform.id} />
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </main>
  );
}
