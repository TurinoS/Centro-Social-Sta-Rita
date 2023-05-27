import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import HeaderLink from './HeaderLink';

export default function Header() {
    return(
        <header className={styles.header}>
            <div>
                <Link to="/"><img src='#' alt="Centro Social Paróquia Santa Rita de Cássia"></img></Link>
                <ul>
                    <li><HeaderLink to="/">Página Inicial</HeaderLink></li>
                    <li><HeaderLink to="/about">Quem Somos</HeaderLink></li>
                    <li><HeaderLink to="/events">Eventos</HeaderLink></li>
                    <li><HeaderLink to="/doe">Apoie-nos</HeaderLink></li>
                    <li><HeaderLink to="/contatos">Contatos</HeaderLink></li>
                </ul>
            </div>
            <Link to="/doe" id={styles.doar}>DOAR</Link>
        </header>
    )
}