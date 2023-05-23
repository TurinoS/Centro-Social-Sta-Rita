import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
    return(
        <header className={styles.header}>
            <Link to="/"><img src='#' alt="Centro Social Paróquia Santa Rita de Cássia"></img></Link>
            <ul>
                <li><Link to="/">Página Inicial</Link></li>
                <li><Link to="/">Quem Somos</Link></li>
                <li><Link to="/">Eventos</Link></li>
                <li><Link to="/">Seja um apoiador</Link></li>
                <li><Link to="/">Contatos</Link></li>
            </ul>
            <Link to="/" className={styles.doar}>DOAR</Link>
        </header>
    )
}