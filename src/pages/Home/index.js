import Banner from './Banner';
import styles from './Home.module.css';
import Summary from './Summary';

export default function Home() {
    return(
        <main className={styles.container}>
            <Banner />
            <Summary />
        </main>
    )
}