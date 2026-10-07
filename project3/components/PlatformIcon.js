import styles from "./PlatformIcon.module.css";

const paths = {
  pc: (
    <>
      <rect x="2.5" y="3.5" width="19" height="13" rx="2" />
      <path d="M12 16.5V20.5M8 20.5h8" />
    </>
  ),
  "playstation-5": (
    <>
      <path d="M7 7.5h10a4.5 4.5 0 0 1 4.5 4.5v2.8a3.2 3.2 0 0 1-5.8 1.9L14.5 15h-5l-1.2 1.7a3.2 3.2 0 0 1-5.8-1.9V12A4.5 4.5 0 0 1 7 7.5z" />
      <path d="M7.5 10.5v3M6 12h3" />
      <circle cx="16" cy="11" r="0.6" fill="currentColor" />
      <circle cx="17.8" cy="13" r="0.6" fill="currentColor" />
    </>
  ),
  "nintendo-switch": (
    <>
      <path d="M7.5 4H6a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h1.5z" />
      <path d="M16.5 4H18a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-1.5z" />
      <rect x="7.5" y="4" width="9" height="16" />
      <circle cx="5.3" cy="8.5" r="0.9" fill="currentColor" />
      <circle cx="18.7" cy="14.5" r="0.9" fill="currentColor" />
    </>
  ),
  "xbox-series": (
    <>
      <rect x="7" y="2.5" width="10" height="19" rx="2" />
      <circle cx="12" cy="6.5" r="2" />
      <circle cx="12" cy="18" r="0.6" fill="currentColor" />
    </>
  ),
};

export default function PlatformIcon({ platform, size = "md" }) {
  return (
    <span
      className={`${styles.tile} ${styles[size]}`}
      style={{ background: platform.tint }}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {paths[platform.id]}
      </svg>
    </span>
  );
}
