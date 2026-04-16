import 'bootstrap';
import styles from "../title/title.module.scss";

interface Title {
    subtitle: string;
    color: string;
}

function Title({ data }: { data: Title }) {
    return (
        <div
            className={`${styles.title} text-center mx-auto w-100`}
            style={{
                '--primary-color': data.color
            } as React.CSSProperties}
        >
            <h1 className={styles.dark}>{data.subtitle}</h1>
        </div>
    );
}

export default Title;
