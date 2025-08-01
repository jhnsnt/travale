import styles from "./home-style.module.css";

interface StoryProps {
  Name: string;
  variant: string;
}

export default function Story({ Name, variant }: StoryProps) {
  return (
    <li>
      <div className={`${styles.person} ${styles[variant]}`}></div>
      <p className="text-start">{Name}</p>
    </li>
  );
}