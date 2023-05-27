import { Link } from 'react-router-dom';
import styles from './BannerCTA.module.css';

export default function BannerCTA() {
    return(
        <section className={styles.container}>
            <h3>Ajude agora mesmo e faça parte dessa história</h3>
            <Link to='/doe'>Doe agora!</Link>
        </section>
    )
}