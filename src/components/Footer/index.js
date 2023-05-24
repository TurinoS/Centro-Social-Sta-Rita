import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

export default function Footer() {
    return(
        <footer className={styles.footer}>
            <div>
                <h3>Endereço</h3>
                <p>Rua Prudente de Moraes, 712 Vila Maristela, Pres. Prudente - SP CEP: 19020-370</p>
            </div>
            <div>
                <h3>Fale conosco</h3>
                <Link to="/contato">Contatos</Link>
            </div>
            <Link to="/doe">Faça sua doação</Link>
        </footer>
    )
}