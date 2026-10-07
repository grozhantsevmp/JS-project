import styles from "./RatingBadge.module.css";

export default function RatingBadge({ rating, large = false, solid = false }) {
  let level = styles.low;
  if (rating >= 90) level = styles.high;
  else if (rating >= 75) level = styles.mid;

  return (
    <span
      className={`${styles.badge} ${level} ${large ? styles.large : ""} ${solid ? styles.solid : ""}`}
    >
      {rating}
    </span>
  );
}
