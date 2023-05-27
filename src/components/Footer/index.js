import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import { AiOutlineCopyrightCircle } from 'react-icons/ai'

export default function Footer() {
    return(
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div>
                    <h3>Endereço</h3>
                    <p>Rua Prudente de Moraes, 712 Vila Maristela, Pres. Prudente - SP CEP: 19020-370</p>
                </div>
                <div>
                    <h3>Fale conosco</h3>
                    <Link to="/contatos">Contatos</Link>
                </div>
                <Link to="/doe">Faça sua doação</Link>
            </div>

                <h5>CNPJ: 12345670001/89</h5>
                <p className={styles.copy}><AiOutlineCopyrightCircle /> Desenvolvido por <span>Paulo Turino</span>.</p>
        </footer>
    )
}