import styles from "./home-style.module.css";

interface StoryProps {
    Name: string;
    variant: string;
    closeFriend: string;
    noStory: string;
}

export default function Story({ Name, variant, closeFriend, noStory }: StoryProps) {
    return (
        <li className="">
            <div className={`${styles.bgPerson} ${styles[closeFriend]} ${styles[noStory]} m-auto flex items-center`}>
                <div className={`block m-auto ${styles.person} ${styles[variant]}`}></div>
            </div>
            <p className={`${styles.storyName} text-center mt-1`}>{Name}</p>
        </li>
    );
}