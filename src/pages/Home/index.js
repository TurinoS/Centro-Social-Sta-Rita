import styles from './Home.module.css';
import Banner from './Banner';
import Summary from './Summary';

export default function Home() {
    return(
        <main className={styles.container}>
            <Banner />
            <Summary />
        </main>
    )
}