import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
    return(
        <header className={styles.header}>
            <div>
                <Link to="/"><img src='#' alt="Centro Social Paróquia Santa Rita de Cássia"></img></Link>
                <ul>
                    <li><Link to="/">Página Inicial</Link></li>
                    <li><Link to="/about">Quem Somos</Link></li>
                    <li><Link to="/events">Eventos</Link></li>
                    <li><Link to="/">Seja um apoiador</Link></li>
                    <li><Link to="/contato">Contatos</Link></li>
                </ul>
            </div>
            <Link to="/doe" id={styles.doar}>DOAR</Link>
        </header>
    )
}