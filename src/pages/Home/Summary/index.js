import { Link } from 'react-router-dom';
import styles from './Summary.module.css';

export default function Summary() {
    return(
        <section className={styles.container}>
            <div className={styles.container_1}>
                <h3>Nossa missão</h3>
                <p>O objetivo do nosso trabalho é desenvolver a autonomia da pessoa como 
                    sujeito de direito, resgatando a autoestima, com intuito de melhorar 
                    a qualidade de vida, enfrentamento de ocorrências de vulnerabilidades 
                    sociais, com capacidade de se tornar protagonista de sua própria história.
                </p>
                <Link to='/about'>Saiba mais</Link>
            </div>

            <div>
                <h3>Faça sua parte</h3>
                <Link to='/doe'>Apoie-nos</Link>
            </div>
            
            <div></div>
            <div></div>
        </section>
    )
}