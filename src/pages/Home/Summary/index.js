import { Link } from 'react-router-dom';
import styles from './Summary.module.css';

export default function Summary() {
    return(
        <section className={styles.container}>
            <div className={`${styles.secao} ${styles.container_1}`}>
                <h3>Nossa missão</h3>
                <p>O objetivo do nosso trabalho é desenvolver a autonomia da pessoa como 
                    sujeito de direito, resgatando a autoestima, com intuito de melhorar 
                    a qualidade de vida, enfrentamento de ocorrências de vulnerabilidades 
                    sociais, com capacidade de se tornar protagonista de sua própria história.
                </p>
                <Link to='/about'>Saiba mais</Link>
            </div>

            <div className={`${styles.secao} ${styles.container_2}`}>
                <h3>Faça sua parte</h3>
                <Link to='/doe'>Apoie-nos</Link>
            </div>

            <div className={`${styles.secao} ${styles.container_3}`}>
                <h3>Nossos recursos</h3>
                <p>O Centro Social Santa Rita de Cássia, é uma Organização Social sem fins lucrativos.
                    Logo, prestamos contas de nossas receitas e despesas para que você, apoiador e 
                    voluntário, possa ter certeza de que sua ajuda é bem utilizada e vai ser destinada 
                    a quem realmente precisa.
                </p>
                <Link target='_blank' to='http://www.igrejasantarita.com.br/transparencia-centro-social/'>Transparência</Link>
            </div>

            <div className={`${styles.secao} ${styles.container_4}`}>
                <h3>Entre em contato</h3>
                <Link to='/contatos'>Nossos contatos</Link>
            </div>
        </section>
    )
}